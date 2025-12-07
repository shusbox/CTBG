import Sidebar from '../components/sidebar/index';
import Register from '../components/register';
import * as MainStyled from "../styles/main";
import '../css/main.css';

const RegisterPage = () => {
  return (
    <MainStyled.Main>
      <Sidebar />
      <Register />
    </MainStyled.Main>
  );
};

export default RegisterPage;