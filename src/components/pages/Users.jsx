import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `マイク${val}`,
    image: "https://source.unsplash.com/ZCHj_2lJP00",
    emial: "aa@gmail.com",
    phone: "000-00r0-000",
    company: {
      name: "IT Company"
    },
    website: "aaa.com"
  };
});

export const Users = () => {
  const { state } = useLocation();
  console.log(state);
  const isAdmin = state ? state.isAdmin : false;

  return (
    <SContainer>
      <h2>ユーザ一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} isAdmin={isAdmin} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  /* レスポンシブ(画面の調節に合わせた)なグリッドレイアウトのテンプレートスタイリング */
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
