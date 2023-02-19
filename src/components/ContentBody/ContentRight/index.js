import InsightCard from "../InsightCard";
import "./styles.scss";

const ContentRight = () => {
  return (
    <div className="content-right-wrapper">
      <div className="contact-card">
        <div className="contact-name">Abhishek Kasaudhan</div>
        <div className="contact-number">+91 9876543210</div>
      </div>

      <div className="insights">Market Insights</div>
      <InsightCard color="#F7F9FF" />
      <InsightCard color="#FFFCF8" />
      <InsightCard color="#F8F7FF" />
      <InsightCard color="#F4FCFF" />
    </div>
  );
};

export default ContentRight;
