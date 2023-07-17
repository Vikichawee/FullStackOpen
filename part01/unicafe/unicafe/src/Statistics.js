const Statistics = (props) => {
  return (
    <>
      <h1>Statistics</h1>
      <p>good {props.goodCounter}</p>
      <p>neutral {props.neutralCounter}</p>
      <p>bad {props.badCounter}</p>
    </>
  );
};

export default Statistics;
