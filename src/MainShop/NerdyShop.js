import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Body/Home";
import { Error } from "./Body/Error";
import { Login } from "./Header/Login";
import { Register } from "./Header/Register";
import { Cart } from "./Header/Cart";
import { Mypage } from "./Header/Mypage";
import { Search } from "./Header/Search";
import { Detail } from "./Body/detail";
import { Layout } from "./Layout";
import { Shoes } from "./Header/Shoes";
import { Gift } from "./Header/Gift";
import { Acc } from "./Header/Acc";
import { NewItem } from "./Header/NewItem";
import { BestItem } from "./Header/BestItem";
import { Ooutlet } from "./Header/Ooutlet";
import { Benefit } from "./Header/Benefit";
import { LookBookRoutes } from "./Header/LookBook";
import { Community } from "./Header/Community";
import { The8 } from "./Header/The8";
import { ScrollTop } from "./Header/ScrollTop";
import { Logout } from "./Header/Logout";

// 글로벌 세팅 구현

const client = new QueryClient();
export const MyContext = createContext();

export function NerdyShop() {
  const [myGlobalState, setMyGlobalState] = useState(null);
  const [loginState, setLoginState] = useState(
    JSON.parse(localStorage.getItem("loginState"))
  );

  return (
    <>
      <QueryClientProvider client={client}>
        <MyContext.Provider
          value={{
            myGlobalState,
            setMyGlobalState,
            loginState,
            setLoginState,
          }}
        >
          <BrowserRouter>
            <ScrollTop />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="the8" element={<The8 />} />
                <Route path="bestItem" element={<BestItem />} />
                <Route path="newItem" element={<NewItem />} />
                <Route path="shoes" element={<Shoes />} />
                <Route path="acc" element={<Acc />} />
                <Route path="outlet" element={<Ooutlet />} />
                <Route path="lookbook/*" element={<LookBookRoutes />} />
                <Route path="benefit" element={<Benefit />} />
                <Route path="community" element={<Community />} />
                <Route path="search" element={<Search />} />
                <Route path="login" element={<Login />} />
                <Route path="logout" element={<Logout />} />
                <Route path="register" element={<Register />} />
                <Route path="cart" element={<Cart />} />
                <Route path="gift" element={<Gift />} />
                <Route path="member" element={<Mypage />} />
                <Route path="detail" element={<Detail />} />
                <Route path="*" element={<Error />} />
                <Route path="home" element={<Home />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </MyContext.Provider>
      </QueryClientProvider>
    </>
  );
}
