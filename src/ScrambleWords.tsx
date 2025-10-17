import { Card, CardContent } from '@/components/ui/card';

import { CustomFooter } from './components/shared/CustomFooter';
import { CustomHeader } from './components/shared/CustomHeader';
import { GameControls } from './scrambleWords/components/GameControls';
import { GameStats } from './scrambleWords/components/GameStats';
import { GuessInput } from './scrambleWords/components/GuessInput';
import { ScrambledLetters } from './scrambleWords/components/ScrambledLetters';
import { GameResults } from './scrambleWords/components/GameResults';
import { useScrambleGame } from './scrambleWords/hooks/useScrambleGame';

export const ScrambleWords = () => {

    const {
        currentWord,
        dispatch,
        errorCounter,
        guess,
        handleGuessSubmit,
        handlePlayAgain,
        handleSkip,
        isGameOver,
        maxAllowErrors,
        maxSkips,
        points,
        scrambledWord,
        skipCounter,
        totalWords,
        words,
    } = useScrambleGame();

    //! Si ya no hay palabras para jugar, se muestra el mensaje de fin de juego
    if (words.length === 0) {

        return (
            <GameResults
                errorCounter={errorCounter}
                handlePlayAgain={handlePlayAgain}
                points={points}
                skipCounter={skipCounter}
            />
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black flex items-center justify-center p-4">
            <div className="w-full max-w-md mx-auto">

                <CustomHeader
                    title='Pilotos desordenados'
                    description='Ordená las letras y descifrá el Apellido del piloto de F1 2025!'
                />

                <Card className="backdrop-blur-md bg-gray-900/70 border border-gray-800 shadow-lg">
                    <CardContent className="p-8">

                        <ScrambledLetters
                            currentWord={currentWord}
                            isGameOver={isGameOver}
                            scrambledWord={scrambledWord}
                        />

                        <GuessInput
                            dispatch={dispatch}
                            guess={guess}
                            handleGuessSubmit={handleGuessSubmit}
                            isGameOver={isGameOver}
                            scrambledWord={scrambledWord}
                        />

                        <GameStats
                            points={points}
                            totalWords={totalWords}
                            errorCounter={errorCounter}
                            maxAllowErrors={maxAllowErrors}
                        />

                        <GameControls
                            handlePlayAgain={handlePlayAgain}
                            handleSkip={handleSkip}
                            isGameOver={isGameOver}
                            maxSkips={maxSkips}
                            skipCounter={skipCounter}
                        />

                    </CardContent>
                </Card>

                <CustomFooter
                    description='Ponete a prueba con todos los pilotos de la parrilla!'
                />

            </div>
        </div>
    );
};