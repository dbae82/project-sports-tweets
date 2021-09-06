import { Feed } from "semantic-ui-react";

const TweetCard = (props) => {
  return (
    <Feed.Event>
      <Feed.Label>
        <i class="far fa-user"></i>
      </Feed.Label>
      <Feed.Content>
          Test tweet card
      </Feed.Content>
    </Feed.Event>
  );
};

export default TweetCard;
