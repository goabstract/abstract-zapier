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

const perform = (_, bundle) => {
  return [bundle.cleanedRequest.data.object];
};

const performSubscribe = async (z, bundle) => {
  const { organizationId } = bundle.inputData;
  const response = await z.request({
    url: `https://api.goabstract.com/organizations/${organizationId}/webhooks/subscribe`,
    method: "POST",
    body: {
      subscription: {
        events: ["branch.created"],
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

module.exports = {
  operation: {
    inputFields,
    perform,
    performSubscribe,
    performUnsubscribe,
    type: "hook"
  }
};
