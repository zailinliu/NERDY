import { useNavigate } from "react-router-dom";

export function ScrollTop() {
  const navigate = useNavigate();
  window.scrollTo({ top: 0, behavior: "auto" });

  return null; //이 컴포넌트는 렌더링하지않음.
}
