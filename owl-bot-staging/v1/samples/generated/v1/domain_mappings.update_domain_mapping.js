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
  // [START appengine_update_domain_mapping_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Name of the resource to update. Example:
   *  `apps/myapp/domainMappings/example.com`.
   */
  // const name = 'abc123'
  /**
   *  A domain mapping containing the updated resource. Only fields set
   *  in the field mask will be updated.
   */
  // const domainMapping = ''
  /**
   *  Standard field mask for the set of fields to be updated.
   */
  // const updateMask = ''

  // Imports the Appengine library
  const {DomainMappingsClient} = require('@google-cloud/appengine-admin').v1;

  // Instantiates a client
  const appengineClient = new DomainMappingsClient();

  async function updateDomainMapping() {
    // Construct request
    const request = {
    };

    // Run request
    const [operation] = await appengineClient.updateDomainMapping(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  updateDomainMapping();
  // [END appengine_update_domain_mapping_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));