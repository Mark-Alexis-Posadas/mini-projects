import React from "react";

const SimpleForm = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`First Name: ${formData.firstName}\nLast Name: ${formData.lastName}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Simple Form</h1>
      <input
        id="firstName"
        name="firstName"
        type="text"
        className="form-control mb-3"
        placeholder="first name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        id="lastName"
        name="lastName"
        type="text"
        className="form-control mb-3"
        placeholder="last name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <button className="w-100 btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default SimpleForm;
