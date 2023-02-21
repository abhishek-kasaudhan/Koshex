import Ellipse from "../../../../../static/Ellipse.png";
import SipCard from "../SipCard";
import Chart from 'react-apexcharts'
import "./styles.scss";
import { useState } from "react";

const Sip = () => {
  const [options,setOptions]=useState({
    legend : {show: false},
    stroke: {
      colors: ["transparent"],
      width: 0
    },
    dataLabels : {
    enabled: false},
    colors: ['#5E7AF7','#E1A04F'],
    plotOptions: {
      pie: {
        customScale: 1
      }
    }})
  const[series,setSeries]=useState([47,53])
  return (
    <div className="sip-wrapper">
      <div className="sip-left">
        <div className="sip-heading">Your SIPs</div>
        <div className="sip-content">
          <SipCard
            title="Active SIPs"
            value="23.1K"
            sips="10"
            textColor="#577CFF"
            backgroundColor="#E8EEFF"
          />
          <SipCard
            title="Upcoming SIPs"
            value="23.1K"
            sips="10"
            textColor="#ED9C3A"
            backgroundColor="#FFF1DC"
          />
        </div>
      </div>
      <div className="sip-right">
        <div className="chart">
      <Chart options={options} series={series} type="donut" width="300"  />
      </div>
        <div className="total-sips">
          <div className="sip-amount">1.00L</div>
          <div className="sip-label">Total SIPs</div>
        </div>
      </div>
    </div>
  );
};

export default Sip;
