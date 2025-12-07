import { DeviceIcon } from "../../assets/icons";
import * as SidebarStyled from "../../styles/sidebar";

const Connecting = () => {
  return (
    <SidebarStyled.Connecting>
      <SidebarStyled.ConnectingWrapper>
        <DeviceIcon size={"24"} color="var(--natural-700)" />
        <SidebarStyled.ConnectingContent>
          <SidebarStyled.ConnectingTitle> 기기 이름 </SidebarStyled.ConnectingTitle>
          <SidebarStyled.ConnectingSubtitle> connected </SidebarStyled.ConnectingSubtitle>
        </SidebarStyled.ConnectingContent>
      </SidebarStyled.ConnectingWrapper>
      <SidebarStyled.ConnectingStatus />
    </SidebarStyled.Connecting>
  );
};

const Footer = () => {
  return (
    <SidebarStyled.Footer>
      <Connecting />
    </SidebarStyled.Footer>
  );
};

export default Footer;