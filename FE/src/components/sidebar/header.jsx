import { useUserStore } from "../../store/user";
import { DownArrowIcon } from "../../assets/icons";
import * as SidebarStyled from "../../styles/sidebar";

const Header = () => {
  const { username } = useUserStore();

  return (
    <SidebarStyled.Header>
      <SidebarStyled.ProfileWrapper>
        <SidebarStyled.Profile />
        <SidebarStyled.ProfileContent>
          <SidebarStyled.ProfileTitle> {username === "" ? "로그인" : username} </SidebarStyled.ProfileTitle>
          <SidebarStyled.ProfileSubtitle> 선생님 </SidebarStyled.ProfileSubtitle>
        </SidebarStyled.ProfileContent>
      </SidebarStyled.ProfileWrapper>
      <DownArrowIcon size={"20"} color="var(--natural-700)" />
    </SidebarStyled.Header>
  );
};

export default Header;