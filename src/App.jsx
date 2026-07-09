import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import WorksheetPreview from './components/WorksheetPreview';

function App() {
  const [operations, setOperations] = useState(['+']);
  const [range, setRange] = useState({ min: 0, max: 30 });
  const [totalQuestions, setTotalQuestions] = useState(20);
  const [layoutMode, setLayoutMode] = useState('full');
  const [title, setTitle] = useState('Friday Math Quiz');
  const [includeNameDate, setIncludeNameDate] = useState(true);
  const [questions, setQuestions] = useState([]);

  const generateQuestion = (operation) => {
    const { min, max } = range;
    let num1, num2, answer, text;

    switch (operation) {
      case '+': {
        num1 = Math.floor(Math.random() * (max - min + 1)) + min;
        num2 = Math.floor(Math.random() * (max - min + 1)) + min;
        answer = num1 + num2;
        text = `${num1} + ${num2} =`;
        break;
      }
      case '-': {
        num1 = Math.floor(Math.random() * (max - min + 1)) + min;
        num2 = Math.floor(Math.random() * (num1 - min + 1)) + min;
        answer = num1 - num2;
        text = `${num1} - ${num2} =`;
        break;
      }
      case '×': {
        num1 = Math.floor(Math.random() * (max - min + 1)) + min;
        num2 = Math.floor(Math.random() * (max - min + 1)) + min;
        answer = num1 * num2;
        text = `${num1} × ${num2} =`;
        break;
      }
      case '÷': {
        const divisor = Math.floor(Math.random() * (max - min)) + Math.max(1, min);
        const quotient = Math.floor(Math.random() * (max - min + 1)) + min;
        const dividend = divisor * quotient;
        answer = quotient;
        text = `${dividend} ÷ ${divisor} =`;
        break;
      }
      default:
        return null;
    }

    return { text, answer };
  };

  const generateQuestions = () => {
    if (operations.length === 0) return;

    const newQuestions = [];
    for (let i = 0; i < totalQuestions; i++) {
      const randomOp = operations[Math.floor(Math.random() * operations.length)];
      const question = generateQuestion(randomOp);
      if (question) {
        newQuestions.push(question);
      }
    }
    setQuestions(newQuestions);
  };

  useEffect(() => {
    generateQuestions();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-surface">
      <Sidebar
        operations={operations}
        setOperations={setOperations}
        range={range}
        setRange={setRange}
        totalQuestions={totalQuestions}
        setTotalQuestions={setTotalQuestions}
        layoutMode={layoutMode}
        setLayoutMode={setLayoutMode}
        title={title}
        setTitle={setTitle}
        includeNameDate={includeNameDate}
        setIncludeNameDate={setIncludeNameDate}
        onGenerate={generateQuestions}
      />
      <WorksheetPreview
        questions={questions}
        title={title}
        includeNameDate={includeNameDate}
        layoutMode={layoutMode}
      />
    </div>
  );
}

export default App;
