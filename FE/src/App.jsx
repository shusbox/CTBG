import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import EntryPage from "./pages/entry";
import RegisterPage from "./pages/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <EntryPage /> } />
        <Route path="/entry" element={ <EntryPage /> } />
        <Route path="/register" element={ <RegisterPage /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;