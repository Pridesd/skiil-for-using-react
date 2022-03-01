//파일 이름을 index.js로 설정할 경우 나중에 불러올 때 디렉터리 이름까지만 입력해 불러올 수 있음.

import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
