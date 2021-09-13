import { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import { io } from "socket.io-client";

import TweetFeed from "../components/TweetFeed";
import { TweetModel } from "../models";

import "./TweetsContainer.css";

const TweetsContainer = (props) => {
  const socket = io("http://localhost:4040");
  // const connections = new Set()
  const [tweets, setTweets] = useState([]);

  useEffect(function () {
    fetchTweets();
    return () => {
      // fetchTweets()
      socket.on('disconnect', () => {
        socket.close();
        console.log("Socket disconnected");
      })
      // connections.delete(socket)
    };
  }, []);

  const fetchTweets = () => {
    // TweetModel.allFake().then((json) => {
    //   setTweets(json.tweets);
    // });
    socket.on("tweet", (tweet) => {
      // console.log(tweet);
      // connections.add(socket)
      // let tweetList = []
      // tweetList.push(tweet)
      // console.log(tweetList, '==============================');
      setTweets((prevState) => [...prevState, tweet]);
    });
  };

  console.log(tweets);
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
