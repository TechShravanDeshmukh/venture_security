import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { LiaFileDownloadSolid } from "react-icons/lia";
import CheckIcon from "@mui/icons-material/Check";

function Suzuki() {
  return (
    <div>
      <div className="Container1">
        <div className="inner">
          <IoIosArrowBack className="arrow" />
          <img src="src/assets/Suzuki.png" alt="" />
          <h3>
            SUZUKI <p className="innerpara">SUZUKI Private Limited</p>
          </h3>
        </div>

        <div className="right">
          <div>
            <LiaFileDownloadSolid className="downloadarrow" />
          </div>

          <div>
            <button>Apply now</button>
          </div>
        </div>
      </div>

      <div className="ipodetails">
        <h4 className="iph4">IPO details</h4>
        <div className="inneripo">
          <div className="child">
            <p>Issue size</p>
            <div>₹3,600 - 5,600 Cr.</div>
          </div>

          <div className="child">
            <p>Price range</p>
            <div>₹100 - 200</div>
          </div>

          <div className="child">
            <p>Minimum amount</p>
            <div>₹50,000</div>
          </div>

          <div className="child">
            <p>Lot size</p>
            <div>150 shares/lots</div>
          </div>

          <div className="child">
            <p>Issue dates</p>
            <div>12 Dec - 15 Dec 22</div>
          </div>

          <div className="child">
            <p>Listed on</p>
            <div>15 Dec 22</div>
          </div>

          <div className="child">
            <p>Listed price</p>
            <div>₹150</div>
          </div>

          <div className="child">
            <p>Listing gains</p>
            <div>₹10(10.0%)</div>
          </div>
        </div>
      </div>

      <div className="ipotimeline">
        <h4 className="ipo">IPO timeline</h4>
        <div className="stages">
          <div className="line"></div>
          <CheckIcon className="tick" />
          <CheckIcon className="tick" />
          <CheckIcon className="tick" />
          <CheckIcon className="tick" />
          <CheckIcon className="tick" />
          <CheckIcon className="tick" />
        </div>

        <div className="bottomheading">
          <div className="child">
            <div>Bidding starts</div>
            <p>12 Dec 2023</p>
          </div>

          <div className="child">
            <div>Bidding ends</div>
            <p>12 Dec 2023</p>
          </div>

          <div className="child">
            <div>Allotment finalization</div>
            <p>18 Dec 2023</p>
          </div>

          <div className="child">
            <div>Refund initiaion</div>
            <p>18 Dec 2023</p>
          </div>

          <div className="child">
            <div>Demat transfer</div>
            <p>18 Dec 2023</p>
          </div>

          <div className="child">
            <div>Listing Date</div>
            <p>21 Dec 2023</p>
          </div>
        </div>
      </div>

      <div className="aboutcompany">
        <h4 className="ipo">About the company</h4>
        <div className="companyinfo">
          <p>
            GoAir is an Indian low-cost-carrier based in Mumbai and has five
            main hubs which are Chhatrapati Shivaji International Airport (BOM)
            in Mumbai, Indira Gandhi International Airport (DEL) in New Delhi,
            Kempegowda International Airport (BLR) in Bangalore, Kannur
            International Airport (CNN) in Kannur and Netaji Subhas Chandra Bose
            International Airport (CCU) in Kolkota. The airline was founded in
            the year 2005 and is a wholly-owned subsidiary of the Wadia Group.
            The airline started by operating a small fleet of Airbus A320
            aircraft in all economy and now a fleet size of 55 Airbus A320s. The
            airline's growth has been slow compared to other airlines that were
            established at the same time such as IndiGo and SpiceJet having a
            larger market share, fleet size and destinations served. In October
            2017, the airline became the fifth largest airline in India. GoAir
            currently serves a total of 36 mostly domestic as well as some
            international destinations with more than 330 flights daily and over
            2000 weekly flight. The airline publishes an in-flight magazine
            'Go-getter'. GoAir offers a premium service known as Go Business at
            a higher fare which provides extra services such as larger legroom
            seats, free meals, increased baggage allowance and priority
            boarding. In 2021, the airline rebranded as Go First.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Suzuki;
