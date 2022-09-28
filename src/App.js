import { getMovieList } from "./api/naver";
import { getBookList } from "./api/naver";
function App() {
  const headers = {
    "X-Naver-Client-Id": "XRupn7GoMOzhZZQE_RD6",
    "X-Naver-Client-Secret": "FxfJq0rU7f",
  };
  ("test");
  getMovieList();
  getBookList();
  return (
    <div>
      <h1>api test</h1>
    </div>
  );
}

export default App;
