import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Screenshot (473).png";
import p1 from "../../Assets/Projects/1.png";
import p2 from "../../Assets/Projects/2.png";
import p3 from "../../Assets/Projects/5.png";
import p4 from "../../Assets/Projects/6.png";
import p5 from "../../Assets/Projects/7.png";
import ecom from "../../Assets/Projects/ecom.png";
import chatkro from "../../Assets/Projects/chatkro.png";
import meet from "../../Assets/Projects/meet.jpg";
import db from "../../Assets/db.png";





import suicide from "../../Assets/Projects/Screenshot (474).png";
import bitsOfCode from "../../Assets/Projects/Screenshot (475).png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


        <Col md={4} className="project-card">
  <ProjectCard
    imgPath={db} // Make sure the 'meet' image is correctly imported
    isBlog={false}
    title="OverView Dashboard"
    description="A real-time video conferencing app built using React (with Vite) and ZegoCloud SDK. Users can instantly join meetings through dynamic room URLs, with auto-generated unique room IDs. The app features a clean and responsive UI, powered by React Router for seamless room navigation. This project deepened my understanding of video streaming APIs and real-time collaboration using React."
    demoLink="https://analytics-dashboard-smoky-one.vercel.app/"
  />
</Col> 




<Col md={4} className="project-card">
  <ProjectCard
    imgPath={chatkro} // Replace with the correct image import variable
    isBlog={false}
    title="Chatkro"
    description="Chatkro is a real-time chat application built using the MERN stack. It features secure user authentication with bcrypt, a modern and responsive UI using Material-UI, and real-time messaging powered by Socket.io. The app enables users to create accounts, log in securely, and engage in seamless, live conversations."
    demoLink="https://chatkro-ochre.vercel.app/chat"
  />
</Col>




         <Col md={4} className="project-card">
  <ProjectCard
    imgPath={ecom}
    isBlog={false}
    title="Buykro"
    description="Buykro is a full-featured e-commerce platform built using the MERN stack (MongoDB, Express, React, Node.js). It includes secure user authentication with JWT and password hashing using bcrypt. The frontend is designed with Material-UI and integrates Redux for efficient state management. The platform supports product listings, user registration/login, cart functionality, and a responsive UI for a seamless shopping experience. This project showcases a complete, production-ready MERN stack implementation."
    demoLink="https://buykrofrontend.vercel.app/"
  />
</Col>


<Col md={4} className="project-card">
            <ProjectCard
              imgPath={p5}
              isBlog={false}
              title="Vedio player
"
              description="Developed a video streaming platform using React, where users can stream and enjoy videos seamlessly. The platform allows users to browse through various video categories, search for specific content, and watch videos in high quality. Built with a responsive UI to provide a smooth experience across different devices. Integrated features like video recommendations, user authentication, and video playback controls. Focused on creating a clean and engaging user interface to enhance the overall user experience."

              demoLink="https://vediostream.netlify.app/"
            />
          </Col>



<Col md={4} className="project-card">
            <ProjectCard
              imgPath={p4}
              isBlog={false}
              title="ADV. G. V. DESHMUKH
"
              description="Developed a custom platform for a lawyer as a freelance project, featuring a PHP backend. The platform allows the lawyer to post and manage content such as blog articles, videos, and images. It includes an intuitive admin dashboard for easy content management, enabling the lawyer to update their website with new posts, legal articles, and media. Focused on delivering a user-friendly interface for both the admin and visitors, ensuring easy navigation and a smooth experience for showcasing legal services and content."

              demoLink="https://advgvdeshmukh.com/"
            />
          </Col>

<Col md={4} className="project-card">
            <ProjectCard
              imgPath={p3}
              isBlog={false}
              title="Crypto currency
"
              description="Developed a cryptocurrency platform using React and Chakra UI, where real-time data is fetched from the CoinGecko API. The platform provides users with up-to-date information on cryptocurrency prices, market trends, and coin rankings. It features a clean and responsive UI, allowing users to search for specific cryptocurrencies, view detailed statistics, and track their favorite coins. The goal was to create a seamless and interactive experience for crypto enthusiasts, with a focus on speed, accessibility, and ease of use."

              demoLink="https://cryptoexchangeandcoin.netlify.app/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p1}
              isBlog={false}
              title="ShopKaro"
              description="Developed an eCommerce platform using React, Tailwind CSS, and the FakeStore API. The website features a clean and modern design, allowing users to browse through various products, view product details, and make purchases. It includes a responsive layout, smooth user interface, and functionalities like adding items to the cart, managing the cart, and checking out. The platform is designed to provide an intuitive shopping experience with real-time product updates and easy navigation."

              demoLink="https://shopkro1.netlify.app/"
            />
          </Col>
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={meet} 
    isBlog={false}
    title="Video Conference App"
    description="A real-time video conferencing app built using React (with Vite) and ZegoCloud SDK. Users can instantly join meetings through dynamic room URLs, with auto-generated unique room IDs. The app features a clean and responsive UI, powered by React Router for seamless room navigation. This project deepened my understanding of video streaming APIs and real-time collaboration using React."
    demoLink="https://vedio-conference-bay.vercel.app/"
  />
</Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p2}
              isBlog={false}
              title="Foodie"
              description="Developed a simple food-related landing page using Vue.js. The page features an engaging design with sections highlighting food categories, popular dishes, and featured recipes. It provides a clean and responsive user interface for food enthusiasts. The landing page is designed to be visually appealing, offering users easy navigation and quick access to explore various food-related content. The focus was on delivering an intuitive and enjoyable experience for users interested in food."

              demoLink="https://foodievuejs.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SolarEnergyg"
              description="Providing affordable solar energy solutions to power your home and business sustainably.
Harnessing the sun's energy with cost-effective, eco-friendly systems designed for every budget."

              demoLink="https://solarenergysite.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="foodieweb"
              description="FoodieWeb brings you a delicious journey through food categories, recipes, and culinary inspiration."

              demoLink="https://foodieweb12.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Confirmbuyers"
              description="ConfirmBuyers is a trusted B2B portal connecting buyers and sellers for seamless transactions and business growth."

              demoLink="https://confirmbuyers.com/"
            />
          </Col>


        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
