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
import type {
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
  PaginationCallback,
  GaxCall,
} from 'google-gax';
import {Transform} from 'stream';
import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1/authorized_domains_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './authorized_domains_client_config.json';
const version = require('../../../package.json').version;

/**
 *  Manages domains a user is authorized to administer. To authorize use of a
 *  domain, verify ownership via
 *  [Webmaster Central](https://www.google.com/webmasters/verification/home).
 * @class
 * @memberof v1
 */
export class AuthorizedDomainsClient {
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
  authorizedDomainsStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of AuthorizedDomainsClient.
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
   *     const client = new AuthorizedDomainsClient({fallback: 'rest'}, gax);
   *     ```
   */
  constructor(
    opts?: ClientOptions,
    gaxInstance?: typeof gax | typeof gax.fallback
  ) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof AuthorizedDomainsClient;
    const servicePath =
      opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    this._providedCustomServicePath = !!(
      opts?.servicePath || opts?.apiEndpoint
    );
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback =
      opts?.fallback ??
      (typeof window !== 'undefined' && typeof window?.fetch === 'function');
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
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = staticMembers.servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [`gax/${this._gaxModule.version}`, `gapic/${version}`];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    } else if (opts.fallback === 'rest') {
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
      listAuthorizedDomains: new this._gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'domains'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.appengine.v1.AuthorizedDomains',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

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
    if (this.authorizedDomainsStub) {
      return this.authorizedDomainsStub;
    }

    // Put together the "service stub" for
    // google.appengine.v1.AuthorizedDomains.
    this.authorizedDomainsStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.appengine.v1.AuthorizedDomains'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.appengine.v1.AuthorizedDomains,
      this._opts,
      this._providedCustomServicePath
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const authorizedDomainsStubMethods = ['listAuthorizedDomains'];
    for (const methodName of authorizedDomainsStubMethods) {
      const callPromise = this.authorizedDomainsStub.then(
        stub =>
          (...args: Array<{}>) => {
            if (this._terminated) {
              return Promise.reject('The client has already been closed.');
            }
            const func = stub[methodName];
            return func.apply(stub, args);
          },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );

      const descriptor = this.descriptors.page[methodName] || undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.authorizedDomainsStub;
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
      'https://www.googleapis.com/auth/cloud-platform.read-only',
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(
    callback?: Callback<string, undefined, undefined>
  ): Promise<string> | void {
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
   * Lists all domains the user is authorized to administer.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Name of the parent Application resource. Example: `apps/myapp`.
   * @param {number} request.pageSize
   *   Maximum results to return per page.
   * @param {string} request.pageToken
   *   Continuation token for fetching the next page of results.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [AuthorizedDomain]{@link google.appengine.v1.AuthorizedDomain}.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed and will merge results from all the pages into this array.
   *   Note that it can affect your quota.
   *   We recommend using `listAuthorizedDomainsAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   */
  listAuthorizedDomains(
    request?: protos.google.appengine.v1.IListAuthorizedDomainsRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.appengine.v1.IAuthorizedDomain[],
      protos.google.appengine.v1.IListAuthorizedDomainsRequest | null,
      protos.google.appengine.v1.IListAuthorizedDomainsResponse
    ]
  >;
  listAuthorizedDomains(
    request: protos.google.appengine.v1.IListAuthorizedDomainsRequest,
    options: CallOptions,
    callback: PaginationCallback<
      protos.google.appengine.v1.IListAuthorizedDomainsRequest,
      | protos.google.appengine.v1.IListAuthorizedDomainsResponse
      | null
      | undefined,
      protos.google.appengine.v1.IAuthorizedDomain
    >
  ): void;
  listAuthorizedDomains(
    request: protos.google.appengine.v1.IListAuthorizedDomainsRequest,
    callback: PaginationCallback<
      protos.google.appengine.v1.IListAuthorizedDomainsRequest,
      | protos.google.appengine.v1.IListAuthorizedDomainsResponse
      | null
      | undefined,
      protos.google.appengine.v1.IAuthorizedDomain
    >
  ): void;
  listAuthorizedDomains(
    request?: protos.google.appengine.v1.IListAuthorizedDomainsRequest,
    optionsOrCallback?:
      | CallOptions
      | PaginationCallback<
          protos.google.appengine.v1.IListAuthorizedDomainsRequest,
          | protos.google.appengine.v1.IListAuthorizedDomainsResponse
          | null
          | undefined,
          protos.google.appengine.v1.IAuthorizedDomain
        >,
    callback?: PaginationCallback<
      protos.google.appengine.v1.IListAuthorizedDomainsRequest,
      | protos.google.appengine.v1.IListAuthorizedDomainsResponse
      | null
      | undefined,
      protos.google.appengine.v1.IAuthorizedDomain
    >
  ): Promise<
    [
      protos.google.appengine.v1.IAuthorizedDomain[],
      protos.google.appengine.v1.IListAuthorizedDomainsRequest | null,
      protos.google.appengine.v1.IListAuthorizedDomainsResponse
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        parent: request.parent || '',
      });
    this.initialize();
    return this.innerApiCalls.listAuthorizedDomains(request, options, callback);
  }

  /**
   * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Name of the parent Application resource. Example: `apps/myapp`.
   * @param {number} request.pageSize
   *   Maximum results to return per page.
   * @param {string} request.pageToken
   *   Continuation token for fetching the next page of results.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which emits an object representing [AuthorizedDomain]{@link google.appengine.v1.AuthorizedDomain} on 'data' event.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed. Note that it can affect your quota.
   *   We recommend using `listAuthorizedDomainsAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   */
  listAuthorizedDomainsStream(
    request?: protos.google.appengine.v1.IListAuthorizedDomainsRequest,
    options?: CallOptions
  ): Transform {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        parent: request.parent || '',
      });
    const defaultCallSettings = this._defaults['listAuthorizedDomains'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listAuthorizedDomains.createStream(
      this.innerApiCalls.listAuthorizedDomains as GaxCall,
      request,
      callSettings
    );
  }

  /**
   * Equivalent to `listAuthorizedDomains`, but returns an iterable object.
   *
   * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Name of the parent Application resource. Example: `apps/myapp`.
   * @param {number} request.pageSize
   *   Maximum results to return per page.
   * @param {string} request.pageToken
   *   Continuation token for fetching the next page of results.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Object}
   *   An iterable Object that allows [async iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
   *   When you iterate the returned iterable, each element will be an object representing
   *   [AuthorizedDomain]{@link google.appengine.v1.AuthorizedDomain}. The API will be called under the hood as needed, once per the page,
   *   so you can stop the iteration when you don't need more results.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1/authorized_domains.list_authorized_domains.js</caption>
   * region_tag:appengine_v1_generated_AuthorizedDomains_ListAuthorizedDomains_async
   */
  listAuthorizedDomainsAsync(
    request?: protos.google.appengine.v1.IListAuthorizedDomainsRequest,
    options?: CallOptions
  ): AsyncIterable<protos.google.appengine.v1.IAuthorizedDomain> {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        parent: request.parent || '',
      });
    const defaultCallSettings = this._defaults['listAuthorizedDomains'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listAuthorizedDomains.asyncIterate(
      this.innerApiCalls['listAuthorizedDomains'] as GaxCall,
      request as {},
      callSettings
    ) as AsyncIterable<protos.google.appengine.v1.IAuthorizedDomain>;
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
  instancePath(
    app: string,
    service: string,
    version: string,
    instance: string
  ) {
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
    if (this.authorizedDomainsStub && !this._terminated) {
      return this.authorizedDomainsStub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
