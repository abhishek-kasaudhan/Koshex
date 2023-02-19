import Investor from "../../static/Investor.png";
import Dashboard from "../../static/Dashboard.png";
import Offerings from "../../static/Offerings.png";
import Reporting from "../../static/Reporting.png";
import Transactions from "../../static/Transactions.png";
import "./styles.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">LOGO</div>
      <div className="options">
        <div className="option selected">
          <div className="img img-selected">
            <img src={Dashboard} />
          </div>
          <div className="label">Dashboard</div>
        </div>
        <div className="option">
          <div className="img">
            <img src={Investor} />
          </div>
          <div className="label">Investor</div>
        </div>
        <div className="option">
          <div className="img">
            <img src={Offerings} />
          </div>
          <div className="label">Offerings</div>
        </div>
        <div className="option">
          <div className="img">
            <img src={Reporting} />
          </div>
          <div className="label">Reporting</div>
        </div>
        <div className="option">
          <div className="img">
            <img src={Transactions} />
          </div>
          <div className="label">Transactions</div>
        </div>
      </div>
      <div className="support">24/7 Support</div>
    </div>
  );
};

export default Navigation;
