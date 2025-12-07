import { SearchIcon, CalenderIcon, ClockIcon, DownArrowIcon } from "../../assets/icons";
import * as EntryStyled from "../../styles/entry";

export const Switch = () => {
  return (
    <EntryStyled.SwitchContainer>
      <EntryStyled.SwitchSelectItem> 입 · 퇴실 </EntryStyled.SwitchSelectItem>
      <EntryStyled.SwitchItem> 입실 </EntryStyled.SwitchItem>
      <EntryStyled.SwitchItem> 퇴실 </EntryStyled.SwitchItem>
    </EntryStyled.SwitchContainer>
  );
};

export const SearchInput = ({ placeholder }) => {
  return (
    <EntryStyled.InputContainer>
      <EntryStyled.InputPreIcon>
        <SearchIcon size={"16"} color="currentColor" />
      </EntryStyled.InputPreIcon>
      <EntryStyled.InputPre placeholder={placeholder} />
    </EntryStyled.InputContainer>
  );
};

export const CalenderInput = ({ predata, postdata }) => {
  return (
    <EntryStyled.InputContainer>
      <EntryStyled.InputPostIcon>
        <CalenderIcon size={"16"} color="currentColor" />
      </EntryStyled.InputPostIcon>
      <EntryStyled.InputPost placeholder={`${predata} - ${postdata}`} />
    </EntryStyled.InputContainer>
  );
};

export const ClockInput = ({ placeholder }) => {
  return (
    <EntryStyled.InputContainer>
      <EntryStyled.InputPostIcon>
        <ClockIcon size={"16"} color="currentColor" />
      </EntryStyled.InputPostIcon>
      <EntryStyled.InputPost placeholder={placeholder} />
    </EntryStyled.InputContainer>
  );
};

export const DropInput = ({ placeholder }) => {
  return (
    <EntryStyled.InputContainer>
      <EntryStyled.InputPostIcon>
        <DownArrowIcon size={"16"} color="currentColor" />
      </EntryStyled.InputPostIcon>
      <EntryStyled.InputPost placeholder={placeholder} />
    </EntryStyled.InputContainer>
  );
};