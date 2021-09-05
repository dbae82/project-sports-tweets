import { Container } from "semantic-ui-react";
import RegisterForm from "../components/Forms/RegisterForm";

import background from "../assets/nba-teams.png";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-container__background">
        <img src={background} alt="nba-teams" />
      </div>
      <Container className="home-container__card">
        <RegisterForm />
      </Container>
    </div>
  );
};

export default Home;
