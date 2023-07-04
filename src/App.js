import React from 'react';
import './App.css';
import Header from './common/Header/Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Pages from './pages/Pages';
import ApiProductDeal from './component/ProductDeal/ApiDeal';
import DataShop from './component/Shop/DataShop';
import { useState } from 'react';
import Cart from './common/Cart/Cart';
import Footer from './common/Footer/Footer';
import PageLogin from './common/Login/PageLogin';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyAeue-AsYu76MMQlTOM-KlbYBlusW9c1FM',
  authDomain: 'myproject-1234.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);
function App() {

  const {productItems} = ApiProductDeal // chỉ lấy mảng productItems trong ApiProductDeal
  const {shopItems} = DataShop
 
  const [cartItemm, setCardItem] = useState([]) // giỏ hàng

  const addToCart = (product) => {
    const productExit = cartItemm.find((item) => item.id === product.id) // tìm kiếm sản phẩm đang thêm và sp trong giỏ

    if (productExit) { // sản phẩm đã tồn tại => cập nhập lại giỏ hàng
      setCardItem(cartItemm.map((item) => // == tự tạo thuộc tính quanlity == //
      // đã có => tạo ra 1 đối tượng mới {sao chép đối tượng(đảm bảo tính nguyên vẹn), tăng số lượng đối tượng đó} 
        (item.id === product.id ? { ...productExit, quanlity: productExit.quanlity + 1} : item)
      // chỉnh sửa thuộc tính trực tiếp trên đối tượng gốc, 
      // như productExit.quanlity = productExit.quanlity + 1, 
      // nó sẽ thay đổi giá trị của thuộc tính quanlity trong productExit.
      ))
    }
    else {
      setCardItem([...cartItemm, {...product, quanlity: 1}])
    }

  }

  // =================================================================
  const downQtyItem = (product) => {
    const productExit = cartItemm.find((item) => item.id === product.id) 
    if (productExit.quanlity === 1) // chỉ còn 1 sản phẩm giống nhau
    {
      setCardItem(cartItemm.filter((item) => item.id !== product.id)) // chỉ giữ lại sản phẩm có item.id != product.id 
    }
    else {
      setCardItem(cartItemm.map((item) => (item.id === product.id ? {...productExit, quanlity: productExit.quanlity-1} : item))) // item =. giữ nguyên
    }
  }

  return (
    <>
      <Router>
        <Header cartItemm = {cartItemm}></Header>
        <Switch>
          <Route path='/' exact>
            <Pages ProductItems = {productItems} addToCart={addToCart} cartItemm = {cartItemm} shopItems = {shopItems}></Pages>
          </Route>
          <Route path='/cart' exact>
            <Cart cartItemm = {cartItemm} addToCart={addToCart} downQtyItem={downQtyItem}></Cart>
          </Route>
          <Route path='/login' exact>
            <PageLogin></PageLogin>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
