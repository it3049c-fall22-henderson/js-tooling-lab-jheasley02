const { RockPaperScissors } = require(`../resources/scripts/rock_paper_scissors.js`);

describe(`RockPaperScissors class`, function () {
  describe(`determineWinner()`, function () {
    test(`win cases`, function () {
      const game = new RockPaperScissors();
      expect(game.determineWinner(`rock`, `scissors`)).toBe(`win`);
      // Complete the test
    });

    test(`tie cases`, function () {
      // Write your test here
    });

    test(`lost cases`, function () {
      // Write your test here
    });
  });
});