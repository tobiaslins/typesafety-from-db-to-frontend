import "../main.css";
import { Provider } from "urql";
import { client } from "../graphql";

function App({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
