import axios from "axios";
import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import MainChoicesCard from "../../components/MainChoicesCard/MainChoicesCard";
import "../../styles/home.css";
const Home: React.FC = () => {
  const [orders_scroll, setScroll] = useState<number>();
  const [choices, setChoices] = useState<Item[]>([]);
  const slider_container = useRef<HTMLDivElement>(null);
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
          <img src="/food_pana.png" className="ilustration" />
          <div className="readable-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in rhoncus augue. Cras ut dolor eros. Aenean
              nec faucibus arcu. Nullam nec tincidunt risus. Nunc eget lorem quis massa consectetur.
            </p>
            <button>Lorem Ipsum Dolor</button>
          </div>
        </div>
      </section>
      <section className="main-orders">
        <h1>Principais escolhas</h1>
        <motion.div className="orders-container" ref={slider_container}>
          <motion.div drag="x" dragConstraints={{ right: 0, left: orders_scroll }} className="orders-slider">
            {choices.map((choice) => (
              <MainChoicesCard info={choice} key={choice._id} />
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
