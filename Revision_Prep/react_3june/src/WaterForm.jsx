import { useEffect, useRef, useState } from "react";

const WaterForm = ({ setLogs,logs }) => {
  const ref1 = useRef();
  const [formData, setFormData] = useState({
    amount: "",
    time: "",
    id:new Date(Date.now())
  });

  useEffect(() => {
    ref1.current.focus();
    // ref2.current.focus();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };

  const handleSubmit = (e) => {
        e.preventDefault();

    console.log('setFromdat,',formData)
    setLogs([...logs,formData])
    setFormData({amount:'',time:'',id:''})
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter teh water amount"
          ref={ref1}
          onInput={(e) => handleInput(e)}
          name="amount"
          value={formData.amount}
        />
        <input
          type="datetime-local"
          placeholder="Enter the date"
          onInput={(e) => handleInput(e)}
          name="time"
          value={formData.time}
        />

        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default WaterForm;
