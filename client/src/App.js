import SignUp from "./pages/SipgnUp/SignUp";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Auth from './utils/auth';

import Login from "./pages/Login/Login";
import Header from "./component/Header/Header";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import Payment from "./pages/Payment/Payment";
import AddItem from "./pages/AddItem/AddItem";
import Profile from "./pages/Profile/Profile";

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

            <Route path="/checkout" element={localStorage.getItem('id_token')? <><Checkout/></> : <><Login/></>}/>  
            <Route path="/payment" element={localStorage.getItem('id_token')? <><Payment/></> : <><Login/></>}/> 
            <Route path="/home" element={<><Header/><Home/></>}/>
            <Route path="/addItem" element={localStorage.getItem('id_token')? <><AddItem/></> : <><Login/></>}/>
            <Route path="/signup" element={<><SignUp/></>}/>
            <Route path="/login" element={<><Login/></>}/>
            <Route path="/profile/:username" element={<><Header/><Profile/></>}/>
            <Route path="*" element={<><Header/><Home/></>}/>     
          </Routes>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
