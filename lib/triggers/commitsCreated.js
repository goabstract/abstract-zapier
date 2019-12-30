const { getConfig } = require("./common");

const outputFields = [
  { key: "branch__createdAt", label: "branch.createdAt" },
  { key: "branch__description", label: "branch.description" },
  { key: "branch__divergedFromBranchId", label: "branch.divergedFromBranchId" },
  { key: "branch__head", label: "branch.head" },
  { key: "branch__id", label: "branch.id" },
  { key: "branch__mergeSha", label: "branch.mergeSha" },
  { key: "branch__mergedIntoBranchId", label: "branch.mergedIntoBranchId" },
  { key: "branch__name", label: "branch.name" },
  { key: "branch__objectType", label: "branch.objectType" },
  { key: "branch__parent", label: "branch.parent" },
  { key: "branch__projectId", label: "branch.projectId" },
  { key: "branch__startedAtSha", label: "branch.startedAtSha" },
  { key: "branch__status", label: "branch.status" },
  { key: "branch__updatedAt", label: "branch.updatedAt" },
  { key: "branch__user__avatarUrl", label: "branch.user.avatarUrl" },
  { key: "branch__user__createdAt", label: "branch.user.createdAt" },
  { key: "branch__user__id", label: "branch.user.id" },
  { key: "branch__user__name", label: "branch.user.name" },
  { key: "branch__user__objectType", label: "branch.user.objectType" },
  { key: "branch__user__updatedAt", label: "branch.user.updatedAt" },
  { key: "branch__user__username", label: "branch.user.username" },
  { key: "commits[]description", label: "commits[i].description" },
  {
    key: "commits[]destinationBranchId",
    label: "commits[i].destinationBranchId"
  },
  {
    key: "commits[]destinationBranchName",
    label: "commits[i].destinationBranchName"
  },
  { key: "commits[]fileIds", label: "commits[i].fileIds" },
  { key: "commits[]objectType", label: "commits[i].objectType" },
  { key: "commits[]parents", label: "commits[i].parents" },
  { key: "commits[]sha", label: "commits[i].sha" },
  { key: "commits[]sourceBranchId", label: "commits[i].sourceBranchId" },
  { key: "commits[]sourceBranchName", label: "commits[i].sourceBranchName" },
  { key: "commits[]time", label: "commits[i].time" },
  { key: "commits[]title", label: "commits[i].title" },
  { key: "commits[]type", label: "commits[i].type" },
  { key: "commits[]userEmail", label: "commits[i].userEmail" },
  { key: "commits[]userId", label: "commits[i].userId" },
  { key: "commits[]userName", label: "commits[i].userName" },
  { key: "objectType" }
];

const sample = {
  branch: {
    createdAt: "2019-12-08T17:41:29Z",
    description: "",
    divergedFromBranchId: "",
    head: "5772a87b516d2002392c9c5f9c173aedca795464",
    id: "f2ebd479-3c3e-4cdc-8b8b-82e1a59baf02",
    mergeSha: "",
    mergedIntoBranchId: "",
    name: "test-branch",
    objectType: "branch",
    parent: "master",
    projectId: "003a1ae0-a4b3-11e9-807c-a35b74e69da5",
    startedAtSha: "a23af8045784c10e9cf66602a5bcdb7605ca117b",
    status: "wip",
    updatedAt: "2019-12-09T01:34:09Z",
    user: {
      avatarUrl:
        "https://avatars.goabstract.com/avatars/4010bed7-9ada-4eb4-9d9a-09c8b095d0a2.",
      createdAt: "2018-11-04T18:28:19Z",
      id: "e5954a04-26ea-4600-a41b-1f74350be974",
      name: "Test User",
      objectType: "user",
      updatedAt: "2019-06-17T16:12:47Z",
      username: "test-user"
    }
  },
  commits: [
    {
      description: "",
      destinationBranchId: "",
      destinationBranchName: "",
      fileIds: ["E4FAB1E2-0E44-4DB7-9A09-CC245D0158BE"],
      objectType: "commit",
      parents: ["a23af8045784c10e9cf66602a5bcdb7605ca117b"],
      sha: "5772a87b516d2002392c9c5f9c173aedca795464",
      sourceBranchId: "",
      sourceBranchName: "",
      time: "2019-12-09T01:34:09.000Z",
      title: 'Upgraded "Blog Gallery" to Sketch 60',
      type: "FILE_UPGRADED",
      userEmail: "e5954a04-26ea-4600-a41b-1f74350be974@users.abstractapp.com",
      userId: "e5954a04-26ea-4600-a41b-1f74350be974",
      userName: "Test User"
    }
  ],
  objectType: "commits"
};

const commonConfig = getConfig({
  events: ["commits.created"]
});

module.exports = {
  display: {
    description: "Triggers when new commits is created.",
    hidden: false,
    important: true,
    label: "New Commits"
  },
  key: "commitsCreated",
  noun: "Commit",
  operation: {
    ...commonConfig.operation,
    outputFields,
    performList: () => [sample],
    sample
  }
};
