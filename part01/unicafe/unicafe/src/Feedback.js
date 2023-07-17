import Button from "./Button";
import Statistics from "./Statistics";

const Feedback = (props) => {
  const good = "Good";
  const neutral = "Neutral";
  const bad = "Bad";
  return (
    <>
      <h1>give feedback</h1>
      <Button name={good} up={props.upGood} />
      <Button name={neutral} up={props.upNeutral} />
      <Button name={bad} up={props.upBad} />
      <Statistics
        goodCounter={props.goodState}
        badCounter={props.badState}
        neutralCounter={props.neutralState}
      />
    </>
  );
};

export default Feedback;
