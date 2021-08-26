const messages = ["oscar","caroline","paulina","Ana","Nicolay","Yesica","diego"];

const randomMsg = () =>{
  const message = messages [Math.floor(Math.random()* messages.length)];
  console.log(message);
};

module.exports = {randomMsg};