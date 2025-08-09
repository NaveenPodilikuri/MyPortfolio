import React, { useEffect, useState, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";

// Certificates
const myCertificates = [
  { ImgSertif: "/certificates/accenture.png" },
  { ImgSertif: "/certificates/aws.png" },
  { ImgSertif: "/certificates/deloitte.png" },
  { ImgSertif: "/certificates/devops.png" },
  { ImgSertif: "/certificates/google.png" },
  { ImgSertif: "/certificates/sql.png" },
  { ImgSertif: "/certificates/tcsion.png" },
  { ImgSertif: "/certificates/cisco.png" },
  { ImgSertif: "/certificates/Smart Interviews.png" },
];

// Project images
import reduxStoreImg from "/redux-store.png";
import aiProjectImg from "/Ai.png";

// Toggle button
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/20 backdrop-blur-sm group relative overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-300 ${
          isShowingMore
            ? "group-hover:-translate-y-0.5"
            : "group-hover:translate-y-0.5"
        }`}
      >
        <polyline
          points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}
        ></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

// Tech stack with direct image URLs
const techStacks = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    language: "HTML",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    language: "CSS",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    language: "JavaScript",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    language: "ReactJS",
  },
  { icon: "https://vitejs.dev/logo.svg", language: "Vite" },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    language: "Node JS",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    language: "Python",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    language: "Java",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2103/2103626.png",
    language: "Data Analysis",
  },
  {
    icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
    language: "Vercel",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    language: "SQL",
  },
];

export default function FullWidthTabs({ scrollTrigger }) {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  const projectsRef = useRef(null);
  const certificatesRef = useRef(null);

  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({ once: false });

    const myProjects = [
      {
        id: 1,
        Title: "Redux-Store",
        Description:
          "Scalable shopping cart system with Redux and responsive UI.",
        TechStack: ["HTML", "CSS", "React", "Redux", "JavaScript"],
        Github: "https://github.com/NaveenPodilikuri/Redux-Cart",
        Link: "https://redux-store-demo.vercel.app",
        Img: reduxStoreImg,
      },
      {
        id: 2,
        Title: "AI-Powered Server Log Management Software",
        Description:
          "Automates log analysis with ML for anomaly detection and security insights.",
        TechStack: ["HTML", "CSS", "JavaScript", "Python", "Flask", "Regex"],
        Github:
          "https://github.com/NaveenPodilikuri/AI-Powered-Server-Log-Management-Software",
        Link: "https://ai-log-demo.vercel.app",
        Img: aiProjectImg,
      },
    ];

    setProjects(myProjects);
    setCertificates(myCertificates);
  }, []);

  const handleChange = (event, newValue) => setValue(newValue);

  const toggleShowMore = useCallback((type) => {
    if (type === "projects") setShowAllProjects((prev) => !prev);
    else setShowAllCertificates((prev) => !prev);
  }, []);

  const scrollToSection = (section) => {
    setTimeout(() => {
      if (section === "projects" && projectsRef.current) {
        projectsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else if (section === "certificates" && certificatesRef.current) {
        certificatesRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 400);
  };

  // React to trigger from stats section
  useEffect(() => {
    if (scrollTrigger === "projects") {
      setValue(0);
      scrollToSection("projects");
    } else if (scrollTrigger === "certificates") {
      setValue(1);
      scrollToSection("certificates");
    }
  }, [scrollTrigger]);

  const displayedProjects = showAllProjects
    ? projects
    : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, initialItems);

  return (
    <div
      className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden"
      id="Portofolio"
    >
      {/* Header */}
      <div
        className="text-center pb-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span
            style={{
              color: "#6366f1",
              backgroundImage:
                "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical
          expertise.
        </p>
      </div>

      {/* Tabs */}
      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-2 w-5 h-5" />}
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5" />}
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          {/* Projects */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div
              ref={projectsRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5"
            >
              {displayedProjects.map((project, index) => (
                <div
                  key={project.id || index}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <CardProject
                    Img={project.Img}
                    Title={project.Title}
                    Description={project.Description}
                    Link={project.Link}
                    id={project.id}
                  />
                </div>
              ))}
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore("projects")}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          {/* Certificates */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div
              ref={certificatesRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {displayedCertificates.map((certificate, index) => (
                <div key={index} data-aos="fade-up" data-aos-duration="1000">
                  <Certificate ImgSertif={certificate.ImgSertif} />
                </div>
              ))}
            </div>
            {certificates.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore("certificates")}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel>

          {/* Tech Stack */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {techStacks.map((stack, index) => (
                <div key={index} data-aos="fade-up" data-aos-duration="1000">
                  <TechStackIcon
                    TechStackIcon={stack.icon}
                    Language={stack.language}
                  />
                </div>
              ))}
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
