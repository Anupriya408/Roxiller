import { Route, Routes, Navigate } from "react-router-dom";
// import Display from "./Redux/Display";
import Input from "./Components/Todo";
import TodoDetails from "./Components/TodoDetails";

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Input/>}>
    <Route path="/:id" element={<TodoDetails/>}/>
    </Route>
    </Routes>
    
    
   
    </div>
  );
}

export default App;
