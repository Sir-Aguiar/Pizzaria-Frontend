import React from "react";
import { MdAdd } from "react-icons/md";
import styles from "./MainChoicesCard.module.css";
const MainChoicesCard: React.FC<{ info: Item }> = ({ info }) => {
  const price = String(info.price.toFixed(2)).replaceAll('.',',').split(',')
  return (
    <div className={styles.order_card}>
      <div className={styles.order_photo}>
        <img src={info.image} />
      </div>
      <h2>{info.name}</h2>
      <footer className={styles.card_footer}>
        <span>
          R$ {price[0]}<span className={styles.sub_price}>,{price[1]}</span>
        </span>
        <div className={styles.order_add}>
          <MdAdd />
        </div>
      </footer>
    </div>
  );
};

export default MainChoicesCard;
