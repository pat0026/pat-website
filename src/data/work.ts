import WorkItem from "@/type/work"

const workItems: readonly WorkItem[] = [
  {
    subject: "DevOps Engineer",
    year: "Mar. 2,2026 - Jun. 24, 2026",
    location: "iRely-Philippines, Inc.",
    description_list: [
      "Design, implement, and maintain robust automated CI/CD pipelines using Azure DevOps and GitHub Actions to accelerate secure software deployment.",
      "Utilize advanced PowerShell and Shell/Bash scripting for infrastructure provisioning, configuration management, and operational security automation",
      "Administer and support both Linux and Windows operating environments.",
      "Manage the full lifecycle of containerized applications using Docker, ensuring security hardening best practices",
      "Manage access control and security permissions using Role-Based Access Control (RBAC)."

    ],
  },
  {
    subject: "Senior Software Engineer",
    year: "Dec. 10,2024 - Feb. 10,2026",
    location: "eData Services Phils., Inc.",
    description_list: [
      "Design and develop application interfaces as small standalone functionality and as part of larger integrated applications.",
      "Develop SQL functions and design database objects to support application functionality.",
      "Working knowledge of C#, Javascript, Typescript and React",
      "Software Support and Development with high customer service and technical expertise, which can work independently with less supervision",
    ],
  },
  {
    subject: "Engine Engineer",
    year: "Apr. 8,2024 - Oct. 8,2024",
    location: "Trend Micro Inc.",
    description_list: [
      "Develop security software for endpoint in Windows (Mac/Linux) platform",
      "Resolve customer problems to support critical business successfully",
      "Assure software quality to ensure product viability",
      "Research security solution that can provide customer's endpoint",
    ],
  },
  {
    subject: "Associate C++ Developer & CI Engineer",
    year: "Feb. 21,2021 - Mar. 25,2024",
    location: "OpeniT Asia Inc. - PH branch",
    description_list: [
      "Develop programs that examine product quality, accuracy, and reliability",
      "Assist in the development of new product features from documented requirements and specifications",
      "Working knowledge of C++",
      "Maintain overall build and test system.",
      "Good command of LINUX and Windows systems",
      "Writing scripts for CI and automation with Python, Bash, and Pwsh",
    ],
  },
  {
    subject: "Junior Layout Technician II",
    year: "Feb. 17,2017 - Sept. 12,2020",
    location: "Rohm LSI Design Philippines, Inc.",
    description_list: [
      "Knowledgeable in the total IC Layout flow and work details",
      "Perform IC Layout tasks in all levels (Chip, Topblock, and Block)",
      "Perform physical verification checking and debugging: LVS, DRC, etc.",
      "Design full custom analog IC Mask layout from floorplan to top/chip level layou",
      "Worked in different shifts: dayshift, midshift and nightshift.",
    ],
  },
  {
    subject: "Copier Technician",
    year: "Jan. 25,2016 - Aug. 24,2016",
    location: "Pantronics International Corp.",
    description_list: [
      "Knowledgeable in operating a photocopier machine",
      "Knows basic trouble shooting of any photocopier machine",
      "Can commute and navigate anywhere in the vicinity of Metro Manila(NCR)",
      "Flexible and adaptable to different environment",
    ],
  },
] as const;

export default workItems;