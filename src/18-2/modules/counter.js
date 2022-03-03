import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE"; //액션 이름
const DECREASE = "counter/DECREASE";

export const increase = createAction(INCREASE); //액션 발생 함수
export const decrease = createAction(DECREASE);

// 1초 뒤에 increase 혹은 decrease함수를 디스패치함
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

const initialState = 0;
//상태가 객체일 필요는 없음.

const counter = handleActions(
  //리듀서 함수/handleActions로 해야된다!!
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
