const headers = {
  "X-Naver-Client-Id": "XRupn7GoMOzhZZQE_RD6",
  "X-Naver-Client-Secret": "FxfJq0rU7f",
};

export const getMovieList = async () => {
  const response = await fetch(
    "https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/movie.json?query=1",
    {
      headers: headers,
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

export const getBookList = async () => {
  const response = await fetch(
    "https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/book.json?query=1",
    {
      headers: headers,
    }
  );

  let data = await response.json();
  console.log(data);
};
