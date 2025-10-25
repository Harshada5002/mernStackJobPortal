import { User } from "./models/userSchema.js";
import { Job } from "./models/jobSchema.js";

export const seedDB = async () => {
  const usersCount = await User.countDocuments();
  const jobsCount = await Job.countDocuments();

  if (usersCount === 0 && jobsCount === 0) {
    console.log("Seeding database...");

    await User.insertMany([
      { name: "Alice Johnson", email: "alice@example.com", password: "hashedpassword1" },
      { name: "Bob Smith", email: "bob@example.com", password: "hashedpassword2" }
    ]);

    await Job.insertMany([
      { title: "Frontend Developer", company: "Tech Solutions", location: "Remote", description: "Work on React.js and Tailwind CSS projects." },
      { title: "Backend Developer", company: "Innovatech", location: "Onsite", description: "Build APIs with Node.js, Express, and MongoDB." },
      { title: "Fullstack Developer", company: "WebWorks", location: "Hybrid", description: "Work on MERN stack projects from end to end." }
    ]);

    console.log("Database seeded!");
  } else {
    console.log("Database already has data, skipping seeding.");
  }
};

