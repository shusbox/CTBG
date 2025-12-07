import * as EntryStyled from "../../styles/entry";

const Table = () => {
  const Row = () => {
    return (
      <EntryStyled.Row>
        <EntryStyled.CheckboxContainer> <EntryStyled.Checkbox type="checkbox" /> </EntryStyled.CheckboxContainer>
        <EntryStyled.Id> 학번 </EntryStyled.Id>
        <EntryStyled.Grade> 학년 </EntryStyled.Grade>
        <EntryStyled.Class> 반 </EntryStyled.Class>
        <EntryStyled.Name> 이름 </EntryStyled.Name>
        <EntryStyled.Value> 날짜 </EntryStyled.Value>
        <EntryStyled.Value> 시간 </EntryStyled.Value>
        <EntryStyled.Records> 입 · 퇴실 </EntryStyled.Records>
        <EntryStyled.Records> 기기 </EntryStyled.Records>
      </EntryStyled.Row>
    );
  };

  const Column = ({ id, grade, number, name, date, time, records, device }) => {
    return (
      <>
        <EntryStyled.Column>
          <EntryStyled.CheckboxContainer> <EntryStyled.Checkbox type="checkbox" /> </EntryStyled.CheckboxContainer>
          <EntryStyled.Id> {id} </EntryStyled.Id>
          <EntryStyled.Grade> {grade} </EntryStyled.Grade>
          <EntryStyled.Class> {number} </EntryStyled.Class>
          <EntryStyled.Name> {name} </EntryStyled.Name>
          <EntryStyled.Value> {date} </EntryStyled.Value>
          <EntryStyled.Value> {time} </EntryStyled.Value>
          <EntryStyled.Records> 입 · 퇴실 </EntryStyled.Records>
          <EntryStyled.Records> 기기 </EntryStyled.Records>
        </EntryStyled.Column>
      </>
    );
  };

  return (
    <EntryStyled.Table>
      <Row />
      <EntryStyled.ColumnContainer>
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
        <Column id="1215" grade="1학년" number="2반" name="진수화" date="2025.12.25" time="8시 40분 8초" />
      </EntryStyled.ColumnContainer>
    </EntryStyled.Table>
  );
};

export default Table;