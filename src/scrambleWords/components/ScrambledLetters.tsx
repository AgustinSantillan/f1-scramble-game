interface ScrambledLettersProps {
    currentWord: string;
    isGameOver: boolean;
    scrambledWord: string;
};

export const ScrambledLetters = ({ currentWord, isGameOver, scrambledWord }: ScrambledLettersProps) => {
    return (
        <div className="mb-8">
            <h2 className="text-center text-sm font-medium text-gray-100 mb-4 uppercase tracking-wide flex items-center justify-center gap-2">
                Piloto Desordenado
                {isGameOver && (
                    <span className="text-red-500 text-xl"> {currentWord}</span>
                )}
            </h2>

            <div className="flex justify-center gap-2 mb-6">
                {scrambledWord.split('').map((letter, index) => (
                    <div
                        key={index}
                        className="w-12 h-12 bg-gradient-to-br from-red-600 to-[#E10600] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-[0_0_10px_#E10600]/50 transform hover:scale-105 transition-transform duration-200"
                        style={{
                            animationDelay: `${index * 0.1}s`,
                            animation: 'fadeInUp 0.6s ease-out forwards',
                        }}
                    >
                        {letter}
                    </div>
                ))}
            </div>
        </div>
    );
};
