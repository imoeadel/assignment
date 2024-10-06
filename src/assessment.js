export const tasksOrder = (tasks) => {
  const taskList = {};
  const taskDependencies = {};

  tasks.forEach(({ task }) => {
    taskList[task] = [];
    taskDependencies[task] = 0;
  });

  tasks.forEach(({ task, dependencies }) => {
    dependencies.forEach(dep => {
      taskList[dep].push(task);
      taskDependencies[task]++
    })
  })
  const queue = [];
  for (const task in taskDependencies) {
    if (taskDependencies[task] === 0) {
      queue.push(task);
    }
  }

  const result = []

  while (queue.length > 0) {
    const currentTask = queue.shift()
    result.push(currentTask);
    taskList[currentTask].forEach(nextTask => {
      taskDependencies[nextTask]--;
      if (taskDependencies[nextTask] === 0) {
        queue.push(nextTask)
      }
    })
  }

  return result.length === tasks.length ? result : "Failed!"
}