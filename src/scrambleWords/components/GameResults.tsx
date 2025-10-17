import { Button } from '@/components/ui/button';

interface GameResultsProps {
    errorCounter: number;
    handlePlayAgain: () => void;
    points: number;
    skipCounter: number;
};

export const GameResults = ({ errorCounter, handlePlayAgain, points, skipCounter }: GameResultsProps) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black flex items-center justify-center p-4">
            <div className="w-full max-w-md mx-auto">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-[#E10600] bg-clip-text text-transparent mb-2">
                    Pilotos desordenados
                </h1>
                <p className="text-gray-100">No hay pilotos para jugar.</p>
                <br />
                <div className="text-gray-100">Puntaje: {points}</div>
                <br />
                <div className="text-gray-100">Errores: {errorCounter}</div>
                <br />
                <div className="text-gray-100">Saltos: {skipCounter}</div>
                <br />
                <Button
                    onClick={handlePlayAgain}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                >
                    Jugar de nuevo
                </Button>
            </div>
        </div>
    );
};
