import { useState, type ChangeEvent } from "react";

interface User {
  firstname: string;
  email: string;
  rating: number;
  feedback: string;
}
const inititalState = {
  firstname: "",
  email: "",
  rating: 1,
  feedback: "",
};
const FeedbakcForm: React.FC = () => {
  const [formData, setFormData] = useState<User>(inititalState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <>
      <form action="">
        <label htmlFor="">Name</label>
        <input
          name="firstname"
          type="text"
          placeholder="enter the name"
          required
          id="name_id"
          value={formData.firstname}
          onChange={handleChange}
        />
        <label htmlFor="">Email</label>
        <input
          name="email"
          type="email"
          placeholder="enter the email"
          required
          id="email_id"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="">Rating</label>
        <input
          name="rating"
          type="number"
          required
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleChange}
        />
        <label htmlFor="">Feedback</label>
        <textarea
          name="feedback"
          id="feedback"
          rows={5}
          cols={10}
          placeholder="hey...."
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
      </form>
    </>
  );
};

export default FeedbakcForm;
