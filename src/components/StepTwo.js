const StepTwo = (props) => {
  return (
    <div>
      <p>Results</p>
      <div>
        <p>Name : {props.name}</p>
      </div>
      <button
        onClick={() => {
          props.choice === false && props.setChoice(true);
        }}
      >
        Edit your profil
      </button>
    </div>
  );
};

export default StepTwo;
