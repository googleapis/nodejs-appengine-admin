// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

/* global window */
import type * as gax from 'google-gax';
import type {Callback, CallOptions, Descriptors, ClientOptions, PaginationCallback, GaxCall} from 'google-gax';
import {Transform} from 'stream';
import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1/authorized_certificates_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './authorized_certificates_client_config.json';
const version = require('../../../package.json').version;

/**
 *  Manages SSL certificates a user is authorized to administer. A user can
 *  administer any SSL certificates applicable to their authorized domains.
 * @class
 * @memberof v1
 */
export class AuthorizedCertificatesClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _providedCustomServicePath: boolean;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  warn: (code: string, message: string, warnType?: string) => void;
  innerApiCalls: {[name: string]: Function};
  pathTemplates: {[name: string]: gax.PathTemplate};
  authorizedCertificatesStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of AuthorizedCertificatesClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#creating-the-client-instance).
   * The common options are:
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean | "rest"} [options.fallback] - Use HTTP fallback mode.
   *     Pass "rest" to use HTTP/1.1 REST API instead of gRPC.
   *     For more information, please check the
   *     {@link https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#http11-rest-api-mode documentation}.
   * @param {gax} [gaxInstance]: loaded instance of `google-gax`. Useful if you
   *     need to avoid loading the default gRPC version and want to use the fallback
   *     HTTP implementation. Load only fallback version and pass it to the constructor:
   *     ```
   *     const gax = require('google-gax/build/src/fallback'); // avoids loading google-gax with gRPC
   *     const client = new AuthorizedCertificatesClient({fallback: 'rest'}, gax);
   *     ```
   */
  constructor(opts?: ClientOptions, gaxInstance?: typeof gax | typeof gax.fallback) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof AuthorizedCertificatesClient;
    const servicePath = opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    this._providedCustomServicePath = !!(opts?.servicePath || opts?.apiEndpoint);
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback = opts?.fallback ?? (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Load google-gax module synchronously if needed
    if (!gaxInstance) {
      gaxInstance = require('google-gax') as typeof gax;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gaxInstance.fallback : gaxInstance;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = (this._gaxGrpc.auth as gax.GoogleAuth);

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = staticMembers.servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [
      `gax/${this._gaxModule.version}`,
      `gapic/${version}`,
    ];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    } else if (opts.fallback === 'rest' ) {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      instancePathTemplate: new this._gaxModule.PathTemplate(
        'apps/{app}/services/{service}/versions/{version}/instances/{instance}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this.descriptors.page = {
      listAuthorizedCertificates:
          new this._gaxModule.PageDescriptor('pageToken', 'nextPageToken', 'certificates')
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
        'google.appengine.v1.AuthorizedCertificates', gapicConfig as gax.ClientConfig,
        opts.clientConfig || {}, {'x-goog-api-client': clientHeader.join(' ')});

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};

    // Add a warn function to the client constructor so it can be easily tested.
    this.warn = this._gaxModule.warn;
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.authorizedCertificatesStub) {
      return this.authorizedCertificatesStub;
    }

    // Put together the "service stub" for
    // google.appengine.v1.AuthorizedCertificates.
    this.authorizedCertificatesStub = this._gaxGrpc.createStub(
        this._opts.fallback ?
          (this._protos as protobuf.Root).lookupService('google.appengine.v1.AuthorizedCertificates') :
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.appengine.v1.AuthorizedCertificates,
        this._opts, this._providedCustomServicePath) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const authorizedCertificatesStubMethods =
        ['listAuthorizedCertificates', 'getAuthorizedCertificate', 'createAuthorizedCertificate', 'updateAuthorizedCertificate', 'deleteAuthorizedCertificate'];
    for (const methodName of authorizedCertificatesStubMethods) {
      const callPromise = this.authorizedCertificatesStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          const func = stub[methodName];
          return func.apply(stub, args);
        },
        (err: Error|null|undefined) => () => {
          throw err;
        });

      const descriptor =
        this.descriptors.page[methodName] ||
        undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.authorizedCertificatesStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'appengine.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'appengine.googleapis.com';
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/appengine.admin',
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/cloud-platform.read-only'
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(callback?: Callback<string, undefined, undefined>):
      Promise<string>|void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
