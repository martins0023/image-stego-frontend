import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ConnectBackend, Home, TerminalComponent } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/ConnectBackend" element={<ConnectBackend />} />

          
            <Route path="/TerminalComponent" element={<TerminalComponent />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
