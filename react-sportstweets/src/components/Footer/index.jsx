import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";

import "./footer.css";

class Footer extends Component {
  state = {
    activeItem: "about us",
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="footer">
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              <Menu.Item
                name="about us"
                active={activeItem === "about us"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="links"
                active={activeItem === "links"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="careers"
                active={activeItem === "careers"}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Grid.Column>
          <Grid.Column stretched width={12}>
            <Segment>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate deleniti velit nesciunt fugit at, labore veniam
              quibusdam harum laborum alias eius quam error quia explicabo natus
              autem facere omnis non.
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Footer;
