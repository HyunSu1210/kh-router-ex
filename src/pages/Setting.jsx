import { Link } from "react-router-dom";

const Setting = () => {
  return (
    <>
      <h1>설정화면입니다.</h1>
      <p>환경설정을 할 수 있습니다.</p>
      <Link to="/">홈으로 이동하기</Link>
    </>
  );
};
export default Setting;
