const { version: platformVersion } = require("zapier-platform-core");
const authentication = require("./lib/authentication");
const branchCreated = require("./lib/triggers/branchCreated");
const branchStatusUpdated = require("./lib/triggers/branchStatusUpdated");
const branchUpdated = require("./lib/triggers/branchUpdated");
const commentCreated = require("./lib/triggers/commentCreated");
const commentDeleted = require("./lib/triggers/commentDeleted");
const commentUpdated = require("./lib/triggers/commentUpdated");
const commitsCreated = require("./lib/triggers/commitsCreated");
const organizationsExist = require("./lib/triggers/organizationsExist");
const projectCreated = require("./lib/triggers/projectCreated");
const projectDeleted = require("./lib/triggers/projectDeleted");
const projectUpdated = require("./lib/triggers/projectUpdated");
const { version } = require("./package.json");

const AbstractZap = {
  platformVersion,
  version,

  authentication: authentication.config,
  beforeRequest: [authentication.addApiKeyToHeader],

  triggers: {
    [branchCreated.key]: branchCreated,
    [branchStatusUpdated.key]: branchStatusUpdated,
    [branchUpdated.key]: branchUpdated,
    [commentCreated.key]: commentCreated,
    [commentDeleted.key]: commentDeleted,
    [commentUpdated.key]: commentUpdated,
    [commitsCreated.key]: commitsCreated,
    [organizationsExist.key]: organizationsExist,
    [projectCreated.key]: projectCreated,
    [projectDeleted.key]: projectDeleted,
    [projectUpdated.key]: projectUpdated
  }
};

module.exports = AbstractZap;
