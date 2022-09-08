import freelance from "../data/freelance.json";
import kd from "../assets/kd.jpg";
import klik from "../assets/klik.jpg";
export default function Freelance() {
  function getIcon(v) {
    switch (v) {
      case "kd":
        return kd;
      case "klik":
        return klik;
      default:
        break;
    }
  }
  return (
    <div className="CV__experience px-4">
      <h3>Side Projects</h3>
      <hr />
      {freelance.map((v, i) => {
        return (
          <div key={`side${i}`} className="row w-100">
            <div className="col-4">
              <div className="d-flex">
                <div className="me-2">
                  <img alt="icon" className="icon" src={getIcon(v.key)} />
                </div>
                <div>
                  <h5 className="mb-0 nowrap">{v.name}</h5>
                  <span className="fw-light sub text-sm">{v.from}</span> -{" "}
                  <span className="fw-light mb-0 sub text-sm">{v.to}</span>
                  <p className="sub text-sm">{v.location}</p>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="sub text-sm">• {v.details}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
