import { Container, List, Segment } from "semantic-ui-react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Segment vertical inverted>
        <Container textAlign="center">
          <List horizontal divided link size="small" inverted>
            <List.Item as="a" href="#">
              Dan Bae
            </List.Item>
            <List.Item as="a" href="#">
              <i class="fab fa-twitter"></i>
            </List.Item>
            <List.Item as="a" href="#">
              <i class="fab fa-linkedin-in"></i>
            </List.Item>
            <List.Item as="a" href="#">
              <i class="fab fa-github-alt"></i>
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
};

export default Footer;
