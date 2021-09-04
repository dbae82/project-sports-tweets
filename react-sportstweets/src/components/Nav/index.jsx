import { Menu } from "semantic-ui-react";

import './nav.css';

const Nav = () => {
  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item name="ESDB" active="" onClick="" />
        <Menu.Menu position="right">
          <Menu.Item name="hello" active="" onClick="" />
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Nav;