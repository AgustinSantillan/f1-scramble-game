import { useEffect, useReducer } from 'react';

import confetti from 'canvas-confetti';

import { getInitialState, scrambleWordsReducer } from '../reducer/scrambleWordsReducer';

export const useScrambleGame = () => {
    const [state, dispatch] = useReducer(scrambleWordsReducer, getInitialState());

    const {
        currentWord,
        errorCounter,
        guess,
        isGameOver,
        maxAllowErrors,
        maxSkips,
        points,
        scrambledWord,
        skipCounter,
        totalWords,
        words,
    } = state;

    useEffect(() => {

        if (points === 0) return;

        confetti({
            particleCount: 100,
            spread: 120,
            origin: { y: 0.6 },
        });

    }, [points]);

    useEffect(() => {

        if (words.length === 0) {

            confetti({
                particleCount: 100,
                spread: 120,
                origin: { y: 0.6 },
            });
        };

    }, [words.length]);


    const handleGuessSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        dispatch({
            type: 'CHECK_ANSWER'
        });
    };

    const handleSkip = () => {
        dispatch({
            type: 'SKIP_WORD',
        });
    };

    const handlePlayAgain = () => {
        dispatch({
            type: 'START_NEW_GAME',
            payload: getInitialState(),
        });
    };


    return {
        // Properties
        currentWord,
        errorCounter,
        guess,
        isGameOver,
        maxAllowErrors,
        maxSkips,
        points,
        scrambledWord,
        skipCounter,
        totalWords,
        words,

        // Methods
        handleGuessSubmit,
        handleSkip,
        handlePlayAgain,
        dispatch,
    };
};
