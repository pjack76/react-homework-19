import React from "react";
import "./style.css";


function renderEmployee (props){
  return (
    <tr key = {props.id}>
      <td>{props.id}</td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.department}</td>
      <td>{props.title}</td>
      <td>{props.office}</td>
      <td>{props.phone}</td>
    </tr>
  )
};

export default renderEmployee;
