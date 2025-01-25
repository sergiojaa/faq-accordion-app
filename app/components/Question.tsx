import React from 'react'
export interface QuestionProps {
    active: number;
    setActive: React.Dispatch<React.SetStateAction<number>>;
    questionNumber: number;
    questionObj: { question: string; answer: string };

}
export default function Question({ active, setActive, questionNumber, questionObj }: QuestionProps) {
    return (
        <div>
            <div className="border">
                <p
                    onClick={() => {
                        if (active === questionNumber) {
                            setActive(0)
                        } else {
                            setActive(questionNumber)

                        }
                    }
                    }
                    className="cursor-pointer border boder-b border-blue-500">{questionObj.question}</p>
                {active === questionNumber ? <p>answer {questionObj.answer}</p> : null}

            </div>
        </div>
    )
}
