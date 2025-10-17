import { Button } from '@/components/ui/button';
import { SkipForward, Play } from 'lucide-react';

interface GameControlsProps {
    handlePlayAgain: () => void;
    handleSkip: () => void;
    isGameOver: boolean;
    maxSkips: number;
    skipCounter: number;
};

export const GameControls = ({ handlePlayAgain, handleSkip, isGameOver, maxSkips, skipCounter }: GameControlsProps) => {
    return (
        <div className="grid grid-cols-2 gap-3">
            <Button
                onClick={handleSkip}
                variant="outline"
                className="border-2 border-gray-500 text-gray-200 bg-transparent hover:border-white hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
                disabled={isGameOver || skipCounter >= maxSkips}
            >
                <SkipForward className="w-4 h-4" />
                Saltar piloto ({skipCounter} / {maxSkips})
            </Button>
            <Button
                onClick={handlePlayAgain}
                variant="outline"
                className="border-2 border-gray-500 text-gray-200 bg-transparent hover:border-white hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
            >
                <Play className="w-4 h-4" />
                Jugar de nuevo
            </Button>
        </div>
    );
};
