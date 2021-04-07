import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MakaleListesi from "./components/MakaleListesi";
import MakaleEkle from "./components/MakaleEkle";
import MakaleDetay from "./components/MakaleDetay";
import { Baslik } from "./components/Baslik";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:5000/",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Baslik />
        <div className="body">
          <Switch>
            <Route path="/" exact component={MakaleListesi} />
            <Route path="/ekle" component={MakaleEkle} />
            <Route path="/makale/:id" component={MakaleDetay} />
          </Switch>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
