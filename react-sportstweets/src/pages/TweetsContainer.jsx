import { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";

import TweetFeed from "../components/TweetFeed";
import TweetModel from "../models/tweet";

import "./TweetsContainer.css";

const TweetsContainer = (props) => {
  const [tweets, setTweets] = useState([]);

  useEffect(function () {
    fetchTweets();
  }, []);

  const fetchTweets = () => {
    TweetModel.allFake().then((json) => {
      setTweets(json.tweets);
    });
  };

  return (
    <div className="tweets-container">
      <Container className="tweets-feed__hero">
        <h1>Knicks</h1>
      </Container>
      <TweetFeed tweets={tweets} />
    </div>
  );
};

export default TweetsContainer;
