import * as EntryStyled from "../../styles/entry";
import Header from "./header";
import Sort from "./sort";
import Filter from "./filter";

const Entry = () => {
  return (
    <EntryStyled.Entry>
      <Header />
      <EntryStyled.Body>
        <Sort />
        <Filter />
      </EntryStyled.Body>
    </EntryStyled.Entry>
  );
};

export default Entry;