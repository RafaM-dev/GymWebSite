import { Header } from "../Header/Header";
import "./Hero.css";
import Hero_image from "../../assets/hero_image.png";
import Hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* mejor ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>El mejor gimnasio en la ciudad</span>
        </div>

        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Moldea </span>
            <span>Tu</span>
          </div>
          <div>
            <span>Cuerpo Ideal</span>
          </div>
          <div>
            <span>
              Aquí te ayudaremos a dar forma y construir tu cuerpo ideal y vivir
              tu vida al máximo
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <CountUp end={140} start={100} duration="2" prefix="+" />
            </span>
            <span>Coach expertos</span>
          </div>
          <div>
            <span>
              <CountUp end={978} start={800} duration="2" prefix="+" />
            </span>
            <span>Miembros Inscritos</span>
          </div>
          <div>
            <span>
              <CountUp end={50} start={0} duration="2" prefix="+" />
            </span>
            <span>Programas fitness</span>
          </div>
        </div>

        {/* buttons */}
        <div className="hero-buttons">
          <button className="btn">Empecemos</button>
          <button className="btn">Ver mas</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Unete Ahora</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="Heart" />
          <span>Ritmo cardiaco</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={Hero_image} alt="hero_image" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={Hero_image_back}
          alt="hero_image_black"
          className="hero-image-back"
        />

        {/* calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calorias Quemadas</span>
            <span>220</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
