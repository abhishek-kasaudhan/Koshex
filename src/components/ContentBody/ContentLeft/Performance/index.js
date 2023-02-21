import { useState } from "react";
import Chart from "react-apexcharts";
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
  const [options,setOptions]=useState({
    chart: {
    type: 'bar',
    height: 350,
    stacked: true,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      dataLabels: {
        total: {
          enabled: true,
          offsetX: 0,
          style: {
            fontSize: '13px',
            fontWeight: 900
          }
        }
      }
    },
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  title: {
    text: 'Fiction Books Sales'
  },
  xaxis: {
    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
    labels: {
      formatter: function (val) {
        return val + "K"
      }
    }
  },
  yaxis: {
    title: {
      text: undefined
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "K"
      }
    }
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    offsetX: 40
  }
  })
  const[series,setSeries]=useState([{
    name: 'Marine Sprite',
    data: [44, 55, 41, 37, 22, 43, 21]
  }, {
    name: 'Striking Calf',
    data: [53, 32, 33, 52, 13, 43, 32]
  }, {
    name: 'Tank Picture',
    data: [12, 17, 11, 9, 15, 11, 20]
  }, {
    name: 'Bucket Slope',
    data: [9, 7, 5, 8, 6, 9, 4]
  }, {
    name: 'Reborn Kid',
    data: [25, 12, 19, 32, 25, 24, 10]
  }])

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
        <Chart
              options={options}
              series={series}
              type="bar"
              width="500"
            />

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
