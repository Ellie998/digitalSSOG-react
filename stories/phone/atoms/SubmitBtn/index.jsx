/* eslint-disable react/prop-types */

import TargetBox from "stories/phone/atoms/TargetBox";

const SubmitBtn = ({
  id = "submit_btn",
  style,
  onClick,
  condition,
  children,
}) => {
  return (
    <TargetBox
      id={id}
      style={{
        marginLeft: "0.5rem",
        marginTop: "0.25rem",
        color: "rgb(38 38 38)",
        textAlign: "start",
        fontWeight: "600",
        fontSize: "0.75rem",
        padding: "0 2px",
        ...style,
      }}
      onClick={onClick}
      isNextTriger={true}
      isBackTriger={false}
      condition={condition}>
      {children}
    </TargetBox>
  );
};
export default SubmitBtn;