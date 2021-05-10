// Copyright 2021 Google LLC
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
import * as gax from 'google-gax';
import {Callback, CallOptions, Descriptors, ClientOptions, LROperation} from 'google-gax';

import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1/applications_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './applications_client_config.json';
import { operationsProtos } from 'google-gax';
const version = require('../../../package.json').version;

/**
 *  Manages App Engine applications.
 * @class
 * @memberof v1
 */
export class ApplicationsClient {
  private _terminated = false;
  private _opts: ClientOptions;
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
  innerApiCalls: {[name: string]: Function};
  pathTemplates: {[name: string]: gax.PathTemplate};
  operationsClient: gax.OperationsClient;
  applicationsStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of ApplicationsClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#creating-the-client-instance).
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
   * @param {boolean} [options.fallback] - Use HTTP fallback mode.
   *     In fallback mode, a special browser-compatible transport implementation is used
   *     instead of gRPC transport. In browser context (if the `window` object is defined)
   *     the fallback mode is enabled automatically; set `options.fallback` to `false`
   *     if you need to override this behavior.
   */
  constructor(opts?: ClientOptions) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof ApplicationsClient;
    const servicePath = opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback = opts?.fallback ?? (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = (this._gaxGrpc.auth as gax.GoogleAuth);

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

    const protoFilesRoot = this._gaxModule.protobuf.Root.fromJSON(jsonProtos);

    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.

    this.operationsClient = this._gaxModule.lro({
      auth: this.auth,
      grpc: 'grpc' in this._gaxGrpc ? this._gaxGrpc.grpc : undefined
    }).operationsClient(opts);
    const createApplicationResponse = protoFilesRoot.lookup(
      '.google.appengine.v1.Application') as gax.protobuf.Type;
    const createApplicationMetadata = protoFilesRoot.lookup(
      '.google.appengine.v1.OperationMetadataV1') as gax.protobuf.Type;
    const updateApplicationResponse = protoFilesRoot.lookup(
      '.google.appengine.v1.Application') as gax.protobuf.Type;
    const updateApplicationMetadata = protoFilesRoot.lookup(
      '.google.appengine.v1.OperationMetadataV1') as gax.protobuf.Type;
    const repairApplicationResponse = protoFilesRoot.lookup(
      '.google.appengine.v1.Application') as gax.protobuf.Type;
    const repairApplicationMetadata = protoFilesRoot.lookup(
      '.google.appengine.v1.OperationMetadataV1') as gax.protobuf.Type;

    this.descriptors.longrunning = {
      createApplication: new this._gaxModule.LongrunningDescriptor(
        this.operationsClient,
        createApplicationResponse.decode.bind(createApplicationResponse),
        createApplicationMetadata.decode.bind(createApplicationMetadata)),
      updateApplication: new this._gaxModule.LongrunningDescriptor(
        this.operationsClient,
        updateApplicationResponse.decode.bind(updateApplicationResponse),
        updateApplicationMetadata.decode.bind(updateApplicationMetadata)),
      repairApplication: new this._gaxModule.LongrunningDescriptor(
        this.operationsClient,
        repairApplicationResponse.decode.bind(repairApplicationResponse),
        repairApplicationMetadata.decode.bind(repairApplicationMetadata))
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
        'google.appengine.v1.Applications', gapicConfig as gax.ClientConfig,
        opts.clientConfig || {}, {'x-goog-api-client': clientHeader.join(' ')});

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};
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
    if (this.applicationsStub) {
      return this.applicationsStub;
    }

