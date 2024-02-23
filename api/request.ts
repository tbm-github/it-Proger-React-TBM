export const request = (url: string, options?: RequestInit | undefined) => {
  return fetch(url, options).then((res) => {
    console.log(res.status);

    if (res.ok) {
      return res.json();
    } else throw new Error("request failed");
  });
};
