import React from "react";
import { MdDeliveryDining, MdOutlineRestaurantMenu } from "react-icons/md";
import { BarOpt } from "../../styled/BarOpt";
import { IoIosHome } from "react-icons/io";
import styles from "./OptionsBar.module.css";
import { Link } from "react-router-dom";
const OptionBar: React.FC = () => {
  return (
    <div className={styles.opt_bar}>
      <Link className={styles.order_btn} to="/order">
        <MdDeliveryDining />
      </Link>
      <BarOpt>
        <Link to="/">
          <IoIosHome />
          <h1>Início</h1>
        </Link>
      </BarOpt>
      <div className={styles.spacing_element}></div>
      <BarOpt>
        <MdOutlineRestaurantMenu />
        <h1>Cardápio</h1>
      </BarOpt>
    </div>
  );
};

export default OptionBar;
