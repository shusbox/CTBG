import Sidebar from '../components/sidebar/index';
import Entry from '../components/entry/index';
import * as MainStyled from "../styles/main";
import '../css/main.css';

const EntryPage = () => {
  return (
    <MainStyled.Main>
      <Sidebar />
      <Entry />
    </MainStyled.Main>
  );
};

export default EntryPage;