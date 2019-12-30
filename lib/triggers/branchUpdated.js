const { getConfig } = require("./common");

const outputFields = [
  { key: "createdAt" },
  { key: "description" },
  { key: "divergedFromBranchId" },
  { key: "head" },
  { key: "id" },
  { key: "mergeSha" },
  { key: "mergedIntoBranchId" },
  { key: "name" },
  { key: "parent" },
  { key: "projectId" },
  { key: "startedAtSha" },
  { key: "status" },
  { key: "updatedAt" },
  { key: "user__avatarUrl", label: "user.avatarUrl" },
  { key: "user__createdAt", label: "user.createdAt" },
  { key: "user__id", label: "user.id" },
  { key: "user__name", label: "user.name" },
  { key: "user__primaryEmailId", label: "user.primaryEmailId" },
  { key: "user__updatedAt", label: "user.updatedAt" },
  { key: "user__username", label: "user.username" }
];

const sample = {
  createdAt: "2019-10-29T17:59:30.000Z",
  description: "A test description",
  divergedFromBranchId: "",
  head: "201f5c4ceaf95a1589efa55e2b1a372a94d42aee",
  id: "71547de2-6d7a-437e-89ae-7aec672c2c2b",
  mergeSha: "",
  mergedIntoBranchId: "",
  name: "test-branch",
  objectType: "branch",
  parent: "master",
  projectId: "003a1ae0-a4b3-11e9-807c-a35b74e69da5",
  startedAtSha: "a23af8045784c10e9cf66602a5bcdb7605ca117b",
  status: "active",
  updatedAt: "2019-11-01T17:31:20.000Z",
  user: {
    avatarUrl:
      "https://avatars.goabstract.com/avatars/4010bed7-9ada-4eb4-9d9a-09c8b095d0a2",
    createdAt: "2018-11-04T18:28:19.027Z",
    id: "e5954a04-26ea-4600-a41b-1f74350be974",
    name: "Test User",
    primaryEmailId: "f649461e-2f6c-4de1-8f72-55f81f068ee5",
    updatedAt: "2019-06-17T16:12:47.915Z",
    username: "test-user"
  }
};

const commonConfig = getConfig({
  events: ["branch.updated"]
});

module.exports = {
  display: {
    description: "Triggers when a branch is updated.",
    hidden: false,
    label: "Updated Branch"
  },
  key: "branchUpdated",
  noun: "Branch",
  operation: {
    ...commonConfig.operation,
    outputFields,
    performList: () => [sample],
    sample
  }
};
