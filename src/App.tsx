import ConfigRoutes from "routes";
import ThemeConfig from "theme";
import GlobalStyles from "theme/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import GlobalProvider from "context";

const App = () => {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <BrowserRouter>
        <GlobalProvider>
          <ConfigRoutes />
        </GlobalProvider>
      </BrowserRouter>
    </ThemeConfig>
  );
};

export default App;
