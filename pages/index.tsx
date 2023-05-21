import React from 'react';
import { Container, IntroContainer, Bio, ImageContainer, WarpedImage, Socials, TechStack } from '../styles/index-styles';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiStyledcomponents, SiNextdotjs, SiTypescript } from 'react-icons/si';


const Home = () => {
  return (
    <Container>
      <Bio>
        <IntroContainer>
          <h1>React and Typescript Front-End Developer!</h1>
          <h3>
            Hi, I'm Elijah McNamara, welcome to my website! I'm a passionate front-end engineer with a love for code. Take a look at some of my projects 👇
          </h3>
          <Socials>
            <a href="https://github.com/Elijah10000">
              <FaGithubSquare className="fa" style={{ fontSize: '36px' }} />
            </a>
            <a href="https://linkedin.com/in/elijah-mcnamara">
              <FaLinkedin className="fa" style={{ fontSize: '36px' }} />
            </a>
          </Socials>
        </IntroContainer>
        <ImageContainer>
          <WarpedImage src="/assets/Picture.jpg" alt="Picture" style={{ height: "250px", width: "250px", borderRadius: "90px" }} />
        </ImageContainer>
      </Bio>
      <TechStack>
          <div style={{ display: 'flex', gap: '30px' }}>
          <h3>Tech Stack</h3>
            <AiOutlineHtml5 className="tech" style={{ fontSize: '60px', color: '#E34F26' }} />
            <DiCss3 className="tech" style={{ fontSize: '60px', color: '#1572B6' }} />
            <IoLogoJavascript className="tech" style={{ fontSize: '60px', color: '#dbc51f' }} />
            <SiTypescript className="tech" style={{ fontSize: '60px', color: '#007ACC' }} />
            <FaReact className="tech" style={{ fontSize: '60px', color: '#61DAFB' }} />
            <SiStyledcomponents className="tech" style={{ fontSize: '60px', color: '#DB7093' }} />
            <FaNodeJs className="tech" style={{ fontSize: '60px', color: '#43853D' }} />
            <SiNextdotjs className="tech" style={{ fontSize: '60px', color: '#000000' }} />
          </div>
        </TechStack>
    </Container>
  );
};

export default Home;