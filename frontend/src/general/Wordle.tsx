import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";

interface LineInput {
    guess: string;
    isFinal: boolean;
    solution: string;
}

const WORD_LENGTH = 5;

function App() {
    const [solution, setSolution] = useState("");
    const [guesses, setGuesses] = useState(Array(6).fill(null));
    const [currentGuess, setCurrentGuess] = useState("");
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        const handleType = (event: { key: string }) => {
            if (isGameOver) return;
            if (event.key == "Enter") {
                if (currentGuess.length !== WORD_LENGTH) {
                    return;
                }
                const isCorrect = solution === currentGuess;
                if (isCorrect) setIsGameOver(true);

                const newGuesses = [...guesses];
                newGuesses[guesses.findIndex((val) => val == null)] =
                    currentGuess;
                setGuesses(newGuesses);
                setCurrentGuess("");
            }

            if (event.key === "Backspace") {
                setCurrentGuess(currentGuess.slice(0, -1));
                return;
            }

            if (currentGuess.length >= WORD_LENGTH) {
                return;
            }

            const isLetter = event.key.match(/^[a-z]{1}$/) != null;
            if (isLetter) {
                setCurrentGuess((currentGuess) => currentGuess + event.key);
            }
        };

        window.addEventListener("keydown", handleType);

        return () => {
            window.removeEventListener("keydown", handleType);
        };
    }, [currentGuess, isGameOver, solution, guesses]);

    useEffect(() => {
        async function apiCall() {
            const response = await axios.get("http://localhost:3000/words");
            const words = response.data;
            const randomWord = words[Math.floor(Math.random() * words.length)];
            setSolution(randomWord);
        }

        apiCall();
    }, []);

    return (
        <div className="board">
            {guesses.map((guess, i) => {
                const isCurrentGuess =
                    i == guesses.findIndex((val) => val == null);
                return (
                    <Line
                        guess={isCurrentGuess ? currentGuess : guess ?? ""}
                        isFinal={!isCurrentGuess && guess != null}
                        solution={solution}
                    />
                );
            })}
            <div>{solution}</div>
        </div>
    );
}

function Line({ guess, isFinal, solution }: LineInput) {
    const tiles = [];

    for (let i = 0; i < WORD_LENGTH; i++) {
        let char = guess[i];
        if (char) char = char.toUpperCase();
        let className = "tile";
        if (isFinal) {
            if (char === solution[i]) {
                className += " correct";
            } else if (solution.includes(char)) {
                className += " close";
            } else {
                className += " incorrect";
            }
        }
        tiles.push(
            <div key={i} className={className}>
                {char}
            </div>
        );
    }

    return <div className="line">{tiles}</div>;
}

export default App;
