import Header from "./header";
import Nav from "./nav";
import Footer from "./footer";
import * as SidebarStyled from "../../styles/sidebar";

const Sidebar = () => {
  return (
    <SidebarStyled.Sidebar>
      <SidebarStyled.Body>
        <Header />
        <Nav />
      </SidebarStyled.Body>
      <Footer />
    </SidebarStyled.Sidebar>
  );
};

export default Sidebar;