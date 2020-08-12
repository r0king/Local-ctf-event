import React from "react";
import "./innercss.css";
import challenges from "./contentdetails.json";
import EachBox from "./boxesjson";
function ContentSection() {
  return (
    <div>
      {
        /**/

        challenges.Challenges.map((eachchall) => {
          return(
          <div className="thebox loackeach">
            <EachBox title={eachchall.head} src={eachchall.img}  content={eachchall.content} />
            </div>
            
            )
        })
      }
    </div>
  );
}

export default ContentSection;
