import './App.css';
import React,{useState} from 'react';
import Data from './Data/Data';
import SingleQuestion from './SingleQuestion/SingleQuestion';


function App() {
  const [questions, setQuestions] = useState(Data)
  console.log(questions)
  return ( 
    <main>
        <section className="container">
          <div className="person-image">
            <img src="./Picture/woman.svg" alt="women"/>
            <img src="./Picture/bg-pattern-desktop.svg" className="bg-desktop" alt="background"/>
            <img src="./Picture/bg-pattern-mobile.svg" className="bg-mobile" alt="background"/>

          </div>

          <div className="accordion_section">
            <h1>FAQ</h1>

            {questions.map((question)=> {
              // const { id, title, info} = question;
              return (
                <SingleQuestion key={question.id} {...question} />
              )
            })}

          </div>
        </section>
    </main>
  );
}

export default App;



