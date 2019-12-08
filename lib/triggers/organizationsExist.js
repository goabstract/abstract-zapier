const perform = async z => {
  const response = await z.request({
    url: "https://api.goabstract.com/organizations"
  });

  response.throwForStatus();
  return z.JSON.parse(response.content).data;
};

module.exports = {
  display: {
    description: "List all organizations",
    hidden: true,
    label: "Organizations"
  },
  key: "organizationsExist",
  noun: "Organization",
  operation: {
    perform
  }
};
