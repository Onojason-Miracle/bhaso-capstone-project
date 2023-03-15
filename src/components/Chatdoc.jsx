import React from "react";
import "../mediaq.css";

function Chatdoc() {
    return (
        <>
           <div className="pillreminder">
            
            <div className="PRdiv">
                <div className="PRappDiv">
                    <img  src={"https://res.cloudinary.com/blackgirlmagic/image/upload/v1677673671/Bhaso-Capstone-Project/Design6_yxzyaj.png"} alt="phone app design" className="PRapp"/>
                </div>
                <div className="CHwriteup">
                  <div>
                    <h1 className="PRwriteupH1" id="ChatHeader">CHAT WITH BHASO</h1>
                  </div>

                  <div className="pdivsWrapper">

                    <div className="pdivs">
                    <i class="fa-regular fa-circle-check pdivsicon"></i>
                    <p className="pdivsptag">You can easily share your symptoms and side effect with our medical personnels.</p>
                    </div>

                    <div className="pdivs">
                    <i class="fa-regular fa-circle-check pdivsicon"></i>
                    <p className="pdivsptag">You can contact us to get your ART delivered to you. </p>
                    </div>

                  </div>
                  <div className="PrHref">
                    <a href="https://reactjs.org/" className="PRbtn">Download App</a>
                  </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Chatdoc