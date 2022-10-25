import axios from "axios";
import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import MainChoicesCard from "../../components/MainChoicesCard/MainChoicesCard";
import "../../styles/home.css";
import { WorkCard } from "../../styled/WorkCard";
import { setFader } from "../../utils/observer-config";
const Home: React.FC = () => {
  const [orders_scroll, setScroll] = useState<number>();
  const [choices, setChoices] = useState<Item[]>([]);
  const slider_container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setFader(document.querySelectorAll<HTMLElement>(".fade"));
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
        <div className="image-fader">
          <img src="/food_pana.png" className="ilustration fade fade-left" />
          <div className="readable-content">
            <p className="fade fade-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in rhoncus augue. Cras ut dolor eros. Aenean
              nec faucibus arcu. Nullam nec tincidunt risus. Nunc eget lorem quis massa consectetur.
            </p>
            <button className="fade fade-left">Lorem Ipsum Dolor</button>
          </div>
        </div>
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
      <section className="about-container">
        <div className="map-container">
          <h1>Nossa localização</h1>
        </div>
        <div className="work">
          <h1 className="title ">Como nós trabalhamos</h1>
          <h2 className="subtitle ">
            Donec ut efficitur sapien. Vivamus ultrices, nulla ut semper tristique, lectus ipsum vulputate nisl, vel
            venenatis nisl erat gravida mauris.
          </h2>
          <WorkCard className="work-card ">
            <h1>Pague como quiser</h1>
            <div>
              <p>
                Donec ut efficitur sapien. Vivamus ultrices, nulla ut semper tristique, lectus ipsum vulputate nisl, vel
                venenatis nisl erat gravida mauris.
              </p>
            </div>
          </WorkCard>
        </div>
      </section>
      <footer className="bg-[#222] h-[450px]"></footer>
    </main>
  );
};

export default Home;
