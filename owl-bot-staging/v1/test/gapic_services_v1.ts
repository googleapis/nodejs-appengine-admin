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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import { describe, it } from 'mocha';
import * as servicesModule from '../src';

import {PassThrough} from 'stream';

import {protobuf, LROperation, operationsProtos} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
    const filledObject = (instance.constructor as typeof protobuf.Message)
        .toObject(instance as protobuf.Message<T>, {defaults: true});
    return (instance.constructor as typeof protobuf.Message).fromObject(filledObject) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().rejects(error) : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().callsArgWith(2, error) : sinon.stub().callsArgWith(2, null, response);
}

function stubLongRunningCall<ResponseType>(response?: ResponseType, callError?: Error, lroError?: Error) {
    const innerStub = lroError ? sinon.stub().rejects(lroError) : sinon.stub().resolves([response]);
    const mockOperation = {
        promise: innerStub,
    };
    return callError ? sinon.stub().rejects(callError) : sinon.stub().resolves([mockOperation]);
}

function stubLongRunningCallWithCallback<ResponseType>(response?: ResponseType, callError?: Error, lroError?: Error) {
    const innerStub = lroError ? sinon.stub().rejects(lroError) : sinon.stub().resolves([response]);
    const mockOperation = {
        promise: innerStub,
    };
    return callError ? sinon.stub().callsArgWith(2, callError) : sinon.stub().callsArgWith(2, null, mockOperation);
}

function stubPageStreamingCall<ResponseType>(responses?: ResponseType[], error?: Error) {
    const pagingStub = sinon.stub();
    if (responses) {
        for (let i = 0; i < responses.length; ++i) {
            pagingStub.onCall(i).callsArgWith(2, null, responses[i]);
        }
    }
    const transformStub = error ? sinon.stub().callsArgWith(2, error) : pagingStub;
    const mockStream = new PassThrough({
        objectMode: true,
        transform: transformStub,
    });
    // trigger as many responses as needed
    if (responses) {
        for (let i = 0; i < responses.length; ++i) {
            setImmediate(() => { mockStream.write({}); });
        }
        setImmediate(() => { mockStream.end(); });
    } else {
        setImmediate(() => { mockStream.write({}); });
        setImmediate(() => { mockStream.end(); });
    }
    return sinon.stub().returns(mockStream);
}

function stubAsyncIterationCall<ResponseType>(responses?: ResponseType[], error?: Error) {
    let counter = 0;
    const asyncIterable = {
        [Symbol.asyncIterator]() {
            return {
                async next() {
                    if (error) {
                        return Promise.reject(error);
                    }
                    if (counter >= responses!.length) {
                        return Promise.resolve({done: true, value: undefined});
                    }
                    return Promise.resolve({done: false, value: responses![counter++]});
                }
            };
        }
    };
    return sinon.stub().returns(asyncIterable);
}

