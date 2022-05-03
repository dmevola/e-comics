import SignUp from "./pages/SipgnUp/SignUp";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


import Login from "./pages/Login/Login";
import Header from "./component/Header/Header";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";

const httplink = createHttpLink({
  uri: 'http://localhost:3003/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httplink),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="app ">
        
        <Routes>
            <Route path="/checkout" element={<><Checkout/></>}/>   
            <Route path="/home" element={<><Header/><Home/></>}/>
            <Route path="/signup" element={<><SignUp/></>}/>
            <Route path="/login" element={<><Login/></>}/>
            <Route path="*" element={<><Header/></>}/>     
          </Routes>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
