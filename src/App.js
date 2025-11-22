
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import ParticlesComponent from './ParticlesComponent';
import { useEffect, useRef, useState } from 'react';
import LoadingBar from 'react-top-loading-bar'
import logo from './mypic.jpeg';
function App() {
  const [Data, setData] = useState(null);
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  const [progress, setProgress] = useState(50);
  const Compref=useRef(null);

  const scrolltoview=()=> console.log(Compref.current)


  useEffect(() => {
    console.log("loaded");
    setData('loaded')
    setProgress(90)

  }, [])
  return (
    <>
      {!Data ?
        <div>
          <LoadingBar
            color='#f11946'
            height={'5px'}
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
        </div> : ""}
      <ParticlesComponent id="particles" />
      <Navbar style={{background:"rgb(115 115 115 / 26%)"}} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} style={{width:'50px',borderRadius:'50%',height:'50px',marginRight:'5px'}}  ></img>
            Ravendra</Navbar.Brand>
          <Nav className="me-auto">
          <NavDropdown title="Contact Info" id="navbarScrollingDropdown">
              <NavDropdown.Item href="mailto:rp7098979@gmail.com">Rp7098979@gmail.com</NavDropdown.Item>
              <NavDropdown.Item href="tel:7898244625">7898244625</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/RavendraDotJava" target='_blank'>GitHub</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link ></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <ScrollContainer>

        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <Card style={{ width: '50rem', background: "rgb(115 115 115 / 26%)", border: "1px solid white", color: 'white',textAlign:'center' }}>

              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  <span style={{ fontSize: "40px" }}>Hi My Name Is <strong>Ravendra Patel</strong>
                  </span>
                </Card.Text>

              </Card.Body>
            </Card>

          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "40px" }}> I'm a BackEnd Developer ✨</span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "20px", width: "100%", textAlign: 'center' }}>
              <h2>About Me</h2>
              <p>A backend developer with 1.5 years of experience in PHP and Laravel would typically have a solid understanding
                of web development concepts, including MVC architecture, RESTful APIs, database management (e.g.,
                MySQL,mongodb), and version control systems (e.g., Git). Proficient in using Laravel's features like Eloquent ORM
                for database interactions, routing, middleware, authentication, and authorization mechanisms. Additionally, they
                may have worked on tasks such as API integrations, data validation, caching, and performance optimization</p>
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", textAlign: 'center' }} >
            <span style={{ fontSize: "30px" }}>
              <h2>Skills</h2>
              <Animator animation={MoveIn(-1000, 0)}>PHP</Animator>
              <Animator animation={MoveIn(1000, 0)}>Java</Animator>
              <Animator animation={MoveIn(1000, 0)}>JavaScript</Animator>
              <Animator animation={MoveIn(-1000, 0)}>MySQL</Animator>
              <Animator animation={MoveIn(1000, 0)}>mongodb</Animator>
              <Animator animation={MoveIn(-1000, 0)}>HTML&CSS</Animator>
              <Animator animation={MoveIn(1000, 0)}>Data Structures</Animator>
              <h3>Libraries and Frameworks</h3>
              <Animator animation={MoveOut(-1000, 0)}>Laravel</Animator>
              <Animator animation={MoveOut(1000, 0)}>Spring Boot</Animator>
              <Animator animation={MoveOut(-1000, 0)}>ReactJs</Animator>
              <Animator animation={MoveOut(-1000, 0)}>ExpressJs</Animator>
              <Animator animation={MoveOut(1000, 0)}>NodeJs</Animator>
            </span>
          </div>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <span ref={Compref} style={{ fontSize: "40px", textAlign: "center" }}>
              <h2>Projects</h2>
              <ul style={{ textAlign: 'left', fontSize: "24px" }}>
                <li>Payment Gateways Integration(Stripe,PhonePe,Razorpay,Paypal)</li>
                <li>E-commerce Website</li>
                <li>ERP Software's</li>
                <li>SAAS Software's</li>
                <li>Login Integration like Google,Microsoft,Discord etc</li>
                <li>Google Two Factor Authentication</li>
                <li>Chat Application using Websockets</li>
                <li>Chat Application using Ajax</li>
                <li>Creating REST API for multiple Web and Android Projects</li>
                <li>Deployed WebSites over Multiple platform like AWS ,Hostinger,Godady ,
                  Azure and other also</li>
                <li>Students Management System</li>
                <li>HR Modules</li>
              </ul>
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <span style={{ textAlign: 'center' }} ><h2>WORK EXPERIENCE</h2>
              <p style={{ fontSize: '24px', margin: 'auto', width: "max-content" }}>7+ Months of working in Dezven Software Solution as PHP Backend Developer
                <br></br>6 Months Java Back-End Development innovativebiz Technologies PVT. LTD</p>
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: "40px", textAlign: 'center' }}>
              <h2 style={{ marginBottom: '5px' }}>Contact Info</h2>
            </span>
            <br />
            <span style={{ fontSize: "24px", display: 'block', textAlign: 'center' }}>
              <code>
                <a style={{ textDecoration: 'none', color: 'white' }} href="tel:7898244625">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  7898244625</a><br></br>
                <a style={{ textDecoration: 'none', color: 'white' }} href="mailto:Rp7098979@gmail.com">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                    <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                  </svg>
                  Rp7098979@gmail.com</a><br></br>
                <a style={{ textDecoration: 'none', color: 'white' }} href='https://github.com/RavendraDotJava' >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                  </svg>
                  https://github.com/RavendraDotJava</a></code>
            </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>


    </>
  );
}

export default App;
