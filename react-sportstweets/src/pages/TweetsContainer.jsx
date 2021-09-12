import { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import { io } from "socket.io-client";

import TweetFeed from "../components/TweetFeed";
import { TweetModel } from "../models";

import "./TweetsContainer.css";

const TweetsContainer = (props) => {
  const socket = io("http://localhost:4040");
  const [tweets, setTweets] = useState([]);

  useEffect(function () {
    fetchTweets();
  }, []);

  const fetchTweets = () => {
    // TweetModel.allFake().then((json) => {
    //   setTweets(json.tweets);
    // });
    socket.on('tweet', (tweet) => {
      console.log(tweet);
    })
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
