import React, { useRef, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../store/UserContext";
import OkAlert from "../../popup/OkAlert";
import ErrorAlert from "../../popup/ErrorAlert";

const RegisterForm = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const pets = useRef();
  const navigate = useNavigate();

  const [showOkAlert, setShowOkAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const { setUser } = useContext(UserContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const petNames = pets.current.value.split(",");
    const petsRequestObjects = [];
    petNames.map((pet) => petsRequestObjects.push({ name: pet }));

    const newUser = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      pets: petsRequestObjects,
    };

    const res = await fetch("http://localhost:8080/api/v1/auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (res.status === 201) {
      const data = await res.json();
      setShowOkAlert(true);
      setTimeout(() => {
        setUser(data);
        navigate("/feed");
      }, 1500);
    } else {
      setShowErrorAlert(true);
    }
  };

  return (
    <div>
      {showOkAlert && <OkAlert message="Successfully registered!" />}
      {showErrorAlert && (
        <ErrorAlert
          message="Could not register account! Try again with different username or email!"
          open={showErrorAlert}
          setOpen={setShowErrorAlert}
        />
      )}
      <form onSubmit={onSubmitHandler}>
        <h2>Register</h2>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
          ref={username}
        />

        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          required
          ref={email}
        />

        <label htmlFor="pets">
          <b>Pets name with comma separated (eg.: Molli,Cooper,Keep)</b>
        </label>
        <input
          type="text"
          placeholder="Enter Pets Name"
          name="pets"
          required
          ref={pets}
        />

        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          id="password"
          required
          ref={password}
        />
        <button type="submit">Register now!</button>
      </form>
    </div>
  );
};

export default RegisterForm;
