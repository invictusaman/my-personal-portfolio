import AnimatedWrapper from "@/components/animated-framer-wrapper";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import Timeline from "@/components/ui/timeline";
import {
  Activity,
  Award,
  BookA,
  BugOff,
  Code,
  Download,
  FolderKanban,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const skills = {
    technical: {
      "Cloud Platforms": [
        "Azure (Databricks, Data Factory, ADLS Gen2, Synapse)",
        "AWS (S3, EMR, Glue, Redshift)",
      ],
      "Big Data & Processing": [
        "Apache Spark",
        "PySpark",
        "Spark SQL",
        "Delta Lake",
        "Hadoop",
        "Hive",
      ],
      "Data Warehousing": [
        "Snowflake",
        "Azure Databricks",
        "Amazon Redshift",
        "Azure Synapse Analytics",
      ],
      "Programming Languages": ["Python", "SQL", "Scala", "Java"],
      "ETL/ELT & Orchestration": [
        "Azure Data Factory",
        "Apache Airflow",
        "AWS Glue",
      ],
      Databases: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB"],
      "Data Modeling": [
        "Dimensional Modeling",
        "Star Schema",
        "Snowflake Schema",
        "Medallion Architecture",
      ],
      "File Formats & Storage": [
        "Parquet",
        "Delta Lake",
        "JSON",
        "CSV",
        "Avro",
      ],
      "Data Governance": [
        "Unity Catalog",
        "RBAC",
        "Data Quality Frameworks",
        "Data Validation",
      ],
      "DevOps & CI/CD": [
        "Git",
        "GitHub",
        "Azure DevOps",
        "Jenkins",
        "CI/CD Pipelines",
      ],
      "Visualization Tools": ["Tableau", "Power BI"],
      "Development Tools": [
        "VS Code",
        "Jupyter Notebook",
        "Databricks Notebooks",
      ],
    },
    nonTechnical: [
      "Cross-Functional Collaboration",
      "Technical Communication",
      "Problem-Solving",
      "System Design",
      "Architecture Planning",
      "Stakeholder Management",
      "Agile/Scrum Methodologies",
      "Performance Optimization",
      "Data Governance Advocacy",
    ],
  };

  const timelineItems = [
    {
      icon: <BookA size={24} />,
      title: "Who I Am",
      children: (
        <div className="flex flex-row gap-8">
          <div className="w-full space-y-4">
            <p>
              Hi, my name is <b>Aman Bhattarai</b>, and I was born in a small
              village in <i>Nepal</i>. The very first time I got interested in
              computers was when my dad introduced a desktop computer to our
              home while I was in Grade 5. I quickly became fascinated, spending
              many hours downloading software&apos;s, examining their
              capabilities and thinking about how one could built such a thing.
              This curiosity formed at such an early age paved for my love and
              appreciation for technology and programming.
              <br />
              <div className="text-center max-w-md mx-auto mt-6 overflow-hidden">
                <Image
                  className="rounded-lg"
                  src="/about/small-me.webp"
                  alt="Small me"
                  width="600"
                  height="800"
                />
                <p className="text-sm px-4">
                  Yep, that was me in Grade 2 (probably) !
                </p>
              </div>
              <br />I was very good at maths from my early school days.{" "}
              <i>Equations and number used to flow naturally to me</i>. I can
              recall one incident when my maths teacher told me to teach the
              class for next few days since he was going out of town.
              <br />
              <br />
              With this passion for numbers and technologies, I went to{" "}
              <i>Silicon valley of India -- Bangalore</i>, where I did my{" "}
              <b>Bachelors degree in Computer Science and Engineering</b>.
              There, I did not only improve my programming proficiency but also
              for the first time I created a personal blog, which is currently
              live at{" "}
              <a
                href="https://www.twistblogg.com"
                rel="nofollow noopener"
                target="_blank"
              >
                TwistBlogg.com
              </a>
              . I used to post themes and plugins for blogger, and write
              contents.
              <br />
              <div className="text-center max-w-lg mx-auto mt-8 overflow-hidden">
                <Image
                  className="rounded-lg"
                  src="/about/bangalore-days.jpg"
                  alt="Bangalore Days"
                  width="800"
                  height="533"
                />
                <p className="text-sm px-4">
                  Ethnic day at NHCE College, Bangalore
                </p>
              </div>
              <br />
              Besides, I worked on <i>internships</i> related to application
              development and backend systems allowing me to gain more technical
              insights and also to improve my interpersonal skills. The
              Bachelor&apos;s final year project was such a milestone because it
              involved teaming-up with another team of four members and I was
              the team leader. This particular experience taught me invaluable
              lessons in teamwork, management, and collaboration to achieve
              common goals.
              <br />
              <br />
              As I gained more knowledge in the tech field, I found myself
              naturally drawn to data. Either it was my love for numbers or my
              passion towards AI. Either way, this led me to do a degree in{" "}
              <b>Artificial Intelligence and Data Science</b> in <i>Canada</i>.
              <br />
              <div className="text-center max-w-md mx-auto mt-8 overflow-hidden">
                <Image
                  className="rounded-lg"
                  src="/about/me-in-canada.webp"
                  alt="Niagara Falls Canada"
                  width="1500"
                  height="2421"
                />
                <p className="text-sm px-4">
                  My very first visit to Niagara Falls back in 2021
                </p>
              </div>
              <br />
              Moving from web design to data analyst felt like a new level in my
              career progression. The passion for numbers evolved to the field
              of data science where I did many personal projects that included
              aspects of communicating the data. I learned how to make insights
              from data and translate them into meaningful stories that can be
              useful for increasing the company&apos;s revenue.
              <br />
              <br />
              This journey has further provided me with a number of skills that
              are necessary in every aspects ranging from the technical set as
              well as communication and interpersonal skills.
              <br />
              <br />
              Looking ahead, I&apos;m keen and very much excited about future
              opportunities to advance and effectively practice my skills in a
              professional environment. I&apos;m eager to contribute to new
              ideas and projects and continue expanding my knowledge in terms of
              data analysis and visualization.
            </p>
          </div>
        </div>
      ),
    },
    {
      icon: <BugOff size={24} />,
      title: "Skills & Expertise",
      children: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">Technical Skills</h4>
            <div className="space-y-4">
              {Object.entries(skills.technical).map(([category, items]) => (
                <AnimatedWrapper key={category} variant="scaleIn">
                  <div className="bg-singleCard text-singleCard-foreground p-4 rounded-lg">
                    <h5 className="text-lg font-medium mb-2">{category}</h5>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="text-base font-light bg-[hsl(215_24%_80%)] px-2 py-1 rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Soft Skills</h4>
            <div className="space-y-4">
              {skills.nonTechnical.map((skill) => (
                <AnimatedWrapper key={skill} variant="slideFromLeft">
                  <div className="bg-singleCard text-singleCard-foreground p-4 rounded-lg flex items-center">
                    <Activity
                      size={20}
                      className="mr-2 text-singleCard-foreground"
                    />
                    <span className="text-lg font-light">{skill}</span>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <Award size={24} />,
      title: "Certifications",
      children: (
        <AnimatedWrapper variant="softExpand">
          <div className="space-y-4">
            <div>
              <Link
                href="https://www.coursera.org/account/accomplishments/specialization/WMTOKALSPL5K"
                target="_blank"
                rel="noopener noreferrer"
              >
                IBM Professional Data Analyst
              </Link>
            </div>
            <div>
              <Link
                href="https://learn.microsoft.com/en-us/users/amanbhattarai-0475/credentials/b2654bd52b485499"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Certified: Azure AI Fundamentals - AI 900
              </Link>
            </div>
            <div>
              <Link
                href="https://www.coursera.org/account/accomplishments/verify/NBDSI22MMG28"
                target="_blank"
                rel="noopener noreferrer"
              >
                Databases and SQL for Data Science with Python (with Honors)
              </Link>
            </div>
            <div>
              <Link
                href="https://www.linkedin.com/learning/certificates/becb78f2de54c93ecb70360335e59549eb88638b115e4a85f891680b348b3fd7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Machine Learning with Scikit-Learn
              </Link>
            </div>
          </div>
        </AnimatedWrapper>
      ),
    },
    {
      icon: <FolderKanban size={24} />,
      title: "Current Endeavors",
      children: (
        <AnimatedWrapper variant="gentleRise">
          <p className="mb-4">
            I&apos;m currently working on personal projects to showcase my
            skills and learning.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <del>Build a personal portfolio</del> ✅
            </li>
            <li>
              <del>Do a Capstone Project by next month</del> ✅
            </li>
            <li>Work on personal development and well being</li>
          </ul>
        </AnimatedWrapper>
      ),
    },
    {
      icon: <Code size={24} />,
      title: "About This Page",
      children: (
        <AnimatedWrapper variant="softExpand">
          <p className="mb-4">
            This website is built on top of{" "}
            <a
              href="https://github.com/swajp/swajp.me"
              rel="nofollow external noopener"
              target="_blank"
            >
              Swajp personal portfolio
            </a>
            , and highly customized to meet my design requirements. I took some
            inspiration from{" "}
            <a
              href="https://aaryamsthapak.framer.website"
              rel="nofollow external noopener"
              target="_blank"
            >
              {" "}
              Aaryamsthapak design
            </a>
            . I made my portfolio open source, you can find it on my{" "}
            <a
              href="https://github.com/invictusaman"
              rel="nofollow external noopener"
              target="_blank"
            >
              github page
            </a>
            .<br />
            <br />
            <b>Powered by:</b>
            <br />
            <br />
            <div className="flex flex-wrap items-center space-x-4 space-y-4">
              <Image
                src="nextjs.svg"
                alt="Next.js"
                title="Next JS"
                width={36}
                height={36}
              />
              <Image
                src="tailwindcss.svg"
                alt="Tailwind CSS"
                title="Tailwind CSS"
                width={36}
                height={36}
              />
              <Image
                src="typescript.svg"
                alt="Typescript"
                title="Typescript"
                width={36}
                height={36}
              />
              <Image
                src="framermotion.svg"
                alt="Framer Motion"
                title="Framer Motion"
                width={36}
                height={36}
              />
              <Image
                src="velite.svg"
                alt="Velite"
                title="Velite"
                width={36}
                height={36}
              />
              <Image
                src="vercel.svg"
                alt="Vercel"
                title="Vercel"
                width={36}
                height={36}
              />
            </div>
          </p>
        </AnimatedWrapper>
      ),
    },
    {
      icon: <Download size={24} />,
      title: "Grab a Copy",
      children: (
        <AnimatedWrapper variant="softExpand">
          <Button
            className="px-3 py-5 md:px-5 md:py-7 cursor-default text-lg md:text-xl !leading-relaxed font-light"
            asChild
          >
            <Link
              href="https://drive.google.com/file/d/1VbxhKFIQ1cqQPrroH8cY350yoVjTjhlK/view?usp=sharing"
              rel="nofollow external noreferrr"
              target="_blank"
            >
              Download my Resume
            </Link>
          </Button>
        </AnimatedWrapper>
      ),
    },
  ];
  return (
    <MaxWidthWrapper className="py-10 md:py-20 post-body">
      <AnimatedWrapper variant="slideFromTop">
        <h1 className="text-5xl font-bold mb-8">About Me</h1>
      </AnimatedWrapper>
      <Timeline items={timelineItems} />
    </MaxWidthWrapper>
  );
}
