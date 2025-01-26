'use client'
import { useState } from "react";
import Question from "./Question";
import questions from '../question.json'
import Image from "next/image";
function Complete() {
    const [active, setActive] = useState<number>(0)

    return (
        <div className="flex justify-center  items-center min-h-screen">
            <div className="flex flex-col fixed bg-white pb-20   max-w-max mx-auto   items-center justify-center  ">
                <div className="flex flex-col items-center gap-20">
                    <div>
                        <Image width={250} height={50} alt='ilustration' src={'/ilustrat.svg'} />
                    </div>
                    <div>
                        <h1 className="text-black mb-10 font-bold">FAQ</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    {questions.map((questionObj, index) => (
                        <div key={index}>
                            <Question
                                active={active}
                                setActive={setActive}
                                questionNumber={index + 1}
                                questionObj={questionObj}
                            />

                        </div>
                    ))}
                </div>



            </div>
        </div>

    );
}
export default Complete
