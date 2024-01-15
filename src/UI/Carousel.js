import React, { useState } from 'react'
import styles from "./Carousel.module.css"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const MAX_VISIBILITY = 2;

const Carousel = ({ children }) => {
    const [active, setActive] = useState(0);
    const count = React.Children.count(children);
  
    return (
      <div className={styles.carousel}>
        {active > 0 && <button className={`${styles.nav} ${styles.left}`} onClick={() => setActive(i => i - 1)}><IoIosArrowBack /></button>}
        {React.Children.map(children, (child, i) => (
          <div className={styles.cardContainer} style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 8,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointerEvents': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
            {child}
          </div>
        ))}
        {active < count - 1 && <button className={`${styles.nav} ${styles.right}`} onClick={() => setActive(i => i + 1)}><IoIosArrowForward /></button>}
      </div>
    );
  };
  
  export default Carousel;