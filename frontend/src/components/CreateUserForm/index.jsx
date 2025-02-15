import { useState } from "react";
import FormInputs from "../formInputs";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import FormButton from "../formButton";
import axios from 'axios'
const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });

  console.log(formData);

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form data:", formData);
    try {
      const response = await axios.post('http://localhost:5000/api/v1/admin/staff/addStaff',formData)
         console.log('Staff added successfully')
         console.log('staff created',response.data)
    } catch (error) {
      console.error("Error adding staff:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormInputs
          type="text"
          name="firstName"
          id="1"
          placeholder="First Name"
          iconUrl={<LuUser2 />}
          onChange={handleChange}
        />
        <FormInputs
          type="text"
          name="lastName"
          id="2"
          placeholder="Last Name"
          iconUrl={<LuUser2 />}
          onChange={handleChange}
        />
        <FormInputs
          type="email"
          name="email"
          id="3"
          placeholder="User Email"
          iconUrl={<MdOutlineMail />}
          onChange={handleChange}
        />
        <FormInputs
          type="password"
          name="password"
          id="4"
          placeholder="User Password"
          iconUrl={<CiLock />}
          iconAlt="user password"
          max="16"
          onChange={handleChange}
        />
        <FormInputs
          type="text"
          name="role"
          id="6"
          placeholder="Role"
          iconUrl={<LuUser2 />}
          onChange={handleChange}
        />
        <FormButton button="Add New Staff" />
      </form>
    </>
  );
};

export default CreateUserForm;
