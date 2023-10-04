import { useState } from 'react';
import defaultAnswers from './answers.json';
import { choice } from './random';
import "./EightBall.css"

// const EightBall = ({ answers = defaultAnswers }) => {
//     const [answer, setAnswer] = useState({
//         msg: "Think of A Question",
//         color: "black"
//     })

//     const reset = () => {
//         return answer
//     }



//     function handleClick(event) {
//         setAnswer(choice(answers))
//     }

//     return (
//         <>
//             <div className='EightBall'
//                 onClick={handleClick}
//                 style={{ backgroundColor: answer.color }}>

//                 <b>{answer.msg}</b>
//             </div>
//             <button onClick={reset}>Reset Game</button>
//         </>
//     )

// }

function EightBall({ answers = defaultAnswers }) {
    const [answer, setAnswer] = useState({
        msg: "Think of a Question.",
        color: "black",
    });

    function handleClick(evt) {
        setAnswer(choice(answers));
    }

    return (
        <div
            className="EightBall"
            onClick={handleClick}
            style={{ backgroundColor: answer.color }}
        >
            <b>{answer.msg}</b>
        </div>
    );
}


export default EightBall;

