import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessage } from "../redux/greetings/greetingsSlice";

const Greeting = () => {
  const greetingShow = useSelector((state) => state.greetings.message);
  const status = useSelector((state) => state.greetings.status);
  const dispatch = useDispatch();
  console.log(status);
  let content;
  if (status === "success") {
    content = greetingShow[0].message;
  }

  return (
    <>
      <h3>This are Random Messages:</h3>
      <p>{content}</p>
      <button type="button" onClick={() => dispatch(getMessage())}>
        Display random greeting
      </button>
    </>
  );
};

export default Greeting;
