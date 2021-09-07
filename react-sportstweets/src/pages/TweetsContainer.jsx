import { useState, useEffect } from "react";

import TweetFeed from "../components/TweetFeed";
import TweetModel from "../models/tweet";

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
      <h1>Your Feed</h1>
      <TweetFeed tweets={tweets} />
    </div>
  );
};

export default TweetsContainer;
