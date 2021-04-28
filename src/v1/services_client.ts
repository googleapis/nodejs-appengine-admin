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
import {
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
  LROperation,
  PaginationCallback,
  GaxCall,
} from 'google-gax';
import * as path from 'path';

import {Transform} from 'stream';
import {RequestType} from 'google-gax/build/src/apitypes';
import * as protos from '../../protos/protos';
/**
 * Client JSON configuration object, loaded from
 * `src/v1/services_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './services_client_config.json';
import {operationsProtos} from 'google-gax';
const version = require('../../../package.json').version;

/**
 *  Manages services of an application.
 * @class
 * @memberof v1
 */
export class ServicesClient {
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
  servicesStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of ServicesClient.
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
    const staticMembers = this.constructor as typeof ServicesClient;
    const servicePath =
      opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
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

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

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
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    // For Node.js, pass the path to JSON proto file.
    // For browsers, pass the JSON content.

    const nodejsProtoPath = path.join(
      __dirname,
      '..',
      '..',
      'protos',
      'protos.json'
    );
    this._protos = this._gaxGrpc.loadProto(
      opts.fallback
        ? // eslint-disable-next-line @typescript-eslint/no-var-requires
          require('../../protos/protos.json')
        : nodejsProtoPath
    );

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
      listServices: new this._gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'services'
      ),
    };

    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.
    const protoFilesRoot = opts.fallback
      ? this._gaxModule.protobuf.Root.fromJSON(
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          require('../../protos/protos.json')
        )
      : this._gaxModule.protobuf.loadSync(nodejsProtoPath);

    this.operationsClient = this._gaxModule
      .lro({
        auth: this.auth,
        grpc: 'grpc' in this._gaxGrpc ? this._gaxGrpc.grpc : undefined,
      })
      .operationsClient(opts);
    const updateServiceResponse = protoFilesRoot.lookup(
      '.google.appengine.v1.Service'
    ) as gax.protobuf.Type;
    const updateServiceMetadata = protoFilesRoot.lookup(
      '.google.appengine.v1.OperationMetadataV1'
    ) as gax.protobuf.Type;
    const deleteServiceResponse = protoFilesRoot.lookup(
      '.google.protobuf.Empty'
    ) as gax.protobuf.Type;
    const deleteServiceMetadata = protoFilesRoot.lookup(
      '.google.appengine.v1.OperationMetadataV1'
    ) as gax.protobuf.Type;

    this.descriptors.longrunning = {
      updateService: new this._gaxModule.LongrunningDescriptor(
        this.operationsClient,
        updateServiceResponse.decode.bind(updateServiceResponse),
        updateServiceMetadata.decode.bind(updateServiceMetadata)
      ),
      deleteService: new this._gaxModule.LongrunningDescriptor(
        this.operationsClient,
        deleteServiceResponse.decode.bind(deleteServiceResponse),
        deleteServiceMetadata.decode.bind(deleteServiceMetadata)
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.appengine.v1.Services',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

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
    if (this.servicesStub) {
      return this.servicesStub;
    }

    // Put together the "service stub" for
    // google.appengine.v1.Services.
    this.servicesStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.appengine.v1.Services'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.appengine.v1.Services,
      this._opts
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const servicesStubMethods = [
      'listServices',
      'getService',
      'updateService',
      'deleteService',
    ];
    for (const methodName of servicesStubMethods) {
      const callPromise = this.servicesStub.then(
        stub => (...args: Array<{}>) => {
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

      const descriptor =
        this.descriptors.page[methodName] ||
        this.descriptors.longrunning[methodName] ||
        undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.servicesStub;
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
  getService(
    request: protos.google.appengine.v1.IGetServiceRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.appengine.v1.IService,
      protos.google.appengine.v1.IGetServiceRequest | undefined,
      {} | undefined
    ]
  >;
  getService(
    request: protos.google.appengine.v1.IGetServiceRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.appengine.v1.IService,
      protos.google.appengine.v1.IGetServiceRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  getService(
    request: protos.google.appengine.v1.IGetServiceRequest,
    callback: Callback<
      protos.google.appengine.v1.IService,
      protos.google.appengine.v1.IGetServiceRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Gets the current configuration of the specified service.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Name of the resource requested. Example: `apps/myapp/services/default`.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Service]{@link google.appengine.v1.Service}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example
   * const [response] = await client.getService(request);
   */
  getService(
    request: protos.google.appengine.v1.IGetServiceRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.appengine.v1.IService,
          protos.google.appengine.v1.IGetServiceRequest | null | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.appengine.v1.IService,
      protos.google.appengine.v1.IGetServiceRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.appengine.v1.IService,
      protos.google.appengine.v1.IGetServiceRequest | undefined,
      {} | undefined
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
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name || '',
    });
    this.initialize();
    return this.innerApiCalls.getService(request, options, callback);
  }

  updateService(
    request: protos.google.appengine.v1.IUpdateServiceRequest,
    options?: CallOptions
  ): Promise<
    [
      LROperation<
        protos.google.appengine.v1.IService,
        protos.google.appengine.v1.IOperationMetadataV1
      >,
      protos.google.longrunning.IOperation | undefined,
      {} | undefined
    ]
  >;
  updateService(
    request: protos.google.appengine.v1.IUpdateServiceRequest,
    options: CallOptions,
    callback: Callback<
      LROperation<
        protos.google.appengine.v1.IService,
        protos.google.appengine.v1.IOperationMetadataV1
      >,
      protos.google.longrunning.IOperation | null | undefined,
      {} | null | undefined
    >
  ): void;
  updateService(
    request: protos.google.appengine.v1.IUpdateServiceRequest,
    callback: Callback<
      LROperation<
        protos.google.appengine.v1.IService,
        protos.google.appengine.v1.IOperationMetadataV1
      >,
      protos.google.longrunning.IOperation | null | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Updates the configuration of the specified service.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Name of the resource to update. Example: `apps/myapp/services/default`.
   * @param {google.appengine.v1.Service} request.service
   *   A Service resource containing the updated service. Only fields set in the
   *   field mask will be updated.
   * @param {google.protobuf.FieldMask} request.updateMask
   *   Standard field mask for the set of fields to be updated.
   * @param {boolean} request.migrateTraffic
   *   Set to `true` to gradually shift traffic to one or more versions that you
   *   specify. By default, traffic is shifted immediately.
   *   For gradual traffic migration, the target versions
   *   must be located within instances that are configured for both
   *   [warmup requests](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#InboundServiceType)
   *   and
   *   [automatic scaling](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#AutomaticScaling).
   *   You must specify the
   *   [`shardBy`](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services#ShardBy)
   *   field in the Service resource. Gradual traffic migration is not
   *   supported in the App Engine flexible environment. For examples, see
   *   [Migrating and Splitting Traffic](https://cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic).
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
   * const [operation] = await client.updateService(request);
   * const [response] = await operation.promise();
   */
  updateService(
    request: protos.google.appengine.v1.IUpdateServiceRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          LROperation<
            protos.google.appengine.v1.IService,
            protos.google.appengine.v1.IOperationMetadataV1
          >,
          protos.google.longrunning.IOperation | null | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      LROperation<
        protos.google.appengine.v1.IService,
        protos.google.appengine.v1.IOperationMetadataV1
      >,
      protos.google.longrunning.IOperation | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      LROperation<
        protos.google.appengine.v1.IService,
        protos.google.appengine.v1.IOperationMetadataV1
      >,
      protos.google.longrunning.IOperation | undefined,
      {} | undefined
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
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name || '',
    });
    this.initialize();
    return this.innerApiCalls.updateService(request, options, callback);
  }
  /**
   * Check the status of the long running operation returned by `updateService()`.
   * @param {String} name
   *   The operation name that will be passed.
   * @returns {Promise} - The promise which resolves to an object.
   *   The decoded operation object has result and metadata field to get information from.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
   *   for more details and examples.
   * @example
   * const decodedOperation = await checkUpdateServiceProgress(name);
   * console.log(decodedOperation.result);
   * console.log(decodedOperation.done);
   * console.log(decodedOperation.metadata);
   */
  async checkUpdateServiceProgress(
    name: string
  ): Promise<
    LROperation<
      protos.google.appengine.v1.Service,
      protos.google.appengine.v1.OperationMetadataV1
    >
  > {
    const request = new operationsProtos.google.longrunning.GetOperationRequest(
      {name}
    );
    const [operation] = await this.operationsClient.getOperation(request);
    const decodeOperation = new gax.Operation(
      operation,
      this.descriptors.longrunning.updateService,
      gax.createDefaultBackoffSettings()
    );
    return decodeOperation as LROperation<
      protos.google.appengine.v1.Service,
      protos.google.appengine.v1.OperationMetadataV1
    >;
  }
  deleteService(
    request: protos.google.appengine.v1.IDeleteServiceRequest,
    options?: CallOptions
  ): Promise<
    [
      LROperation<
        protos.google.protobuf.IEmpty,
        protos.google.appengine.v1.IOperationMetadataV1
      >,
      protos.google.longrunning.IOperation | undefined,
      {} | undefined
    ]
  >;
  deleteService(
    request: protos.google.appengine.v1.IDeleteServiceRequest,
    options: CallOptions,
    callback: Callback<
      LROperation<
        protos.google.protobuf.IEmpty,
        protos.google.appengine.v1.IOperationMetadataV1
      >,
      protos.google.longrunning.IOperation | null | undefined,
      {} | null | undefined
    >
  ): void;
  deleteService(
    request: protos.google.appengine.v1.IDeleteServiceRequest,
    callback: Callback<
      LROperation<
        protos.google.protobuf.IEmpty,
        protos.google.appengine.v1.IOperationMetadataV1
      >,
      protos.google.longrunning.IOperation | null | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Deletes the specified service and all enclosed versions.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Name of the resource requested. Example: `apps/myapp/services/default`.
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
   * const [operation] = await client.deleteService(request);
   * const [response] = await operation.promise();
   */
  deleteService(
    request: protos.google.appengine.v1.IDeleteServiceRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          LROperation<
            protos.google.protobuf.IEmpty,
            protos.google.appengine.v1.IOperationMetadataV1
          >,
          protos.google.longrunning.IOperation | null | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      LROperation<
        protos.google.protobuf.IEmpty,
        protos.google.appengine.v1.IOperationMetadataV1
      >,
      protos.google.longrunning.IOperation | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      LROperation<
        protos.google.protobuf.IEmpty,
        protos.google.appengine.v1.IOperationMetadataV1
      >,
      protos.google.longrunning.IOperation | undefined,
      {} | undefined
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
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name || '',
    });
    this.initialize();
    return this.innerApiCalls.deleteService(request, options, callback);
  }
  /**
   * Check the status of the long running operation returned by `deleteService()`.
   * @param {String} name
   *   The operation name that will be passed.
   * @returns {Promise} - The promise which resolves to an object.
   *   The decoded operation object has result and metadata field to get information from.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
   *   for more details and examples.
   * @example
   * const decodedOperation = await checkDeleteServiceProgress(name);
   * console.log(decodedOperation.result);
   * console.log(decodedOperation.done);
   * console.log(decodedOperation.metadata);
   */
  async checkDeleteServiceProgress(
    name: string
  ): Promise<
    LROperation<
      protos.google.protobuf.Empty,
      protos.google.appengine.v1.OperationMetadataV1
    >
  > {
    const request = new operationsProtos.google.longrunning.GetOperationRequest(
      {name}
    );
    const [operation] = await this.operationsClient.getOperation(request);
    const decodeOperation = new gax.Operation(
      operation,
      this.descriptors.longrunning.deleteService,
      gax.createDefaultBackoffSettings()
    );
    return decodeOperation as LROperation<
      protos.google.protobuf.Empty,
      protos.google.appengine.v1.OperationMetadataV1
    >;
  }
  listServices(
    request: protos.google.appengine.v1.IListServicesRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.appengine.v1.IService[],
      protos.google.appengine.v1.IListServicesRequest | null,
      protos.google.appengine.v1.IListServicesResponse
    ]
  >;
  listServices(
    request: protos.google.appengine.v1.IListServicesRequest,
    options: CallOptions,
    callback: PaginationCallback<
      protos.google.appengine.v1.IListServicesRequest,
      protos.google.appengine.v1.IListServicesResponse | null | undefined,
      protos.google.appengine.v1.IService
    >
  ): void;
  listServices(
    request: protos.google.appengine.v1.IListServicesRequest,
    callback: PaginationCallback<
      protos.google.appengine.v1.IListServicesRequest,
      protos.google.appengine.v1.IListServicesResponse | null | undefined,
      protos.google.appengine.v1.IService
    >
  ): void;
  /**
   * Lists all the services in the application.
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
   *   The first element of the array is Array of [Service]{@link google.appengine.v1.Service}.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed and will merge results from all the pages into this array.
   *   Note that it can affect your quota.
   *   We recommend using `listServicesAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   */
  listServices(
    request: protos.google.appengine.v1.IListServicesRequest,
    optionsOrCallback?:
      | CallOptions
      | PaginationCallback<
          protos.google.appengine.v1.IListServicesRequest,
          protos.google.appengine.v1.IListServicesResponse | null | undefined,
          protos.google.appengine.v1.IService
        >,
    callback?: PaginationCallback<
      protos.google.appengine.v1.IListServicesRequest,
      protos.google.appengine.v1.IListServicesResponse | null | undefined,
      protos.google.appengine.v1.IService
    >
  ): Promise<
    [
      protos.google.appengine.v1.IService[],
      protos.google.appengine.v1.IListServicesRequest | null,
      protos.google.appengine.v1.IListServicesResponse
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
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent || '',
    });
    this.initialize();
    return this.innerApiCalls.listServices(request, options, callback);
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
   *   An object stream which emits an object representing [Service]{@link google.appengine.v1.Service} on 'data' event.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed. Note that it can affect your quota.
   *   We recommend using `listServicesAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   */
  listServicesStream(
    request?: protos.google.appengine.v1.IListServicesRequest,
    options?: CallOptions
  ): Transform {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent || '',
    });
    const callSettings = new gax.CallSettings(options);
    this.initialize();
    return this.descriptors.page.listServices.createStream(
      this.innerApiCalls.listServices as gax.GaxCall,
      request,
      callSettings
    );
  }

  /**
   * Equivalent to `listServices`, but returns an iterable object.
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
   *   [Service]{@link google.appengine.v1.Service}. The API will be called under the hood as needed, once per the page,
   *   so you can stop the iteration when you don't need more results.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   * @example
   * const iterable = client.listServicesAsync(request);
   * for await (const response of iterable) {
   *   // process response
   * }
   */
  listServicesAsync(
    request?: protos.google.appengine.v1.IListServicesRequest,
    options?: CallOptions
  ): AsyncIterable<protos.google.appengine.v1.IService> {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent || '',
    });
    options = options || {};
    const callSettings = new gax.CallSettings(options);
    this.initialize();
    return this.descriptors.page.listServices.asyncIterate(
      this.innerApiCalls['listServices'] as GaxCall,
      (request as unknown) as RequestType,
      callSettings
    ) as AsyncIterable<protos.google.appengine.v1.IService>;
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
    this.initialize();
    if (!this._terminated) {
      return this.servicesStub!.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
