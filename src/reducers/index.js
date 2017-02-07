import { combineReducers } from 'redux';

import {
  ADD_ACTION,
  SUBTRACT_ACTION,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  value: 0,
};
// 초기 상태

// state가 undefined면 INITIAL_STATE로
const count = (state = INITIAL_STATE, action) => {
  // 정말 그냥 함수!
  switch (action.type) {
    // 모든 Action은 type을 갖고 있다
    case ADD_ACTION:
      // state.value = state.value + 1 같은 걸 하면 안 된다
      // 순수함수가 아니게 되니까!
      return Object.assign({}, state, {
        value: state.value + 1,
      });
      // 이러면 기존 state는 보존되며 새 오브젝트 객체가 반환된다
    case SUBTRACT_ACTION:
      return Object.assign({}, state, {
        value: state.value - 1,
      });
    default:
      return state;
  }
};

export default combineReducers({
  count,
});
// 나중에 보기