/**
 * Gets the specified SSL certificate.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Name of the resource requested. Example:
 *   `apps/myapp/authorizedCertificates/12345`.
 * @param {google.appengine.v1.AuthorizedCertificateView} request.view
 *   Controls the set of fields returned in the `GET` response.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [AuthorizedCertificate]{@link google.appengine.v1.AuthorizedCertificate}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/authorized_certificates.get_authorized_certificate.js</caption>
 * region_tag:appengine_v1_generated_AuthorizedCertificates_GetAuthorizedCertificate_async
 */
  getAuthorizedCertificate(
      request?: protos.google.appengine.v1.IGetAuthorizedCertificateRequest,
      options?: CallOptions):
      Promise<[
        protos.google.appengine.v1.IAuthorizedCertificate,
        protos.google.appengine.v1.IGetAuthorizedCertificateRequest|undefined, {}|undefined
      ]>;
  getAuthorizedCertificate(
      request: protos.google.appengine.v1.IGetAuthorizedCertificateRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.appengine.v1.IAuthorizedCertificate,
          protos.google.appengine.v1.IGetAuthorizedCertificateRequest|null|undefined,
          {}|null|undefined>): void;
  getAuthorizedCertificate(
      request: protos.google.appengine.v1.IGetAuthorizedCertificateRequest,
      callback: Callback<
          protos.google.appengine.v1.IAuthorizedCertificate,
          protos.google.appengine.v1.IGetAuthorizedCertificateRequest|null|undefined,
          {}|null|undefined>): void;
  getAuthorizedCertificate(
      request?: protos.google.appengine.v1.IGetAuthorizedCertificateRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.appengine.v1.IAuthorizedCertificate,
          protos.google.appengine.v1.IGetAuthorizedCertificateRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.appengine.v1.IAuthorizedCertificate,
          protos.google.appengine.v1.IGetAuthorizedCertificateRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.appengine.v1.IAuthorizedCertificate,
        protos.google.appengine.v1.IGetAuthorizedCertificateRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'name': request.name ?? '',
    });
    this.initialize();
    return this.innerApiCalls.getAuthorizedCertificate(request, options, callback);
  }
/**
 * Uploads the specified SSL certificate.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Name of the parent `Application` resource. Example: `apps/myapp`.
 * @param {google.appengine.v1.AuthorizedCertificate} request.certificate
 *   SSL certificate data.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [AuthorizedCertificate]{@link google.appengine.v1.AuthorizedCertificate}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/authorized_certificates.create_authorized_certificate.js</caption>
 * region_tag:appengine_v1_generated_AuthorizedCertificates_CreateAuthorizedCertificate_async
 */
  createAuthorizedCertificate(
      request?: protos.google.appengine.v1.ICreateAuthorizedCertificateRequest,
      options?: CallOptions):
      Promise<[
        protos.google.appengine.v1.IAuthorizedCertificate,
        protos.google.appengine.v1.ICreateAuthorizedCertificateRequest|undefined, {}|undefined
      ]>;
  createAuthorizedCertificate(
      request: protos.google.appengine.v1.ICreateAuthorizedCertificateRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.appengine.v1.IAuthorizedCertificate,
          protos.google.appengine.v1.ICreateAuthorizedCertificateRequest|null|undefined,
          {}|null|undefined>): void;
  createAuthorizedCertificate(
      request: protos.google.appengine.v1.ICreateAuthorizedCertificateRequest,
      callback: Callback<
          protos.google.appengine.v1.IAuthorizedCertificate,
          protos.google.appengine.v1.ICreateAuthorizedCertificateRequest|null|undefined,
          {}|null|undefined>): void;
  createAuthorizedCertificate(
      request?: protos.google.appengine.v1.ICreateAuthorizedCertificateRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.appengine.v1.IAuthorizedCertificate,
          protos.google.appengine.v1.ICreateAuthorizedCertificateRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.appengine.v1.IAuthorizedCertificate,
          protos.google.appengine.v1.ICreateAuthorizedCertificateRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.appengine.v1.IAuthorizedCertificate,
        protos.google.appengine.v1.ICreateAuthorizedCertificateRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'parent': request.parent ?? '',
    });
    this.initialize();
    return this.innerApiCalls.createAuthorizedCertificate(request, options, callback);
  }
