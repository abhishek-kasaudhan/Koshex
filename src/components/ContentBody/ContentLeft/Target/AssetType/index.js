import { useState } from "react";
import More from "../../../../../static/More.png";
import "./styles.scss";

const AssetType = (props) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="asset-type-wrapper">
      <img
        className="more-btn"
        src={More}
        onClick={() => {
          setShowOptions(!showOptions);
        }}
      />
      {showOptions && (
        <div className="img-icon-options">
          <div className="img-icon-option">Edit</div>
          <div className="img-icon-option option-selected">Delete</div>
        </div>
      )}
      <div className="asset-header">
        <div className="img-icon">
          <img src={props.logo} />
        </div>
        <div className="asset-name">{props.name}</div>
      </div>
      <div className="asset-content">
        <div className="asset-left">
          <img src={props.bar} />
        </div>
        <div className="asset-right">
          <div className="asset-right-value">23.1K</div>
          <div className="asset-right-label">of 50K</div>
        </div>
      </div>
    </div>
  );
};

export default AssetType;
