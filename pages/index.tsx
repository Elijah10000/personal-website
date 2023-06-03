import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiStyledcomponents, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { Bio, Container, ImageContainer, IntroContainer, Socials, TechIcon, TechStackContainer, WarpedImage, FIQ, TextContainer, ProjectListIntro, TechnologiesContainer, TechnologyItem, GitHubIconFIQ, Image, BookReviewApp, BookTextContainer, BookTechnologiesContainer, BookTechnologyItem, BookGitHubIconFIQ, BookImage, SecurityScreen, SecurityScreenTextContainer, SecurityScreenTechnologyItem, SecurityScreenTechnologiesContainer, SecurityScreenGitHubIconFIQ, SecurityScreenImage, MenuBar, Nav, AboutMe, AboutMeTextContainer } from '../styles/index-styles';

const TechStack = () => {
  return (
    <TechStackContainer>
      <h3>Tech Stack</h3>
      <TechIcon>
        <AiOutlineHtml5 style={{ color: '#E34F26' }} />
      </TechIcon>
      <TechIcon>
        <DiCss3 style={{ color: '#1572B6' }} />
      </TechIcon>
      <TechIcon>
        <IoLogoJavascript style={{ color: '#dbc51f' }} />
      </TechIcon>
      <TechIcon>
        <SiTypescript style={{ color: '#007ACC' }} />
      </TechIcon>
      <TechIcon>
        <FaReact style={{ color: '#61DAFB' }} />
      </TechIcon>
      <TechIcon>
        <SiStyledcomponents style={{ color: '#DB7093' }} />
      </TechIcon>
      <TechIcon>
        <FaNodeJs style={{ color: '#43853D' }} />
      </TechIcon>
      <TechIcon>
        <SiNextdotjs style={{ color: '#000000' }} />
      </TechIcon>
    </TechStackContainer>
  );
};

