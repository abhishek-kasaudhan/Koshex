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
    toolbar: {
      show: true,
      tools: {
        download: false
      }
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      dataLabels: {
        total: {
          enabled: false,
          offsetX: 0,
          style: {
            fontSize: '13px',
            fontWeight: 900
          }
        }
      }
    },
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#E5F6FE','#F2F0FE','#FDF2DE','#ECF0FE'],
  grid: {
    show: true,
    borderColor: '#90A4AE',
    strokeDashArray: 2,
    position: 'back',
    xaxis: {
        lines: {
            show: false
        }
    },   
    yaxis: {
        lines: {
            show: true,
            
        }
    },  
    row: {
        colors: undefined,
        opacity: 0.5
    },  
    column: {
        colors: undefined,
        opacity: 0.5
    },  
    padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },  
},
  stroke: {
    width: 0,
    colors: ['#fff']
  },
  title: {
    text: undefined
  },
  xaxis: {
    categories: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
    axisTicks: {
      show: false,
  },
    labels: {
      formatter: function (val) {
        return val
      }
    }
  },
  yaxis: {
    show: false,
    title: {
      text: undefined
    },
    
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val 
      }
    }
  },
  fill: {
    opacity: 1
  },
  legend: {
    show: false,
  }
  })
  const[series,setSeries]=useState([{
    name: 'Marine Sprite',
    data: [5,5,10,10,8,10,8,5,6,5,5,5]
  }, {
    name: 'Striking Calf',
    data: [4,4,4,4,4,4,4,4,4,4,4,4]
  }, {
    name: 'Tank Picture',
    data: [3,3,4,4,4,3,3,3,3,3,3,3]
  }, {
    name: 'Bucket Slope',
    data: [2,2,3,3,3,2,2,2,2,2,2,2]
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
              width="380"
              height='300'
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
