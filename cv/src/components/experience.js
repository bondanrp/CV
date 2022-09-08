import experience from "../data/experience.json";
import paprika from "../assets/paprika.jpg";
import pensieve from "../assets/pensieve.jpg";
import sribu from "../assets/sribu.jpg";
export default function Experience() {
  function getIcon(v) {
    switch (v) {
      case "paprika":
        return paprika;
      case "pensieve":
        return pensieve;
      case "sribu":
        return sribu;

      default:
        break;
    }
  }
  return (
    <div className="CV__experience px-4">
      <h3>Work Experiences</h3>
      <hr />
      {experience.map((v, i) => {
        return (
          <div key={`experience${i}`} className="row w-100">
            <div className="col-4">
              <div className="d-flex">
                <div className="me-2">
                  <img alt="icon" className="icon" src={getIcon(v.key)} />
                </div>
                <div>
                  <p className="mb-0 text-sm ">{v.title}</p>
                  <h5 className="mb-1 nowrap">{v.name}</h5>
                  <span className="fw-light sub text-sm">{v.from}</span> -{" "}
                  <span className="fw-light mb-0 sub text-sm">{v.to}</span>
                  <p className="sub text-sm">{v.location}</p>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div>
                {v.details.map((v2, i2) => {
                  return (
                    <p key={v2} className="mb-1 text-sm">
                      • {v2}
                    </p>
                  );
                })}
              </div>
              <div>
                {/* <p className="mb-0 sub fw-bold">Stack:</p> */}
                <p className="sub fst-italic text-sm">{v.stack.join(", ")}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
