const zapier = require("zapier-platform-core");
const AbstractZap = require("../index");
const branchCreated = require("../lib/triggers/branchCreated");
const branchStatusUpdated = require("../lib/triggers/branchStatusUpdated");
const branchUpdated = require("../lib/triggers/branchUpdated");
const commentCreated = require("../lib/triggers/commentCreated");
const commentDeleted = require("../lib/triggers/commentDeleted");
const commentUpdated = require("../lib/triggers/commentUpdated");
const commitsCreated = require("../lib/triggers/commitsCreated");
const projectCreated = require("../lib/triggers/projectCreated");
const projectDeleted = require("../lib/triggers/projectDeleted");
const projectUpdated = require("../lib/triggers/projectUpdated");

const appTester = zapier.createAppTester(AbstractZap);

const testTrigger = trigger => {
  return test(trigger.key, async () => {
    const bundle = {
      cleanedRequest: {
        data: {
          object: trigger.operation.sample
        }
      }
    };

    const results = await appTester(trigger.operation.perform, bundle);
    const returnedEntity = results[0];
    const cachedEntity = bundle.cleanedRequest.data.object;

    expect(results.length).toBe(1);
    expect(returnedEntity).toEqual(cachedEntity);
  });
};

describe("AbstractZap", () => {
  testTrigger(branchCreated);
  testTrigger(branchStatusUpdated);
  testTrigger(branchUpdated);
  testTrigger(commentCreated);
  testTrigger(commentDeleted);
  testTrigger(commentUpdated);
  testTrigger(commitsCreated);
  testTrigger(projectCreated);
  testTrigger(projectDeleted);
  testTrigger(projectUpdated);
});
