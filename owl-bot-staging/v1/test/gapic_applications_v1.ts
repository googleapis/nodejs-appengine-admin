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
import {describe, it} from 'mocha';
import * as applicationsModule from '../src';

import {protobuf, LROperation, operationsProtos} from 'google-gax';

// Dynamically loaded proto JSON is needed to get the type information
// to fill in default values for request objects
const root = protobuf.Root.fromJSON(require('../protos/protos.json')).resolveAll();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTypeDefaultValue(typeName: string, fields: string[]) {
    let type = root.lookupType(typeName) as protobuf.Type;
    for (const field of fields.slice(0, -1)) {
        type = type.fields[field]?.resolvedType as protobuf.Type;
    }
    return type.fields[fields[fields.length - 1]]?.defaultValue;
}

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

describe('v1.ApplicationsClient', () => {
    describe('Common methods', () => {
        it('has servicePath', () => {
            const servicePath = applicationsModule.v1.ApplicationsClient.servicePath;
            assert(servicePath);
        });

        it('has apiEndpoint', () => {
            const apiEndpoint = applicationsModule.v1.ApplicationsClient.apiEndpoint;
            assert(apiEndpoint);
        });

        it('has port', () => {
            const port = applicationsModule.v1.ApplicationsClient.port;
            assert(port);
            assert(typeof port === 'number');
        });

        it('should create a client with no option', () => {
            const client = new applicationsModule.v1.ApplicationsClient();
            assert(client);
        });

        it('should create a client with gRPC fallback', () => {
            const client = new applicationsModule.v1.ApplicationsClient({
                fallback: true,
            });
            assert(client);
        });

        it('has initialize method and supports deferred initialization', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.applicationsStub, undefined);
            await client.initialize();
            assert(client.applicationsStub);
        });

        it('has close method for the initialized client', done => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            assert(client.applicationsStub);
            client.close().then(() => {
                done();
            });
        });

        it('has close method for the non-initialized client', done => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.applicationsStub, undefined);
            client.close().then(() => {
                done();
            });
        });

        it('has getProjectId method', async () => {
            const fakeProjectId = 'fake-project-id';
            const client = new applicationsModule.v1.ApplicationsClient({
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
            const client = new applicationsModule.v1.ApplicationsClient({
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
    });

    describe('getApplication', () => {
        it('invokes getApplication without error', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.appengine.v1.GetApplicationRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.appengine.v1.GetApplicationRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1}`;
            const expectedResponse = generateSampleMessage(
              new protos.google.appengine.v1.Application()
            );
            client.innerApiCalls.getApplication = stubSimpleCall(expectedResponse);
            const [response] = await client.getApplication(request);
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.getApplication as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.getApplication as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes getApplication without error using callback', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.appengine.v1.GetApplicationRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.appengine.v1.GetApplicationRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1}`;
            const expectedResponse = generateSampleMessage(
              new protos.google.appengine.v1.Application()
            );
            client.innerApiCalls.getApplication = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.getApplication(
                    request,
                    (err?: Error|null, result?: protos.google.appengine.v1.IApplication|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.getApplication as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.getApplication as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes getApplication with error', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.appengine.v1.GetApplicationRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.appengine.v1.GetApplicationRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1}`;
            const expectedError = new Error('expected');
            client.innerApiCalls.getApplication = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.getApplication(request), expectedError);
            const actualRequest = (client.innerApiCalls.getApplication as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.getApplication as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes getApplication with closed client', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.appengine.v1.GetApplicationRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.appengine.v1.GetApplicationRequest', ['name']);
            request.name = defaultValue1;
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.getApplication(request), expectedError);
        });
    });

    describe('createApplication', () => {
        it('invokes createApplication without error', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.appengine.v1.CreateApplicationRequest()
            );
            const expectedResponse = generateSampleMessage(
              new protos.google.longrunning.Operation()
            );
            client.innerApiCalls.createApplication = stubLongRunningCall(expectedResponse);
            const [operation] = await client.createApplication(request);
            const [response] = await operation.promise();
            assert.deepStrictEqual(response, expectedResponse);
        });

        it('invokes createApplication without error using callback', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.appengine.v1.CreateApplicationRequest()
            );
            const expectedResponse = generateSampleMessage(
              new protos.google.longrunning.Operation()
            );
            client.innerApiCalls.createApplication = stubLongRunningCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.createApplication(
                    request,
                    (err?: Error|null,
                     result?: LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>|null
                    ) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const operation = await promise as LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>;
            const [response] = await operation.promise();
            assert.deepStrictEqual(response, expectedResponse);
        });

        it('invokes createApplication with call error', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.appengine.v1.CreateApplicationRequest()
            );
            const expectedError = new Error('expected');
            client.innerApiCalls.createApplication = stubLongRunningCall(undefined, expectedError);
            await assert.rejects(client.createApplication(request), expectedError);
        });

        it('invokes createApplication with LRO error', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.appengine.v1.CreateApplicationRequest()
            );
            const expectedError = new Error('expected');
            client.innerApiCalls.createApplication = stubLongRunningCall(undefined, undefined, expectedError);
            const [operation] = await client.createApplication(request);
            await assert.rejects(operation.promise(), expectedError);
        });

        it('invokes checkCreateApplicationProgress without error', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const expectedResponse = generateSampleMessage(
              new operationsProtos.google.longrunning.Operation()
            );
            expectedResponse.name = 'test';
            expectedResponse.response = {type_url: 'url', value: Buffer.from('')};
            expectedResponse.metadata = {type_url: 'url', value: Buffer.from('')}

            client.operationsClient.getOperation = stubSimpleCall(expectedResponse);
            const decodedOperation = await client.checkCreateApplicationProgress(expectedResponse.name);
            assert.deepStrictEqual(decodedOperation.name, expectedResponse.name);
            assert(decodedOperation.metadata);
            assert((client.operationsClient.getOperation as SinonStub).getCall(0));
        });

        it('invokes checkCreateApplicationProgress with error', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const expectedError = new Error('expected');

            client.operationsClient.getOperation = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.checkCreateApplicationProgress(''), expectedError);
            assert((client.operationsClient.getOperation as SinonStub)
                .getCall(0));
        });
    });

    describe('updateApplication', () => {
        it('invokes updateApplication without error', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.appengine.v1.UpdateApplicationRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.appengine.v1.UpdateApplicationRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1}`;
            const expectedResponse = generateSampleMessage(
              new protos.google.longrunning.Operation()
            );
            client.innerApiCalls.updateApplication = stubLongRunningCall(expectedResponse);
            const [operation] = await client.updateApplication(request);
            const [response] = await operation.promise();
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.updateApplication as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.updateApplication as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes updateApplication without error using callback', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.appengine.v1.UpdateApplicationRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.appengine.v1.UpdateApplicationRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1}`;
            const expectedResponse = generateSampleMessage(
              new protos.google.longrunning.Operation()
            );
            client.innerApiCalls.updateApplication = stubLongRunningCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.updateApplication(
                    request,
                    (err?: Error|null,
                     result?: LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>|null
                    ) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const operation = await promise as LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>;
            const [response] = await operation.promise();
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.updateApplication as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.updateApplication as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes updateApplication with call error', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.appengine.v1.UpdateApplicationRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.appengine.v1.UpdateApplicationRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1}`;
            const expectedError = new Error('expected');
            client.innerApiCalls.updateApplication = stubLongRunningCall(undefined, expectedError);
            await assert.rejects(client.updateApplication(request), expectedError);
            const actualRequest = (client.innerApiCalls.updateApplication as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.updateApplication as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes updateApplication with LRO error', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.appengine.v1.UpdateApplicationRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.appengine.v1.UpdateApplicationRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1}`;
            const expectedError = new Error('expected');
            client.innerApiCalls.updateApplication = stubLongRunningCall(undefined, undefined, expectedError);
            const [operation] = await client.updateApplication(request);
            await assert.rejects(operation.promise(), expectedError);
            const actualRequest = (client.innerApiCalls.updateApplication as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.updateApplication as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes checkUpdateApplicationProgress without error', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const expectedResponse = generateSampleMessage(
              new operationsProtos.google.longrunning.Operation()
            );
            expectedResponse.name = 'test';
            expectedResponse.response = {type_url: 'url', value: Buffer.from('')};
            expectedResponse.metadata = {type_url: 'url', value: Buffer.from('')}

            client.operationsClient.getOperation = stubSimpleCall(expectedResponse);
            const decodedOperation = await client.checkUpdateApplicationProgress(expectedResponse.name);
            assert.deepStrictEqual(decodedOperation.name, expectedResponse.name);
            assert(decodedOperation.metadata);
            assert((client.operationsClient.getOperation as SinonStub).getCall(0));
        });

        it('invokes checkUpdateApplicationProgress with error', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const expectedError = new Error('expected');

            client.operationsClient.getOperation = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.checkUpdateApplicationProgress(''), expectedError);
            assert((client.operationsClient.getOperation as SinonStub)
                .getCall(0));
        });
    });

    describe('repairApplication', () => {
        it('invokes repairApplication without error', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.appengine.v1.RepairApplicationRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.appengine.v1.RepairApplicationRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1}`;
            const expectedResponse = generateSampleMessage(
              new protos.google.longrunning.Operation()
            );
            client.innerApiCalls.repairApplication = stubLongRunningCall(expectedResponse);
            const [operation] = await client.repairApplication(request);
            const [response] = await operation.promise();
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.repairApplication as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.repairApplication as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes repairApplication without error using callback', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.appengine.v1.RepairApplicationRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.appengine.v1.RepairApplicationRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1}`;
            const expectedResponse = generateSampleMessage(
              new protos.google.longrunning.Operation()
            );
            client.innerApiCalls.repairApplication = stubLongRunningCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.repairApplication(
                    request,
                    (err?: Error|null,
                     result?: LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>|null
                    ) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const operation = await promise as LROperation<protos.google.appengine.v1.IApplication, protos.google.appengine.v1.IOperationMetadataV1>;
            const [response] = await operation.promise();
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.repairApplication as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.repairApplication as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes repairApplication with call error', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.appengine.v1.RepairApplicationRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.appengine.v1.RepairApplicationRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1}`;
            const expectedError = new Error('expected');
            client.innerApiCalls.repairApplication = stubLongRunningCall(undefined, expectedError);
            await assert.rejects(client.repairApplication(request), expectedError);
            const actualRequest = (client.innerApiCalls.repairApplication as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.repairApplication as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes repairApplication with LRO error', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.appengine.v1.RepairApplicationRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.appengine.v1.RepairApplicationRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1}`;
            const expectedError = new Error('expected');
            client.innerApiCalls.repairApplication = stubLongRunningCall(undefined, undefined, expectedError);
            const [operation] = await client.repairApplication(request);
            await assert.rejects(operation.promise(), expectedError);
            const actualRequest = (client.innerApiCalls.repairApplication as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.repairApplication as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes checkRepairApplicationProgress without error', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const expectedResponse = generateSampleMessage(
              new operationsProtos.google.longrunning.Operation()
            );
            expectedResponse.name = 'test';
            expectedResponse.response = {type_url: 'url', value: Buffer.from('')};
            expectedResponse.metadata = {type_url: 'url', value: Buffer.from('')}

            client.operationsClient.getOperation = stubSimpleCall(expectedResponse);
            const decodedOperation = await client.checkRepairApplicationProgress(expectedResponse.name);
            assert.deepStrictEqual(decodedOperation.name, expectedResponse.name);
            assert(decodedOperation.metadata);
            assert((client.operationsClient.getOperation as SinonStub).getCall(0));
        });

        it('invokes checkRepairApplicationProgress with error', async () => {
            const client = new applicationsModule.v1.ApplicationsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const expectedError = new Error('expected');

            client.operationsClient.getOperation = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.checkRepairApplicationProgress(''), expectedError);
            assert((client.operationsClient.getOperation as SinonStub)
                .getCall(0));
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
            const client = new applicationsModule.v1.ApplicationsClient({
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
