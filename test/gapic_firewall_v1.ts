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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as firewallModule from '../src';

import {PassThrough} from 'stream';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (instance.constructor as typeof protobuf.Message).toObject(
    instance as protobuf.Message<T>,
    {defaults: true}
  );
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

function stubPageStreamingCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  const pagingStub = sinon.stub();
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      pagingStub.onCall(i).callsArgWith(2, null, responses[i]);
    }
  }
  const transformStub = error
    ? sinon.stub().callsArgWith(2, error)
    : pagingStub;
  const mockStream = new PassThrough({
    objectMode: true,
    transform: transformStub,
  });
  // trigger as many responses as needed
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      setImmediate(() => {
        mockStream.write({});
      });
    }
    setImmediate(() => {
      mockStream.end();
    });
  } else {
    setImmediate(() => {
      mockStream.write({});
    });
    setImmediate(() => {
      mockStream.end();
    });
  }
  return sinon.stub().returns(mockStream);
}

function stubAsyncIterationCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
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
        },
      };
    },
  };
  return sinon.stub().returns(asyncIterable);
}

describe('v1.FirewallClient', () => {
  it('has servicePath', () => {
    const servicePath = firewallModule.v1.FirewallClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = firewallModule.v1.FirewallClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = firewallModule.v1.FirewallClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new firewallModule.v1.FirewallClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new firewallModule.v1.FirewallClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new firewallModule.v1.FirewallClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.firewallStub, undefined);
    await client.initialize();
    assert(client.firewallStub);
  });

  it('has close method', () => {
    const client = new firewallModule.v1.FirewallClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new firewallModule.v1.FirewallClient({
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
    const client = new firewallModule.v1.FirewallClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon
      .stub()
      .callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
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

  describe('batchUpdateIngressRules', () => {
    it('invokes batchUpdateIngressRules without error', async () => {
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.appengine.v1.BatchUpdateIngressRulesRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.appengine.v1.BatchUpdateIngressRulesResponse()
      );
      client.innerApiCalls.batchUpdateIngressRules = stubSimpleCall(
        expectedResponse
      );
      const [response] = await client.batchUpdateIngressRules(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.batchUpdateIngressRules as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes batchUpdateIngressRules without error using callback', async () => {
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.appengine.v1.BatchUpdateIngressRulesRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.appengine.v1.BatchUpdateIngressRulesResponse()
      );
      client.innerApiCalls.batchUpdateIngressRules = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.batchUpdateIngressRules(
          request,
          (
            err?: Error | null,
            result?: protos.google.appengine.v1.IBatchUpdateIngressRulesResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.batchUpdateIngressRules as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes batchUpdateIngressRules with error', async () => {
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.appengine.v1.BatchUpdateIngressRulesRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.batchUpdateIngressRules = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(
        client.batchUpdateIngressRules(request),
        expectedError
      );
      assert(
        (client.innerApiCalls.batchUpdateIngressRules as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('createIngressRule', () => {
    it('invokes createIngressRule without error', async () => {
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.appengine.v1.CreateIngressRuleRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.appengine.v1.FirewallRule()
      );
      client.innerApiCalls.createIngressRule = stubSimpleCall(expectedResponse);
      const [response] = await client.createIngressRule(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.createIngressRule as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes createIngressRule without error using callback', async () => {
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.appengine.v1.CreateIngressRuleRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.appengine.v1.FirewallRule()
      );
      client.innerApiCalls.createIngressRule = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.createIngressRule(
          request,
          (
            err?: Error | null,
            result?: protos.google.appengine.v1.IFirewallRule | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.createIngressRule as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes createIngressRule with error', async () => {
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.appengine.v1.CreateIngressRuleRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.createIngressRule = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.createIngressRule(request), expectedError);
      assert(
        (client.innerApiCalls.createIngressRule as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('getIngressRule', () => {
    it('invokes getIngressRule without error', async () => {
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.appengine.v1.GetIngressRuleRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.appengine.v1.FirewallRule()
      );
      client.innerApiCalls.getIngressRule = stubSimpleCall(expectedResponse);
      const [response] = await client.getIngressRule(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getIngressRule as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes getIngressRule without error using callback', async () => {
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.appengine.v1.GetIngressRuleRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.appengine.v1.FirewallRule()
      );
      client.innerApiCalls.getIngressRule = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.getIngressRule(
          request,
          (
            err?: Error | null,
            result?: protos.google.appengine.v1.IFirewallRule | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getIngressRule as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes getIngressRule with error', async () => {
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.appengine.v1.GetIngressRuleRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.getIngressRule = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.getIngressRule(request), expectedError);
      assert(
        (client.innerApiCalls.getIngressRule as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('updateIngressRule', () => {
    it('invokes updateIngressRule without error', async () => {
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.appengine.v1.UpdateIngressRuleRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.appengine.v1.FirewallRule()
      );
      client.innerApiCalls.updateIngressRule = stubSimpleCall(expectedResponse);
      const [response] = await client.updateIngressRule(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.updateIngressRule as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes updateIngressRule without error using callback', async () => {
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.appengine.v1.UpdateIngressRuleRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.appengine.v1.FirewallRule()
      );
      client.innerApiCalls.updateIngressRule = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.updateIngressRule(
          request,
          (
            err?: Error | null,
            result?: protos.google.appengine.v1.IFirewallRule | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.updateIngressRule as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes updateIngressRule with error', async () => {
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.appengine.v1.UpdateIngressRuleRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.updateIngressRule = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.updateIngressRule(request), expectedError);
      assert(
        (client.innerApiCalls.updateIngressRule as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('deleteIngressRule', () => {
    it('invokes deleteIngressRule without error', async () => {
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.appengine.v1.DeleteIngressRuleRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.protobuf.Empty()
      );
      client.innerApiCalls.deleteIngressRule = stubSimpleCall(expectedResponse);
      const [response] = await client.deleteIngressRule(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.deleteIngressRule as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes deleteIngressRule without error using callback', async () => {
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.appengine.v1.DeleteIngressRuleRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.protobuf.Empty()
      );
      client.innerApiCalls.deleteIngressRule = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.deleteIngressRule(
          request,
          (
            err?: Error | null,
            result?: protos.google.protobuf.IEmpty | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.deleteIngressRule as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes deleteIngressRule with error', async () => {
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.appengine.v1.DeleteIngressRuleRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.deleteIngressRule = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.deleteIngressRule(request), expectedError);
      assert(
        (client.innerApiCalls.deleteIngressRule as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('listIngressRules', () => {
    it('invokes listIngressRules without error', async () => {
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.appengine.v1.ListIngressRulesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(new protos.google.appengine.v1.FirewallRule()),
        generateSampleMessage(new protos.google.appengine.v1.FirewallRule()),
        generateSampleMessage(new protos.google.appengine.v1.FirewallRule()),
      ];
      client.innerApiCalls.listIngressRules = stubSimpleCall(expectedResponse);
      const [response] = await client.listIngressRules(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listIngressRules as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listIngressRules without error using callback', async () => {
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.appengine.v1.ListIngressRulesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(new protos.google.appengine.v1.FirewallRule()),
        generateSampleMessage(new protos.google.appengine.v1.FirewallRule()),
        generateSampleMessage(new protos.google.appengine.v1.FirewallRule()),
      ];
      client.innerApiCalls.listIngressRules = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.listIngressRules(
          request,
          (
            err?: Error | null,
            result?: protos.google.appengine.v1.IFirewallRule[] | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listIngressRules as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes listIngressRules with error', async () => {
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.appengine.v1.ListIngressRulesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.listIngressRules = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.listIngressRules(request), expectedError);
      assert(
        (client.innerApiCalls.listIngressRules as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listIngressRulesStream without error', async () => {
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.appengine.v1.ListIngressRulesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(new protos.google.appengine.v1.FirewallRule()),
        generateSampleMessage(new protos.google.appengine.v1.FirewallRule()),
        generateSampleMessage(new protos.google.appengine.v1.FirewallRule()),
      ];
      client.descriptors.page.listIngressRules.createStream = stubPageStreamingCall(
        expectedResponse
      );
      const stream = client.listIngressRulesStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.appengine.v1.FirewallRule[] = [];
        stream.on(
          'data',
          (response: protos.google.appengine.v1.FirewallRule) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      const responses = await promise;
      assert.deepStrictEqual(responses, expectedResponse);
      assert(
        (client.descriptors.page.listIngressRules.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listIngressRules, request)
      );
      assert.strictEqual(
        (client.descriptors.page.listIngressRules
          .createStream as SinonStub).getCall(0).args[2].otherArgs.headers[
          'x-goog-request-params'
        ],
        expectedHeaderRequestParams
      );
    });

    it('invokes listIngressRulesStream with error', async () => {
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.appengine.v1.ListIngressRulesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listIngressRules.createStream = stubPageStreamingCall(
        undefined,
        expectedError
      );
      const stream = client.listIngressRulesStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.appengine.v1.FirewallRule[] = [];
        stream.on(
          'data',
          (response: protos.google.appengine.v1.FirewallRule) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      await assert.rejects(promise, expectedError);
      assert(
        (client.descriptors.page.listIngressRules.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listIngressRules, request)
      );
      assert.strictEqual(
        (client.descriptors.page.listIngressRules
          .createStream as SinonStub).getCall(0).args[2].otherArgs.headers[
          'x-goog-request-params'
        ],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listIngressRules without error', async () => {
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.appengine.v1.ListIngressRulesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(new protos.google.appengine.v1.FirewallRule()),
        generateSampleMessage(new protos.google.appengine.v1.FirewallRule()),
        generateSampleMessage(new protos.google.appengine.v1.FirewallRule()),
      ];
      client.descriptors.page.listIngressRules.asyncIterate = stubAsyncIterationCall(
        expectedResponse
      );
      const responses: protos.google.appengine.v1.IFirewallRule[] = [];
      const iterable = client.listIngressRulesAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (client.descriptors.page.listIngressRules
          .asyncIterate as SinonStub).getCall(0).args[1],
        request
      );
      assert.strictEqual(
        (client.descriptors.page.listIngressRules
          .asyncIterate as SinonStub).getCall(0).args[2].otherArgs.headers[
          'x-goog-request-params'
        ],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listIngressRules with error', async () => {
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.appengine.v1.ListIngressRulesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listIngressRules.asyncIterate = stubAsyncIterationCall(
        undefined,
        expectedError
      );
      const iterable = client.listIngressRulesAsync(request);
      await assert.rejects(async () => {
        const responses: protos.google.appengine.v1.IFirewallRule[] = [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (client.descriptors.page.listIngressRules
          .asyncIterate as SinonStub).getCall(0).args[1],
        request
      );
      assert.strictEqual(
        (client.descriptors.page.listIngressRules
          .asyncIterate as SinonStub).getCall(0).args[2].otherArgs.headers[
          'x-goog-request-params'
        ],
        expectedHeaderRequestParams
      );
    });
  });

  describe('Path templates', () => {
    describe('instance', () => {
      const fakePath = '/rendered/path/instance';
      const expectedParameters = {
        app: 'appValue',
        service: 'serviceValue',
        version: 'versionValue',
        instance: 'instanceValue',
      };
      const client = new firewallModule.v1.FirewallClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.instancePathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.instancePathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('instancePath', () => {
        const result = client.instancePath(
          'appValue',
          'serviceValue',
          'versionValue',
          'instanceValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.instancePathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchAppFromInstanceName', () => {
        const result = client.matchAppFromInstanceName(fakePath);
        assert.strictEqual(result, 'appValue');
        assert(
          (client.pathTemplates.instancePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchServiceFromInstanceName', () => {
        const result = client.matchServiceFromInstanceName(fakePath);
        assert.strictEqual(result, 'serviceValue');
        assert(
          (client.pathTemplates.instancePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchVersionFromInstanceName', () => {
        const result = client.matchVersionFromInstanceName(fakePath);
        assert.strictEqual(result, 'versionValue');
        assert(
          (client.pathTemplates.instancePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchInstanceFromInstanceName', () => {
        const result = client.matchInstanceFromInstanceName(fakePath);
        assert.strictEqual(result, 'instanceValue');
        assert(
          (client.pathTemplates.instancePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
