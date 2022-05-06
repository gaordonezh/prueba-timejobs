import ConfigRoutes from "routes";
import ThemeConfig from "theme";
import GlobalStyles from "theme/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import BeerProvider from "context";

const App = () => {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <BrowserRouter>
        <BeerProvider>
          <ConfigRoutes />
        </BeerProvider>
      </BrowserRouter>
    </ThemeConfig>
  );
};

export default App;
