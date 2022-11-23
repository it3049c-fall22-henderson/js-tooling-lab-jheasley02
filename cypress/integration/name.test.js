const { RockPaperScissors } = require(`../../resources/scripts/rock_paper_scissors.js`);
const mathRandomSpy = jest.spyOn(Math, `random`);

describe(`RockPaperScissors class`, function () {
  describe(`play()`, function () {
    it(`Math.Random = 0.1 -> Rock`, function() {
      mathRandomSpy.mockImplementation(() => 0.1);
      const game = new RockPaperScissors();
      game.username = `test`;
      game.play(`rock`);
      expect(game.gameHistoryLog).toMatchObject([ ` test selected rock. CPU selected rock: test ties` ]);
    });

    it(`Math.Random = 0.5 -> Paper`, function() {
      mathRandomSpy.mockImplementation(() => 0.5);
      const game = new RockPaperScissors();
      game.username = `test`;
      game.play(`rock`);
      expect(game.gameHistoryLog).toMatchObject([ ` test selected rock. CPU selected paper: test loses` ]);
    });

    it(`Math.Random = 0.9 -> Scissors`, function() { //changed to scissors
      mathRandomSpy.mockImplementation(() => 0.9);
      const game = new RockPaperScissors();
      game.username = `test`;
      game.play(`rock`);
      expect(game.gameHistoryLog).toMatchObject([ ` test selected rock. CPU selected scissors: test wins` ]);
    });
  });
});