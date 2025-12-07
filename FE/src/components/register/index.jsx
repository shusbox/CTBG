import { useState } from "react";
import $ from "jquery";
import * as RegisterStyled from "../../styles/register";
import Header from "./header";

const Register = () => {
  const [ grade, setGrade ] = useState();
  const [ classNo, setclassNo ] = useState();
  const [ number, setnumber ] = useState();
  const [ name, setName ] = useState('');
  const [ fingerPrintId, setFingerPrintId ] = useState('');

  const submit = (e) => {
    e.preventDefault();

    $.ajax({
      type: "POST",
      url: "/",
      data: {
        id: grade * 1000 + classNo * 100 + number,
        grade: grade,
        classNo: classNo,
        number: number,
        name: name,
        fingerprint_id: fingerPrintId,
      },
    }).done(() => {
      console.log("성공");
    }).fail((result) => {
      console.log("실패", result);
    });
  };

  const Form = () => {
    return (
      <>
        <input
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          placeholder="학년"
        />
        <input
          value={classNo}
          onChange={(e) => setclassNo(e.target.value)}
          placeholder="반"
        />
        <input
          value={number}
          onChange={(e) => setnumber(e.target.value)}
          placeholder="번호"
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
        />
        <button onClick={submit}> 등록 </button>
      </>
    );
  };

  return (
    <RegisterStyled.Container>
      <Header />
      <Form />
    </RegisterStyled.Container>
  );
};

export default Register;