import Ellipse from "../../../../../static/Ellipse.png";
import SipCard from "../SipCard";
import "./styles.scss";

const Sip = () => {
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
        <img src={Ellipse} />
        <div className="total-sips">
          <div className="sip-amount">1.00L</div>
          <div className="sip-label">Total SIPs</div>
        </div>
      </div>
    </div>
  );
};

export default Sip;
