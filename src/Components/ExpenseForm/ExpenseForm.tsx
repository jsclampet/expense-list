import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Description
        </label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-lable"></label>
        <input type="number" className="form-control" />
      </div>
    </form>
  );
};

export default ExpenseForm;
