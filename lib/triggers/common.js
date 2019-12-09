const organizationsExist = require("./organizationsExist");

const inputFields = [
  {
    dynamic: `${organizationsExist.key}.id.name`,
    key: "organizationId",
    label: "Filter events by organization",
    list: false,
    required: true
  }
];

const perform = afterPerform => (_, bundle) => {
  let result = [bundle.cleanedRequest.data.object];
  result = afterPerform ? afterPerform(result) : result;
  return result;
};

const performSubscribe = events => async (z, bundle) => {
  const { organizationId } = bundle.inputData;
  const response = await z.request({
    url: `https://api.goabstract.com/organizations/${organizationId}/webhooks/subscribe`,
    method: "POST",
    body: {
      subscription: {
        events,
        organizationId,
        url: bundle.targetUrl
      }
    }
  });

  response.throwForStatus();
  return z.JSON.parse(response.content);
};

const performUnsubscribe = async (z, bundle) => {
  const { organizationId } = bundle.inputData;
  const response = await z.request({
    url: `https://api.goabstract.com/organizations/${organizationId}/webhooks/unsubscribe`,
    method: "DELETE",
    body: {
      id: bundle.subscribeData.id,
      organizationId
    }
  });

  response.throwForStatus();
  return z.JSON.parse(response.content);
};

const getConfig = options => {
  return {
    operation: {
      inputFields,
      perform: perform(options.afterPerform),
      performSubscribe: performSubscribe(options.events),
      performUnsubscribe,
      type: "hook"
    }
  };
};

module.exports = { getConfig };
