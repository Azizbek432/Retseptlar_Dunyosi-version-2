import Navbar from "./components/layout/Navbar/Navbar.jsx";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <AppRouter />
      </main>
    </>
  );
}

export default App;
