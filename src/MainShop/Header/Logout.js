import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MyContext } from "../NerdyShop";

export function Logout() {
  const { setLoginState } = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("loginState", JSON.stringify({ id: null }));
    setLoginState({ id: null });
    navigate("/");
  }, []);

  return <></>;
}