import { useState, useEffect } from "react";

import Section from "./Section/Section";
import Feedback from "./Feedback/Feedback";
import Statistics from "./Statistics/Statistics";

export default function AppHook() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(-1);
  const [positive, setPositive] = useState(0);

  useEffect(() => {
    setPositive((good / total) * 100);
  }, [good, total]);

  useEffect(() => {
    setTotal((prevState) => prevState + 1);
  }, [good, neutral, bad]);

  const onClickLike = () => {
    console.log();

    setGood((prevState) => prevState + 1);

    if (total === 0) {
      setPositive(100);
    }
  };

  const onClickNeutral = () => {
    setNeutral((prevState) => prevState + 1);
  };

  const onClickBad = () => {
    setBad((prevState) => prevState + 1);
  };

  return (
    <Section>
      <Feedback
        onClickLike={onClickLike}
        onClickNeutral={onClickNeutral}
        onClickBad={onClickBad}
      />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positive={positive}
      />
    </Section>
  );
}
