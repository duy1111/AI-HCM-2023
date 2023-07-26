import { Routes, Route } from "react-router-dom";
import { Container, Home,HomePage } from "./containers/Public";
import { path } from "./utils/constant";

function App() {
  return (
   
      
        <Routes>
          <Route path={path.HOME} element={<Home />}>
          
            <Route path={'*'} element={<HomePage/>} />
  
            
          </Route>
        </Routes>
    
   
  );
}

export default App;
