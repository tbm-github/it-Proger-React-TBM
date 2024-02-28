const baseURL = "http://192.168.1.100:3000/api";

export const request = (url: string, options?: RequestInit | undefined) => {
  return fetch(baseURL + url, options).then((res) => {
    console.log(`Status response ${res.status}`);

    if (res.ok) {
      return res.json();
    } else {
      return res.json().then((obj) => {
        const data = obj;
        console.log(data.message);
        throw new Error(data.message);
      });
    }
  });
};
