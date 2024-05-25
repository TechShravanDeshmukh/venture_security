import React from "react";
import Fetch from "../../Fetch";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="wrap">
      <header className="heading">
        <h4>Company/Issue Date</h4>
        <h4 cl>Issue size</h4>
        <h4>Price range</h4>
        <h4>Min invest/qty</h4>
      </header>

      <div className="c1">
        <div className="goair">
          <Link to="/1">
            <img src="src/assets/goair.jpg" />
          </Link>
          <h3>
            GO AIR<p className="date">4th - 7th Oct 2022</p>
          </h3>
        </div>

        <div className="issuesize">
          <h3>₹3600 Crores</h3>
        </div>

        <div className="pricerange">
          <h3>₹50-60</h3>
        </div>

        <div className="mininvest">
          <h3>₹50,000</h3>
          <p>100 Shares/5 Lots</p>
        </div>
      </div>
      <hr />

      <div className="c2">
        <div className="goair">
          <Link to="/8">
            <img src="src/assets/Oyo.jpg" alt="" />
          </Link>

          <h3>
            <Link to="/8" className="link">
              OYO
            </Link>
            <p className="date">4th - 7th Oct 2022</p>
          </h3>
        </div>

        <div className="issuesize">
          <h3>₹3600 Crores</h3>
        </div>

        <div className="pricerange">
          <h3>₹50-60</h3>
        </div>

        <div className="mininvest">
          <h3>₹50,000</h3>
          <p>100 Shares/5 Lots</p>
        </div>
      </div>
      <hr />

      <div className="c3">
        <div className="goair">
          <Link to="BMS">
            <img src="src/assets/BMS.png" alt="" />
          </Link>

          <h3>
            <Link to="BMS" className="link">
              BOOK MY SHOW
            </Link>
            <p className="date">4th - 7th Oct 2022</p>
          </h3>
        </div>

        <div className="issuesize">
          <h3>₹3600 Crores</h3>
        </div>

        <div className="pricerange">
          <h3>₹50-60</h3>
        </div>

        <div className="mininvest">
          <h3>₹50,000</h3>
          <p>100 Shares/5 Lots</p>
        </div>
      </div>
      <hr />

      <div className="c2">
        <div className="goair">
          <Link to="/4">
            <img src="src/assets/Byjus.png" alt="" />
          </Link>

          <h3>
            <Link to="/4" className="link">
              BYJUS
            </Link>
            <p className="date">4th - 7th Oct 2022</p>
          </h3>
        </div>

        <div className="issuesize">
          <h3>₹3600 Crores</h3>
        </div>

        <div className="pricerange">
          <h3>₹50-60</h3>
        </div>

        <div className="mininvest">
          <h3>₹50,000</h3>
          <p>100 Shares/5 Lots</p>
        </div>
      </div>
      <hr />

      <div className="c2">
        <div className="goair">
          <Link>
            <img src="src/assets/Hyundai.png" alt="" />
          </Link>
          <h3>
            <Link to="/6" className="link">
              HYUNDAI
            </Link>
            <p className="date">4th - 7th Oct 2022</p>
          </h3>
        </div>

        <div className="issuesize">
          <h3>₹3600 Crores</h3>
        </div>

        <div className="pricerange">
          <h3>₹50-60</h3>
        </div>

        <div className="mininvest">
          <h3>₹50,000</h3>
          <p>100 Shares/5 Lots</p>
        </div>
      </div>
      <hr />

      <div className="c2">
        <div className="goair">
          <Link to="/10">
            <img src="src/assets/Suzuki.png" alt="" />
          </Link>

          <h3>
            <Link to="/10" className="link">
              SUZUKI
            </Link>
            <p className="date">4th - 7th Oct 2022</p>
          </h3>
        </div>

        <div className="issuesize">
          <h3>₹3600 Crores</h3>
        </div>

        <div className="pricerange">
          <h3>₹50-60</h3>
        </div>

        <div className="mininvest">
          <h3>₹50,000</h3>
          <p>100 Shares/5 Lots</p>
        </div>
      </div>
      <hr />

      <div className="c2">
        <div className="goair">
          <Link to="/3">
            <img src="src/assets/Bajaj_Energy_logo.jpg" alt="" />
          </Link>

          <h3>
            <Link to="/3" className="link">
              BAJAJ ENERGY
            </Link>
            <p className="date">4th - 7th Oct 2022</p>
          </h3>
        </div>

        <div className="issuesize">
          <h3>₹3600 Crores</h3>
        </div>

        <div className="pricerange">
          <h3>₹50-60</h3>
        </div>

        <div className="mininvest">
          <h3>₹50,000</h3>
          <p>100 Shares/5 Lots</p>
        </div>
      </div>
      <hr />

      <div className="c2">
        <div className="goair">
          <Link to="/5">
            <img src="src/assets/Honda1.png" alt="" />
          </Link>

          <h3>
            <Link to="/5" className="link">
              HONDA
            </Link>
            <p className="date">4th - 7th Oct 2022</p>
          </h3>
        </div>

        <div className="issuesize">
          <h3>₹3600 Crores</h3>
        </div>

        <div className="pricerange">
          <h3>₹50-60</h3>
        </div>

        <div className="mininvest">
          <h3>₹50,000</h3>
          <p>100 Shares/5 Lots</p>
        </div>
      </div>
      <hr />

      <div className="c2">
        <div className="goair">
          <Link to="/7">
            <img src="src/assets/Ola.jpg" alt="" />
          </Link>

          <h3>
            <Link to="/7" className="link">
              OLA
            </Link>
            <p className="date">4th - 7th Oct 2022</p>
          </h3>
        </div>

        <div className="issuesize">
          <h3>₹3600 Crores</h3>
        </div>

        <div className="pricerange">
          <h3>₹50-60</h3>
        </div>

        <div className="mininvest">
          <h3>₹50,000</h3>
          <p>100 Shares/5 Lots</p>
        </div>
      </div>
      <hr />

      <div className="c2">
        <div className="goair">
          <Link to="/9">
            {" "}
            <img src="src/assets/Scaler.jpg" alt="" />
          </Link>

          <h3>
            <Link to="/9" className="link">
              SCALER
            </Link>
            <p className="date">4th - 7th Oct 2022</p>
          </h3>
        </div>

        <div className="issuesize">
          <h3>₹3600 Crores</h3>
        </div>

        <div className="pricerange">
          <h3>₹50-60</h3>
        </div>

        <div className="mininvest">
          <h3>₹50,000</h3>
          <p>100 Shares/5 Lots</p>
        </div>
      </div>
      <hr />

      <div className="c2">
        <div className="goair">
          <Link to="/2">
            <img src="src/assets/Zomato.jpg" alt="" />
          </Link>

          <h3>
            <Link to="/2" className="link">
              ZOMATO
            </Link>
            <p className="date">4th - 7th Oct 2022</p>
          </h3>
        </div>

        <div className="issuesize">
          <h3>₹3600 Crores</h3>
        </div>

        <div className="pricerange">
          <h3>₹50-60</h3>
        </div>

        <div className="mininvest">
          <h3>₹50,000</h3>
          <p>100 Shares/5 Lots</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Landing;
