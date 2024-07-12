import { GoTrashcan } from 'react-icons/go';
import { useRemoveUserMutation } from '../../store';
import Button from '../common/Button';
import ExpandablePanel from '../common/ExpandablePanel';
import ProjectsList from '../projects/ProjectsList';

function UserDetails({ user }) {
  const [removeUser, results] = useRemoveUserMutation();

  const handleRemoveUser = () => {
    removeUser(user);
  };

  const header = (
    <> 
      <Button className="mr-2 hover:bg-gray-200 rounded"
        loading={results.isLoading}
        onClick={handleRemoveUser}
      >
        <GoTrashcan />
      </Button>
      {user.name}      
    </>
  );

  return (
    <ExpandablePanel className="bg-blue-100 border-blue-1" key={user.id} header={header}>
      <ProjectsList user={user} />
    </ExpandablePanel>
  );
}

export default UserDetails;
