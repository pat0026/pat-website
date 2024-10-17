import React from "react";

function calculateAge(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // Adjust if the birth month hasn't passed yet this year
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

export default function AboutSection() {
  const birthdate = "February 26,1997";
  const age = calculateAge(birthdate);

  return (
    <div
      id="about_section"
      className="p-4 mt-4 container lg:max-w-screen-lg scroll-mt-16 flex flex-col gap-8"
    >
      <h1 className="text-3xl font-extrabold underline underline-offset-8">
        About
      </h1>
      <p className="text-justify">
        I am a researcher of new technologies and a programming language
        enthusiast which fires my drive to learn any programming language. What
        I learn, I apply in my personal projects and work-related tasks which is
        an asset to any company. I aspire to become a software developer which
        is proficient creating any program, may it be low-level programs,
        web-apps or local apps. I am fond of both high and low-level programming
        languages/tools for building applications or servers. Also, I am
        currently enhancing my skills both in the front and backend side so that
        I could apply it in my daily life.
      </p>
      <div className="flex max-md:flex-col gap-4 items-center">
        <div className="avatar">
          <div className="size-52 rounded-xl shadow-xl">
            <img src="RESUME.jpg" alt="Resume 2x2" />
          </div>
        </div>
        <div className="container space-y-4">
          <p className="text-2xl font-bold max-md:text-center">
            CI Engineer & Software Developer
          </p>
          <p className="italic max-md:text-center">
            "Don't regret what you did but regret what you didn't do."
          </p>
          <div className="flex  max-md:flex-col text-sm">
            <ul className="list-disc pl-6 flex-grow">
              <li>
                <span className="font-semibold">Birthday:</span> {birthdate}
              </li>
              <li>
                <span className="font-semibold">Website:</span>{" "}
                <a href="https://pat0026.github.io/WebsitePortfolio/">
                  pat0026.github.io/
                  <wbr />
                  pat-portfolio
                </a>
              </li>
              <li>
                <span className="font-semibold">Phone:</span> +63 9458297391
              </li>
              <li>
                <span className="font-semibold">City:</span> Tayabas, Quezon
              </li>
            </ul>
            <ul className="list-disc pl-6 flex-grow">
              <li>
                <span className="font-semibold">Age:</span> {age}
              </li>
              <li>
                <span className="font-semibold">Degree:</span> Vocational and BS
                Degree
              </li>
              <li className="text-clip">
                <span className="font-semibold">Email:</span>{" "}
                patrick.caparros026
                <wbr />
                @gmail.com
              </li>
              <li>
                <span className="font-semibold">Status:</span> Open to work
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-justify">
        If I don't know the solution to the problem I will not hesitate to tell
        you that I don't know the answer but I assure you that I will find a way
        to know what it is in the future. I'm aspiring to join a company that
        values personal growth, work-life balance and have a healthy environment
        which I could bond with diverse peers. A company that will show me to
        become a better software developer. That is why I strive to enhancing my
        skills towards any company I work with.
      </p>
    </div>
  );
}
