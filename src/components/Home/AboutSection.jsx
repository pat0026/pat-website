import React from "react";

export default function AboutSection() {
  return (
    <div id="about_section" className="p-4 container max-w-screen-lg scroll-mt-16">
      <h1>About</h1>
      <p>
        I see myself as a researcher of new technologies which I apply in my
        personal projects and any work-related tasks which is an asset to any
        company. I aspire to become and embedded engineer which is knowledgable
        in both hardware and software of any embedded systems. I am fond of of
        both high and low level programming for building applications or
        servers. Also, I am currently enhancing my skills in the embedded
        systems so that I could apply it to my daily life. One of my goal is to
        create an emebedded system that will help me monitor, alert and automate
        any tasks. I strive to enchance my skills towards any company I apply
        to.
      </p>
      <div className="flex flex-col md:flex-row">
        <div className="avatar">
          <div className="w-48 rounded-xl">
            <img src="RESUME.jpg" alt="Resume 2z2" />
          </div>
        </div>
        <div className="container">
          <h2>CI Engineer & Developer</h2>
          <p>Don't regret what you did but regret what you didn't do.</p>
          <div className="flex flex-grow flex-col md:flex-row">
            <ul className="list-disc pl-8">
              <li>Birthday: February 26,1997</li>
              <li>Website: pat0026.github.io/pat-portfolio</li>
              <li>Phone: +63 9458297391</li>
              <li>City: Tayabas, Quezon</li>
            </ul>
            <ul className="list-disc pl-8">
              <li>Age: 28</li>
              <li>Degree: Vocational and BS Degree</li>
              <li>Email: patrick.caparros026@gmail.com</li>
              <li>Status: Open to work</li>
            </ul>
          </div>
        </div>
      </div>
      <p>
        If by any chance, I don't meet your expectation for the position, please
        reconsider for I can learn and adapt to acquire the set of skills you
        need. If I don't know the answer to your question I will not hesitate to
        tell you that I don't know the answer but I assure you that I will find
        a way to know the answer at some point in time.
      </p>
    </div>
  );
}
