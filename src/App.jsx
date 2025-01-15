import "./App.css";

const App = () => {
  const operators = ["%", "-", "+", "/", "*"];
  let lastOperator = "";

  return (
    <div className="wrapper flex-center">
      <div className="calculator">
        <div className="display"></div>
        <div className="btn btn-ac">AC</div>
        <div className="btn btn-c">C</div>
        <div className="btn btn-per">%</div>
        <div className="btn btn-slash">/</div>
        <div className="btn btn-7">7</div>
        <div className="btn btn-8">8</div>
        <div className="btn btn-9">9</div>
        <div className="btn btn-star">*</div>
        <div className="btn btn-4">4</div>
        <div className="btn btn-5">5</div>
        <div className="btn btn-6">6</div>
        <div className="btn btn-minus">-</div>
        <div className="btn btn-1">1</div>
        <div className="btn btn-2">2</div>
        <div className="btn btn-3">3</div>
        <div className="btn btn-plus">+</div>
        <div className="btn btn-0">0</div>
        <div className="btn btn-dot">.</div>
        <div className="btn btn-equal">=</div>
      </div>
    </div>
  );
};

export default App;
