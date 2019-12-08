const addApiKeyToHeader = (request, _, bundle) => {
  request.headers["Content-Type"] = "application/json";
  request.headers["Accept"] = "application/json";
  request.headers["Abstract-Api-Version"] = "17";
  request.headers.Authorization = `Bearer ${bundle.authData.api_token}`;
  return request;
};

const config = {
  type: "custom",
  test: {
    url: "https://api.goabstract.com/me"
  },
  fields: [
    {
      key: "api_token",
      label: "Abstract API token",
      type: "string",
      required: true,
      helpText: "Create a token at https://app.abstract.com/account/tokens."
    }
  ],
  connectionLabel: (_, bundle) => `username: ${bundle.inputData.user.username}`
};

module.exports = {
  addApiKeyToHeader,
  config
};
