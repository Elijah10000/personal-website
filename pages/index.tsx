import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiStyledcomponents, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { Bio, Container, ImageContainer, IntroContainer, Socials, TechIcon, TechStackContainer, WarpedImage, FIQ, TextContainer, ProjectListIntro, TechnologiesContainer, TechnologyItem, GitHubIconFIQ, Image, BookReviewApp, BookTextContainer, BookTechnologiesContainer, BookTechnologyItem, BookGitHubIconFIQ, BookImage, SecurityScreen } from '../styles/index-styles';

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

      <SecurityScreen>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam error tenetur quo sed perferendis vitae deserunt doloribus, odit voluptatem quaerat quia possimus aut, reprehenderit ducimus sint dolorem eos? Dolor voluptatibus recusandae quis harum fuga similique quia soluta consequatur voluptatum ratione in atque illum saepe, nemo qui minus architecto ipsa. Odit, atque error? Minus beatae voluptatem eos? Dolores quod repudiandae laboriosam ea tempore. Atque doloremque vero perspiciatis aliquid optio? Asperiores, earum perferendis ex corrupti illo repellendus aspernatur? Ipsam dignissimos atque nisi omnis facilis repudiandae dolore fuga aspernatur sapiente voluptate. Veniam quae animi illo iure aliquid quibusdam eaque aperiam doloremque ipsa voluptates laudantium cupiditate maiores voluptas sint reprehenderit culpa ex, tempora vel assumenda sequi quos. Asperiores, temporibus? Sint necessitatibus harum beatae deserunt quos in quam nostrum voluptate rem? Consequatur animi sunt aspernatur voluptatem quisquam voluptates tenetur nam laborum ratione doloremque sed blanditiis doloribus mollitia, error necessitatibus non quibusdam dignissimos dolor, rem quis? Dicta possimus voluptas quidem minima placeat optio magni rerum fugiat maxime aut. Voluptatibus ipsa eveniet soluta beatae quis consequuntur harum explicabo quasi dolorem magni cumque sed officia consectetur, eum corrupti assumenda animi accusamus rem ipsum quae? Sequi delectus quis quasi iste architecto totam. Laboriosam recusandae harum voluptatem, iusto repudiandae dicta perspiciatis sunt! Minus eos, voluptatem nihil fugiat molestias totam reprehenderit autem culpa, debitis, eligendi id tenetur quia eum delectus modi illum possimus amet praesentium recusandae. Suscipit, nisi aspernatur dolorum dicta voluptates a hic sapiente, deleniti tempora nobis quaerat repellat fuga accusantium commodi dolore est, aliquid tenetur officia laudantium? Sapiente labore ducimus laborum illum explicabo nihil necessitatibus excepturi quis asperiores voluptatibus, odit enim. Sed dolorem iste ullam ab tenetur! Libero ullam necessitatibus aspernatur et tempore error minima maxime enim deleniti odio temporibus ipsum, magni illo fuga officiis dicta praesentium tempora quasi accusantium dolorum blanditiis molestias facere sapiente unde. Exercitationem repellat ipsam accusantium nostrum nobis eligendi natus enim, perspiciatis odio delectus ab neque quae at, explicabo eaque? Autem suscipit accusamus at ratione temporibus incidunt quidem iste, velit, esse ducimus reiciendis vel quod fuga tenetur voluptas dolore perferendis molestiae? In ducimus incidunt maiores odio voluptatem illo ratione debitis suscipit cum, excepturi voluptatibus repellendus eum vitae consequuntur nulla sunt alias voluptatum pariatur, quam natus, id expedita laborum. Officiis, dicta magnam perferendis sint quod, perspiciatis corrupti nostrum eligendi rerum ratione, quae odit! At, non atque. Suscipit doloremque sequi quibusdam eligendi! At nulla quo porro, nihil fugit soluta officia, quam est ipsum minus eos! Corporis itaque dignissimos rerum nam inventore modi suscipit minima atque et exercitationem, voluptatum laboriosam quos magnam labore repellendus molestiae unde quam dolorum dolores explicabo. Recusandae itaque assumenda, repudiandae repellendus modi, suscipit nemo, pariatur explicabo nostrum odit dolores ex ipsum eos. Eligendi, consequuntur ab. Dolorem cumque soluta cum aperiam laboriosam ipsum, odit eum eligendi voluptatum voluptatibus. Saepe cum quibusdam velit doloremque vel reiciendis iste sequi soluta eaque, similique doloribus aperiam praesentium corporis rem voluptas reprehenderit perspiciatis fugit. Sint optio ipsam minus culpa nihil hic, consequatur dignissimos esse, eaque numquam ipsa accusamus laudantium animi consequuntur iusto veniam, porro deleniti obcaecati! In praesentium dolorum neque?
      </SecurityScreen>
    </Container>
  );
};

export default Home;