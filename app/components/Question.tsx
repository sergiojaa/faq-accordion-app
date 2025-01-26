import React from 'react';
import Image from 'next/image';

export interface QuestionProps {
    active: number;
    setActive: React.Dispatch<React.SetStateAction<number>>;
    questionNumber: number;
    questionObj: { question: string; answer: string };
}

export default function Question({ active, setActive, questionNumber, questionObj }: QuestionProps) {
    return (
        <div className="w-[300px]  border-b border-gray-300">
            {/* Image and Question in Flex Row */}
            <div className="flex justify-center  items-center gap-2">
                <p
                    onClick={() => {
                        if (active === questionNumber) {
                            setActive(0);
                        } else {
                            setActive(questionNumber);
                        }
                    }}
                    className="cursor-pointer text-[13px] text-blue-500"
                >
                    {questionObj.question}
                </p>

                {/* Image with rotation effect */}
                <Image
                    onClick={() => {
                        if (active === questionNumber) {
                            setActive(0);
                        } else {
                            setActive(questionNumber);
                        }
                    }}
                    width={10}
                    height={10}
                    src={'/icon-down.svg'}
                    alt="illustration"
                    className={`transition-transform duration-300 ${active === questionNumber ? 'rotate-180' : ''}`}
                />
            </div>

            {/* Answer Section */}
            {active === questionNumber && (
                <div className="flex w-[250px] mx-auto mt-2 mb-2 items-center">
                    <p className="text-[12px] text-start  text-gray-700">{questionObj.answer}</p>
                </div>
            )}
        </div>


    );
}
