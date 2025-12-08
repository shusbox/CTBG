import { DoorExitIcon, FingerPrintIcon } from "../../assets/icons";
import * as SidebarStyled from "../../styles/sidebar";

const Item = ({ icon, content }) => {
  return (
    <SidebarStyled.Item>
      {icon}
      <SidebarStyled.ItemContent> {content} </SidebarStyled.ItemContent>
    </SidebarStyled.Item>
  );
};

const Nav = () => {
  return (
    <SidebarStyled.Nav>
      <SidebarStyled.LinkContainer to="/entry"> <Item icon={ <DoorExitIcon size={"20"} color="currentColor" /> } content={"출입 기록"} /> </SidebarStyled.LinkContainer>
      <SidebarStyled.LinkContainer to="/register"> <Item icon={ <FingerPrintIcon size={"20"} color="currentColor" /> } content={"지문 등록"} /> </SidebarStyled.LinkContainer>
    </SidebarStyled.Nav>
  );
};

export default Nav;
