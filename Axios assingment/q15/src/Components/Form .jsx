import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Form = ( props) => {
    console.log('props', props)
  const [formdata, setData] = useState({
    name: "",
    email: "",
  });
 
   const {selectedUser, refreshUser}=props;
//    we use useEffect to track the side Change.
  useEffect(()=>{
    if (selectedUser) {
        setData({
          name: selectedUser.name || "",
          email: selectedUser.email || "",
        });
      }

  },[selectedUser]);

  const addData = async () => {
    try {
      let Url =
        "https://selfpractice-20f1f-default-rtdb.asia-southeast1.firebasedatabase.app/Users.json";
      const response = await axios.post(Url, formdata);
      console.log("formData added to fireabse", formdata);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedUser?.id) {
        // User is selected  means to edit and sending patch request.
        await axios.patch(
          `https://selfpractice-20f1f-default-rtdb.asia-southeast1.firebasedatabase.app/Users/${selectedUser.id}.json`,
          formdata
        );
        console.log("User updated");
      } else {
        // No user selected => it's a new user
        await addData();
      }
    
      setData({ name: "", email: "" });     
      props.setSelecteduser(null);
      refreshUser();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formdata.name}
            required
          />
        </label>
        <label>
          Enter the email:
          <input
            name="email"
            type="email"
            onChange={handleChange}
            value={formdata.email}
            required
          />
        </label>
        <button type="submit">{selectedUser ? "Update" : "Submit"}</button>
      </form>
    </>
  );
};

export default Form;
