const { version: platformVersion } = require("zapier-platform-core");
const authentication = require("./lib/authentication");
const branchCreated = require("./lib/triggers/branchCreated");
const organizationsExist = require("./lib/triggers/organizationsExist");
const { version } = require("./package.json");

const AbstractZap = {
  platformVersion,
  version,

  authentication: authentication.config,
  beforeRequest: [authentication.addApiKeyToHeader],

  triggers: {
    [branchCreated.key]: branchCreated,
    [organizationsExist.key]: organizationsExist
  }
};

module.exports = AbstractZap;
