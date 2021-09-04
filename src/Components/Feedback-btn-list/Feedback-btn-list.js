import React from "react";
import PropTypes from "prop-types";

import s from "./Feedback-btn-list.module.css";

const FeedbackBtnList = ({ onBtnLike, onBtnNeutral, onBtnBad }) => {
  return (
    <ul className={s.List}>
      <li className={s.ElemList}>
        <button className={s.BtnList} onClick={onBtnLike}>
          Good
        </button>
      </li>
      <li className={s.ElemList}>
        <button className={s.BtnList} onClick={onBtnNeutral}>
          Neutral
        </button>
      </li>
      <li className={s.ElemList}>
        <button className={s.BtnList} onClick={onBtnBad}>
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackBtnList.propTypes = {
  onClickLike: PropTypes.func,
  onClickNeutral: PropTypes.func,
  onClickBad: PropTypes.func,
};

export default FeedbackBtnList;
