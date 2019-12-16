export const ALL_TASK = {
  data: {
    todos: [
      {
        taskId: '111111111',
        title: 'Task demo 1',
        description: 'Description demo 4',
        updatedAt: 1571029076067,
        startDate: 1571029076067,
        startTime: 1571029076067,
        endTime: 1571029076067,
        status: 'TO_DO',
        bookmark: false,
        isComplete: false,
        tags: [
          {
            tagId: 4,
            color: 'yellow',
            title: 'Yellow',
            isSelect: true
          },
          {
            tagId: 5,
            color: 'orange',
            title: 'Orange',
            isSelect: true
          }
        ],
      },
      {
        taskId: '222222222',
        title: 'Task demo 2',
        description: 'Description demo 4',
        updatedAt: 1571029076067,
        startDate: 1571029076067,
        startTime: 1571029076067,
        endTime: 1571029076067,
        status: 'IN_PROGRESS',
        bookmark: false,
        isComplete: false,
        isPinned: true,
        tags: [
          {
            tagId: 1,
            color: 'red',
            title: 'Red',
            isSelect: true
          },
          {
            tagId: 2,
            color: 'blue',
            title: 'Blue',
            isSelect: true
          }
        ],
      },
      {
        taskId: '333333333',
        title: 'Task demo 3',
        description: 'Description demo 4',
        updatedAt: 1571029076067,
        startDate: 1571029076067,
        startTime: 1571029076067,
        endTime: 1571029076067,
        status: 'COMPLETED',
        bookmark: false,
        isComplete: false,
        tags: [
          {
            tagId: 2,
            color: 'blue',
            title: 'Blue',
            isSelect: true
          },
          {
            tagId: 3,
            color: 'green',
            title: 'Green',
            isSelect: true
          }
        ],
      },
      {
        taskId: '4444444444',
        title: 'Task demo 4',
        description: 'Description demo 4',
        updatedAt: 1571029076067,
        startTime: 1571029076067,
        startDate: 1571029076067,
        endTime: 1571029076067,
        status: 'TO_DO',
        bookmark: true,
        isComplete: false,
        tags: [
          {
            tagId: 3,
            color: 'green',
            title: 'Green',
            isSelect: true
          },
          {
            tagId: 4,
            color: 'yellow',
            title: 'Yellow',
            isSelect: true
          }
        ],
      },
    ],
  }
};

export const TAGS = [
  {
    tagId: 1,
    color: 'red',
    title: 'Red',
    isSelect: false
  },
  {
    tagId: 2,
    color: 'blue',
    title: 'Blue',
    isSelect: false
  },
  {
    tagId: 3,
    color: 'green',
    title: 'Green',
    isSelect: false
  },
  {
    tagId: 4,
    color: 'yellow',
    title: 'Yellow',
    isSelect: false
  },
  {
    tagId: 5,
    color: 'orange',
    title: 'Orange',
    isSelect: false
  },
  {
    tagId: 6,
    color: 'pink',
    title: 'Pink',
    isSelect: false
  },
];