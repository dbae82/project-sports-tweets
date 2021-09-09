import { useEffect, useState } from "react";
import { UserModel } from "../models";
import {
  Container,
  Grid,
  Image,
  Header,
  Menu,
  Segment,
} from "semantic-ui-react";

import { userState } from "../recoil/atoms";
import { useRecoilState } from "recoil";

import "./profile.css";

const Profile = () => {
  const [item, itemClick] = useState("bio");
  const [user, setUser] = useRecoilState(userState);

  useEffect(function () {
    if (localStorage.getItem("uid")) {
      UserModel.show().then((json) => {
        setUser(json.data);
      });
    }
  }, []);

  return (
    <Container className="profile-container">
      <div className="profile-container__hero">
        <h1></h1>
      </div>
      <Grid>
        <Grid.Column width={5}>
          <Image circular src={user.avatar} size="medium" />
          <Header as="h1" textAlign="center" id="profile-username">
            {user.username}
          </Header>
        </Grid.Column>
        <Grid.Column width={11}>
          <Menu pointing secondary size="huge">
            <Menu.Item
              as="a"
              name="bio"
              active={item === "bio"}
              onClick={() => itemClick("bio")}
            />
            <Menu.Item
              as="a"
              name="favorite team"
              active={item === "favorite team"}
              onClick={() => itemClick("favorite team")}
            />
            <Menu.Menu position="right">
              <Menu.Item
                as="a"
                name="update"
                active={item === "update"}
                onClick={() => itemClick("update")}
              />
            </Menu.Menu>
          </Menu>
          {item === "bio" ? (
            <Segment raised>
              <h3>user.bio</h3>
            </Segment>
          ) : item === "favorite team" ? (
            <Segment raised>
              <h3>user.favTeam</h3>
            </Segment>
          ) : (
            <Segment raised>
              <h3>user.update</h3>
            </Segment>
          )}
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Profile;
