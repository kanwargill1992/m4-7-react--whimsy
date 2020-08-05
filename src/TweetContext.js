import React from "react";
import moment from "moment";
import avatar from "../src/assets/carmen-sandiego.png";
export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const date = moment().format("h:mm A - MMM Do, YYYY");
  const [numOfLikes, setNumOfLikes] = React.useState(460);
  const [numOfReTweets, setNumOfReTweeets] = React.useState(65);
  const [isLiked, setIsLiked] = React.useState(false);
  const [isRetweeted, setIsRetweeted] = React.useState(false);

  const handleToggleLike = () => {
    isLiked ? setNumOfLikes(numOfLikes + 1) : setNumOfLikes(numOfLikes - 1);
    setIsLiked(!isLiked);
  };

  const handleToogleRetweets = () => {
    isRetweeted
      ? setNumOfReTweeets(numOfReTweets - 1)
      : setNumOfReTweeets(numOfReTweets + 1);
    setIsRetweeted(!isRetweeted);
  };

  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
        date,
        numOfLikes,
        numOfReTweets,
        handleToggleLike,
        handleToogleRetweets,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
