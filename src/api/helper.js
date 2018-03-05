/**
 * Created by sushanta on 2/8/18.
 */
export const fetchData = (url) => {
  return fetch(url)
    .then(result => {
      if (result.ok) {
        return result.json();
      } else {
        return {
          response: false
        };
      }
    }).catch(() => 'connection lost');
};