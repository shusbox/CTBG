import { useState } from "react";
import * as RegisterStyled from "../../styles/register"
import { FingerPrintIcon } from "../../assets/icons";

const Register = () => {
  const [ grade, setGrade ] = useState("");
  const [ classNo, setClassNo ] = useState("");
  const [ number, setNumber ] = useState("");
  const [ name, setName ] = useState("");
  const [ fingerPrintId, setFingerPrintId ] = useState("");

  return (
    <>
      <RegisterStyled.Backdrop />
      <RegisterStyled.Container>
        <RegisterStyled.Header>
          <RegisterStyled.TitleWrapper>
            <RegisterStyled.IconContainer> <FingerPrintIcon size={"16"} /> </RegisterStyled.IconContainer>
            <RegisterStyled.Title> 지문 등록 </RegisterStyled.Title>
          </RegisterStyled.TitleWrapper>
          <RegisterStyled.Line />
        </RegisterStyled.Header>
        <RegisterStyled.Form>
          <RegisterStyled.Field>
            <RegisterStyled.Content>
              <RegisterStyled.ContentHeader> 학생 정보 </RegisterStyled.ContentHeader>
              <RegisterStyled.ContentBody> 학생 정보를 입력하세요. </RegisterStyled.ContentBody>
            </RegisterStyled.Content>
            <RegisterStyled.InputContainer>
              <RegisterStyled.InputContent>
                <RegisterStyled.InputWrapper>
                  <RegisterStyled.Label htmlFor="grade"> 학년 </RegisterStyled.Label>
                  <RegisterStyled.Input
                    id="grade"
                    value={grade}
                    onChange={(event) => setGrade(event.target.value)}
                    placeholder="학년"
                  />
                </RegisterStyled.InputWrapper>
                <RegisterStyled.InputWrapper>
                  <RegisterStyled.Label htmlFor="classNo"> 반 </RegisterStyled.Label>
                  <RegisterStyled.Input
                    id="classNo"
                    placeholder="반"
                  />
                </RegisterStyled.InputWrapper>
                <RegisterStyled.InputWrapper>
                  <RegisterStyled.Label htmlFor="number"> 번호 </RegisterStyled.Label>
                  <RegisterStyled.Input
                    id="number"
                    placeholder="번호"
                  />
                </RegisterStyled.InputWrapper>
              </RegisterStyled.InputContent>
              <RegisterStyled.InputWrapper>
                <RegisterStyled.Label htmlFor="name"> 이름 </RegisterStyled.Label>
                <RegisterStyled.Input
                  id="name"
                  placeholder="이름을 입력하세요"
                />
              </RegisterStyled.InputWrapper>
            </RegisterStyled.InputContainer>
          </RegisterStyled.Field>
          <RegisterStyled.Line />
          <RegisterStyled.Field>
            <RegisterStyled.Content>
              <RegisterStyled.ContentHeader> 지문 인식 </RegisterStyled.ContentHeader>
              <RegisterStyled.ContentBody> 지문 칸을 눌러 지문을 인식하세요. </RegisterStyled.ContentBody>
            </RegisterStyled.Content>
            <RegisterStyled.Scan />
          </RegisterStyled.Field>
          <RegisterStyled.ButtonContainer>
            <RegisterStyled.CancelButton> 취소 </RegisterStyled.CancelButton>
            <RegisterStyled.offActiveButton> 지문 등록하기 </RegisterStyled.offActiveButton>
          </RegisterStyled.ButtonContainer>
        </RegisterStyled.Form>
      </RegisterStyled.Container>
    </>
  );
};

export default Register;