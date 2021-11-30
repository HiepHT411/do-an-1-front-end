import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter} from "react-router-dom";
// import {Provider} from "react-redux";
//import {ApolloProvider, ApolloClient, InMemoryCache, NormalizedCacheObject} from "@apollo/client"

import App from './pages/App/App';
// import store from "./store";
// import {API_BASE_URL} from "./utils/constants/url";

// const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
//   uri: API_BASE_URL,
//   cache: new InMemoryCache()
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  // <React.StrictMode>
  //   <Provider store={store}>
  //       <BrowserRouter>
  //            <App/>
  //       </BrowserRouter>
  //    </Provider>
  // </React.StrictMode>,
  // document.getElementById('root')

  // <ApolloProvider client={client}>
  //       <Provider store={store}>
  //           <BrowserRouter>
  //               <App/>
  //           </BrowserRouter>
  //       </Provider>
  //   </ApolloProvider>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
