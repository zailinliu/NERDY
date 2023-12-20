// 아이템 리스트
export function getAllNewItems() {
  return fetch(`http://localhost:8080/newitem`, {
    method: "GET",
  }).then((response) => response.json());
}

export function getAllBestItems() {
  return fetch(`http://localhost:8080/bestitem`, {
    method: "GET",
  }).then((response) => response.json());
}

export function getAllLookbooks() {
  return fetch(`http://localhost:8080/lookbook`,{
    method: "GET",
  }).then((response) => response.json());
}

export function getAllShoes() {
  return fetch(`http://localhost:8080/shoes`,{
    method: "GET",
  }).then((response) => response.json());
}

export function getAllAccs() {
  return fetch(`http://localhost:8080/acc`,{
    method: "GET",
  }).then((response) => response.json());
}

export function getAllThe8s() {
  return fetch(`http://localhost:8080/the8`,{
    method: "GET",
  }).then((response) => response.json());
}

export function getAllMBSlide(){
  return fetch(`http://localhose:8080/mbslide`,{
    method: "GET",
  }).then((response) => response.json());
}

// 아이템 상세내용
export function getNewItemById(id) {
  return fetch(`http://localhost:8080/newitem/${id}`, {
    method: "GET",
  }).then((response) => response.json());
}
export function getBestItemById(id) {
  return fetch(`http://localhost:8080/bestitem/${id}`, {
    method: "GET",
  }).then((response) => response.json());
}

export function getLookbookById(id) {
  return fetch(`http://localhost:8080/lookbook/${id}`, {
    method: "GET",
  }).then((response) => response.json());
}

export function getShoesById(id) {
  return fetch(`http://localhost:8080/shoes/${id}`,{
    method: "GET",
  }).then((response) => response.json());
}

export function getAccsById(id) {
  return fetch(`http://localhost:8080/Acc/${id}`,{
    method: "GET",
  }).then((response) => response.json());
}

export function getThe8ById(id) {
  return fetch(`http://localhost:8080/the8/${id}`,{
    method: "GET",
  }).then((response) => response.json());
}

export function getMBSlideById(id) {
  return fetch(`http://localhost:8080/mbslide/${id}`,{
    method: "GET",
  }).then((response) => response.json());
}

// 장바구니
export function purchaseProducts(games, loginId) {
  const purchases = games.map((game) => ({
    game: game,
    loginId: loginId,
    quantity: 1, // 원하는 구매 수량을 여기에 설정
  }));
  return fetch(`http://localhost:8080/newitem/purchaselist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(purchases),
  })
    .then((response) => response.json())
    .catch(() => "ERROR");
}

// 사용자 구매목록
export function getAllPurchasedProducts(loginId) {
  return fetch(`http://localhost:8080/newitem/purchase/${loginId}`, {
    method: "GET",
  }).then((response) => response.json());
}

// 가입
export function signUp(user) {
  return fetch(`http://localhost:8080/api/member/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) => response.json());
}

// 로그인
export function login(user) {
  console.log(user);
  return fetch(`http://localhost:8080/api/member/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) => response.json());
}

