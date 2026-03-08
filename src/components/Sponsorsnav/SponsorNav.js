import React from "react";
import sponnavdata from "./datasponsornav";
import "./sponsornav.css";

const SponsorNav = () => {
  return (
    <div className="sponsornavWrapper">
      <div className="sponsor-page-background"></div>

      <div className="sponsor-content-wrapper">
        <div className="sponsor-title">
          <h1>Sponsors</h1>
        </div>

        <div className="sponsor-list">
          {sponnavdata.map((sponsor, index) => (
            <div
              className="sponsor-detail-card"
              key={`${sponsor.body}-${index}`}
            >
              <div className="sponsor-image-section">
                <img src={sponsor.url} alt={sponsor.body} />
              </div>
              <div className="sponsor-info-section">
                <h2 className="sponsor-tier">{sponsor.title}</h2>
                <p className="sponsor-name">{sponsor.body}</p>
                <p className="sponsor-description">{sponsor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorNav;
