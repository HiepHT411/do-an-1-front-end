import React, {FC} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Blog from '../Blog/Blog';
import BlogDetail from '../Blog/BlogDetail';
import CollectionsAll from '../Collections/CollectionsAll';
import CollectionsSpecial from '../Collections/CollectionsSpecial';
import CollectionsHot from '../Collections/CollectionsHot';
import ProductDetail from '../ProductDetail/ProductDetail';
import CollectionsFontPage from '../Collections/CollectionsFontPage';
import CollectionsCarryService from '../Collections/CollectionsCarryService';
import ContactComponent from '../ContactPage';
import HomePage from '../HomePage';
import IntroComponent from '../IntroPage';
import './App.css';
import login from '../AccountComponent/Login';
import signup from '../AccountComponent/Signup';
import AdminPage from '../Admin/AdminPage';
import Cart from '../../components/Cart/Cart';
import AdminFeedback from '../Admin/AdminFeedback';
import AdminBlog from '../Admin/AdminBlog';
import AdminEditBlog from '../Admin/AdminEditBlog';
import AdminProduct from '../Admin/AdminProduct';
import AdminEditProduct from '../Admin/AdminEditProduct';
import BlogCreateBoard from '../Admin/BlogCreateBoard';
import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent/>
        <div>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/contact" component={ContactComponent}/>
            <Route path="/intro" component={IntroComponent}/>
            <Route path="/blog/news" component={Blog}></Route>
            <Route path="/blog/detail/:id" component={BlogDetail}/>

            <Route path="/collections/detail/:id" component={ProductDetail}/>

            <Route path="/collections/all" component={CollectionsAll}/>
            <Route path="/collections/hot-products" component={CollectionsHot}/>
            <Route path="/collections/mam-an-hoi-rong-phuong" component={CollectionsSpecial}/>
            <Route path="/collections/be-le-chuyen-nghiep" component={CollectionsCarryService}/>
            <Route path="/collections/font-page" component={CollectionsFontPage}/>

            <Route exact path="/account/login" component={login}/>
            <Route exact path ="/account/signup" component={signup}/>
            
            <Route path ="/adminPage" component={AdminPage}/>
            <Route path = "/user/cart" component={Cart}/>
            <Route path = "/feeadback-management-page" component={AdminFeedback}/>
            <Route path = "/blog-management-page" component = {AdminBlog}/>
            <Route path = "/adminEditBlog/:id" component = {AdminEditBlog}/>
            <Route path = "/product-management-page" component = {AdminProduct}/>
            <Route path = "/adminEditProduct/:id" component = {AdminEditProduct}/>
            <Route path = "/blog/createboard" component = {BlogCreateBoard}/>
          </Switch>
        </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
