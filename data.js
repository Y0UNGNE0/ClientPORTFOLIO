const data = {
  profile: {
    name: "Nileena Ramesh",
    description:
      "Diligent, adaptable professional with proven skills in collaboration and problem-solving. Achieved success in project management and consistently meets deadlines. Excellent communication and leadership abilities.",
    experience: [
      { role: "DevOps Engineer", years: "6 Years" },
      // Add more experience entries as needed
    ],
    skillsets: [
      { skill: "Python", experience: "5 Years", disabled: true },
      { skill: "Java", experience: "4 Years", disabled: true },
      { skill: "AWS", experience: "3 Years", disabled: true },
      { skill: "CI and CD", experience: "3 Years", disabled: true },
      // Add more skillsets as needed
    ],
  },
  vettedSkills: 3,
  professionalSummary: 6,
  applicationTools: [
    // Add application tools data as needed
  ],
  workHistory: [
    {
      date: "Jan 2022 - Present",
      duration: "1yr 5 months",
      position: "DevOps Engineer",
      company: "Neoito Technologies",
    },
    {
      date: "Jan 2022 - Present",
      duration: "1yr 5 months",
      position: "Consultant",
      company: "Deloitte",
    },
    // Add more work history entries as needed
  ],
  additionalSkills: [
    { name: "AWS (Amazon Web Services)", image: "aws-icon-url" },
    // Add more additional skills as needed
  ],
};

export default data;
