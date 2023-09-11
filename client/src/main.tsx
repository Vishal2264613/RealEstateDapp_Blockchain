import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import { createClient, Provider, fetchExchange, cacheExchange } from "urql";
import "./index.css";

// const client = createClient({
//   url: "http://localhost:5001/",
//   exchanges: [cacheExchange, fetchExchange],
// });
const client = new ApolloClient({
  uri: "http://localhost:5001/",
  cache: new InMemoryCache(),
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>
  </React.StrictMode>
);
