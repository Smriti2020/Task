import React from "react";
export const FormTable = ({ dataArray }) => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {dataArray.map((val) => {
          return (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.uname}</td>
              <td>{val.email}</td>
              <td>{val.phone}</td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
