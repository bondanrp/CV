import education from "../data/education.json";
export default function Education() {
  return (
    <div className="CV__education px-4">
      <h3>Education</h3>
      <hr />
      {education.map((v, i) => {
        return (
          <div key={`education${i}`} className="row w-100">
            <div className="col-12">
              <span className="fw-light sub text-sm">{v.from}</span> -{" "}
              <span className="fw-light mb-0 sub text-sm">{v.to}</span>
              <h6 className="mb-0 nowrap">{v.name}</h6>
              <p className="sub text-sm">
                {v.degree} - {v.major}
              </p>
              <hr />
            </div>
          </div>
        );
      })}
    </div>
  );
}
