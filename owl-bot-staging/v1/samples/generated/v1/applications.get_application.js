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
  // [START appengine_v1_generated_Applications_GetApplication_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Name of the Application resource to get. Example: `apps/myapp`.
   */
  // const name = 'abc123'

  // Imports the Appengine library
  const {ApplicationsClient} = require('@google-cloud/appengine-admin').v1;

  // Instantiates a client
  const appengineClient = new ApplicationsClient();

  async function getApplication() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await appengineClient.getApplication(request);
    console.log(response);
  }

  getApplication();
  // [END appengine_v1_generated_Applications_GetApplication_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
