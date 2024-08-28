import React from "react";
import { FaUser } from "react-icons/fa";
import FormInputs from "../formInputs";
import { MdMeetingRoom } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import FormButton from "../formButton/index";
import { useState } from "react";
import axios from "axios";

const AddPatient = () => {
  const [patient, setPatient] = useState({
    patientName: "",
    patientContact: "",
    patientAttendentName: "",
    patientRoomNumber: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setPatient((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", patient);
    try {
       const response  =  await axios.post('http://localhost:5000/api/v1/admin/patient/addPatient',patient)
       console.log('patient add successfully')
       console.log(response.data)
    } catch (error) {
      console.error("Error adding patient:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormInputs
          type="text"
          id="1"
          name="patientName"
          placeholder="Patient Name"
          iconUrl={<FaUser />}
          onChange={handleChange}
        />
        <FormInputs
          type="number"
          id="3"
          name="patientRoomNumber"
          placeholder="Patient Room Number"
          iconUrl={<MdMeetingRoom />}
          onChange={handleChange}
        />
        <FormInputs
          type="number"
          id="4"
          name="patientContact"
          placeholder="Patient Contact Number"
          iconUrl={<FaPhoneAlt />}
          onChange={handleChange}
        />
        <FormInputs
          type="text"
          id="5"
          name="patientAttendentName"
          placeholder="Patient Attendant Name"
          iconUrl={<FaUser />}
          onChange={handleChange}
        />

        <FormButton button="Add Patient" />
      </form>
    </>
  );
};

export default AddPatient;
