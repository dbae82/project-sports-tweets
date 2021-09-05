import { Container, Image, Grid } from "semantic-ui-react";
import RegisterForm from "../components/Forms/RegisterForm";

import background from "../assets/nba-teams.png";
import splashGif from "../assets/splash-card.gif";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-container__background">
        <img src={background} alt="nba-teams" id="background-image" />
      </div>
      <Container className="home-container__card">
        <Grid columns={2}>
          <Grid.Column>
            <Image src={splashGif} />
          </Grid.Column>
          <Grid.Column>
            <RegisterForm />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
