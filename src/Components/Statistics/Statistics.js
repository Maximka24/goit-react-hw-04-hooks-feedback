import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div>
      <h2 className={s.Title}>Statistics</h2>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <ul className={s.List}>
          <li className={s.ElemList}>Good: {good}</li>
          <li className={s.ElemList}>Neutral: {neutral}</li>
          <li className={s.ElemList}>Bad: {bad}</li>
          <li className={s.ElemList}>Total: {total}</li>
          <li className={s.ElemList}>Positive feedback: {positive}%</li>
        </ul>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};

export default Statistics;
