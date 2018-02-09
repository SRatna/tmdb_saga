/**
 * Created by sushanta on 2/5/18.
 */
let initialState = {
  person: {},
  response: null,
  error: null,
  personFetchStatus: 'fetching',
};

const personDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'PERSON_DETAILS_FETCH_SUCCESS':
      const person = action.person;
      const response = person.response;
      if (response === true) {
        return {
          ...state, response: true, error: null, person: person.person, personFetchStatus: 'fetched'
        }
      }
      if (response === false) {
        return {
          ...state, response: false, error: person.error, person: {}, personFetchStatus: 'fetched'
        }
      }
      break;
    case 'LOGOUT_USER':
    case 'RESET_PERSON_DETAILS':
      return {
        ...state, ...initialState
      };
    default:
      return state
  }
};
export default personDetails;