import { Feed, Segment, Dimmer, Loader } from "semantic-ui-react";

const TweetCard = (props) => {
  const tweetUrl = `https://twitter.com/${props.data.includes.users[0].username}/status/${props.data.data.id}`

  return (
      <Segment raised>
        <Feed.Event>
          <Feed.Label>
            <i class="far fa-user"> @{props.data.includes.users[0].username}</i>
          </Feed.Label>
          <Feed.Content>
            {props.data.data ? (
              <p>{props.data.data.text}</p>
            ) : (
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
            )}
          </Feed.Content>
        </Feed.Event>
      </Segment>
  );
};

export default TweetCard;
