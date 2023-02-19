import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";
import sample from "../../static/sample.png";
import Profile from "../../static/Profile.png";
import Bell from "../../static/bell.png";
import Search from "../../static/Search.png";
import "./styles.scss";

const ContentBody = () => {
  return (
    <div className="content-body">
      <div className="header">
        <div className="greetings"> Hi User!</div>
        <div className="menu-icons">
          <div className="menu search">
            <img src={Search} />
          </div>
          <div className="menu notification">
            <img src={Bell} />
          </div>
          <div className="menu profile">
            <img src={Profile} />
          </div>
        </div>
      </div>
      <div className="content">
        <ContentLeft />
        <ContentRight />
      </div>
    </div>
  );
};

export default ContentBody;
