import ReactRouter from "./Routes";
import ContextProvider from "./context/context";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <ContextProvider>
        <GlobalStyle/>
        <ReactRouter/>
    </ContextProvider>
  );
}

export default App;
