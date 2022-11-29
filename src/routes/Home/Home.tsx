import axios from "axios";
import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import MainChoicesCard from "../../components/MainChoicesCard/MainChoicesCard";
import "../../styles/home.css";
import { setFader } from "../../utils/observer-config";
import WorkCardSlider from "../../components/WorkCardSlider/WorkCardSlider";
import MapContainer from "../../components/MapContainer/MapContainer";
import TopBanner from "../../components/TopBanner/TopBanner";

const Home: React.FC = () => {
  const [orders_scroll, setScroll] = useState<number>();
  const [choices, setChoices] = useState<Item[]>([]);
  const slider_container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFader(document.querySelectorAll<HTMLElement>(".fade"));
    axios.get('http://15.229.47.202:3333/').then(res => {
      console.log(res.data)
    })
  }, []);
  useEffect(() => {
    axios.get("https://pizzaria-v2.herokuapp.com/get-items").then((res) => {
      setChoices(res.data.items);
      setTimeout(() => {
        setScroll(
          ((slider_container.current?.scrollWidth || 0) - (slider_container.current?.offsetWidth || 0) + 20) * -1
        );
      }, 1000);
    });
  }, []);

  return (
    <main className="home-container">
      <section className="top-content">
        <TopBanner />
      </section>
      <section className="main-orders">
        <h1 className="fade fade-top">Principais escolhas</h1>
        <motion.div className="orders-container fade fade-right" ref={slider_container}>
          <motion.div drag="x" dragConstraints={{ right: 0, left: orders_scroll }} className="orders-slider">
            {choices.map((choice) => (
              <MainChoicesCard info={choice} key={choice._id} />
            ))}
          </motion.div>
        </motion.div>
      </section>
      <section className="about-area">
        <div className="map-container">
          <h1 className="fade fade-right my-1">Nossa localização</h1>
          <MapContainer />
        </div>
        <div className="work-container">
          <h1 className="work-title fade fade-left">Lorem Ipsum Dolor</h1>
          <WorkCardSlider />
        </div>
      </section>
      <footer className="bg-[#222] h-[450px]"></footer>
    </main>
  );
};

export default Home;
