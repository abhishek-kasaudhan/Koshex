import InvestorDetails from "./InvestorDetails";
import Performance from "./Performance";
import "./styles.scss";
import Target from "./Target";

const ContentLeft = () => {
  return (
    <div className="content-left-wrapper">
      <Target />
      <Performance />
      <InvestorDetails />
    </div>
  );
};

export default ContentLeft;
