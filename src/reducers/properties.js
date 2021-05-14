const propertiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_PROPERTIES':
      return action.payload;
    default:
      return state;
  }
};

export default propertiesReducer;
