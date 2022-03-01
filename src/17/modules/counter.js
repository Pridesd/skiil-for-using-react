import { createAction, handleAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE"; //액션 이름 = 모듈이름/액션이름 액션의 이름이 충돌되지 않게 방지
const DECREASE = "counter/DECREASE";

// export const increase = () => ({ type: INCREASE }); //액션 생성 함수
// export const decrease = () => ({ type: DECREASE }); //export를 사용하여 다른 파일에서 불러와 사용할 수 있음.

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  //초기 상태
  number: 0,
};

// function counter(state = initialState, action) {
//   //리듀서 함수
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter; //export default는 한 개만 내보낼 수 있고, export는 여러 개 내보낼 수 있음.
