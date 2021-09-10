import { Switch, Route, Redirect } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { loggedInState } from "../recoil/selectors";

import Home from "../pages/Home";
import TweetsContainer from "../pages/TweetsContainer";
import Profile from "../pages/Profile";

const Routes = (props) => {
  const isLoggedIn = useRecoilValue(loggedInState);
  console.log(isLoggedIn, "check");

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/feed" component={TweetsContainer} />
      <Route exact path="/profile/:id" component={Profile} />
    </Switch>
  );
};

export default Routes;
