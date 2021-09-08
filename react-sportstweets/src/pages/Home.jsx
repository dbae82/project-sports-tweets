import { Router } from "react-router-dom";
import { Container, Image, Grid, Divider, Header } from "semantic-ui-react";
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
        <Grid celled>
          <Grid.Column width={10}>
            <Image src={splashGif} />
          </Grid.Column>
          <Grid.Column width={6}>
            <Container fluid>
              <Header as="h3" textAlign="center">
                Welcome to Sports Tweets
              </Header>
              <Divider />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium beatae eum amet totam consequuntur neque adipisci
                ad, quibusdam architecto dignissimos numquam enim sequi quasi,
                quos illo animi fugiat eveniet quo?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea ad
                hic, consequuntur facere sint voluptatem sit dolorem, aliquid
                accusamus illo laudantium porro nihil culpa exercitationem quod
                ex soluta, obcaecati quibusdam!
              </p>
              <RegisterForm />
            </Container>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
