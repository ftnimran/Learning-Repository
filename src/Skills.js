import React from "react";

function Skills(props) {
  return (
    <>
      <div className="skillcard">
        <img className="skillimg" src={props.url} alt="Skill" />
        <p style={{ fontSize: "20px" }}>{props.skname}</p>
      </div>
    </>
  );
}
export default Skills;
