function About() {
  return (
  <>
    <h3>Welcome to the game of Cows and Bulls!</h3>
    <div className="about-game">
      <p>
        The game of <a target="_blank" rel="noopener"
          href="https://en.wikipedia.org/wiki/Bulls_and_cows">cows and bulls </a>
        is a code-breaking, guessing game, where
        one player (computer in this case), selects a number or word of specified
        length (4 for this game) and another player guesses to find that number or word.
        After every guess, the player who is guessing is given feedback in terms or how many
        cows and how many bulls are there in his guess. A `cow` is a digit or letter
        that is present in the original selection, but is placed incorrectly in guess.
        A `bull` is a digit or letter that is correct and placed correctly.
      </p>
      <p><strong>Example:</strong></p>
      <p>
        So, if
        you get 3 cows, 0 bulls, that means you have 3 correct letters or digits,
        none of which are placed correctly, and since our default length is 4, you
        have one wrong guess too.
      </p>
      <p>
        If you get 2 bulls, and 2 cows, it means you have any 2 digits or letters
        that are correct and placed correctly, while 2 are correct, and placed incorrectly.
        This is a pretty good stage to reach towards your goal.
      </p>
      <p><strong>Goal:</strong></p>
      <p>The goal of the game is to get 4 bulls in minimum number of guesses.</p>
      <p>As it is right now, the game doesn't show you a history of your guesses, so
        you'd have to sit with a pen and paper unless you're quite confident of your
        memory :)
      </p>
    </div>
    <p>See <a href="https://github.com/kamalx/supreme-bovines">the source code</a></p>
    <p>Or, <a href="/">go play now.</a></p>
  </>
)
}

export default About;
