import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiStyledcomponents, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { Bio, Container, ImageContainer, IntroContainer, Socials, TechIcon, TechStackContainer, WarpedImage, FIQ, TextContainer, ProjectListIntro, TechnologiesContainer, TechnologyItem, GitHubIconFIQ, Image, BookReviewApp, BookTextContainer, BookTechnologiesContainer, BookTechnologyItem, BookGitHubIconFIQ, BookImage } from '../styles/index-styles';

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
    </Container>
  );
};

export default Home;