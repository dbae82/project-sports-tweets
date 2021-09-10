import { useState, useEffect } from "react";
import { Form, Input, Button, Dropdown } from "semantic-ui-react";

import { AuthModel, UserModel, TeamModel } from "../../models";

import { userState } from "../../recoil/atoms";
import { useSetRecoilState } from "recoil";

const RegisterForm = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [favTeams, setFavTeams] = useState("");
  const [favTeam, setFavTeam] = useState("");
  const [error, setError] = useState("");

  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    TeamModel.all().then((json) => {
      setFavTeams(json.teams);
    });
  }, []);

  function handleChange(event) {
    event.preventDefault();
    const foundTeam = favTeams.filter(function(value, index) {
      if (value.key === event.target.innerText) return true;
    });
    setFavTeam(foundTeam[0]._id);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const user = { username, email, password, favTeam };
    const login = { username, password };
    AuthModel.register(user).then((json) => {
      if (json.status === 400 && json.status === 500) {
        setError(json.message);
      }

      if (json.status === 201) {
        AuthModel.login(login).then((json) => {
          if (json.status === 400) {
            setError(json.message);
          }

          if (json.status === 200) {
            localStorage.setItem("uid", json.token);
            UserModel.show().then((json) => {
              setUser(json.data);
            });
          }
        });
      }
    });
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label htmlFor="username">Username</label>
          <Input
            placeholder="Username"
            icon="user"
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="email">Email</label>
          <Input
            placeholder="example@email.com"
            icon="mail"
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">Password</label>
          <Input
            placeholder="Password"
            icon="lock"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="favTeam">Favorite Team</label>
          <Dropdown
            placeholder="Select Your Favorite Team"
            fluid
            selection
            options={favTeams}
            onChange={handleChange}
          />
        </Form.Field>
        <Button floated="right" type="submit" positive value="Register">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
