import Navbar from "./components/Navbar";
import Content from "./components/Content";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div>
      <AppRouter>
        <Navbar />
        <Content />
      </AppRouter>
    </div>
  );
};

export { App };
