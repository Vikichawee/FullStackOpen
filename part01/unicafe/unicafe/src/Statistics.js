import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  if (
    props.goodCounter === 0 &&
    props.badCounter === 0 &&
    props.neutralCounter === 0
  ) {
    return <h1>no feedback</h1>;
  }
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.goodCounter} />
          <StatisticLine text="neutral" value={props.neutralCounter} />
          <StatisticLine text="bad" value={props.badCounter} />
          <StatisticLine text="all" value={props.allCounter} />
          <StatisticLine text="average" value={props.avgCounter} />
          <StatisticLine text="positive" value={props.positiveCounter} />
        </tbody>
      </table>
    </>
  );
};

export default Statistics;
