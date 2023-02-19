import "./styles.scss";

const SipCard = (props) => {
  return (
    <div className="sip-card-wrapper">
      <div className="card-header" style={{ color: props.textColor }}>
        {props.title}
      </div>
      <div className="card-content">
        <div className="card-content-left section">
          <div className="sip-label">Total Amount</div>
          <div className="sip-value">{props.value}</div>
        </div>
        <div className="card-content-right section">
          <div className="sip-label">Total No. of SIPs</div>
          <div className="sip-value">{props.sips}</div>
        </div>
      </div>
      <div
        className="card-view-all"
        style={
          ({ color: props.textColor },
          { backgroundColor: props.backgroundColor })
        }
      >
        View All
      </div>
    </div>
  );
};

export default SipCard;
