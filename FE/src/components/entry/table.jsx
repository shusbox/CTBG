import $ from "jquery";
import { useState, useEffect } from "react";
import * as EntryStyled from "../../styles/entry";

const Table = () => {
  const [rows, setRows] = useState([]);

  const Row = () => {
    return (
      <EntryStyled.Row>
        <EntryStyled.CheckboxContainer> <EntryStyled.Checkbox type="checkbox" /> </EntryStyled.CheckboxContainer>
        <EntryStyled.Id> 학번 </EntryStyled.Id>
        <EntryStyled.Grade> 학년 </EntryStyled.Grade>
        <EntryStyled.ClassNo> 반 </EntryStyled.ClassNo>
        <EntryStyled.Name> 이름 </EntryStyled.Name>
        <EntryStyled.Value> 날짜 </EntryStyled.Value>
        <EntryStyled.Value> 시간 </EntryStyled.Value>
        <EntryStyled.Records> 입 · 퇴실 </EntryStyled.Records>
        <EntryStyled.Records> 기기 </EntryStyled.Records>
      </EntryStyled.Row>
    );
  };

  const Column = ({ id, grade, classNo, name, date, time, records, device }) => {
    return (
      <>
        <EntryStyled.Column>
          <EntryStyled.CheckboxContainer> <EntryStyled.Checkbox type="checkbox" /> </EntryStyled.CheckboxContainer>
          <EntryStyled.Id> {id} </EntryStyled.Id>
          <EntryStyled.Grade> {grade} </EntryStyled.Grade>
          <EntryStyled.ClassNo> {classNo} </EntryStyled.ClassNo>
          <EntryStyled.Name> {name} </EntryStyled.Name>
          <EntryStyled.Value> {date} </EntryStyled.Value>
          <EntryStyled.Value> {time} </EntryStyled.Value>
          <EntryStyled.Records> 입 · 퇴실 </EntryStyled.Records>
          <EntryStyled.Records> 기기 </EntryStyled.Records>
        </EntryStyled.Column>
      </>
    );
  };

  useEffect(() => {
    $.ajax({
      type: "GET",
      url: "/",
    }).done((result) => {
      setRows(result);
    }).fail((result) => {
      console.log(result);
    });
  }, []);

  return (
    <EntryStyled.Table>
      <Row />
      <EntryStyled.ColumnContainer>
        {rows.map((item, index) => (
          <Column
            key={index}
            id={item.id}
            grade={item.grade}
            classNo={item.classNo}
            name={item.name}
            date={item.date}
            time={item.time}
            records={item.records}
            device={item.device}
          />
        ))}
      </EntryStyled.ColumnContainer>
    </EntryStyled.Table>
  );
};

export default Table;