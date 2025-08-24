import { Toaster } from "react-hot-toast";
import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";
function App() {
  return (
    <>
      <div className="text-xl font-medium text-black">
        <div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
        <AllRoutes />
      </div>
    </>
  );
}

export default App;
