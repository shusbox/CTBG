import * as EntryStyled from "../../styles/entry";
import Header from "./header";
import Sort from "./sort";
import Filter from "./filter";
import Table from "./table";

const Entry = () => {
  return (
    <EntryStyled.Entry>
      <Header />
      <EntryStyled.Body>
        <Sort />
        <Filter />
        <Table />
      </EntryStyled.Body>
    </EntryStyled.Entry>
  );
};

export default Entry;