import { Fragment, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Navbar from "../modules/Navbar";
import MovieList from "../modules/MovieList";
import Pageination from "../atoms/Pagination";
import { getMovieList } from "../../api/naver";

const Main = () => {
  const [movieList, setMovieList] = useState("");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState({ query: "", start: 1 });
  useEffect(() => {
    searchMovie();
  }, [query]);

  const searchMovie = async () => {
    if (query.query === "") return;
    setMovieList(await getMovieList(query.query, query.start));
    console.log(query.start);
  };

  console.log(query.start);

  return (
    <Container>
      <Navbar setQuery={(value) => setQuery(value)}></Navbar>
      {/* <div>Natver영화검색에 오신 것을 환영합니다!</div>
      <Testbox>국가 장르 평점</Testbox> */}
      {movieList.items && <MovieList data={movieList.items} />}
      <Pageination
        nowPage={query.start}
        totalPage={movieList.total}
        onPageChange={(value) => setQuery(value)}
      />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  padding: 0 64px;
  background: #060d17;
  min-height: 100vh;
  color: #fff;
`;

// const Testbox = styled.div`
//   position: sticky;
//   top: 56px;
//   width: 100%;
//   z-index: 10;
// `;
