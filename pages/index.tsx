import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiStyledcomponents, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { Bio, Container, ImageContainer, IntroContainer, Socials, TechIcon, TechStackContainer, WarpedImage, FIQ, TextContainer, ProjectListIntro, TechnologiesContainer, TechnologyItem, GitHubIconFIQ, Image, SecureLogSys } from '../styles/index-styles';

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
      <SecureLogSys>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, facere veritatis? Amet temporibus architecto praesentium sunt, maxime id fugiat accusantium, ex vitae eligendi magni, repudiandae ipsum dignissimos dicta in nesciunt officia animi! Atque, voluptates vel? Deserunt nihil quibusdam eos magni facilis. Quo natus, iusto quae dicta molestias hic cumque cum optio eaque earum officia ea corporis facilis consectetur quis nulla deserunt aliquam eveniet incidunt repellendus, quas aspernatur quos aperiam. Sit impedit est libero consectetur possimus sint iusto aspernatur facere reprehenderit repellat animi aliquid ab fuga aut earum quaerat eligendi quam aliquam, natus doloribus sequi iure. Recusandae vel autem itaque ducimus fugiat dolor molestias excepturi aliquid ipsum voluptate quia repellendus pariatur aspernatur, quos odit eum veniam magni voluptatum assumenda illo ratione corporis doloribus veritatis. Sapiente facilis esse dicta libero aspernatur blanditiis exercitationem, numquam doloremque porro quo cumque quia inventore nulla necessitatibus beatae placeat laudantium labore reprehenderit odit molestias asperiores quibusdam dolor quaerat. Facilis error a mollitia unde sunt, alias odit quis dignissimos molestiae saepe consequuntur ipsam incidunt libero tenetur magnam atque animi architecto vel cum pariatur. Magni similique rem hic tempora itaque quaerat esse suscipit, ab natus quam. Dignissimos dolorum laborum expedita inventore distinctio? Officia asperiores corporis, dolores et assumenda molestias dignissimos facilis aut sapiente necessitatibus id sit voluptas a recusandae eius accusamus ratione! Ea, maxime laudantium quas eos possimus, deserunt voluptatum minus quia, sunt amet enim ab ullam vero officiis tempora reiciendis? Perferendis hic suscipit facilis quos quasi aperiam eos soluta doloremque expedita adipisci maiores iste itaque nihil, quidem iusto corporis voluptatibus earum cumque non nam eaque culpa numquam? Hic consectetur, eveniet dolores repellat doloribus ad quas vitae eum magnam adipisci nihil quibusdam quae nulla quos placeat corrupti odio maxime tempora. Labore repellendus, corrupti mollitia fugiat maxime ad animi dicta, facilis quo error suscipit expedita incidunt autem hic repudiandae placeat dignissimos esse saepe doloribus a modi illo? Sed ad asperiores suscipit explicabo expedita repellat, enim ut quibusdam consequatur tenetur qui consectetur ipsum velit aperiam. Vitae, aliquam. Illum voluptate cumque veritatis ea dolor. Est, possimus perferendis saepe corrupti id ratione. Aliquid corrupti illum laboriosam debitis, facere quod fugit id amet nihil recusandae repudiandae nesciunt eveniet magni eius. Tempora aspernatur qui distinctio id hic voluptas. Vitae, fugiat totam! Nihil soluta vitae atque voluptatibus autem nemo eaque adipisci cupiditate, exercitationem cum libero. Illum corporis laborum explicabo at facilis error ullam! Dolorem neque voluptatem quisquam consectetur, ex exercitationem id laboriosam odio. Animi provident expedita nihil dolores quos. Facilis vitae autem repellat qui inventore blanditiis optio quidem aspernatur fuga. Aliquam iste, quaerat laudantium repellat porro dolores velit. Hic, quod fugiat pariatur ab dignissimos officia voluptatem eum quisquam omnis excepturi sint error. Eum, quidem. Non voluptatem quo vitae, dolore fugit odit delectus possimus quos, pariatur distinctio praesentium culpa in quia maiores dolores mollitia quam beatae expedita dolor ex! Consequuntur necessitatibus fuga dolores molestiae quo quasi porro tenetur modi quia, assumenda quae qui? Perferendis accusamus reprehenderit sit quaerat delectus, laboriosam mollitia facere, modi iusto odit rerum! Exercitationem necessitatibus rerum velit explicabo perferendis corrupti dolor autem, molestiae tenetur?
        </p>
      </SecureLogSys>
    </Container>
  );
};

export default Home;