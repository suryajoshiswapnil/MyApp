/**
 * @author Swapnil Suryajoshi <swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */

const apiCall = (url: string, init: any) => {
  return fetch(url, init);
};

const API = {
  get: apiCall,
  post: apiCall,
};

export default API;
