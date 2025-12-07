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
      <Item icon={ <DoorExitIcon size={"20"} color="currentColor" /> } content={"출입 기록"} />
      <Item icon={ <FingerPrintIcon size={"20"} color="currentColor" /> } content={"지문 등록"} />
    </SidebarStyled.Nav>
  );
};

export default Nav;