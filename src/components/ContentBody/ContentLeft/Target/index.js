import TargetEllipse from "../../../../static/TargetEllipse.png";
import MutualFunds from "../../../../static/MutualFunds.png";
import Gold from "../../../../static/Gold.png";
import Insurance from "../../../../static/Insurance.png";
import Bonds from "../../../../static/Bonds.png";
import AssetType from "./AssetType/index.js";
import ProgressBar from "../../../../static/Rectangle-blue.png";
import "./styles.scss";

const Target = () => {
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
        <img src={TargetEllipse} />
        <div className="total-target">
          <div className="target-amount">1.00L</div>
          <div className="target-label">This Month</div>
        </div>
      </div>
    </div>
  );
};

export default Target;
