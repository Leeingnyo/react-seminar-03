import {
  CHANGE_MODE_ACTION,
  SEARCH_ACTION,
} from '../actions/actionTypes';

import {
  SEARCH_MODE,
} from '../const';

import { dummyItems } from '../data';

const APP_INITIAL_STATE = {
  mode: SEARCH_MODE,
  searchResults: [],
};

const app = (state = APP_INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_MODE_ACTION: {
      const {mode} = action;
      return Object.assign({}, state, {
        mode,
      });
    }
    case SEARCH_ACTION: {
      return Object.assign({}, state, {
        searchResults: dummyItems,
      });
    }
    default: return state;
  }
};

export default app;
