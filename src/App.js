import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import MyPage from "./pages/MyPage";
import Setting from "./pages/Setting";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Layout from "./pages/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// MyPage와 Setting 페이지 추가해보기
// Home에서 About, MyPage, Setting 페이지 링크 보여주고 이동하도록
// 이동된 각 페이지에서는 홈으로 이동하는 링크 만들고 Home 이동되도록 만들기
// path="/Profile/:username" username을 할당해줘야 함
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Mypage" element={<MyPage />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Profile/:username" element={<Profile />} />
        </Route>
        <Route path="/articles" element={<Articles />}>
          <Route path="/articles/:id" element={<Article />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
// return 안에 Router 영역으로 감싸면 링크 이동이 가능함
// <Router></> 안에 <Router></>안에 <Route />
