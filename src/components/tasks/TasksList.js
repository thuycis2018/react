import { useFetchTasksQuery, useAddTaskMutation } from '../../store';
import Button from '../common/Button';
import Skeleton from '../common/Skeleton';
import TaskDetails from './TaskDetails';

function TasksList({ project }) {
  const { data, isFetching, error } = useFetchTasksQuery(project);
  const [addTask, addTaskResults] = useAddTaskMutation();

  const handleAddTask = () => {
    addTask(project);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-8 w-8" times={4} />;
  } else if (error) {
    content = <div>Error fetching tasks...</div>;
  } else {
    content = data.map((task) => {
      return <TaskDetails key={task.id} task={task} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex items-center justify-between">
        <h3 className="text-lg font-bold">Tasks In {project.name}</h3>
        <Button className="secondary rounded outline" loading={addTaskResults.isLoading} onClick={handleAddTask}>
          + Add Task
        </Button>
      </div>
      <div className="mx-8">
        {content}
      </div>
    </div>
  );
}

export default TasksList;
