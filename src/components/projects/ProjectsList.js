import { useFetchProjectsQuery, useAddProjectMutation } from '../../store';
import Skeleton from '../common/Skeleton';
import Button from '../common/Button';
import ProjectDetails from './ProjectDetails';

function ProjectsList({ user }) {
  const { data, error, isFetching } = useFetchProjectsQuery(user);
  const [addProject, results] = useAddProjectMutation();

  const handleAddProject = () => {
    addProject(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={5} />;
  } else if (error) {
    content = <div>Error loading projects.</div>;
  } else {
    content = data.map((project) => {
      return <ProjectDetails key={project.id} project={project} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Projects (PM: {user.name})</h3>
        <Button className="secondary rounded outline" loading={results.isLoading} onClick={handleAddProject}>
          + Add Project
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default ProjectsList;
