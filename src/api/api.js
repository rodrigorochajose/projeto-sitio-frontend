const baseUrl = "http://localhost:3001";

export const Api = {
  postRequest: (url, body) => {
    return fetch(baseUrl + url, {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
      body: JSON.stringify(body),
    });
  },

  getAllRequest: (url) => {
    return fetch(baseUrl + url, {
      method: "GET",
      headers: new Headers({
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
    });
  },

  putRequest: (url, body) => {
    return fetch(baseUrl + url, {
      method: "PUT",
      headers: new Headers({
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
      body: JSON.stringify(body),
    });
  },

  deleteRequest: (url) => {
    return fetch(baseUrl + url, {
      method: "DELETE",
      headers: new Headers({
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
    });
  },
};
