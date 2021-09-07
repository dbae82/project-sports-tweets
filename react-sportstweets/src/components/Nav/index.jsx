import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Menu, Button, Modal } from "semantic-ui-react";

import "./nav.css";

const Nav = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-bar">
      <Menu fixed="top">
        <Container>
          <NavLink exact to="/">
            <Menu.Item as="a" header>
              <i class="fab fa-twitter fa-3x"></i>
              Sports Tweets
            </Menu.Item>
          </NavLink>
          <Menu.Item onClick={() => setOpen(true)} as="a" position="right">
            Login
          </Menu.Item>
        </Container>
      </Menu>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Log In</Modal.Header>
        <Modal.Content></Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            content="Log In"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default Nav;
