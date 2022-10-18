import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import "../../styles/home.css";
const Home: React.FC = () => {
  const [orders_scroll, setScroll] = useState<number>();
  const slider_container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setScroll(((slider_container.current?.scrollWidth || 0) - (slider_container.current?.offsetWidth || 0) + 20) * -1);
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
            {[1, 2, 3, 4, 5].map((num) => (
              <div className="order-card" key={num}>
                <div className="order-photo">
                  <img src="https://images.vectorhq.com/images/previews/3f6/burger-psd-429706.png" />
                </div>
                <h2>Lorem Ipsum Burger</h2>
                <footer className="card-footer">
                  <span className="price">
                    R$ 12<span className="sub-price">,90</span>
                  </span>
                  <div className="order-add">
                    <MdAdd />
                  </div>
                </footer>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
