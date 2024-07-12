import { useFetchUsersQuery, useAddUserMutation } from '../../store';
import Skeleton from '../common/Skeleton';
import Button from '../common/Button';
import UserDetails from './UserDetails';

function UsersList() {
  const { data, error, isFetching } = useFetchUsersQuery();
  const [addUser, results] = useAddUserMutation();

  const handleAddUser = () => {
    addUser();
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div>Error loading users.</div>;
  } else {
    content = data.map((user) => {
      return <UserDetails className="bg-gray-200 text-lg" key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Project Manager List</h3>
        <Button className="primary rounded outline" loading={results.isLoading} onClick={handleAddUser}>
          + Add User
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default UsersList;
