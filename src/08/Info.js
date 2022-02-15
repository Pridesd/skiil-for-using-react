import { useEffect, useReducer, useState } from "react";
import useInputs from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange}></input>
        <input name="nickname" value={nickname} onChange={onChange}></input>
      </div>
      <div>
        <div>
          <b>이름: {name}</b>
        </div>
        <div>
          <b>닉네임: {nickname}</b>
        </div>
      </div>
    </div>
  );
};

export default Info;
