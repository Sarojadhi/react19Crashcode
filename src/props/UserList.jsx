import data from '../Data/Data.json';
import UserCard from './UserCard';

const UserList = () => {
  return (
      <div className="m-4 p-5 flex flex-col items-center bg-gray-200 py-8">
      <h2 className="text-2xl font-bold mb-6">User List Component</h2>
      <div className="flex flex-col items-center space-y-4">
        {data.user.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
