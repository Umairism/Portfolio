import React from "react";
import { studiesData } from "../../data/studiesData";
import StudyCard from "./StudyCard";

export default function StudiesSection() {
  return (
    <section id="panel-studies" role="tabpanel" aria-labelledby="tab-studies">
      <h2 style={{ display: "none" }}>Studies and Coursework</h2>
      <div className="studies-grid">
        {studiesData.map((study) => (
          <StudyCard key={study.id} study={study} />
        ))}
      </div>
    </section>
  );
}
