
export const SEARCH_SET = 'SEARCH_SET';
export const SEARCH_RESULTS = 'SEARCH_RESULTS';


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
