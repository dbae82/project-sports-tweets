import { useEffect } from "react";
import { UserModel } from "../models";
import { Container, Grid, Image, Header } from "semantic-ui-react";

import { userState } from "../recoil/atoms";
import { useRecoilState } from "recoil";

import "./profile.css";

const Profile = () => {
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
      <Grid>
        <Grid.Column width={5}>
          <Image circular src={user.avatar} size="medium" />
          <Header as='h1' textAlign='center'>{user.username}</Header>
        </Grid.Column>
        <Grid.Column width={11}>
            <h1>Stuff</h1>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Profile;
