import { useState, useEffect } from "react";
import Feedback from "./Feedback";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [avg, setAvg] = useState(0);
  const [positive, setPositive] = useState(0);

  const upGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  };
  const upNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };
  const upBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  useEffect(() => {
    if (all > 0) {
      setAvg((good - bad) / all);
    }
  }, [good, bad, all]);
  useEffect(() => {
    if (all > 0) {
      setPositive((good / all) * 100);
    }
  }, [good, bad, all]);

  return (
    <div>
      <Feedback
        goodState={good}
        neutralState={neutral}
        badState={bad}
        allState={all}
        avgState={avg}
        positiveState={positive}
        upGood={upGood}
        upBad={upBad}
        upNeutral={upNeutral}
      />
    </div>
  );
};

export default App;
