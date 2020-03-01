export const getByTaskId = taskId => state => state.home.tasks.tasks[taskId];
export const getDailyTasksSelect = state => state.home.tasks.dailyTasks;