    // Put together the "service stub" for
    // google.appengine.v1.Applications.
    this.applicationsStub = this._gaxGrpc.createStub(
        this._opts.fallback ?
          (this._protos as protobuf.Root).lookupService('google.appengine.v1.Applications') :
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.appengine.v1.Applications,
        this._opts) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const applicationsStubMethods =
        ['getApplication', 'createApplication', 'updateApplication', 'repairApplication'];
    for (const methodName of applicationsStubMethods) {
      const callPromise = this.applicationsStub.then(
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
        this.descriptors.longrunning[methodName] ||
        undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.applicationsStub;
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
  getApplication(
      request: protos.google.appengine.v1.IGetApplicationRequest,
      options?: CallOptions):
      Promise<[
        protos.google.appengine.v1.IApplication,
        protos.google.appengine.v1.IGetApplicationRequest|undefined, {}|undefined
      ]>;
  getApplication(
      request: protos.google.appengine.v1.IGetApplicationRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.appengine.v1.IApplication,
          protos.google.appengine.v1.IGetApplicationRequest|null|undefined,
          {}|null|undefined>): void;
  getApplication(
      request: protos.google.appengine.v1.IGetApplicationRequest,
      callback: Callback<
          protos.google.appengine.v1.IApplication,
          protos.google.appengine.v1.IGetApplicationRequest|null|undefined,
          {}|null|undefined>): void;
/**
 * Gets information about an application.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Name of the Application resource to get. Example: `apps/myapp`.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Application]{@link google.appengine.v1.Application}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example
 * const [response] = await client.getApplication(request);
 */
  getApplication(
      request: protos.google.appengine.v1.IGetApplicationRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.appengine.v1.IApplication,
          protos.google.appengine.v1.IGetApplicationRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.appengine.v1.IApplication,
          protos.google.appengine.v1.IGetApplicationRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.appengine.v1.IApplication,
        protos.google.appengine.v1.IGetApplicationRequest|undefined, {}|undefined
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
    ] = gax.routingHeader.fromParams({
      'name': request.name || '',
    });
    this.initialize();
    return this.innerApiCalls.getApplication(request, options, callback);
  }

  createApplication(
      request: protos.google.appengine.v1.ICreateApplicationRequest,
      options?: CallOptions):
      Promise<[
        LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>,
        protos.google.longrunning.IOperation|undefined, {}|undefined
      ]>;
  createApplication(
      request: protos.google.appengine.v1.ICreateApplicationRequest,
      options: CallOptions,
      callback: Callback<
          LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>): void;
  createApplication(
      request: protos.google.appengine.v1.ICreateApplicationRequest,
      callback: Callback<
          LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>): void;
/**
 * Creates an App Engine application for a Google Cloud Platform project.
 * Required fields:
 *
 * * `id` - The ID of the target Cloud Platform project.
 * * *location* - The [region](https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.
 *
 * For more information about App Engine applications, see [Managing Projects, Applications, and Billing](https://cloud.google.com/appengine/docs/standard/python/console/).
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {google.appengine.v1.Application} request.application
 *   Application configuration.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing
 *   a long running operation. Its `promise()` method returns a promise
 *   you can `await` for.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
 *   for more details and examples.
 * @example
 * const [operation] = await client.createApplication(request);
 * const [response] = await operation.promise();
 */
  createApplication(
      request: protos.google.appengine.v1.ICreateApplicationRequest,
      optionsOrCallback?: CallOptions|Callback<
          LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>):
      Promise<[
        LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>,
        protos.google.longrunning.IOperation|undefined, {}|undefined
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
    this.initialize();
    return this.innerApiCalls.createApplication(request, options, callback);
  }
/**
 * Check the status of the long running operation returned by `createApplication()`.
 * @param {String} name
 *   The operation name that will be passed.
 * @returns {Promise} - The promise which resolves to an object.
 *   The decoded operation object has result and metadata field to get information from.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
 *   for more details and examples.
 * @example
 * const decodedOperation = await checkCreateApplicationProgress(name);
 * console.log(decodedOperation.result);
 * console.log(decodedOperation.done);
 * console.log(decodedOperation.metadata);
 */
  async checkCreateApplicationProgress(name: string): Promise<LROperation<protos.google.appengine.v1.Application, protos.google.appengine.v1.OperationMetadataV1>>{
    const request = new operationsProtos.google.longrunning.GetOperationRequest({name});
    const [operation] = await this.operationsClient.getOperation(request);
    const decodeOperation = new gax.Operation(operation, this.descriptors.longrunning.createApplication, gax.createDefaultBackoffSettings());
    return decodeOperation as LROperation<protos.google.appengine.v1.Application, protos.google.appengine.v1.OperationMetadataV1>;
  }
  updateApplication(
      request: protos.google.appengine.v1.IUpdateApplicationRequest,
      options?: CallOptions):
      Promise<[
        LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>,
        protos.google.longrunning.IOperation|undefined, {}|undefined
      ]>;
  updateApplication(
      request: protos.google.appengine.v1.IUpdateApplicationRequest,
      options: CallOptions,
      callback: Callback<
          LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>): void;
  updateApplication(
      request: protos.google.appengine.v1.IUpdateApplicationRequest,
      callback: Callback<
          LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>): void;
/**
 * Updates the specified Application resource.
 * You can update the following fields:
 *
 * * `auth_domain` - Google authentication domain for controlling user access to the application.
 * * `default_cookie_expiration` - Cookie expiration policy for the application.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Name of the Application resource to update. Example: `apps/myapp`.
 * @param {google.appengine.v1.Application} request.application
 *   An Application containing the updated resource.
 * @param {google.protobuf.FieldMask} request.updateMask
 *   Standard field mask for the set of fields to be updated.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing
 *   a long running operation. Its `promise()` method returns a promise
 *   you can `await` for.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
 *   for more details and examples.
 * @example
 * const [operation] = await client.updateApplication(request);
 * const [response] = await operation.promise();
 */
  updateApplication(
      request: protos.google.appengine.v1.IUpdateApplicationRequest,
      optionsOrCallback?: CallOptions|Callback<
          LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>):
      Promise<[
        LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>,
        protos.google.longrunning.IOperation|undefined, {}|undefined
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
    ] = gax.routingHeader.fromParams({
      'name': request.name || '',
    });
    this.initialize();
    return this.innerApiCalls.updateApplication(request, options, callback);
  }
/**
 * Check the status of the long running operation returned by `updateApplication()`.
 * @param {String} name
 *   The operation name that will be passed.
 * @returns {Promise} - The promise which resolves to an object.
 *   The decoded operation object has result and metadata field to get information from.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
 *   for more details and examples.
 * @example
 * const decodedOperation = await checkUpdateApplicationProgress(name);
 * console.log(decodedOperation.result);
 * console.log(decodedOperation.done);
 * console.log(decodedOperation.metadata);
 */
  async checkUpdateApplicationProgress(name: string): Promise<LROperation<protos.google.appengine.v1.Application, protos.google.appengine.v1.OperationMetadataV1>>{
    const request = new operationsProtos.google.longrunning.GetOperationRequest({name});
    const [operation] = await this.operationsClient.getOperation(request);
    const decodeOperation = new gax.Operation(operation, this.descriptors.longrunning.updateApplication, gax.createDefaultBackoffSettings());
    return decodeOperation as LROperation<protos.google.appengine.v1.Application, protos.google.appengine.v1.OperationMetadataV1>;
  }
  repairApplication(
      request: protos.google.appengine.v1.IRepairApplicationRequest,
      options?: CallOptions):
      Promise<[
        LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>,
        protos.google.longrunning.IOperation|undefined, {}|undefined
      ]>;
  repairApplication(
      request: protos.google.appengine.v1.IRepairApplicationRequest,
      options: CallOptions,
      callback: Callback<
          LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>): void;
  repairApplication(
      request: protos.google.appengine.v1.IRepairApplicationRequest,
      callback: Callback<
          LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>): void;
/**
 * Recreates the required App Engine features for the specified App Engine
 * application, for example a Cloud Storage bucket or App Engine service
 * account.
 * Use this method if you receive an error message about a missing feature,
 * for example, *Error retrieving the App Engine service account*.
 * If you have deleted your App Engine service account, this will
 * not be able to recreate it. Instead, you should attempt to use the
 * IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D .
 * If the deletion was recent, the numeric ID can be found in the Cloud
 * Console Activity Log.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Name of the application to repair. Example: `apps/myapp`
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing
 *   a long running operation. Its `promise()` method returns a promise
 *   you can `await` for.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
 *   for more details and examples.
 * @example
 * const [operation] = await client.repairApplication(request);
 * const [response] = await operation.promise();
 */
  repairApplication(
      request: protos.google.appengine.v1.IRepairApplicationRequest,
      optionsOrCallback?: CallOptions|Callback<
          LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>):
      Promise<[
        LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>,
        protos.google.longrunning.IOperation|undefined, {}|undefined
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
    ] = gax.routingHeader.fromParams({
      'name': request.name || '',
    });
    this.initialize();
    return this.innerApiCalls.repairApplication(request, options, callback);
  }
/**
 * Check the status of the long running operation returned by `repairApplication()`.
 * @param {String} name
 *   The operation name that will be passed.
 * @returns {Promise} - The promise which resolves to an object.
 *   The decoded operation object has result and metadata field to get information from.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
 *   for more details and examples.
 * @example
 * const decodedOperation = await checkRepairApplicationProgress(name);
 * console.log(decodedOperation.result);
 * console.log(decodedOperation.done);
 * console.log(decodedOperation.metadata);
 */
  async checkRepairApplicationProgress(name: string): Promise<LROperation<protos.google.appengine.v1.Application, protos.google.appengine.v1.OperationMetadataV1>>{
    const request = new operationsProtos.google.longrunning.GetOperationRequest({name});
    const [operation] = await this.operationsClient.getOperation(request);
    const decodeOperation = new gax.Operation(operation, this.descriptors.longrunning.repairApplication, gax.createDefaultBackoffSettings());
    return decodeOperation as LROperation<protos.google.appengine.v1.Application, protos.google.appengine.v1.OperationMetadataV1>;
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
    this.initialize();
    if (!this._terminated) {
      return this.applicationsStub!.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
