import { GoTrashcan } from 'react-icons/go';
import { useRemoveProjectMutation } from '../../store';
import Button from '../common/Button';
import ExpandablePanel from '../common/ExpandablePanel';
import TasksList from '../tasks/TasksList';

function ProjectDetails({ project }) {
  const [removeProject, results] = useRemoveProjectMutation();

  const handleRemoveProject = () => {
    removeProject(project);
  };

  const header = (
    <>
      <Button
        className="mr-2 hover:bg-blue-200 rounded"
        loading={results.isLoading}
        onClick={handleRemoveProject}
      >
        <GoTrashcan />
      </Button>
      {project.name}
    </>
  );

  return (
    <ExpandablePanel className="bg-green-100 border-green-300 rounded" key={project.id} header={header}>
      <TasksList project={project} />
    </ExpandablePanel>
  );
}

export default ProjectDetails;
