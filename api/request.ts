export const request = (url: string, options?: RequestInit | undefined) => {
  return fetch(url, options).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
};
