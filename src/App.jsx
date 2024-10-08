import { Outlet } from "react-router-dom";


const App = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Outlet/>
    </div>
  );
};

export default App;
