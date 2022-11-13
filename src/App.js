import React from "react";

import "./App.css";
import profile from './images/profile.png'
import arrow from './images/arrow.png'
function App() {

  return (
    <div>
      <div className="headerr">
        <div className="navbar">
          <div className="heroImage">
            <div className="logo">
              <image className="tudeDude" alt=""></image>
            </div>
            <div className="nav">
              <p className="assignment">My Assignment</p>
              <p className="chat">Chat with Mentor</p>
              <div className="profile">
              <div className="profileImageView">
                <img className="profileImage" src={profile} alt=""></img>
                </div>
                <p className="profileName">ProfileName</p>
                <div className="keyarrow">
                <img className="arrow" src={arrow} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="referAndEarn">
        <p className="referAndEarnText">
          UI/UX > Refer & Earn > Friends Referred
        </p>
      </div>
      <div className="yourreffercode">
        <p className="reffercodeText">Your Referral Code</p>
        <div className="reffercodeView">
          <p className="reffercode">EDCH54</p>
        </div>
      </div>
      <div className="dashboardView">
        <div className="balanceView">
          <p className="walletBalance">Wallet Balance</p>
          <p className="mrp">₹ 500</p>
        </div>
      </div>
      <div>
        {" "}
        <p className="friends">Friends who enrolled(3)</p>
      </div>
      <div className="cartscroableview">
        <div className="cardview">
          <div className="card">
            <div className="refferalAmountView">
              <p className="refferalAmount">Referral Amount</p>
              <p className="amount">₹185</p>
            </div>
            <div className="javaView">
              <p className="java">Java</p>
            </div>
            <div className="IllustratorView">
              <p className="Illustrator">Illustrator</p>
            </div>
            <div className="mernView">
              <p className="mern">MERN</p>
            </div>
            <div className="photoshopView">
              <p className="photoshop">Photoshop</p>
            </div>
            <div className="pythonView">
              <p className="python">Python</p>
            </div>
            <div className="uiuxView">
              <p className="uiux">UI/UX</p>
            </div>
            <p className="coursesEnrolled">Courses Enrolled(6)</p>
            <p className="card1date">14 Sep, 2022</p>
            <p className="card1name">Dhiraj Saxsena</p>
          </div>

          <div className="card">
            <div className="refferalAmountView2">
              <p className="refferalAmount2">Referral Amount</p>
              <p className="amount">₹485</p>
            </div>
            <div className="javaView2">
              <p className="java">Java</p>
            </div>
            <div className="IllustratorView2">
              <p className="Illustrator">Illustrator</p>
            </div>
            <div className="mernView2">
              <p className="mern">MERN</p>
            </div>
            <div className="photoshopView2">
              <p className="photoshop">Photoshop</p>
            </div>
            <div className="pythonView2">
              <p className="python">Python</p>
            </div>
            <div className="uiuxView2">
              <p className="uiux">UI/UX</p>
            </div>
            <p className="coursesEnrolled2">Courses Enrolled(23)</p>
            <p className="card2date">15 Sep, 2022</p>
            <p className="card2name">Subhash Mishra</p>
           
              <div className="CplusolusView">
                <p className="Cplusolus">C++</p>
              </div>
           
          </div>
          <div className="cardd">
            <div className="refferalAmountView2">
              <p className="refferalAmount2">Referral Amount</p>
              <p className="amount">₹485</p>
            </div>
            <div className="javaView2">
              <p className="java">Java</p>
            </div>
            <div className="IllustratorView2">
              <p className="Illustrator">Illustrator</p>
            </div>
            <div className="mernView2">
              <p className="mern">MERN</p>
            </div>
            <div className="photoshopView2">
              <p className="photoshop">Photoshop</p>
            </div>
            <div className="pythonView2">
              <p className="python">Python</p>
            </div>
            <div className="uiuxView2">
              <p className="uiux">UI/UX</p>
            </div>
            <p className="coursesEnrolled2">Courses Enrolled(23)</p>
            <p className="card2date">15 Sep, 2022</p>
            <p className="card2name">Prafull Kumar</p>
           
              <div className="CplusolusView">
                <p className="Cplusolus">C++</p>
              </div>
              {/* <div className="rectangleView">
           <div className="rectangle"></div>
           </div> */}
          </div>
        </div>
        
      </div>
      <div>
          <p className="termAndCondition">Terms & Conditions</p>
        </div>
    </div>
  );
}

export default App;
