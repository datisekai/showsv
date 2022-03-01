import React from "react";
class StudentInfoComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.students);
    return (
      <table style={{border:'1px solid black'}}>
        <tr>
          <th style={{border:'1px solid black'}}>ID</th>
          <th style={{border:'1px solid black'}}>Name</th>
          <th style={{border:'1px solid black'}}>Age</th>
          <th style={{border:'1px solid black'}}>Address</th>
        </tr>

        {this.props.students.map((item) => (
          <tr>
            <td style={{border:'1px solid black'}}>{item.id}</td>
            <td style={{border:'1px solid black'}}>{item.name}</td>
            <td style={{border:'1px solid black'}}>{item.age}</td>
            <td style={{border:'1px solid black'}}>{item.address}</td>
          </tr>
        ))}
      </table>
    );
  }
}

export default StudentInfoComponent;
