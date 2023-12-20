import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { getAllBestItems } from "../Api/api";
import { PriceCalc } from "../Body/PriceCalc";
import SelectedOptionBox from "./SelectedOptionBox";

const Container = styled.div`
  position: relative;
  z-index: 10000;
  width: calc(100vw-10px);
  min-width: 1200px;
  max-width: 1400px;
  margin: 0 auto;
  min-height: calc(100% - 298px);
  overflow: hidden;
`;
const BestItemBanner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 50px;
  margin-bottom: 50px;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;
const Ul = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
`;
const Li = styled.li`
  display: flex;
  justify-content: center;
  list-style: none;
  flex: 0 0 20%;
  padding: 0 0 80px 0;
`;
const ItemText = styled.div`
  color: black;
  font-size: 14px;
`;
const Thumbnail = styled.div`
  position: relative;
  width: 230px;
  margin-top: 30px;

  img {
    width: 100%;
  }
`;
const BestNum = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 35px;
  background-color: black;
  color: white;
  font-size: 12px;
  font-weight: 900;
  align-items: center;
  flex-direction: column;
  text-align: center;
  z-index: 100;
`;

const ItemIf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;
const Txt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Coast = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const Sale = styled.div`
  color: red;
`;
const Price = styled.div``;
const ItemTitle = styled.div`
  color: black;
  font-size: 14px;
  display: flex;
  gap: 30px;
  h1 {
    font-size: 40px;
    font-weight: 900;
    margin-top: 50px;
  }
  strong {
    margin-top: 70px;
    font-size: 14px;
  }
`;

