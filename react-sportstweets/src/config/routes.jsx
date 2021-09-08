import { Switch, Route } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { loggedInState } from "../recoil/selectors";

import Home from "../pages/Home";
import TweetsContainer from "../pages/TweetsContainer";

const Routes = (props) => {
  const isLoggedIn = useRecoilValue(loggedInState);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/feed" component={TweetsContainer} />
    </Switch>
  );
};

export default Routes;
