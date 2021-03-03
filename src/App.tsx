import Main from "./component/Main";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (<AuthProvider>
    <Main />
  </AuthProvider>
  );
}

export default App;