const Basket = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 36px;
  height: 36px;
  cursor: pointer;
  background: url(https://whoisnerdy.com/web/upload/images/ico_cart_6.png?v=1) 0
    0;
  background-size: 36px 36px;
  img {
    height: 36px;
    width: 36px;
    opacity: 0;
  }
`;
const Box = styled.div`
  padding: 0 10px;
  overflow: hidden;
`;

const Popup = styled.div`
  z-index: 10001;
  position: absolute;
  display: block;
  width: 600px;
  height: 748px;
  top: 121px;
  left: 50%;
  margin-left: -300px;
`;
const Iframe = styled.div`
  height: 540px;
  width: 100%;
  background: transparent;
  border: none;
  background-color: white;
  overflow: hidden;
`;

const Popbody = styled.div`
  min-width: 0;
  overflow: hidden;
  font-size: 12px;
  color: #353535;
  min-height: 600px;
`;
const Optionlayer = styled.div`
  position: relative;
  border: 1px solid #000;
  box-sizing: border-box;
  width: 600px;
`;

const Header = styled.div`
  padding: 12px 35px 12px 19px;
  color: #fff;
  background: #495164;
`;

const Popcontent = styled.div`
  position: relative;
  min-height: 434px;
  margin: 0;
  padding: 0;
  font-size: 12px;
`;
const Contentlayer = styled.div`
  overflow: auto;
  overflow-x: hidden;
  max-height: 359px;
  padding: 20px 25px 14px;
  h2 {
    padding: 0 0 20px;
    font-size: 12px;
    border-bottom: 1px dotted #000;
  }
`;

const Product = styled.div`
  margin: 20px 0 0;
  min-height: 82px;
  position: relative;
  padding: 0 0 0 100px;
`;
const Normal = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 80px;
  height: 80px;
  min-height: 82px;
  img {
    max-width: 100%;
    width: 80px;
    height: 80px;
    border: 1px solid #ddd;
    vertical-align: top;
  }
`;
const Table = styled.table`
  color: #353535;
  clear: both;
  text-align: left;
  width: 100%;
  border: 0;
  border-spacing: 0;
  border-collapse: collapse;
  caption {
    text-align: center;
    display: none;
  }
  col {
    display: table-column;
  }
  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }
  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  th {
    display: table-cell;
    padding: 2px 0 5px;
    font-weight: normal;
    text-align: left;
    vertical-align: top;
  }
  td {
    padding: 0 9px 8px;
    line-height: 1.5;
    vertical-align: middle;
  }
  select {
    width: 100%;
    height: 24px;
    border: 1px solid #d5d5d5;
    font-size: 100%;
    color: #353535;
    vertical-align: middle;
  }
  option {
    font-weight: normal;
    display: block;
    min-height: 1.2em;
    padding: 0px 2px 1px;
    white-space: nowrap;
  }
`;
const Total = styled.div`
  margin: 20px 0;
  clear: both;
  p {
    margin: 2px 9px;
    padding: 1px 0 1px 20px;
    line-height: 1.4;
    background: url(https://img.echosting.cafe24.com/skin/base/common/ico_info.gif)
      no-repeat 0 2px;
    font-size: 11px;
    color: #f76560;
  }
  table {
    width: 100%;
    margin: 0;
    font-size: 12px;
  }
  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
    min-height: 0;
  }
  th {
    font-size: 0;
  }
`;
export function BestItem() {
  const [bestitemList, setBestItemList] = useState([]);
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [clickedItemName, setClickedItemName] = useState("");
  const [clickedImg, setClickedImg] = useState("");
  const [clickedPrice, setClickedPrice] = useState("");
  const [selectedColor, setSelectedColor] = useState("*");
  const [selectedSize, setSelectedSize] = useState("*");
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  // 서버에 있는 bestitem 가져오는 로직
  useEffect(() => {
    getAllBestItems().then((bestitem) => {
      setBestItemList(bestitem);
    });
  }, []);

  const togglePopup = (itemname, itemimg, itemprice) => {
    console.log("Toggling Popup:", itemname, itemimg, itemprice);
    setClickedImg(itemimg);
    setClickedItemName(itemname);
    setClickedPrice(itemprice);
    setProductList([]);
    setSelectedProduct(null); // 팝업이 열릴 때 선택된 제품 초기화
    setPopupVisibility((prevVisibility) => !isPopupVisible);
  };

  const handleColorChange = (event) => {
    const color = event.target.value;
    console.log("Selected Color:", color);

    setSelectedOption((prevOption) => ({
      ...prevOption,
      color: color,
    }));
  };

  const handleSizeChange = (event) => {
    const size = event.target.value;
    console.log("Selected Size:", size);

    setSelectedOption((prevOption) => ({
      ...prevOption,
      size: size,
    }));
  };

  const handleOptionAdd = () => {
    if (selectedColor !== "*" && selectedSize !== "*") {
      const newProduct = {
        name: clickedItemName,
        size: selectedSize,
        color: selectedColor,
        quantity: 1,
        price: clickedPrice,
      };

      const isProductExist = productList.some(
        (item) =>
          item.name === newProduct.name &&
          item.size === newProduct.size &&
          item.color === newProduct.color
      );

      if (!isProductExist) {
        console.log("Adding new product:", newProduct);
        console.log("Current productList:", productList);

        setProductList((prevList) => {
          const updatedList = [...prevList, newProduct];
          console.log("Updated productList:", updatedList);
          return updatedList;
        });

        const selectedProductInList = productList.find(
          (item) =>
            item.name === newProduct.name &&
            item.size === newProduct.size &&
            item.color === newProduct.color
        );

        console.log("Selected product in list:", selectedProductInList);

        if (selectedProductInList) {
          console.log("Setting selected product:", selectedProductInList);
          setSelectedProduct(selectedProductInList);
        } else {
          console.log("Setting selected product:", newProduct);
          setSelectedProduct(newProduct);
        }

        // 팝업 창 닫기
        setPopupVisibility(false);
      }
    }
  };

  const handleQuantityChange = (action) => {
    const newQuantity =
      action === "up"
        ? selectedProduct.quantity + 1
        : selectedProduct.quantity - 1;

    if (newQuantity > 0) {
      const updatedProductList = productList.map((item) =>
        item.name === selectedProduct.name &&
        item.size === selectedProduct.size &&
        item.color === selectedProduct.color
          ? { ...item, quantity: newQuantity }
          : item
      );

      setProductList(updatedProductList);
      setSelectedProduct((prevProduct) => ({
        ...prevProduct,
        quantity: newQuantity,
      }));
    }
  };

  const isProductExist = productList.some(
    (item) =>
      item.name === selectedProduct.name &&
      item.size === selectedProduct.size &&
      item.color === selectedProduct.color
  );

  if (selectedProduct && !isProductExist) {
    setProductList((prevList) => [...prevList, selectedProduct]);
  }

  const handleOptionDelete = () => {
    setProductList((prevList) =>
      prevList.filter(
        (item) =>
          item.name !== selectedProduct.name ||
          item.size !== selectedProduct.size ||
          item.color !== selectedProduct.color
      )
    );
    // setSelectedProduct(null); // 선택된 상품을 초기화하지 않도록 변경
  };

  const generateProductList = () => {
    if (!selectedProduct) {
      console.log("Generating Product List: null");
      return <></>;
    }

    console.log("Generating Product List:", selectedProduct);

    const selectedProductInList = productList.find(
      (item) =>
        item.name === selectedProduct.name &&
        item.size === selectedProduct.size &&
        item.color === selectedProduct.color
    );

    if (!selectedProductInList) {
      console.log("Selected product not found in list");
      return <></>;
    }

    return (
      <SelectedOptionBox
        selectedProduct={selectedProductInList}
        handleOptionDelete={handleOptionDelete}
        optionIndex={productList.indexOf(selectedProductInList) + 1}
      />
    );
  };
  return (
    <>
      <Container>
        <ItemTitle>
          <h1>23FW Best상품</h1>
          <strong>전체</strong>
        </ItemTitle>
        <BestItemBanner>
          <img
            src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/d6f312b3dac67073bda4b0018a47c320.jpg"
            alt="배너"
          />
        </BestItemBanner>
        <ItemText>
          <p>{bestitemList.length}개의 상품이 있습니다</p>
        </ItemText>
        <Ul>
          {bestitemList.map((bestitem, index) => (
            <Li key={bestitem.id}>
              <Box>
                <Thumbnail>
                  <a href={bestitem.link}>
                    <img src={bestitem.mainimg} alt="이미지" />
                  </a>
                  <Basket
                    onClick={() =>
                      togglePopup(
                        bestitem.name,
                        bestitem.mainimg,
                        bestitem.price
                      )
                    }
                  >
                    <img src="https://whoisnerdy.com/web/upload/icon_202102261532302200.png" />
                  </Basket>

                  <BestNum>
                    <p>Best</p>
                    <p>{index + 1}</p>
                  </BestNum>
                </Thumbnail>
                <ItemIf>
                  <Txt>
                    <p>★ 평점</p>
                    <p>{bestitem.name}</p>
                  </Txt>
                  <Coast>
                    <Sale>{bestitem.sale}</Sale>
                    <Price>{PriceCalc(bestitem.price)}원</Price>
                  </Coast>
                </ItemIf>
              </Box>
            </Li>
          ))}
        </Ul>
        {isPopupVisible && (
          <Popup>
            <Iframe>
              <Popbody>
                <Optionlayer>
                  <Header>
                    <h1>옵션 선택</h1>
                  </Header>
                  <Popcontent>
                    <Contentlayer>
                      <h2>{clickedItemName}</h2>
                      {generateProductList()}
                      <Product>
                        <Normal>
                          <img src={clickedImg}></img>
                        </Normal>
                        <Table>
                          <caption>상품 옵션</caption>
                          <colgroup>
                            <col style={{ width: "120px" }}></col>
                            <col style={{ width: "auto" }}></col>
                          </colgroup>
                          <tbody>
                            <tr>
                              <th scope="row">컬러</th>
                              <td>
                                <select onChange={handleColorChange}>
                                  <option value={"*"} selected>
                                    - [필수] 옵션을 선택해 주세요 -
                                  </option>
                                  <option value={"**"} disabled>
                                    --------------------------
                                  </option>
                                  <option value={"아이보리"}>아이보리</option>
                                  <option value={"라이트퍼플"}>
                                    라이트퍼플
                                  </option>
                                  {/* 다른 옵션 값들을 추가하세요 */}
                                </select>

                                <select onChange={handleSizeChange}>
                                  <option value={"*"} selected>
                                    - [필수] 옵션을 선택해 주세요 -
                                  </option>
                                  <option value={"**"} disabled>
                                    --------------------------
                                  </option>
                                  <option value={"XS"}>XS</option>
                                  <option value={"S"}>S</option>
                                  <option value={"M"}>M</option>
                                  <option value={"L"}>L</option>
                                  <option value={"XL"} disabled>
                                    XL [품절]
                                  </option>
                                  {/* 다른 옵션 값들을 추가하세요 */}
                                </select>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Product>
                      <Total>
                        <p
                          style={{
                            display:
                              selectedColor === "*" || selectedSize === "*"
                                ? "block"
                                : "none",
                          }}
                        >
                          수량을 선택해주세요.
                        </p>
                        <p>
                          위 옵션 선택 박스를 선택하시면 아래에 상품이
                          추가됩니다.
                        </p>
                        {productList.length > 0 && (
                          <Table border={0}>
                            <caption>
                              상품 목록
                              <col style={{ width: "284px" }}></col>
                              <col style={{ width: "80px" }}></col>
                              <col style={{ width: "110px" }}></col>
                            </caption>
                            <thead>
                              <tr>
                                <th scope="col">상품명</th>
                                <th scope="col">상품수</th>
                                <th scope="col">가격</th>
                              </tr>
                            </thead>
                            <tbody>
                              {productList.map((product) => (
                                <SelectedOptionBox
                                  key={
                                    product.name + product.size + product.color
                                  }
                                  name={product.name}
                                  color={product.color}
                                  size={product.size}
                                  quantity={product.quantity}
                                  price={product.price}
                                  handleOptionDelete={handleOptionDelete}
                                  optionIndex={productList.indexOf(product) + 1}
                                />
                              ))}
                            </tbody>
                          </Table>
                        )}
                      </Total>
                    </Contentlayer>
                  </Popcontent>
                  <button onClick={togglePopup}> 닫기 </button>
                </Optionlayer>
              </Popbody>
            </Iframe>
          </Popup>
        )}
      </Container>
    </>
  );
}
