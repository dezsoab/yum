import React, { useRef, useContext } from "react";
import UserContext from "../../store/UserContext";

const RegisterForm = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const pets = useRef();

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
    const data = await res.json();
    if (res.status === 201) {
      setUser(data);
    }
  };

  return (
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
  );
};

export default RegisterForm;
