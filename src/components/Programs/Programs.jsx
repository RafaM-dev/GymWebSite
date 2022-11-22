import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

export const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* Header */}
      <div className="programs-header">
        <span className="stroke-text">Explora nuestros</span>
        <span>Programas</span>
        <span className="stroke-text">Para tu objetivo</span>
      </div>

      <div className="program-categories">
        {programsData.map((program, key) => (
          <div className="category" key={key}>
            <img src={program.image} alt="" />
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Unete Ahora</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
