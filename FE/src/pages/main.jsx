import Sidebar from '../components/sidebar/index';
import Entry from '../components/entry/index';
import * as MainStyled from "../styles/main";
import '../css/main.css';

const Main = () => {
  return (
    <MainStyled.Main>
      <Sidebar />
      <Entry />
    </MainStyled.Main>
  );
};

export default Main;