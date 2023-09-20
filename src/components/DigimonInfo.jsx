import { AiOutlineCheckCircle } from 'react-icons/ai';
import { RxCrossCircled } from 'react-icons/rx';
import digimons from '../data/data';
import { useState } from 'react';
const DigimonInfo = () => {
  const [index, setIndex] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const { image, digimonName } = digimons[index];
  const wrongDigimon = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + digimons.length) % digimons.length;
      setWrongAnswer(wrongAnswer + 1);
      return newIndex;
    });
  };
  const correctDigimon = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % digimons.length;
      setCorrectAnswer(correctAnswer + 1);
      return newIndex;
    });
  };
  return (
    <main>
      <section>
        <div className="text-container">
          <h4 className="left">Wrong Answers: {wrongAnswer >= 5 || correctAnswer >= 5 ? 0 : wrongAnswer}</h4>
          <h4 className="right">Right Answers: {correctAnswer >= 5 || wrongAnswer >= 5 ? 0 : correctAnswer}</h4>
        </div>
        <div>
          {(() => {
            if (wrongAnswer >= 5) {
              return <h1>you lose! go watch digimon and learn the names</h1>;
            }
            if (correctAnswer >= 5) {
              return <h1>you win! you are a digimon expert</h1>;
            }
            if (wrongAnswer === 4 && correctAnswer === 4) {
              return <h1>it's a draw!</h1>;
            } else {
              return (
                <>
                  <img className="image" src={image}></img>
                  <header>
                    <h2>{digimonName}</h2>
                  </header>
                </>
              );
            }
          })()}
        </div>
        <button className="btn" onClick={wrongDigimon}>
          <RxCrossCircled />
        </button>
        <button className="btn" onClick={correctDigimon}>
          <AiOutlineCheckCircle />
        </button>
      </section>
    </main>
  );
};
export default DigimonInfo;
