import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import type { ScrambleWordsAction } from '../reducer/scrambleWordsReducer';

interface GuessInputProps {
    dispatch: React.Dispatch<ScrambleWordsAction>;
    guess: string
    handleGuessSubmit: (e: React.FormEvent) => void;
    isGameOver: boolean;
    scrambledWord: string;
};

export const GuessInput = ({ dispatch, guess, handleGuessSubmit, isGameOver, scrambledWord }: GuessInputProps) => {
    return (
        <form onSubmit={handleGuessSubmit} className="mb-6">
            <div className="space-y-5">
                <div>
                    <label
                        htmlFor="guess"
                        className="block text-sm font-medium text-gray-100 mb-2"
                    >
                        Tu Respuesta:
                    </label>
                    <Input
                        id="guess"
                        type="text"
                        value={guess}
                        onChange={(e) => {
                            dispatch({
                                type: 'SET_GUESS',
                                payload: e.target.value,
                            });
                        }}
                        placeholder="Escribí el Apellido..."
                        className="text-center text-lg font-semibold h-12 w-full px-4 rounded-lg bg-gray-200 text-gray-800 border-2 border-gray-700  focus:border-[#E10600] placeholder:text-gray-400 transition-colors"
                        maxLength={scrambledWord.length}
                        disabled={isGameOver}
                    />
                </div>
                <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                    disabled={!guess.trim() || isGameOver}
                >
                    Enviar respuesta
                </Button>
            </div>
        </form>
    );
};
