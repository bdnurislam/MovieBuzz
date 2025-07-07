import "./App.css";
import { Footer, Header } from "./Components";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div className="App ">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
