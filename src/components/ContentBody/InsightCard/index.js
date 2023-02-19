import "./styles.scss";

const InsightCard = (props) => {
  return (
    <div
      className="insight-card-wrapper"
      style={{ backgroundColor: props.color }}
    >
      <div className="insight-name">Market Data</div>
      <div className="insight-content">
        Detailed Market Data For Your APIs, Focused On Helping You Build
        Features And Provide Run-Time Data With No Lag
      </div>
      <div className="insight-button">Read More...</div>
    </div>
  );
};

export default InsightCard;
