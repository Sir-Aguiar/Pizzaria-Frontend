import axios from "axios";
import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import MainChoicesCard from "../../components/MainChoicesCard/MainChoicesCard";
import "../../styles/home.css";
import { WorkCard } from "../../styled/WorkCard";
import { setFader } from "../../utils/observer-config";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
const Home: React.FC = () => {
  const [orders_scroll, setScroll] = useState<number>();
  const [choices, setChoices] = useState<Item[]>([]);
  const slider_container = useRef<HTMLDivElement>(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_API,
  });
  const defaultPosition = { lat: 40.805857281879284, lng: -74.14535546628153 };
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
      <section className="about-area">
        <div className="map-container">
          <h1 className="fade fade-right my-1">Nossa localização</h1>
          <div className="h-[90%] w-full p-1 fade fade-right transition-all duration-300 ">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%", border: "1px solid black", borderRadius: "5px" }}
                center={defaultPosition}
                zoom={15}
              >
                <Marker position={defaultPosition} label={{ text: "Lorem Ipsum",className:"place-marker" }}  />
              </GoogleMap>
            ) : (
              "Nada"
            )}
          </div>
        </div>
        <div className="work-container">
          <h1 className="work-title fade fade-left">Lorem Ipsum Dolor</h1>
          <div className="work-slide">
            <img src="box.png" className="work-ilustration fade fade-left" />
            <div className="slider-container">
              <div className="card-slide">
                <WorkCard className="fade fade-right">
                  <div className="indicators">
                    <div className="indicator indicator-active"></div>
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla ullamcorper vestibulum.
                    Nulla ac leo.
                  </p>
                  <button>Lorem Ipsum Dolor</button>
                </WorkCard>
                <WorkCard className="fade fade-right">
                  <div className="indicators">
                    <div className="indicator"></div>
                    <div className="indicator indicator-active"></div>
                    <div className="indicator"></div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla ullamcorper vestibulum.
                    Nulla ac leo.
                  </p>
                  <button>Lorem Ipsum Dolor</button>
                </WorkCard>
                <WorkCard className="fade fade-right">
                  <div className="indicators">
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                    <div className="indicator indicator-active"></div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla ullamcorper vestibulum.
                    Nulla ac leo.
                  </p>
                  <button>Lorem Ipsum Dolor</button>
                </WorkCard>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#222] h-[450px]"></footer>
    </main>
  );
};

export default Home;
