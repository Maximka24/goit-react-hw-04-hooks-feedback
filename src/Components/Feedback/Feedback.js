import PropTypes from "prop-types";
import FeedbackBtnList from "../Feedback-btn-list/Feedback-btn-list";

import s from "./Feedback.module.css";

const Feedback = ({ onClickLike, onClickNeutral, onClickBad }) => {
  return (
    <div className={s.Container}>
      <h2 className={s.Title}>Please leave feedback</h2>

      <FeedbackBtnList
        onBtnLike={onClickLike}
        onBtnNeutral={onClickNeutral}
        onBtnBad={onClickBad}
      />
    </div>
  );
};

Feedback.propTypes = {
  onClickLike: PropTypes.func.isRequired,
  onClickNeutral: PropTypes.func.isRequired,
  onClickBad: PropTypes.func.isRequired,
};

export default Feedback;
