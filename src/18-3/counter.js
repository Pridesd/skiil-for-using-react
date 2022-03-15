import { createAction, handleActions } from "redux-actions";
import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects';

const INCREASE = "counter/INCREASE"; //액션 이름
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase = createAction(INCREASE); //액션 발생 함수
export const decrease = createAction(DECREASE);
//마우스 클릭 이벤트가 payload안에 들어가지 않도록
//() => undefined를 두 번째 파라미터로 넣어줌
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga(){
  yield delay(1000); //1초 대기
  yield put(increase()); //특정 액션 디스패치
}

function* decreaseSaga(){
  yield delay(1000) //1초 대기
  yield put(decrease()); //특정 액션 디스패치
}

export function* counterSaga(){
  //takeEvery로 들어오는 모든 액션에 대해 특정 작업을 처리
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  //takeLatest는 기존에 진행 중이던 작업이 있다면 취소하고
  //가장 마지막에 실행된 작업만 수행
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

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
