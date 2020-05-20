import React, { useState } from "react"
import ApiManager from "../../modules/ApiManager";

const Register = props => {
  const [formData, setFormData] = useState(
    { 
      username: "", 
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      familyMembers: 0
    }
  );

  const handleFieldChange = (evt) => {
    const stateToChange = { ...formData };
    stateToChange[evt.target.id] = evt.target.value;
    setFormData(stateToChange);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const user = {
      "username": formData.username,
      "email": formData.email,
      "password": formData.password,
      "first_name": formData.firstName,
      "last_name": formData.lastName,
      "family_members": formData.familyMembers
    }

    ApiManager.post("register", user)
      .then(resp => {
        if("token" in resp) {
          sessionStorage.setItem("kennywood-token", resp.token)
        }
        props.history.push("/");
      })
  }

  return (
    <form onSubmit={handleRegister}>
      <fieldset>
        <h3>Please Register Account</h3>
        <div className="formgrid">
          
          <div>
            <label htmlFor="inputUsername">User Name</label>
            <input 
              onChange={handleFieldChange} 
              type="text"
              id="username"
              placeholder="Username"
              required="" autoFocus="" />
          </div>
          
          <div>
            <label htmlFor="inputEmail">Email</label>
            <input 
              onChange={handleFieldChange} 
              type="email"
              id="email"
              placeholder="Email"
              required="" />
          </div>

          <div>
            <label htmlFor="inputPassword">Password</label>
            <input 
              onChange={handleFieldChange} 
              type="password"
              id="password"
              placeholder="Password"
              required="" />
          </div>

          <div>
            <label htmlFor="inputFirstName">First Name</label>
            <input 
              onChange={handleFieldChange} 
              type="text"
              id="firstName"
              placeholder="First Name"
              required="" />
          </div>

          <div>
            <label htmlFor="inputLastName">Last Name</label>
            <input 
              onChange={handleFieldChange} 
              type="text"
              id="lastName"
              placeholder="Last Name"
              required="" />
          </div>

          <div>
            <label htmlFor="inputFamilyMembers">Family Members</label>
            <input onChange={handleFieldChange} 
              type="number"
              id="familyMembers"
              placeholder="Family Members"
              required="" />
          </div>

        </div>
        <button type="submit">Register</button>
      </fieldset>
    </form>
  );
};

export default Register;