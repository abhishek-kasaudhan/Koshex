import TargetEllipse from "../../../../static/TargetEllipse.png";
import MutualFunds from "../../../../static/MutualFunds.png";
import Gold from "../../../../static/Gold.png";
import Insurance from "../../../../static/Insurance.png";
import Bonds from "../../../../static/Bonds.png";
import AssetType from "./AssetType/index.js";
import ProgressBar from "../../../../static/Rectangle-blue.png";
import "./styles.scss";
import Chart from 'react-apexcharts'
import { useState } from "react";

const Target = () => {
  const [options,setOptions]=useState({
    legend : {show: false},
    stroke: {
      colors: ["transparent"],
      width: 0
    },
    dataLabels : {
    enabled: false},
    colors: ['#5E7AF7','#E1A04F','#7C6AF6','#6CABF8'],
    plotOptions: {
      pie: {
        customScale: 1
      }
    }})
  const[series,setSeries]=useState([35, 25,32,20])
  return (
    <div className="target-wrapper">
      <div className="target-left">
        <div className="heading">Your Targets</div>
        <div className="content">
          <AssetType name="Mutual Funds" logo={MutualFunds} bar={ProgressBar} />
          <AssetType name="Digital Gold" logo={Gold} bar={ProgressBar} />
          <AssetType name="Insurance" logo={Insurance} bar={ProgressBar} />
          <AssetType name="Bonds" logo={Bonds} bar={ProgressBar} />
        </div>
      </div>
      <div className="target-right">
        <div className="chart">
      <Chart options={options} series={series} type="donut" width="300"  />
      </div>
        <div className="total-target">
          <div className="target-amount">1.00L</div>
          <div className="target-label">This Month</div>
        </div>
      </div>
    </div>
  );
};

export default Target;
