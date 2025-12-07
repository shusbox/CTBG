import { DownArrowIcon } from "../../assets/icons";
import * as SidebarStyled from "../../styles/sidebar";

const Header = () => {
  return (
    <SidebarStyled.Header>
      <SidebarStyled.ProfileWrapper>
        <SidebarStyled.Profile />
        <SidebarStyled.ProfileContent>
          <SidebarStyled.ProfileTitle> 최병준 </SidebarStyled.ProfileTitle>
          <SidebarStyled.ProfileSubtitle> 선생님 </SidebarStyled.ProfileSubtitle>
        </SidebarStyled.ProfileContent>
      </SidebarStyled.ProfileWrapper>
      <DownArrowIcon size={"20"} color="var(--natural-700)" />
    </SidebarStyled.Header>
  );
};

export default Header;