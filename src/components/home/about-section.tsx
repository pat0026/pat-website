"use client";
import resume from "../../assets/RESUME.jpg";
import Image from "next/image";

function calculateAge(birthdate: string) {
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
  const birthdate: string = "February 26,1997";
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
        I'm a DevOps and software development engineer with a generalist
        background—I work comfortably across the stack, from low-level systems
        and local apps to web applications and infrastructure. As someone who
        loves learning new languages, tools, and frameworks, I bring a
        jack-of-all-trades mindset to both personal projects and professional
        work. I'm currently leaning deeper into DevOps—automation,
        infrastructure-as-code, and platform engineering—with my homelab as a
        space to keep sharpening those skills—while remaining just as open to
        hands-on software development roles. The two disciplines overlap, and I
        enjoy working where they meet.
      </p>
      <div className="flex max-md:flex-col gap-4 items-center">
        <div className="avatar">
          <div className="size-52 rounded-xl shadow-xl">
            <Image src={resume} alt="Resume 2x2" />
          </div>
        </div>
        <div className="container space-y-4">
          <p className="text-2xl font-bold max-md:text-center">
            DevOps Engineer & Software Developer
          </p>
          <p className="italic max-md:text-center">
            &quot;Don&apos;t regret what you did but regret what you didn&apos;t
            do.&quot;
          </p>
          <div className="flex  max-md:flex-col text-sm">
            <ul className="list-disc pl-6 flex-grow">
              <li>
                <span className="font-semibold">Birthday:</span> {birthdate}
              </li>
              <li>
                <span className="font-semibold">Website:</span>{" "}
                <a href="https://pat0026.github.io/pat-website/">
                  pat0026.github.io/
                  <wbr />
                  pat-website
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
        If I don't know the answer to a problem, I'll say so—but I'll also make
        sure I learn it. That curiosity is what pushes me to keep growing, which
        is exactly the kind of environment I'm looking for: a company that
        values personal development, work-life balance, and a healthy culture
        where I can bond with diverse peers and become a better engineer.
      </p>
    </div>
  );
}
