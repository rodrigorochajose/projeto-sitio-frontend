const baseUrl = "http://localhost:3001";

export const Api = {
  createRequest: (url, body) => {
    return fetch(baseUrl + url, {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json",
      }),
      body: JSON.stringify(body),
    });
  },

  getAllRequest: (url) => {
    return fetch(baseUrl + url, {
      method: "GET",
    });
  },

  getRequest: (url) => {
    return fetch(baseUrl + url, {
      method: "GET",
    });
  },
};
