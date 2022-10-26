import React from "react";

const TopBanner: React.FC = () => {
  return (
    <div className="image-fader">
      <img src="/food_pana.png" className="ilustration fade fade-left" />
      <div className="readable-content">
        <p className="fade fade-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in rhoncus augue. Cras ut dolor eros. Aenean nec
          faucibus arcu. Nullam nec tincidunt risus. Nunc eget lorem quis massa consectetur.
        </p>
        <button className="fade fade-left">Lorem Ipsum Dolor</button>
      </div>
    </div>
  );
};

export default TopBanner;
