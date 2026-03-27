import React from "react";
import WorkCard from "./WorkCard";
import '../index.css'; // ensure CSS is imported

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
    <div className="py-16 px-6 md:px-12 lg:px-20 bg-white-500 emoji-cursor">
      
      <p className="text-center text-sm text-gray-500 uppercase">
        Our Work
      </p>

      <h2 className="text-center text-3xl md:text-4xl font-bold mt-2">
        Creating pathways for success
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {data.map((item, index) => (
          <WorkCard key={index} {...item} />
        ))}
      </div>

    </div>
  );
};

export default OurWorkSection;