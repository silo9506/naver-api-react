import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/templates/Main";

function App() {
  return (
    <BrowserRouter basename={process.env.public_url}>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
