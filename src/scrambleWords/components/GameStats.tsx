interface GameStatsProps {
    errorCounter: number;
    maxAllowErrors: number;
    points: number;
    totalWords: number;
};

export const GameStats = ({ errorCounter, maxAllowErrors, points, totalWords }: GameStatsProps) => {
    return (
        <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-[#111d13] to-[#18291b] rounded-lg p-4 text-center border border-[#3ac87c]/30 shadow-sm">
                <div className="text-2xl font-bold text-[#3ac87c]">
                    {points} / {totalWords}
                </div>
                <div className="text-sm text-[#81e6a8] font-medium">Puntos</div>
            </div>
            <div className="bg-gradient-to-br from-[#1f1414] to-[#2c1c1c] rounded-lg p-4 text-center border border-[#ff4d4d]/30 shadow-sm">
                <div className="text-2xl font-bold text-[#ff5c5c]">
                    {errorCounter}/{maxAllowErrors}
                </div>
                <div className="text-sm text-[#ff9b9b] font-medium">Errores</div>
            </div>
        </div>
    );
};
