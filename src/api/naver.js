const headers = {
  "X-Naver-Client-Id": "XRupn7GoMOzhZZQE_RD6",
  "X-Naver-Client-Secret": "FxfJq0rU7f",
};

// https://cors-anywhere.herokuapp.com/https://openapi.naver.com/?
export const getMovieList = async (query, start) => {
  const response = await fetch(
    `v1/search/movie.json?query=${query}&display=30&start=${start}`,
    {
      headers: headers,
    }
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return response;
};

export const getBookList = async () => {
  const response = await fetch("v1/search/book.json?query=1", {
    headers: headers,
  });

  let data = await response.json();
  console.log(data);
};
