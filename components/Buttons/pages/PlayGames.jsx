import { Link, useLocation } from "react-router-dom";
import MaskedText from "../MaskedText/MaskedText";

function PlayGame() {
  const location = useLocation();
  const wordSelected = location.state?.wordSelected || "No word provided"; // Safely extract state with a fallback


  return (
    <>
      <h1>PlayGame: {wordSelected}</h1>
      <MaskedText text={wordSelected} guessedLetters={['H','E']}/>
      <Link to='/start' className="text-blue-400">Start Game Link</Link>
    </>
  );
}

export default PlayGame;
