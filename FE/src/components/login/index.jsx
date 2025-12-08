import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserStore } from "../../store/user";
import * as LoginStyled from "../../styles/login";

const Login = () => {
  const navigate = useNavigate();
  const { setUsername } = useUserStore();
  const [ usernameInput, setUsernameInput ] = useState();
  const [ passwordInput, setPasswordInput ] = useState();

  const onSubmit = (event) => {
    event.preventDefault();

    $.ajax({
      type: "POST",
      url: "/",
      data: {
        username: usernameInput,
        password: passwordInput,
      },
      contentType: 'application/x-www-form-urlencoded',
    }).done(() => {
      setUsername(usernameInput);
      navigate("/");
    }).fail((result) => {
      alert("로그인 실패");
      console.log(result);
    });
  };

  return (
    <LoginStyled.Container>
      <LoginStyled.Title> 로그인 </LoginStyled.Title>
      <LoginStyled.Form>
        <LoginStyled.InputContainer>
          <LoginStyled.InputWrapper>
            <LoginStyled.Label htmlFor="username"> 아이디 </LoginStyled.Label>
            <LoginStyled.Input
              id="username"
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
              placeholder="아이디를 입력하세요"
            />
          </LoginStyled.InputWrapper>
          <LoginStyled.InputWrapper>
            <LoginStyled.Label htmlFor="password"> 비밀번호 </LoginStyled.Label>
            <LoginStyled.Input
              id="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="비밀번호를 입력하세요"
            />
          </LoginStyled.InputWrapper>
        </LoginStyled.InputContainer>
        <LoginStyled.ButtonContainer>
          <LoginStyled.SubmitButton onClick={onSubmit}> 로그인 </LoginStyled.SubmitButton>
          <LoginStyled.CancelButton> 회원가입 </LoginStyled.CancelButton>
        </LoginStyled.ButtonContainer>
      </LoginStyled.Form>
    </LoginStyled.Container>
  );
};

export default Login;