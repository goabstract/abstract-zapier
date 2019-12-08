const zapier = require("zapier-platform-core");
const AbstractZap = require("../index");
const branchCreated = require("../lib/triggers/branchCreated");

const appTester = zapier.createAppTester(AbstractZap);

describe("AbstractZap", () => {
  test("branch.created", async () => {
    const bundle = {
      cleanedRequest: {
        data: {
          object: {
            branch: branchCreated.operation.sample
          }
        }
      }
    };

    const results = await appTester(branchCreated.operation.perform, bundle);
    const returnedEntity = results[0];
    const cachedEntity = bundle.cleanedRequest.data.object;

    expect(results.length).toBe(1);
    expect(returnedEntity.sha).toEqual(cachedEntity.sha);
  });
});
