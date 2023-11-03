import { useParams } from "react-router-dom";
// URL 파라미터와 쿼리 스트링은 둘 다 URL에 데이터를 전달하기 위한 방법
// useParams라는 Hook을 사용하여 객체 형태로 조회할 수 있음. 이름은 라우트 설정할 때 Route 컴포넌트의 path props를 통해 설정
// :username은 호출하는 페이지에서 지정한 유동적인 값으로 대체되어 컴포넌트에 전달됨

const data = {
  frontend: {
    name: "곰돌이사육사",
    description: "리액트를 좋아하는 개발자",
  },
  backend: {
    name: "달빛사냥꾼",
    description: "스프링 부트를 좋아하는 개발자",
  },
  database: {
    name: "천재DBA",
    description: "Database를 좋아하는 개발자",
  },
};

const Profile = () => {
  // useParams는 리액트 라우터에서 URL 파라미터 값을 가져오기 위한 훅(Hook)
  const params = useParams();
  // 호출하는 페이지에서 지정한 유동적인 값으로 대체되어 컴포넌트에 전달
  const profile = data[params.username];

  return (
    <>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </>
  );
};

export default Profile;
