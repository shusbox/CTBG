import * as EntryStyled from "../../styles/entry";

const Header = () => {
  return (
    <EntryStyled.Header>
      <EntryStyled.HeaderTitle> 출입 기록 </EntryStyled.HeaderTitle>
      <EntryStyled.HeaderWrapper>
        <EntryStyled.HeaderTimeStamp> 이전 새로고침 - 19:12:15 </EntryStyled.HeaderTimeStamp>
        <EntryStyled.HeaderReset> 새로고침 </EntryStyled.HeaderReset>
      </EntryStyled.HeaderWrapper>
    </EntryStyled.Header>
  );
};

export default Header;