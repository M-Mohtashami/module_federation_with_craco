const tasksReducers = {
  counter2: await import('tasks/counter2').then((module) => module.default),
  tasks: await import('tasks/tasksReducer').then((module) => module.default),
};

export default tasksReducers;
