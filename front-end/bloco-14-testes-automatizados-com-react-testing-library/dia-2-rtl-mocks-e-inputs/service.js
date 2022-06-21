const getRandomNumber = () => Math.floor(Math.random() * 100) +1;

if (typeof module !== 'undefined') {
  module.exports = {
    getRandomNumber,
  };
}
