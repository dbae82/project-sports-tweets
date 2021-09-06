import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import TweetsContainer from "../pages/TweetsContainer";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path='/feed' component={TweetsContainer} />
    </Switch>
  );
};

export default Routes;
