import { Link, useNavigate } from "react-router-dom";
// a태그는 페이지를 이동할 때 브라우저에서는 페이지를 새로 불러오게 됨
/* Link 컴포넌트도 a태그를 사용하기 하지만, 페이지를 새로 불러오는 것을 막고
History API를 통해 브라우저 주소의 경로만 바꾸는 기능이 내장되어있음 */
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>여기가 홈입니다.</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <Link to="/About">소개 페이지로 이동</Link>
      <p
        style={{ textDecoration: "underline" }}
        onClick={() => navigate("/about")}
      >
        소개 페이지로 이동
      </p>
      <br />
      <Link to="/MyPage">마이페이지로 이동</Link>
      <br />
      <Link to="/Setting">설정화면으로 이동</Link>
      <br />
      <ul>
        <li>
          <Link to="/profile/frontend">Frontend 프로필</Link>
        </li>
        <li>
          <Link to="/profile/backend">Backend 프로필</Link>
        </li>
        <li>
          <Link to="/profile/database">database 프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시판 목록</Link>
        </li>
      </ul>
    </>
  );
};
export default Home;