/**
 * Updates the specified SSL certificate. To renew a certificate and maintain
 * its existing domain mappings, update `certificate_data` with a new
 * certificate. The new certificate must be applicable to the same domains as
 * the original certificate. The certificate `display_name` may also be
 * updated.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Name of the resource to update. Example:
 *   `apps/myapp/authorizedCertificates/12345`.
 * @param {google.appengine.v1.AuthorizedCertificate} request.certificate
 *   An `AuthorizedCertificate` containing the updated resource. Only fields set
 *   in the field mask will be updated.
 * @param {google.protobuf.FieldMask} request.updateMask
 *   Standard field mask for the set of fields to be updated. Updates are only
 *   supported on the `certificate_raw_data` and `display_name` fields.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [AuthorizedCertificate]{@link google.appengine.v1.AuthorizedCertificate}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/authorized_certificates.update_authorized_certificate.js</caption>
 * region_tag:appengine_v1_generated_AuthorizedCertificates_UpdateAuthorizedCertificate_async
 */
  updateAuthorizedCertificate(
      request?: protos.google.appengine.v1.IUpdateAuthorizedCertificateRequest,
      options?: CallOptions):
      Promise<[
        protos.google.appengine.v1.IAuthorizedCertificate,
        protos.google.appengine.v1.IUpdateAuthorizedCertificateRequest|undefined, {}|undefined
      ]>;
  updateAuthorizedCertificate(
      request: protos.google.appengine.v1.IUpdateAuthorizedCertificateRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.appengine.v1.IAuthorizedCertificate,
          protos.google.appengine.v1.IUpdateAuthorizedCertificateRequest|null|undefined,
          {}|null|undefined>): void;
  updateAuthorizedCertificate(
      request: protos.google.appengine.v1.IUpdateAuthorizedCertificateRequest,
      callback: Callback<
          protos.google.appengine.v1.IAuthorizedCertificate,
          protos.google.appengine.v1.IUpdateAuthorizedCertificateRequest|null|undefined,
          {}|null|undefined>): void;
  updateAuthorizedCertificate(
      request?: protos.google.appengine.v1.IUpdateAuthorizedCertificateRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.appengine.v1.IAuthorizedCertificate,
          protos.google.appengine.v1.IUpdateAuthorizedCertificateRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.appengine.v1.IAuthorizedCertificate,
          protos.google.appengine.v1.IUpdateAuthorizedCertificateRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.appengine.v1.IAuthorizedCertificate,
        protos.google.appengine.v1.IUpdateAuthorizedCertificateRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'name': request.name ?? '',
    });
    this.initialize();
    return this.innerApiCalls.updateAuthorizedCertificate(request, options, callback);
  }
