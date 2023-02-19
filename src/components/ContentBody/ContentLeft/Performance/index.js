import { useState } from "react";
import graph from "../../../../static/graph.png";
import "./styles.scss";

const Performance = () => {
  const [matrix, setMatrix] = useState([
    {
      name: "Mutual Funds",
      value: "12.33K",
      color: "#557AFF",
    },
    {
      name: "Digital Gold",
      value: "2.33K",
      color: "#ED9C3A",
    },
    {
      name: "Insurance",
      value: "4.53L",
      color: "#8B55FF",
    },
    {
      name: "Bonds",
      value: "33.1K",
      color: "#55ADFF",
    },
  ]);

  const constructPerformaceMatrix = () => {
    return matrix.map((val) => {
      return (
        <div className="matrix">
          <div className="matrix-name">{val.name}</div>
          <div className="matrix-value" style={{ color: val.color }}>
            {val.value}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="performance-wrapper">
      <div className="performace-heading">
        Your Performance
        <div className="option-wrapper">
          <select>
            <option>1 Year</option>
            <option>5 Years</option>
            <option>10 Years</option>
          </select>

          <select>
            <option>Both</option>
            <option>Single</option>
          </select>
        </div>
      </div>
      <div className="performance-content">
        <div className="performance-content-left">
          <img src={graph} />
        </div>
        <div className="performance-content-right">
          <div className="option-selector">
            <div className="option selected">By Asset Class</div>
            <div className="option ">By Licenses</div>
          </div>
          <div className="matrix-container">{constructPerformaceMatrix()}</div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
