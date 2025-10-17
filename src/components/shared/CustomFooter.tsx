import { GAME_WORDS } from '@/scrambleWords/reducer/scrambleWordsReducer';

interface CustomFooterProps {
    description?: string;
}

export const CustomFooter = ({ description = '' }: CustomFooterProps) => {
    return (
        <div className="text-center mt-6">
            <p className="text-sm text-gray-100">
                {description}
                <br />
                <br />
                {GAME_WORDS.join(', ')}
            </p>
        </div>
    );
};