/**
 * Deletes the specified SSL certificate.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Name of the resource to delete. Example:
 *   `apps/myapp/authorizedCertificates/12345`.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Empty]{@link google.protobuf.Empty}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/authorized_certificates.delete_authorized_certificate.js</caption>
 * region_tag:appengine_v1_generated_AuthorizedCertificates_DeleteAuthorizedCertificate_async
 */
  deleteAuthorizedCertificate(
      request?: protos.google.appengine.v1.IDeleteAuthorizedCertificateRequest,
      options?: CallOptions):
      Promise<[
        protos.google.protobuf.IEmpty,
        protos.google.appengine.v1.IDeleteAuthorizedCertificateRequest|undefined, {}|undefined
      ]>;
  deleteAuthorizedCertificate(
      request: protos.google.appengine.v1.IDeleteAuthorizedCertificateRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.protobuf.IEmpty,
          protos.google.appengine.v1.IDeleteAuthorizedCertificateRequest|null|undefined,
          {}|null|undefined>): void;
  deleteAuthorizedCertificate(
      request: protos.google.appengine.v1.IDeleteAuthorizedCertificateRequest,
      callback: Callback<
          protos.google.protobuf.IEmpty,
          protos.google.appengine.v1.IDeleteAuthorizedCertificateRequest|null|undefined,
          {}|null|undefined>): void;
  deleteAuthorizedCertificate(
      request?: protos.google.appengine.v1.IDeleteAuthorizedCertificateRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.protobuf.IEmpty,
          protos.google.appengine.v1.IDeleteAuthorizedCertificateRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.protobuf.IEmpty,
          protos.google.appengine.v1.IDeleteAuthorizedCertificateRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.protobuf.IEmpty,
        protos.google.appengine.v1.IDeleteAuthorizedCertificateRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'name': request.name ?? '',
    });
    this.initialize();
    return this.innerApiCalls.deleteAuthorizedCertificate(request, options, callback);
  }

 /**
 * Lists all SSL certificates the user is authorized to administer.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Name of the parent `Application` resource. Example: `apps/myapp`.
 * @param {google.appengine.v1.AuthorizedCertificateView} request.view
 *   Controls the set of fields returned in the `LIST` response.
 * @param {number} request.pageSize
 *   Maximum results to return per page.
 * @param {string} request.pageToken
 *   Continuation token for fetching the next page of results.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of [AuthorizedCertificate]{@link google.appengine.v1.AuthorizedCertificate}.
 *   The client library will perform auto-pagination by default: it will call the API as many
 *   times as needed and will merge results from all the pages into this array.
 *   Note that it can affect your quota.
 *   We recommend using `listAuthorizedCertificatesAsync()`
 *   method described below for async iteration which you can stop as needed.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
 *   for more details and examples.
 */
  listAuthorizedCertificates(
      request?: protos.google.appengine.v1.IListAuthorizedCertificatesRequest,
      options?: CallOptions):
      Promise<[
        protos.google.appengine.v1.IAuthorizedCertificate[],
        protos.google.appengine.v1.IListAuthorizedCertificatesRequest|null,
        protos.google.appengine.v1.IListAuthorizedCertificatesResponse
      ]>;
  listAuthorizedCertificates(
      request: protos.google.appengine.v1.IListAuthorizedCertificatesRequest,
      options: CallOptions,
      callback: PaginationCallback<
          protos.google.appengine.v1.IListAuthorizedCertificatesRequest,
          protos.google.appengine.v1.IListAuthorizedCertificatesResponse|null|undefined,
          protos.google.appengine.v1.IAuthorizedCertificate>): void;
  listAuthorizedCertificates(
      request: protos.google.appengine.v1.IListAuthorizedCertificatesRequest,
      callback: PaginationCallback<
          protos.google.appengine.v1.IListAuthorizedCertificatesRequest,
          protos.google.appengine.v1.IListAuthorizedCertificatesResponse|null|undefined,
          protos.google.appengine.v1.IAuthorizedCertificate>): void;
  listAuthorizedCertificates(
      request?: protos.google.appengine.v1.IListAuthorizedCertificatesRequest,
      optionsOrCallback?: CallOptions|PaginationCallback<
          protos.google.appengine.v1.IListAuthorizedCertificatesRequest,
          protos.google.appengine.v1.IListAuthorizedCertificatesResponse|null|undefined,
          protos.google.appengine.v1.IAuthorizedCertificate>,
      callback?: PaginationCallback<
          protos.google.appengine.v1.IListAuthorizedCertificatesRequest,
          protos.google.appengine.v1.IListAuthorizedCertificatesResponse|null|undefined,
          protos.google.appengine.v1.IAuthorizedCertificate>):
      Promise<[
        protos.google.appengine.v1.IAuthorizedCertificate[],
        protos.google.appengine.v1.IListAuthorizedCertificatesRequest|null,
        protos.google.appengine.v1.IListAuthorizedCertificatesResponse
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'parent': request.parent ?? '',
    });
    this.initialize();
    return this.innerApiCalls.listAuthorizedCertificates(request, options, callback);
  }

