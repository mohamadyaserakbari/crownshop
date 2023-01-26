import { Routes, Route} from "react-router-dom";
import Nav from './routes/navigation/nav.component'
import Home from './routes/home/home.component';
import SignIn from "./routes/sign-in/sign-in.component";




const Shop = () => {
  return (
    <div>
      <h1>This is Shop</h1>
    </div>
  )
}


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;