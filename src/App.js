import { getMovieList } from "./api/naver";
import { getBookList } from "./api/naver";
function App() {
  getMovieList();
  getBookList();
  return (
    <div>
      <h1>api test</h1>
    </div>
  );
}

export default App;
