import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from "@material-ui/core/Container";
import Nav from "./components/nav";
import Home from "./components/home";
import Coupon from "./components/coupon";
import PageNotFound from "./components/pageNotFound";
import Customer from "./components/customer";
import Addcoupon from "./components/addCoupon";
import Addcustomer from "./components/addCustomer";
import Updatecoupon from "./components/updateCoupon"
import CouponList from "./components/couponsList";
import { Route, Switch, Redirect } from "react-router-dom";
import Updatecustomer from "./components/updateCustomer";
import Footer from "./components/foot";
import updatePizza from "./components/updatepizza";
import AddPizza from "./components/addpizza";
import PizzaList from "./components/pizzalist";
import Cart from "./components/cart";
import Pizza from "./components/pizza";
function App() {
  return (
    <div className="App">
      <Container>
        <Nav />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/coupon/all" component={Coupon} />
          <Route path="/coupon/add" component={Addcoupon} />
          <Route path="/coupon/update/:couponId" component={Updatecoupon} />
          <Route path="/coupon/list" component={CouponList} />
          <Route path="/customer/all" component={Customer} />
          <Route path="/customer/add" component={Addcustomer} />
          <Route path="/customer/update/:customerId" component={Updatecustomer} />
          <Route path="/pizzas" component={Pizza}/>
        <Route path="/pizza/update/:id" component={updatePizza}/>
        <Route path="/pizza/add" component={AddPizza}/>
        <Route path="/pizzalist" component={PizzaList}/>
        <Route path="/cart" component={Cart}/>
          <Redirect exact from="/" to="/home" />
          <Route component={PageNotFound} />
        </Switch>
        
      </Container>
      {/* <div class="fixed-bottom"> <Footer /> </div> */}
      <Footer />
    </div>
  );
}

export default App;
