import React from "react";

const Resume = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Jonathan Maxen</h2>
      <p className="text-center text-gray-600">Full Stack Developer | Charlotte, NC | 213.369.8284</p>

      {/* Download Resume Button */}
      <div className="text-center my-6">
        <a
          href="/assets/JonathanMaxen_Resume.pdf" // Ensure the file exists in /public/assets
          download="Jonathan_Maxen_Resume.pdf"
          className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700"
        >
          Download Resume
        </a>
      </div>

      {/* Profile Summary */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Profile</h3>
        <p className="text-gray-700">
          Detail-oriented and highly organized **junior web developer** with a background in administrative support and project coordination.
          Currently completing a **coding bootcamp**, gaining hands-on experience in **JavaScript, React, Node.js, and PostgreSQL** through full-stack projects.  
          Passionate about building user-friendly applications and eager to leverage transferable skills—organization, communication, and attention to detail—into a career in software development.
        </p>
      </div>

      {/* Skills & Proficiencies */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Technical Skills</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-disc pl-5">
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>PostgreSQL</li>
          <li>Git & GitHub</li>
          <li>REST APIs</li>
          <li>Tailwind CSS</li>
          <li>Vite</li>
        </ul>
      </div>

      {/* Experience Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Work Experience</h3>

        {/* Mark J Williams Design */}
        <div className="mb-4">
          <h4 className="text-xl font-semibold">Head Designer - Mark J Williams Design</h4>
          <p className="text-gray-600">Los Angeles | April 2016 — December 2024</p>
          <ul className="list-disc pl-5">
            <li>Led design projects for branding, web design, and marketing materials, ensuring high-quality visuals.</li>
            <li>Designed and maintained company and client websites, applying modern UI/UX principles.</li>
            <li>Managed project timelines, ensuring efficient workflows and timely deliveries.</li>
            <li>Provided art direction and creative strategy, enhancing brand visibility.</li>
          </ul>
        </div>

        {/* Personal Assistant - Edith Lebet */}
        <div className="mb-4">
          <h4 className="text-xl font-semibold">Personal Assistant - Edith Lebet</h4>
          <p className="text-gray-600">October 2014 — February 2016</p>
          <ul className="list-disc pl-5">
            <li>Managed and responded to emails, phone calls, and correspondence.</li>
            <li>Coordinated and scheduled meetings, ensuring clear and professional communication.</li>
            <li>Oversaw calendars, booking travel and accommodations to align with scheduling needs.</li>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Education</h3>
        <p><strong>Bachelor of Fine Arts - University of North Carolina Greensboro</strong></p>
        <p className="text-gray-600">April 2012 — December 2016</p>
        <ul className="list-disc pl-5">
          <li>Dean's List all semesters.</li>
          <li>Maintained a 4.0 GPA.</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-2">Let's Connect</h3>
        <p>
          <a href="mailto:maxen.jonathan@gmail.com" className="text-blue-500">
            maxen.jonathan@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Resume;
