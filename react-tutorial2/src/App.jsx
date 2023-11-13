export default function App() {
    return (
      <>
        <h1>Number guessing game</h1>
  
        <p>
          We have selected a random number between 1 and 100. See if you can guess
          it in 10 turns or fewer. We'll tell you if your guess was too high or
          too low.
        </p>
  
        <div class="form">
          <form onSubmit={(event) => {
            event.preventDefault();
            const guessField = event.target.elements.guessField;
            console.log(guessfield.value);
            const userGuess = Number(guessField)
            setPreviousGuess([].concat())
          }}>
            <label htmlFor="guessField">Enter a guess: </label>
            <input
              type="number"
              min="1"
              max="100"
              required
              name="guessField"
              className="guessField"
            />
            <input type="submit" value="Submit guess" class="guessSubmit" />
          </form>
        </div>
  
        <div class="resultParas">
          <p></p>
          <p></p>
          <p class="lowOrHi"></p>
        </div>
      </>
    );
  }