import { Feed } from "semantic-ui-react";
import TweetCard from "./TweetCard";

import "./TweetFeed.css";

const TweetFeed = (props) => {
  const generateTweets = () => {
    return props.tweets.map((tweet) => <TweetCard data={tweet} />);
  };
  return <Feed>{generateTweets()}</Feed>;
};

export default TweetFeed;
