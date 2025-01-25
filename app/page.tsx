'use client'
import { useState } from "react";
import Question from "./components/Question";
import questions from './question.json'
export default function Home() {
  const [active, setActive] = useState<number>(0)

  return (
    <div>
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
  );
}
