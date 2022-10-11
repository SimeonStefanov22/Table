import { useState } from "react";
import "../styles/tableForm.css";

const TableForm = ({ addRows }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  if (typeof addRows === "undefined") return;
  const changeName = (event) => {
    setName(event.target.value);
  };

  const changePhone = (event) => {
    setPhone(event.target.value);
  };

  const changeCompany = (event) => {
    setCompany(event.target.value);
  };

  const submitData = (event) => {
    event.preventDefault();
    const rowData = {
      name,
      phone,
      company,
    };
    addRows(rowData);
    clearState();
  };

  const clearState = () => {
    setName("");
    setPhone("");
    setCompany("");
  };

  return (
    <div className="formWrapper">
      <form className="form">
        <div className="inputWrapper">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            value={name}
            onChange={changeName}
          />
        </div>
        <div className="inputWrapper">
          <label className="label">Phone</label>
          <input
            className="input"
            type="text"
            value={phone}
            onChange={changePhone}
          />
        </div>
        <div className="inputWrapper">
          <label className="label">Company</label>
          <input
            className="input"
            type="text"
            value={company}
            onChange={changeCompany}
          />
        </div>
        <div className="buttonWrapper">
          <button onClick={submitData}>Add to table</button>
        </div>
      </form>
    </div>
  );
};

export default TableForm;
