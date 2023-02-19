import { useState } from "react";
import Sip from "./Sip";
import "./styles.scss";

const InvestorDetails = () => {
  const [rowData, setRowData] = useState([
    {
      name: "Username 1",
      amount: "20,000.00",
      sip: "05",
      transaction: "04 Oct 2022",
      status: "active",
    },
    {
      name: "Username 2",
      amount: "50,000.00",
      sip: "18",
      transaction: "29 Sep 2022",
      status: "active",
    },
    {
      name: "Username 3",
      amount: "45,800.60",
      sip: "14",
      transaction: "20 Sep 2022",
      status: "active",
    },
    {
      name: "Username 4",
      amount: "80,000.40",
      sip: "02",
      transaction: "18 sep 2022",
      status: "inactive",
    },
  ]);

  let contructTableRows = () => {
    return rowData.map((val) => {
      return (
        <div className="table-row">
          <div className="name">{val.name}</div>
          <div className="investment">{val.amount}</div>
          <div className="sip">{val.sip}</div>
          <div className="transactions">{val.transaction}</div>
          <div className="status">
            {val.status === "active" ? (
              <div className="active">Active</div>
            ) : (
              <div className="inactive">In-active</div>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="investor-details">
      <div className="investor-header">
        <div className="title">Investor Details</div>
        <div className="search">
          <input placeholder="Search By PAN, Email, Mobile No." />
        </div>
        <div className="button add">Add</div>
        <div className="button view">View All</div>
        <div className="button mututal-funds">
          <select value="Mutual Funds">
            <option value="Orange">Mutual Funds</option>
            <option value="Radish">Equity</option>
          </select>
        </div>
        <div className="button download">Download</div>
      </div>
      <div className="investor-table">
        <div className="table-row investment-table-header">
          <div className="name">Investor's Name</div>
          <div className="investment">Total Investments</div>
          <div className="sip">Active SIPs</div>
          <div className="transactions">Last Transactions</div>
          <div className="status">Profile Status</div>
        </div>
        {contructTableRows()}
      </div>
      <Sip />
    </div>
  );
};

export default InvestorDetails;
