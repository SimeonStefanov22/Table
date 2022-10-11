import { useState } from "react";
import TableForm from "./TableForm";
import "../styles/table.css";

const Table = () => {
  const mockedData = [
    { name: "Ivo", phone: "111111", company: "Company1" },
    { name: "Pesho", phone: "222222", company: "Company2" },
    { name: "Gosho", phone: "333333", company: "Company3" },
  ];
  const [tableData, setTableData] = useState(mockedData);

  const tableRows =
    tableData &&
    tableData.map((data) => {
      return (
        <tr key={Math.random()}>
          <td>{data.name}</td>
          <td>{data.phone}</td>
          <td>{data.company}</td>
        </tr>
      );
    });

  const addRows = (data) => {
    if (!data.name || !data.phone || !data.company) return;
    const updatedData = [...tableData];
    updatedData.push(data);
    setTableData(updatedData);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <TableForm addRows={addRows} />
    </div>
  );
};

export default Table;
