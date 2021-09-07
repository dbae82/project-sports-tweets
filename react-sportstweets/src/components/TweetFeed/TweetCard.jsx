import { Feed, Segment } from "semantic-ui-react";

const TweetCard = (props) => {
  return (
    <Segment raised>
      <Feed.Event>
        <Feed.Label>
          <i class="far fa-user"></i>
        </Feed.Label>
        <Feed.Content>
          <p>{props.data.text}</p>
        </Feed.Content>
      </Feed.Event>
    </Segment>
  );
};

export default TweetCard;
