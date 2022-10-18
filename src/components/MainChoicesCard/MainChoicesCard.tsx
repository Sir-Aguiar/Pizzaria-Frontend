import React from "react";
import { MdAdd } from "react-icons/md";
import styles from "./MainChoicesCard.module.css";
const MainChoicesCard: React.FC = () => {
  return (
    <div className={styles.order_card}>
      <div className={styles.order_photo}>
        <img src="https://images.vectorhq.com/images/previews/3f6/burger-psd-429706.png" />
      </div>
      <h2>Lorem Ipsum Burger</h2>
      <footer className={styles.card_footer}>
        <span>
          R$ 12<span className={styles.sub_price}>,90</span>
        </span>
        <div className={styles.order_add}>
          <MdAdd />
        </div>
      </footer>
    </div>
  );
};

export default MainChoicesCard;
