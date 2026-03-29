import React from "react";
import WorkCard from "./WorkCard";
import "../index.css";

const OurWorkSection = () => {

  const data = [
    {
      image: "/firstImage.png",
      tag: "School Program",
      title: "Career Shala",
      description:
        "Empowering 9th–12th graders with the mindset and tools to explore careers.",
    },
    {
      image: "/SecondImage.png",
      tag: "Alumni Support",
      title: "Future Ready",
      description:
        "Connecting graduates with industry mentors, internships, and skill-building workshops.",
    },
    {
      image: "/ThirdImage.png",
      tag: "Institutional Capacity",
      title: "Educator Enablement",
      description:
        "Training government school teachers to become career facilitators.",
    },
  ];

  return (
    <section className="bg-white py-14 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20 emoji-cursor">

      {/* SMALL TITLE */}
      <p className="text-center text-xs sm:text-sm text-gray-500 uppercase tracking-widest">
        Our Work
      </p>

      {/* HEADING */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
        Creating pathways for success
      </h2>

      {/* GRID */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        mt-10
      ">
        {data.map((item, index) => (
          <WorkCard key={index} {...item} />
        ))}
      </div>

    </section>
  );
};

export default OurWorkSection;