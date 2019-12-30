const { getConfig } = require("./common");

const outputFields = [
  { key: "about" },
  { key: "archivedAt" },
  { key: "color" },
  { key: "createdAt" },
  { key: "createdByUser__avatarUrl", label: "createdByUser.avatarUrl" },
  { key: "createdByUser__createdAt", label: "createdByUser.createdAt" },
  { key: "createdByUser__id", label: "createdByUser.id" },
  { key: "createdByUser__name", label: "createdByUser.name" },
  {
    key: "createdByUser__primaryEmailId",
    label: "createdByUser.primaryEmailId"
  },
  { key: "createdByUser__updatedAt", label: "createdByUser.updatedAt" },
  { key: "createdByUser__username", label: "createdByUser.username" },
  { key: "deletedAt" },
  { key: "description" },
  { key: "firstPushedAt" },
  { key: "id" },
  { key: "name" },
  { key: "objectType" },
  { key: "organizationId" },
  { key: "pushedAt" },
  { key: "sectionId" },
  { key: "updatedAt" },
  { key: "visibility" }
];

const sample = {
  about: "Test project description",
  archivedAt: "",
  color: "#B8BDBF",
  createdAt: "2019-12-09T02:14:39.181Z",
  createdByUser: {
    avatarUrl:
      "https://avatars.goabstract.com/avatars/4010bed7-9ada-4eb4-9d9a-09c8b095d0a2",
    createdAt: "2018-11-04T18:28:19.027Z",
    id: "e5954a04-26ea-4600-a41b-1f74350be974",
    name: "Test User",
    primaryEmailId: "f649461e-2f6c-4de1-8f72-55f81f068ee5",
    updatedAt: "2019-06-17T16:12:47.915Z",
    username: "test-user"
  },
  deletedAt: "2019-06-17T16:12:47.915Z",
  description: "Test project description",
  firstPushedAt: "2019-12-09T02:14:42.969Z",
  id: "ac304206-ba45-4621-89f8-b43e7d732c3a",
  name: "Test Project",
  organizationId: "4ed01dff-4bc7-47cd-8b51-9ea3ec9e5de4",
  pushedAt: "2019-12-09T02:14:42.969Z",
  sectionId: "",
  objectType: "project",
  updatedAt: "2019-12-09T02:14:43.079Z",
  visibility: "organization"
};

const commonConfig = getConfig({
  events: ["project.deleted"],
  afterPerform: result => {
    const deletedAt = new Date(result[0].deletedAt);
    result[0].deletedAt = deletedAt.toISOString();
    return result;
  }
});

module.exports = {
  display: {
    description: "Triggers when a new project is deleted.",
    hidden: false,
    label: "Deleted Project"
  },
  key: "projectDeleted",
  noun: "Project",
  operation: {
    ...commonConfig.operation,
    outputFields,
    performList: () => [sample],
    sample
  }
};
