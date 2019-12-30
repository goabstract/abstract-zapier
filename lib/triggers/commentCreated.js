const { getConfig } = require("./common");

const commitFields = [
  { key: "annotation" },
  { key: "body" },
  { key: "branchId" },
  { key: "branchName" },
  { key: "commenter__avatarUrl", label: "comment.qvatarUrl" },
  { key: "commenter__createdAt", label: "comment.createdAt" },
  { key: "commenter__id", label: "comment.id" },
  { key: "commenter__name", label: "comment.name" },
  { key: "commenter__objectType", label: "comment.objectType" },
  { key: "commenter__updatedAt", label: "comment.updatedAt" },
  { key: "commenter__username", label: "comment.username" },
  { key: "commitSha" },
  { key: "createdAt" },
  { key: "deletedAt" },
  { key: "editedAt" },
  { key: "fileId" },
  { key: "fileName" },
  { key: "file_type" },
  { key: "id" },
  { key: "layerId" },
  { key: "layerName" },
  { key: "objectType" },
  { key: "pageId" },
  { key: "page_name" },
  { key: "projectId" },
  { key: "publishedAt" },
  { key: "replyIds[]" },
  { key: "reviewId" },
  { key: "reviewStatus" },
  { key: "updatedAt" }
];

const outputFields = [
  ...commitFields,
  ...commitFields.map(field => ({
    ...field,
    key: `parent__${field.key}`
  }))
];

const commit = {
  annotation: "",
  body: "test comment",
  branchId: "master",
  branchName: "Master",
  commenter: {
    avatarUrl:
      "https://avatars.goabstract.com/avatars/4010bed7-9ada-4eb4-9d9a-09c8b095d0a2.",
    createdAt: "2018-11-04T18:28:19Z",
    id: "e5954a04-26ea-4600-a41b-1f74350be974",
    name: "Test User",
    objectType: "user",
    updatedAt: "2019-06-17T16:12:47Z",
    username: "test-user"
  },
  commitSha: "",
  createdAt: "2019-12-09T00:09:36Z",
  deletedAt: "",
  editedAt: "",
  fileId: "",
  fileName: "",
  file_type: "",
  id: "ab6341b0-8527-47d3-a0cc-5f526eb9c0bc",
  layerId: "",
  layerName: "",
  objectType: "comment",
  pageId: "",
  page_name: "",
  projectId: "003a1ae0-a4b3-11e9-807c-a35b74e69da5",
  publishedAt: "2019-12-09T00:09:36Z",
  replyIds: ["003a1ae0-a4b3-11e9-807c-a35b74e69da"],
  reviewId: "",
  reviewStatus: "",
  updatedAt: "2019-12-09T00:09:36Z"
};

const sample = {
  ...commit,
  parent: commit
};

const commonConfig = getConfig({
  events: ["comment.created"]
});

module.exports = {
  display: {
    description: "Triggers when a new comment is created.",
    hidden: false,
    label: "New Comment"
  },
  key: "commentCreated",
  noun: "Comment",
  operation: {
    ...commonConfig.operation,
    outputFields,
    performList: () => [sample],
    sample
  }
};
