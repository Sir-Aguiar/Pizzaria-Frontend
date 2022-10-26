import React, { useEffect } from "react";
import { WorkCard } from "../../styled/WorkCard";
import styles from "./WorkCardSlider.module.css";
import cards from "../../../cards.json";
const WorkCardSlider: React.FC = () => {
  const slide = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const slider = document.querySelector<HTMLDivElement>(".card-slide")!;
    const indicators = document.querySelectorAll<HTMLDivElement>(".indicator");
    const vals: HTMLDivElement[] = [];
    indicators.forEach((val) => {
      vals.push(val);
      val.classList.remove("indicator-active");
    });
    e.currentTarget.classList.add("indicator-active");
    slider.style.transform = `translateX(${vals.indexOf(e.currentTarget) * -100}%)`;
  };
  useEffect(() => {
    const indicators = document.querySelectorAll<HTMLDivElement>(".indicator");
    indicators[0].click();
  }, []);
  return (
    <div className="work-slide">
      <img src="box.png" className="work-ilustration fade fade-left" />
      <div className="slider-container">
        <div className={`${styles.card_slide} card-slide`}>
          {cards.cards.map((card, index) => (
            <WorkCard className="fade fade-right" key={index}>
              <p>{card.text}</p>
              <button>Lorem Ipsum Dolor</button>
            </WorkCard>
          ))}
        </div>
      </div>
      <div className="indicators">
        {cards.cards.map((num, index) => (
          <div
            className="indicator"
            key={index}
            onClick={(e) => {
              slide(e);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default WorkCardSlider;
