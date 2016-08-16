var tweets = [];

function Tweet(title, userName, postContent, img, postTime){
  this.title = title;
  this.userName = userName;
  this.postContent = postContent;
  this.img = img;
  this.postTime = postTime;
};

var tweetsH = [];

function TweetH(title, userName, postContent, img, postTime){
  this.title = title;
  this.userName = userName;
  this.postContent = postContent;
  this.img = img;
  this.postTime = postTime;
};

var tweet1 = tweets.push(new Tweet('This is the tiltle', 'dc4life', 'message1', 'https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500', 1471351423825));
var tweet2 = tweets.push(new Tweet('This is the tiltle', 'dc4life', 'message2', 'https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500', 1471351423825));

Tweet.prototype.getTimeSince = function(theDate) {
    // var timeSince =  (theDate - this.postTime) / 1000;
    // if(timeSince > secondsInAYear){
    // 	var textToPost = Math.floor(timeSince/secondsInAYear);
    // }
    return (theDate - this.postTime) / 1000;
  };
