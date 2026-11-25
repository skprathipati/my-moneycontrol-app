import React from "react";
import { Link } from "react-router-dom";

const Reports: React.FC = () => {
  return (
    <div>
        <h1>Reports</h1>
        <p>Here are some reports:</p>
        <ul>
            <li>Report 1</li>
            <li>Report 2</li>
            <li>Report 3</li>
        </ul>
        <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}

export default Reports;