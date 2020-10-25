import "./App.css";
import LottieAnimation from "./Lottie";
import womenPhone from "./animation/women-phone.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <LottieAnimation lotti={womenPhone} height={700} width={700} />
        </div>
      </header>
    </div>
  );
}

export default App;
