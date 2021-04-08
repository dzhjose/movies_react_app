import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="mx-auto px-4 py-4 bg-white dark:bg-gray-800 dark:text-white">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={props => ( <route.component {...props}/>)}
              />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
