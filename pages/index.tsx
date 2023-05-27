import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiStyledcomponents, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { Bio, Container, ImageContainer, IntroContainer, Socials, TechIcon, TechStackContainer, WarpedImage, FIQ, TextContainer, ProjectListIntro, TechnologiesContainer, TechnologyItem } from '../styles/index-styles';

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
  return (
    <Container>
      <Bio>
        <IntroContainer>
          <h1>React and Typescript Front-End Developer!</h1>
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

      <ProjectListIntro>
        <h3>Portfolio</h3>
        <h4>Each project is unique and offers something different 🖥️</h4>
      </ProjectListIntro>

      <FIQ>
          <img src="/assets/FIQ.png" alt="FIQ" />
        <TextContainer>
          <h2> Football IQ 🧠</h2>
          <p>
            This is my football statistics website called 'Football IQ'. This site allows the users to check statistics on Europe's top 5 football leagues, with plenty of useful features, such as a dark mode, share buttons, and a comparison feature.
          </p>
          <TechnologiesContainer>
            <TechnologyItem>TypeScript</TechnologyItem>
            <TechnologyItem>Next.js</TechnologyItem>
          </TechnologiesContainer>
          <a href="https://github.com/Elijah10000/football-iq">
            <FaGithubSquare className="fa" style={{ fontSize: '40px' }} />
          </a>
        </TextContainer>
      </FIQ>
    </Container>
  );
};

export default Home;