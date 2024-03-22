const INPUT_CHANGED = 'currency-converter/converter/INPUT_CHANGED'


let initialState = {
  currType: null,
  amount: null
};


const converterReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case INPUT_CHANGED:
      return {
        ...state,
        currType: action.currType,
        amount: action.amount
      };

    default:
      return state;
  }
}

export const inputChanged = (currType, amount) => ({ type: INPUT_CHANGED, currType, amount })

export default converterReducer;
