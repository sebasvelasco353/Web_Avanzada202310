import React, { useReducer } from "react";

export const initialState = {
    isLoggedIn: false,
    user: null
}

function reducer(state, action) {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, isLoggedIn: true, user: action.userInfo, error: null };
      case 'LOGOUT':
        return { ...state, isLoggedIn: false, user: null, error: null };
    }
  }


  export default reducer;