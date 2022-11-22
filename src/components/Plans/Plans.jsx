import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

export const Plans = () => {
  return (
    <div className="plans-container" id="plans">
    <div className="blur plans-blur-1"></div>
    <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">LISTO PARA INCICIAR</span>
        <span>TU VIAJE</span>
        <span className="stroke-text">AHORA CON NOSOTROS</span>
      </div>

      {/* PLANS CARD */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            <img src={plan.icon} alt="" />
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="" />
                  <span >{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>Mira mas beneficios -> </span>
            </div>
            <button className="btn">Unete Ahora</button>
          </div>
        ))}
      </div>
    </div>
  );
};
