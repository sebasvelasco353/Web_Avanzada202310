import React, { useReducer } from "react";

export const initialState = {
    isLoggedIn: false,
    user: null
}

function reducer(state, action) {
    switch (action.type) {
      case 'LOGIN':
        console.log("Si");
        return { ...state, isLoggedIn: true, user: action.userInfo };
      case 'LOGOUT':
        return { ...state, isLoggedIn: false, user: null};
    }
  }


  export default reducer;