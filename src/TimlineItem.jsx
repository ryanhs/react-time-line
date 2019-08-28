import React from "react";
import PropTypes from "prop-types";

/**
 * @usage
 * <TimlineItem time={time} text={text} />
 */
function TimlineItem({ time, text }) {
  return (
    <li>
      <i className="fa" />
      <div className="time-line-item">
        <span className="time">
          <i className="fa fa-clock-o" />
          {time}
        </span>
        <div className="time-line-header">{text}</div>
      </div>
    </li>
  );
}

TimlineItem.defaultProps = {
    text: '',
};

TimlineItem.propTypes = {
  time: PropTypes.string.isRequired,
  text: PropTypes.node,
};

export default TimlineItem;
