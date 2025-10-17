export interface ScrambleWordsState {
    currentWord: string;
    errorCounter: number;
    guess: string;
    isGameOver: boolean;
    maxAllowErrors: number;
    maxSkips: number;
    points: number;
    scrambledWord: string;
    skipCounter: number;
    totalWords: number;
    words: string[];
};

export type ScrambleWordsAction =
    | { type: 'SET_GUESS', payload: string }
    | { type: 'CHECK_ANSWER' }
    | { type: 'START_NEW_GAME', payload: ScrambleWordsState }
    | { type: 'SKIP_WORD' };

export const GAME_WORDS = [
    'VERSTAPPEN',
    'TSUNODA',
    'LECLERC',
    'HAMILTON',
    'RUSSELL',
    'ANTONELLI',
    'NORRIS',
    'PIASTRI',
    'ALONSO',
    'STROLL',
    'GASLY',
    'COLAPINTO',
    'OCON',
    'BEARMAN',
    'ALBON',
    'SAINZ',
    'HULKENBERG',
    'BORTOLETO',
    'LAWSON',
    'HADJAR'
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
};


export const getInitialState = (): ScrambleWordsState => {

    const shuffledWords = shuffleArray([...GAME_WORDS]);

    return {
        currentWord: shuffledWords[0],
        errorCounter: 0,
        guess: '',
        isGameOver: false,
        maxAllowErrors: 3,
        maxSkips: 3,
        points: 0,
        scrambledWord: scrambleWord(shuffledWords[0]),
        skipCounter: 0,
        totalWords: shuffledWords.length,
        words: shuffledWords,
    };
};


export const scrambleWordsReducer = (state: ScrambleWordsState, action: ScrambleWordsAction): ScrambleWordsState => {

    switch (action.type) {
        case 'SET_GUESS':
            return {
                ...state,
                guess: action.payload.trim().toUpperCase(),
            };

        case 'CHECK_ANSWER': {
            if (state.currentWord === state.guess) {
                const newWords = state.words.slice(1);
                return {
                    ...state,
                    currentWord: newWords[0],
                    guess: '',
                    points: state.points + 1,
                    scrambledWord: scrambleWord(newWords[0]),
                    words: newWords,
                };
            };

            return {
                ...state,
                errorCounter: state.errorCounter + 1,
                guess: '',
                isGameOver: (state.errorCounter + 1) >= state.maxAllowErrors,
            };
        };

        case 'SKIP_WORD': {

            if (state.skipCounter >= state.maxSkips) return state;

            const updatedWords = state.words.slice(1);

            return {
                ...state,
                currentWord: updatedWords[0],
                guess: '',
                scrambledWord: scrambleWord(updatedWords[0]),
                skipCounter: state.skipCounter + 1,
                words: updatedWords,
            };
        };

        case 'START_NEW_GAME':
            return action.payload;

        default:
            return state;
    };

};