describe('v1.ServicesClient', () => {
    it('has servicePath', () => {
        const servicePath = servicesModule.v1.ServicesClient.servicePath;
        assert(servicePath);
    });

    it('has apiEndpoint', () => {
        const apiEndpoint = servicesModule.v1.ServicesClient.apiEndpoint;
        assert(apiEndpoint);
    });

    it('has port', () => {
        const port = servicesModule.v1.ServicesClient.port;
        assert(port);
        assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
        const client = new servicesModule.v1.ServicesClient();
        assert(client);
    });

    it('should create a client with gRPC fallback', () => {
        const client = new servicesModule.v1.ServicesClient({
            fallback: true,
        });
        assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
        const client = new servicesModule.v1.ServicesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        assert.strictEqual(client.servicesStub, undefined);
        await client.initialize();
        assert(client.servicesStub);
    });

    it('has close method', () => {
        const client = new servicesModule.v1.ServicesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.close();
    });

    it('has getProjectId method', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new servicesModule.v1.ServicesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
        const result = await client.getProjectId();
        assert.strictEqual(result, fakeProjectId);
        assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new servicesModule.v1.ServicesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().callsArgWith(0, null, fakeProjectId);
        const promise = new Promise((resolve, reject) => {
            client.getProjectId((err?: Error|null, projectId?: string|null) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(projectId);
                }
            });
        });
        const result = await promise;
        assert.strictEqual(result, fakeProjectId);
    });

    describe('getService', () => {
        it('invokes getService without error', async () => {
            const client = new servicesModule.v1.ServicesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.appengine.v1.GetServiceRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.appengine.v1.Service());
            client.innerApiCalls.getService = stubSimpleCall(expectedResponse);
            const [response] = await client.getService(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getService as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes getService without error using callback', async () => {
            const client = new servicesModule.v1.ServicesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.appengine.v1.GetServiceRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.appengine.v1.Service());
            client.innerApiCalls.getService = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.getService(
                    request,
                    (err?: Error|null, result?: protos.google.appengine.v1.IService|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getService as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes getService with error', async () => {
            const client = new servicesModule.v1.ServicesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.appengine.v1.GetServiceRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.getService = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.getService(request), expectedError);
            assert((client.innerApiCalls.getService as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('updateService', () => {
        it('invokes updateService without error', async () => {
            const client = new servicesModule.v1.ServicesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.appengine.v1.UpdateServiceRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.longrunning.Operation());
            client.innerApiCalls.updateService = stubLongRunningCall(expectedResponse);
            const [operation] = await client.updateService(request);
            const [response] = await operation.promise();
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.updateService as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes updateService without error using callback', async () => {
            const client = new servicesModule.v1.ServicesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.appengine.v1.UpdateServiceRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.longrunning.Operation());
            client.innerApiCalls.updateService = stubLongRunningCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.updateService(
                    request,
                    (err?: Error|null,
                     result?: LROperation<protos.google.appengine.v1.IService, protos.google.appengine.v1.IOperationMetadataV1>|null
                    ) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const operation = await promise as LROperation<protos.google.appengine.v1.IService, protos.google.appengine.v1.IOperationMetadataV1>;
            const [response] = await operation.promise();
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.updateService as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes updateService with call error', async () => {
            const client = new servicesModule.v1.ServicesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.appengine.v1.UpdateServiceRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.updateService = stubLongRunningCall(undefined, expectedError);
            await assert.rejects(client.updateService(request), expectedError);
            assert((client.innerApiCalls.updateService as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes updateService with LRO error', async () => {
            const client = new servicesModule.v1.ServicesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.appengine.v1.UpdateServiceRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.updateService = stubLongRunningCall(undefined, undefined, expectedError);
            const [operation] = await client.updateService(request);
            await assert.rejects(operation.promise(), expectedError);
            assert((client.innerApiCalls.updateService as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes checkUpdateServiceProgress without error', async () => {
            const client = new servicesModule.v1.ServicesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const expectedResponse = generateSampleMessage(new operationsProtos.google.longrunning.Operation());
            expectedResponse.name = 'test';
            expectedResponse.response = {type_url: 'url', value: Buffer.from('')};
            expectedResponse.metadata = {type_url: 'url', value: Buffer.from('')}

            client.operationsClient.getOperation = stubSimpleCall(expectedResponse);
            const decodedOperation = await client.checkUpdateServiceProgress(expectedResponse.name);
            assert.deepStrictEqual(decodedOperation.name, expectedResponse.name);
            assert(decodedOperation.metadata);
            assert((client.operationsClient.getOperation as SinonStub).getCall(0));
        });

        it('invokes checkUpdateServiceProgress with error', async () => {
            const client = new servicesModule.v1.ServicesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const expectedError = new Error('expected');

            client.operationsClient.getOperation = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.checkUpdateServiceProgress(''), expectedError);
            assert((client.operationsClient.getOperation as SinonStub)
                .getCall(0));
        });
    });

    describe('deleteService', () => {
        it('invokes deleteService without error', async () => {
            const client = new servicesModule.v1.ServicesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.appengine.v1.DeleteServiceRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.longrunning.Operation());
            client.innerApiCalls.deleteService = stubLongRunningCall(expectedResponse);
            const [operation] = await client.deleteService(request);
            const [response] = await operation.promise();
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.deleteService as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes deleteService without error using callback', async () => {
            const client = new servicesModule.v1.ServicesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.appengine.v1.DeleteServiceRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.longrunning.Operation());
            client.innerApiCalls.deleteService = stubLongRunningCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.deleteService(
                    request,
                    (err?: Error|null,
                     result?: LROperation<protos.google.protobuf.IEmpty, protos.google.appengine.v1.IOperationMetadataV1>|null
                    ) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const operation = await promise as LROperation<protos.google.protobuf.IEmpty, protos.google.appengine.v1.IOperationMetadataV1>;
            const [response] = await operation.promise();
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.deleteService as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes deleteService with call error', async () => {
            const client = new servicesModule.v1.ServicesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.appengine.v1.DeleteServiceRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.deleteService = stubLongRunningCall(undefined, expectedError);
            await assert.rejects(client.deleteService(request), expectedError);
            assert((client.innerApiCalls.deleteService as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes deleteService with LRO error', async () => {
            const client = new servicesModule.v1.ServicesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.appengine.v1.DeleteServiceRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.deleteService = stubLongRunningCall(undefined, undefined, expectedError);
            const [operation] = await client.deleteService(request);
            await assert.rejects(operation.promise(), expectedError);
            assert((client.innerApiCalls.deleteService as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes checkDeleteServiceProgress without error', async () => {
            const client = new servicesModule.v1.ServicesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const expectedResponse = generateSampleMessage(new operationsProtos.google.longrunning.Operation());
            expectedResponse.name = 'test';
            expectedResponse.response = {type_url: 'url', value: Buffer.from('')};
            expectedResponse.metadata = {type_url: 'url', value: Buffer.from('')}

            client.operationsClient.getOperation = stubSimpleCall(expectedResponse);
            const decodedOperation = await client.checkDeleteServiceProgress(expectedResponse.name);
            assert.deepStrictEqual(decodedOperation.name, expectedResponse.name);
            assert(decodedOperation.metadata);
            assert((client.operationsClient.getOperation as SinonStub).getCall(0));
        });

        it('invokes checkDeleteServiceProgress with error', async () => {
            const client = new servicesModule.v1.ServicesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const expectedError = new Error('expected');

            client.operationsClient.getOperation = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.checkDeleteServiceProgress(''), expectedError);
            assert((client.operationsClient.getOperation as SinonStub)
                .getCall(0));
        });
    });

    describe('listServices', () => {
        it('invokes listServices without error', async () => {
            const client = new servicesModule.v1.ServicesClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.appengine.v1.ListServicesRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = [
              generateSampleMessage(new protos.google.appengine.v1.Service()),
              generateSampleMessage(new protos.google.appengine.v1.Service()),
              generateSampleMessage(new protos.google.appengine.v1.Service()),
            ];
            client.innerApiCalls.listServices = stubSimpleCall(expectedResponse);
            const [response] = await client.listServices(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.listServices as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes listServices without error using callback', async () => {
            const client = new servicesModule.v1.ServicesClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.appengine.v1.ListServicesRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = [
              generateSampleMessage(new protos.google.appengine.v1.Service()),
              generateSampleMessage(new protos.google.appengine.v1.Service()),
              generateSampleMessage(new protos.google.appengine.v1.Service()),
            ];
            client.innerApiCalls.listServices = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.listServices(
                    request,
                    (err?: Error|null, result?: protos.google.appengine.v1.IService[]|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.listServices as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes listServices with error', async () => {
            const client = new servicesModule.v1.ServicesClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.appengine.v1.ListServicesRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.listServices = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.listServices(request), expectedError);
            assert((client.innerApiCalls.listServices as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes listServicesStream without error', async () => {
            const client = new servicesModule.v1.ServicesClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.appengine.v1.ListServicesRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedResponse = [
              generateSampleMessage(new protos.google.appengine.v1.Service()),
              generateSampleMessage(new protos.google.appengine.v1.Service()),
              generateSampleMessage(new protos.google.appengine.v1.Service()),
            ];
            client.descriptors.page.listServices.createStream = stubPageStreamingCall(expectedResponse);
            const stream = client.listServicesStream(request);
            const promise = new Promise((resolve, reject) => {
                const responses: protos.google.appengine.v1.Service[] = [];
                stream.on('data', (response: protos.google.appengine.v1.Service) => {
                    responses.push(response);
                });
                stream.on('end', () => {
                    resolve(responses);
                });
                stream.on('error', (err: Error) => {
                    reject(err);
                });
            });
            const responses = await promise;
            assert.deepStrictEqual(responses, expectedResponse);
            assert((client.descriptors.page.listServices.createStream as SinonStub)
                .getCall(0).calledWith(client.innerApiCalls.listServices, request));
            assert.strictEqual(
                (client.descriptors.page.listServices.createStream as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });

        it('invokes listServicesStream with error', async () => {
            const client = new servicesModule.v1.ServicesClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.appengine.v1.ListServicesRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedError = new Error('expected');
            client.descriptors.page.listServices.createStream = stubPageStreamingCall(undefined, expectedError);
            const stream = client.listServicesStream(request);
            const promise = new Promise((resolve, reject) => {
                const responses: protos.google.appengine.v1.Service[] = [];
                stream.on('data', (response: protos.google.appengine.v1.Service) => {
                    responses.push(response);
                });
                stream.on('end', () => {
                    resolve(responses);
                });
                stream.on('error', (err: Error) => {
                    reject(err);
                });
            });
            await assert.rejects(promise, expectedError);
            assert((client.descriptors.page.listServices.createStream as SinonStub)
                .getCall(0).calledWith(client.innerApiCalls.listServices, request));
            assert.strictEqual(
                (client.descriptors.page.listServices.createStream as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });

        it('uses async iteration with listServices without error', async () => {
            const client = new servicesModule.v1.ServicesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.appengine.v1.ListServicesRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";
            const expectedResponse = [
              generateSampleMessage(new protos.google.appengine.v1.Service()),
              generateSampleMessage(new protos.google.appengine.v1.Service()),
              generateSampleMessage(new protos.google.appengine.v1.Service()),
            ];
            client.descriptors.page.listServices.asyncIterate = stubAsyncIterationCall(expectedResponse);
            const responses: protos.google.appengine.v1.IService[] = [];
            const iterable = client.listServicesAsync(request);
            for await (const resource of iterable) {
                responses.push(resource!);
            }
            assert.deepStrictEqual(responses, expectedResponse);
            assert.deepStrictEqual(
                (client.descriptors.page.listServices.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
            assert.strictEqual(
                (client.descriptors.page.listServices.asyncIterate as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });

        it('uses async iteration with listServices with error', async () => {
            const client = new servicesModule.v1.ServicesClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.appengine.v1.ListServicesRequest());
            request.parent = '';
            const expectedHeaderRequestParams = "parent=";const expectedError = new Error('expected');
            client.descriptors.page.listServices.asyncIterate = stubAsyncIterationCall(undefined, expectedError);
            const iterable = client.listServicesAsync(request);
            await assert.rejects(async () => {
                const responses: protos.google.appengine.v1.IService[] = [];
                for await (const resource of iterable) {
                    responses.push(resource!);
                }
            });
            assert.deepStrictEqual(
                (client.descriptors.page.listServices.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
            assert.strictEqual(
                (client.descriptors.page.listServices.asyncIterate as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });
    });

    describe('Path templates', () => {

        describe('instance', () => {
            const fakePath = "/rendered/path/instance";
            const expectedParameters = {
                app: "appValue",
                service: "serviceValue",
                version: "versionValue",
                instance: "instanceValue",
            };
            const client = new servicesModule.v1.ServicesClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.instancePathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.instancePathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('instancePath', () => {
                const result = client.instancePath("appValue", "serviceValue", "versionValue", "instanceValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.instancePathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchAppFromInstanceName', () => {
                const result = client.matchAppFromInstanceName(fakePath);
                assert.strictEqual(result, "appValue");
                assert((client.pathTemplates.instancePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchServiceFromInstanceName', () => {
                const result = client.matchServiceFromInstanceName(fakePath);
                assert.strictEqual(result, "serviceValue");
                assert((client.pathTemplates.instancePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchVersionFromInstanceName', () => {
                const result = client.matchVersionFromInstanceName(fakePath);
                assert.strictEqual(result, "versionValue");
                assert((client.pathTemplates.instancePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchInstanceFromInstanceName', () => {
                const result = client.matchInstanceFromInstanceName(fakePath);
                assert.strictEqual(result, "instanceValue");
                assert((client.pathTemplates.instancePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });
    });
});
