import { GoTrashcan } from 'react-icons/go';
import { useRemoveTaskMutation } from '../../store';

function TaskDetails({ task }) {
  const [removeTask] = useRemoveTaskMutation();

  const handleRemoveTask = () => {
    removeTask(task);
  };

  return (
    <div className="flex items-center m-2 border-gray-900">
      <div className="relative cursor-pointer" onClick={handleRemoveTask}>
        <img className="h-20 w-20" src={task.url} alt="random pic" />
        <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
          <GoTrashcan className="text-3xl" />
        </div>
      </div>
      <div className="ml-4">{task.name}</div>
    </div>
  );
}

export default TaskDetails;
