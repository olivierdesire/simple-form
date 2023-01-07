import { useState } from "react";

const Form = (props) => {

  const [props.name, setName] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.choice && props.setChoice(false);
      }}
    >
      <p>Create account</p>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="Jean Dupont"
        id="name"
        value={props.name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <label htmlFor="email">Email</label>
      <input type="text" placeholder="jeandupont@lereacteur.io" id="email" />
      <label htmlFor="password">Password</label>
      <input type="text" placeholder="lErEaCtEuR2020" id="password" />
      <label htmlFor="confirm-password">Confirm your password</label>
      <input type="text" placeholder="lErEaCtEuR2020" id="confirm-password" />
      <button>Register</button>
    </form>
  );
};

export default Form;
