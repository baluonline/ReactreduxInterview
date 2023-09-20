const initialState = {
    users:[]
  };
const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case "USERS":
        return {
            ...state,
            users: action.data
          };
    default:
      return state;
  }
};
