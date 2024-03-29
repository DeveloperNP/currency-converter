import { getExchangeRates } from "../api/api";

const SET_CURRENT_DATE = 'currency-converter/app/SET_CURRENT_DATE';
const SET_EXCHANGE_RATES = 'currency-converter/app/SET_EXCHANGE_RATES';
const SET_INITIALIZED = 'currency-converter/app/SET_INITIALIZED';

let initialState = {
  currentDate: null,
  exchangeRates: null,
  initialized: false
};

const appReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case SET_CURRENT_DATE:
      return {
        ...state,
        currentDate: action.currentDate
      };
    
    case SET_EXCHANGE_RATES:
      return {
        ...state,
        exchangeRates: action.exchangeRates
      };

    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true
      };

    default:
      return state;
  }
}

const setCurrentDate = (currentDate) => ({ type: SET_CURRENT_DATE, currentDate });
const setExchangeRates = (exchangeRates) => ({ type: SET_EXCHANGE_RATES, exchangeRates });
const setInitialized = () => ({ type: SET_INITIALIZED });

export const getExchangeData = () => async (dispatch) => {
  const response = await getExchangeRates();

  dispatch(setCurrentDate(response.Date));
  dispatch(setExchangeRates(response.Valute));
  dispatch(setInitialized());
}

export default appReducer;