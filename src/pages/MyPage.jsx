import { Navigate, useNavigate } from "react-router-dom";
const MyPage = () => {
  const navigate = useNavigate();
  const isLogin = false;

  if (isLogin) {
    return (
      <>
        <h1>마이페이지입니다.</h1>
        <p>내 정보를 확인할 수 있습니다.</p>
        {/* <Link to="/">홈으로 이동하기</Link> */}
        <button onClick={() => navigate(-1)}>뒤로가기</button>
      </>
    );
  } else {
    return <Navigate to="/login" replace={true} />;
  }
};
export default MyPage;
