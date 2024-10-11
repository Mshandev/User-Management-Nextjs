import { fetchUsersAction } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import SingleUserCard from "@/components/single-user-card";

async function Home() {
  const getListOfUsers = await fetchUsersAction();

  console.log(getListOfUsers);
  return (
    <div className="p-10 max-w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-[20px]">
        <h1 className="text-2xl font-bold">User Management</h1>
        <AddNewUser />
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {getListOfUsers &&
        getListOfUsers.data &&
        getListOfUsers.data.length > 0 ? (
          getListOfUsers.data.map((userItem) => (
            <SingleUserCard user={userItem} key={userItem._id} />
          ))
        ) : (
          <h3>No users found! Please create one</h3>
        )}
      </div>
    </div>
  );
}

export default Home;
