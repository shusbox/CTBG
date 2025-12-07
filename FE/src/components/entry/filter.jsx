import { Switch, SearchInput, CalenderInput, ClockInput, DropInput } from "./input";
import * as EntryStyled from "../../styles/entry";

const Filter = () => {
  return (
    <EntryStyled.Filter>
      <Switch />
      <SearchInput placeholder={"학번으로 검색"} />
      <CalenderInput predata={"YYYY.MM.DD"} postdata={"YYYY.MM.DD"} />
      <ClockInput placeholder={"시간"} />
      <DropInput placeholder={"학년"} />
      <DropInput placeholder={"반"} />
      <DropInput placeholder={"기기"} />
    </EntryStyled.Filter>
  );
};

export default Filter;