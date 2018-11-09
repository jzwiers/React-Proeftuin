import React from "react";

export default class GeboekteUren extends React.Component {
  constructor(props) {
    super(props);
    this.state = { urenArray: props.urenArray };
  }
  render() {
    return (
      <tr>
        <td colSpan="35">{this.state.urenArray.project} </td>
        <td colSpan="35">{this.state.urenArray.uren}</td>
        <td colSpan="35">{this.state.urenArray.dag}</td>
        <td colSpan="35">delete</td>
        <td colSpan="35">edit</td>
      </tr>
    );
  }
}
