import Cookies from 'js-cookie';
import axios from 'axios';

export const SEARCH_SET = 'SEARCH_SET';
export const SEARCH_RESULTS = 'SEARCH_RESULTS';
export const AUTHENTICATE = 'AUTHENTICATE';



let timeout = null;
export function search({ query }) {
  return function(dispatch) {

    dispatch({
      type: SEARCH_SET,
      payload: query
    });

    clearTimeout(timeout);
    setTimeout(async () => {
      let questions = await global.axios.get('/questions/search', {
        params: {
          query: query
        }
      });

      dispatch({
        type: SEARCH_RESULTS,
        payload: questions.data.questions
      });
    }, 400);
  };
}



export function authenticate({ userName, password }) {
  return async function(dispatch) {

    let token;
    let headers = {};
    if(!password) {
      token = await Cookies.get('token');
      headers['x-auth-token'] = token;
    }

    let auth = await axios.post('https://api.askru.tech/api/users/authenticate', {
      userName,
      password
    }, {headers});

    if(!token) {
      Cookies.set('token', auth.data.token);
    }

    dispatch({
      type: AUTHENTICATE,
      payload: auth.data
    });
  };
}
