import axios from "axios";
import { useState } from "react";
import Form from "./Form ";

export const UserList = () => {
  const [users, setUser] = useState([]);
  const [selectedUser, setSelecteduser] = useState(null);

  const getUsers = async () => {
    let response = await axios.get(
      "https://selfpractice-20f1f-default-rtdb.asia-southeast1.firebasedatabase.app/Users.json"
    );
    let userArray = Object.entries(response.data).map(([id, user]) => ({
      id,
      ...user,
    }));
    console.log(userArray);
    setUser(userArray);
  };

  const handleEdit = async (user) => {
    setSelecteduser(user);
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(
        `https://selfpractice-20f1f-default-rtdb.asia-southeast1.firebasedatabase.app/Users/${userId}.json`
      );
      console.log("User deleted successfully!");
      setUser((prevUsers) => prevUsers.filter((user) => user.id !== userId));

    } catch (error) {
      console.error("Error deleting user", error);
    }
  };
  return (
    <>
      {
        <Form selectedUser={selectedUser} refreshUser={getUsers} setSelecteduser={setSelecteduser}></Form>
      }

      <button onClick={getUsers}>Get Users</button>
      {users?.map((user) => (
        <div key={user.id}>
          <li>name:{user.name}</li>
          <li>email:{user.email}</li>
          <button onClick={() => handleEdit(user)}>Edit</button>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};
export default UserList;
