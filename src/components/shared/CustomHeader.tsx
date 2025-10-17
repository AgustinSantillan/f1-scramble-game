interface CustomHeaderProps {
    description?: string;
    title: string;
};

export const CustomHeader = ({ title, description }: CustomHeaderProps) => {
    return (
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-[#E10600] bg-clip-text text-transparent mb-2">
                {title}
            </h1>
            <p className="text-gray-100">
                {description}
            </p>
        </div>
    );
};
