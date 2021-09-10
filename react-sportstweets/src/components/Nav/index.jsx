import React from "react";
// import { AuthModel, UserModel } from "../../models";
import { NavLink } from "react-router-dom";
import {
  Container,
  Menu,
  Button,
  Modal,
  Form,
  Input,
  Image,
} from "semantic-ui-react";

// import { userState } from "../../recoil/userAtoms";
// import { useRecoilState } from "recoil";

import "./nav.css";

const Nav = (props) => {
  // const [openTo, setOpenTo] = useState(false);
  // const [open, setOpen] = useState(false);
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  // const [user, setUser] = useRecoilState(userState);

  // useEffect(function () {
  //   if (localStorage.getItem("uid")) {
  //     UserModel.show().then((json) => {
  //       setUser(json.data);
  //     });
  //   }
  // }, []);

  // const logout = () => {
  //   setUser(null);
  //   localStorage.clear();
  // };

  // function handleSubmit(event) {
  //   setError("");
  //   event.preventDefault();
  //   const credentials = { username, password };

  //   AuthModel.login(credentials).then((json) => {
  //     if (json.status === 400) {
  //       setError(json.message);
  //     }

  //     if (json.status === 200) {
  //       localStorage.setItem("uid", json.token);
  //       UserModel.show().then((json) => {
  //         setUser(json.data);
  //         setOpen(false);
  //       });
  //     }
  //   });
  // }

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
          {props.user ? (
            <>
              <NavLink exact to="/feed">
                <Menu.Item as="a" id="feed-link">
                  Feed
                </Menu.Item>
              </NavLink>
              <Menu.Item onClick={props.logout} as="a" position="right">
                Logout
              </Menu.Item>
              <NavLink exact to={`/profile/${props.user._id}`}>
                <Menu.Item as="a" id="profile-link">
                  <Image src={props.user.avatar} size="mini" circular />
                </Menu.Item>
              </NavLink>
            </>
          ) : (
            <Menu.Item onClick={props.modal} as="a" position="right">
              Login
            </Menu.Item>
          )}
        </Container>
      </Menu>
      <Modal
        onClose={props.modal}
        onOpen={props.modal}
        open={props.setOpen}
        size="tiny"
      >
        <Modal.Header>Log In</Modal.Header>
        <Modal.Content>
          <Form onSubmit={props.handleSubmit}>
            <Form.Field>
              <label htmlFor="username">Username</label>
              <Input
                placeholder="Username"
                icon="user"
                type="text"
                name="username"
                onChange={props.addUserName}
                value={props.username}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="password">Password</label>
              <Input
                placeholder="Password"
                icon="lock"
                type="password"
                name="password"
                onChange={props.addPassword}
                value={props.password}
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={props.modal}>
            Cancel
          </Button>
          <Button
            content="Log In"
            labelPosition="right"
            icon="checkmark"
            onClick={props.handleSubmit}
            positive
            type="submit"
            value="Login"
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default Nav;
