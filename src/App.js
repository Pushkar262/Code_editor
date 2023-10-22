// import all the component that is used and return it for render to the screen
import CodeWriteArea from "./Components/CodeWriteArea";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="main">
      <Navbar />
      <CodeWriteArea />
      <Footer />
    </div>
  );
}

export default App;