const Home = () => {
  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <Container>
      <section id="top">
        <MenuBar>
          <Nav>
            <ul>
              <li><a href="#top" onClick={handleNavLinkClick}>elijah.lyndon</a></li>
              <li><a href="#top" onClick={handleNavLinkClick}>Home</a></li>
              <li><a href="#about" onClick={handleNavLinkClick}>About</a></li>
              <li><a href="#projects" onClick={handleNavLinkClick}>Projects</a></li>
              <li><a href="#contact" onClick={handleNavLinkClick}>Contact</a></li>
            </ul>
          </Nav>
        </MenuBar>
      </section>


      <Bio>
        <IntroContainer>
          <h1>React and Typescript Frontend Developer!</h1>
          <h3>
            Hi, I'm Elijah McNamara, welcome to my website! I'm a passionate front-end engineer with a love for code. Take a look at some of my projects 👇
          </h3>
        </IntroContainer>
        <ImageContainer>
          <WarpedImage src="/assets/Picture.jpg" alt="Picture" style={{ height: '250px', width: '250px', borderRadius: '90px' }} />
        </ImageContainer>
        <Socials>
          <a href="https://github.com/Elijah10000">
            <FaGithubSquare className="fa" style={{ fontSize: '40px' }} />
          </a>
          <a href="https://linkedin.com/in/elijah-mcnamara">
            <FaLinkedin className="fa" style={{ fontSize: '40px' }} />
          </a>
        </Socials>
      </Bio>

      <TechStack />

      <section id="about">
        <AboutMe>
          <WarpedImage src="/assets/Picture.jpg" alt="Picture" style={{ height: '250px', width: '250px', borderRadius: '90px' }} />
          <AboutMeTextContainer>
            <h3>About Me</h3>
            <h4>
              2023 Computing graduate from NCI, based in Dublin, Ireland📍
            </h4>
            <p>
              I have 4 years of experience in developing games, websites, and other software applications, along with a 6 month internship under my belt. This has resulted in me gaining exposure to a wide variety or tools, software, technologies, and ways of thinking. My areas of preference include frontend development, using React, TypeScript, JavaScript, CSS, and Styled Components, in order to provide user-friendly and feature-packed services. I also have experience in using databases and handling sensitive user information. In addition, I have plenty of practice in working in teams and working collaboratively on projects in groups big and small, which has resulted in well-developed projects and applications.
            </p>
          </AboutMeTextContainer>
        </AboutMe>
      </section>

      <section id="projects">
        <ProjectListIntro>
          <h3>Portfolio</h3>
          <h4>Each project is unique and offers something different 🖥️</h4>
        </ProjectListIntro>
      </section>

      <FIQ>
        <Image src="/assets/FIQ.png" alt="FIQ" />
        <TextContainer>
          <h2> Football IQ 🧠</h2>
          <p>
            This is my football statistics website called 'Football IQ'. This site allows the users to check statistics on Europe's top 5 football leagues, with plenty of useful features, such as a dark mode, share buttons, and a comparison feature.
          </p>
          <TechnologiesContainer>
            <TechnologyItem>TypeScript</TechnologyItem>
            <TechnologyItem>Next.js</TechnologyItem>
          </TechnologiesContainer>
          <GitHubIconFIQ>
            <a href="https://github.com/Elijah10000/football-iq">
              <FaGithubSquare className="fa" style={{ fontSize: '40px' }} />
            </a>
          </GitHubIconFIQ>
        </TextContainer>
      </FIQ>

      <BookReviewApp>
        <BookTextContainer>
          <h2> Book Review Application 📚</h2>
          <p>
            This book review app is a feature-rich platform with full CRUD functionality. This application enables users to create individual accounts, granting them the ability to review books. There is also a "Book of the Day" API, where users can discover and explore a new book every day, along with boasting a clean and intuitive user interface, and more!
          </p>
          <BookTechnologiesContainer>
            <BookTechnologyItem>Ruby on Rails</BookTechnologyItem>
            <BookTechnologyItem>JavaScript</BookTechnologyItem>
          </BookTechnologiesContainer>
          <BookGitHubIconFIQ>
            <a href="https://github.com/Elijah10000/book-review-app">
              <FaGithubSquare className="fa" style={{ fontSize: '40px' }} />
            </a>
          </BookGitHubIconFIQ>
        </BookTextContainer>
        <BookImage src="/assets/BRA.png" alt="BRA" style={{ width: '40%', height: '40%' }} />
      </BookReviewApp>

      <SecurityScreen>
        <SecurityScreenImage src="/assets/SAS.png" alt="SAS" style={{ width: '35%', height: '35%' }} />
        <SecurityScreenTextContainer>
          <h2> Secure Login Screen 🔐</h2>
          <p>
            The purpose of this security screen application is to store and hash sensitive user information in a database. Developed using suitable secure application principles, such as Principles of KISS, Principle of Failing Securely, and Principle of Minimising Attack Surface Area, while also being weary of a few of OWASP vulnerabilities in the application, such as Sensitive Data Exposure, Cross-Site Scripting, SQL Injection, and Security Misconfiguration.
          </p>
          <SecurityScreenTechnologiesContainer>
            <SecurityScreenTechnologyItem>JavaScript</SecurityScreenTechnologyItem>
            <SecurityScreenTechnologyItem>Node</SecurityScreenTechnologyItem>
            <SecurityScreenTechnologyItem>PostgreSQL</SecurityScreenTechnologyItem>

          </SecurityScreenTechnologiesContainer>
          <SecurityScreenGitHubIconFIQ>
            <a href="https://github.com/Elijah10000/Secure-And-Insecure-Login-Screens-For-SAP">
              <FaGithubSquare className="fa" style={{ fontSize: '40px' }} />
            </a>
          </SecurityScreenGitHubIconFIQ>
        </SecurityScreenTextContainer>
      </SecurityScreen>
    </Container>
  );
};

export default Home;