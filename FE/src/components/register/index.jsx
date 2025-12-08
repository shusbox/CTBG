import $ from "jquery";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as RegisterStyled from "../../styles/register"
import { FingerPrintIcon, CheckIcon, WarningIcon } from "../../assets/icons";

const Register = () => {
  const navigate = useNavigate();

  const [ grade, setGrade ] = useState("");
  const [ classNo, setClassNo ] = useState("");
  const [ number, setNumber ] = useState("");
  const [ name, setName ] = useState("");
  const [ fingerPrintId, setFingerPrintId ] = useState("123");

  const [ successVisible, setSuccessVisible ] = useState(false);
  const [ failedVisible, setFailedVisible ] = useState(false);

  const Success = () => {
    return (
      <RegisterStyled.Success>
        <CheckIcon size={16} color={"#06AA06"}/>
        <RegisterStyled.SuccessContent>
          <RegisterStyled.SuccessTitle> 등록 성공 </RegisterStyled.SuccessTitle>
          <RegisterStyled.SuccessDescription> 지문 등록이 성공적으로 완료되었습니다. </RegisterStyled.SuccessDescription>
        </RegisterStyled.SuccessContent>
      </RegisterStyled.Success>
    );
  };

  const Failed = () => {
    return (
      <RegisterStyled.Failed>
        <WarningIcon size={16} color={"#FF3333"} />
        <RegisterStyled.FailedContent>
          <RegisterStyled.FailedContent> 등록 실패 </RegisterStyled.FailedContent>
          <RegisterStyled.FailedDescription> 지문 등록에 실패했어요. </RegisterStyled.FailedDescription>
        </RegisterStyled.FailedContent>
      </RegisterStyled.Failed>
    );
  };

  const onScan = () => {
    // 지문 스캔
  };

  const onSubmit = (event) => {
    event.preventDefault();

    $.ajax({
      type: "POST",
      url: "http://10.150.2.125:5000/register",
      data: {
        grade: grade,
        classNo: classNo,
        number: number,
        name: name,
        fingerPrintId: fingerPrintId,
      },
      contentType: 'application/x-www-form-urlencoded',
    }).done(() => {
      setGrade("");
      setClassNo("");
      setNumber("");
      setName("");
      setFingerPrintId("");

      setSuccessVisible(true);
    }).fail((result) => {
      console.log(result);
      setFailedVisible(true);
    });
  };

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
          {successVisible && <Success onClick={() => {setSuccessVisible(false)}} />}
          {failedVisible && <Failed onClick={() => {setFailedVisible(false)}} />}
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
                    value={classNo}
                    onChange={(event) => setClassNo(event.target.value)}
                    placeholder="반"
                  />
                </RegisterStyled.InputWrapper>
                <RegisterStyled.InputWrapper>
                  <RegisterStyled.Label htmlFor="number"> 번호 </RegisterStyled.Label>
                  <RegisterStyled.Input
                    id="number"
                    value={number}
                    onChange={(event) => setNumber(event.target.value)}
                    placeholder="번호"
                  />
                </RegisterStyled.InputWrapper>
              </RegisterStyled.InputContent>
              <RegisterStyled.InputWrapper>
                <RegisterStyled.Label htmlFor="name"> 이름 </RegisterStyled.Label>
                <RegisterStyled.Input
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
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
            {fingerPrintId === "" ?
              <RegisterStyled.Scan onClick={onScan} />
              :
              <RegisterStyled.ScanSuccess>
                <FingerPrintIcon size={40} color={"#3364FF"} />
              </RegisterStyled.ScanSuccess>
            }
          </RegisterStyled.Field>
          <RegisterStyled.ButtonContainer>
            <RegisterStyled.CancelButton onClick={() => navigate("/")}> 취소 </RegisterStyled.CancelButton>
            {fingerPrintId === "" ?
              <RegisterStyled.offActiveButton> 지문 등록하기 </RegisterStyled.offActiveButton> 
              :
              <RegisterStyled.onActiveButton onClick={onSubmit}> 지문 등록하기 </RegisterStyled.onActiveButton> 
            }
          </RegisterStyled.ButtonContainer>
        </RegisterStyled.Form>
      </RegisterStyled.Container>
    </>
  );
};

export default Register;