/**
 * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Name of the parent `Application` resource. Example: `apps/myapp`.
 * @param {google.appengine.v1.AuthorizedCertificateView} request.view
 *   Controls the set of fields returned in the `LIST` response.
 * @param {number} request.pageSize
 *   Maximum results to return per page.
 * @param {string} request.pageToken
 *   Continuation token for fetching the next page of results.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Stream}
 *   An object stream which emits an object representing [AuthorizedCertificate]{@link google.appengine.v1.AuthorizedCertificate} on 'data' event.
 *   The client library will perform auto-pagination by default: it will call the API as many
 *   times as needed. Note that it can affect your quota.
 *   We recommend using `listAuthorizedCertificatesAsync()`
 *   method described below for async iteration which you can stop as needed.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
 *   for more details and examples.
 */
  listAuthorizedCertificatesStream(
      request?: protos.google.appengine.v1.IListAuthorizedCertificatesRequest,
      options?: CallOptions):
    Transform{
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'parent': request.parent ?? '',
    });
    const defaultCallSettings = this._defaults['listAuthorizedCertificates'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listAuthorizedCertificates.createStream(
      this.innerApiCalls.listAuthorizedCertificates as GaxCall,
      request,
      callSettings
    );
  }

/**
 * Equivalent to `listAuthorizedCertificates`, but returns an iterable object.
 *
 * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Name of the parent `Application` resource. Example: `apps/myapp`.
 * @param {google.appengine.v1.AuthorizedCertificateView} request.view
 *   Controls the set of fields returned in the `LIST` response.
 * @param {number} request.pageSize
 *   Maximum results to return per page.
 * @param {string} request.pageToken
 *   Continuation token for fetching the next page of results.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Object}
 *   An iterable Object that allows [async iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
 *   When you iterate the returned iterable, each element will be an object representing
 *   [AuthorizedCertificate]{@link google.appengine.v1.AuthorizedCertificate}. The API will be called under the hood as needed, once per the page,
 *   so you can stop the iteration when you don't need more results.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/authorized_certificates.list_authorized_certificates.js</caption>
 * region_tag:appengine_v1_generated_AuthorizedCertificates_ListAuthorizedCertificates_async
 */
  listAuthorizedCertificatesAsync(
      request?: protos.google.appengine.v1.IListAuthorizedCertificatesRequest,
      options?: CallOptions):
    AsyncIterable<protos.google.appengine.v1.IAuthorizedCertificate>{
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'parent': request.parent ?? '',
    });
    const defaultCallSettings = this._defaults['listAuthorizedCertificates'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listAuthorizedCertificates.asyncIterate(
      this.innerApiCalls['listAuthorizedCertificates'] as GaxCall,
      request as {},
      callSettings
    ) as AsyncIterable<protos.google.appengine.v1.IAuthorizedCertificate>;
  }
  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified instance resource name string.
   *
   * @param {string} app
   * @param {string} service
   * @param {string} version
   * @param {string} instance
   * @returns {string} Resource name string.
   */
  instancePath(app:string,service:string,version:string,instance:string) {
    return this.pathTemplates.instancePathTemplate.render({
      app: app,
      service: service,
      version: version,
      instance: instance,
    });
  }

  /**
   * Parse the app from Instance resource.
   *
   * @param {string} instanceName
   *   A fully-qualified path representing Instance resource.
   * @returns {string} A string representing the app.
   */
  matchAppFromInstanceName(instanceName: string) {
    return this.pathTemplates.instancePathTemplate.match(instanceName).app;
  }

  /**
   * Parse the service from Instance resource.
   *
   * @param {string} instanceName
   *   A fully-qualified path representing Instance resource.
   * @returns {string} A string representing the service.
   */
  matchServiceFromInstanceName(instanceName: string) {
    return this.pathTemplates.instancePathTemplate.match(instanceName).service;
  }

  /**
   * Parse the version from Instance resource.
   *
   * @param {string} instanceName
   *   A fully-qualified path representing Instance resource.
   * @returns {string} A string representing the version.
   */
  matchVersionFromInstanceName(instanceName: string) {
    return this.pathTemplates.instancePathTemplate.match(instanceName).version;
  }

  /**
   * Parse the instance from Instance resource.
   *
   * @param {string} instanceName
   *   A fully-qualified path representing Instance resource.
   * @returns {string} A string representing the instance.
   */
  matchInstanceFromInstanceName(instanceName: string) {
    return this.pathTemplates.instancePathTemplate.match(instanceName).instance;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.authorizedCertificatesStub && !this._terminated) {
      return this.authorizedCertificatesStub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
