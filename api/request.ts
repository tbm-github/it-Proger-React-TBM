export const request = (url: string, options?: RequestInit | undefined) => {
  return fetch(url, options).then((res) => {
    console.log(`Status reesponse ${res.status}`);

    if (res.ok) {
      return res.json();
    } else {
      res.json().then((obj) => {
        const data = obj;
        console.log(data.message);
      });
      throw new Error("There is such a todo!");
    }
  });
};
