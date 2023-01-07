const Form = (props) => {
  return (
    <form>
      <p>Create account</p>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="Jean Dupont"
        id="name"
        value={props.value}
      />
      <label htmlFor="email">Email</label>
      <input type="text" placeholder="jeandupont@lereacteur.io" id="email" />
      <label htmlFor="password">Password</label>
      <input type="text" placeholder="lErEaCtEuR2020" id="password" />
      <label htmlFor="confirm-password">Confirm your password</label>
      <input type="text" placeholder="lErEaCtEuR2020" id="confirm-password" />
      <button
        onClick={() => {
          props.choice ? (props.setChoice = false) : (props.setChoice = true);
        }}
      >
        Register
      </button>
    </form>
  );
};

export default Form;
