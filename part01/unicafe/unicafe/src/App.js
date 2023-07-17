import { useState } from "react";
import Feedback from "./Feedback";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const upGood = () => {
    setGood(good + 1);
  };
  const upNeutral = () => {
    setNeutral(neutral + 1);
  };
  const upBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Feedback
        goodState={good}
        neutralState={neutral}
        badState={bad}
        upGood={upGood}
        upBad={upBad}
        upNeutral={upNeutral}
      />
    </div>
  );
};

export default App;
