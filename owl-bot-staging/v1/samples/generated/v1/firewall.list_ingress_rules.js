// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main() {
  // [START appengine_list_ingress_rules_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Name of the Firewall collection to retrieve.
   *  Example: `apps/myapp/firewall/ingressRules`.
   */
  // const parent = 'abc123'
  /**
   *  Maximum results to return per page.
   */
  // const pageSize = 1234
  /**
   *  Continuation token for fetching the next page of results.
   */
  // const pageToken = 'abc123'
  /**
   *  A valid IP Address. If set, only rules matching this address will be
   *  returned. The first returned rule will be the rule that fires on requests
   *  from this IP.
   */
  // const matchingAddress = 'abc123'

  // Imports the Appengine library
  const {FirewallClient} = require('@google-cloud/appengine-admin').v1;

  // Instantiates a client
  const appengineClient = new FirewallClient();

  async function listIngressRules() {
    // Construct request
    const request = {
    };

    // Run request
    const iterable = await appengineClient.listIngressRulesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listIngressRules();
  // [END appengine_list_ingress_rules_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));