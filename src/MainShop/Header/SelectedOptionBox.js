// SelectedOptionBox.js

import React from "react";

const SelectedOptionBox = ({
  name,
  color,
  size,
  quantity,
  price,
  handleOptionDelete,
  optionIndex, // 새로운 prop 추가
}) => {
  console.log("name:", name);
  console.log("color:", color);
  console.log("size:", size);
  console.log("quantity:", quantity);
  console.log("price:", price);

  return (
    <tr
      className="option_product"
      data-option-index={optionIndex} // optionIndex를 사용하도록 변경
      target-key={name} // name을 사용하도록 변경
    >
      <td>
        <p className="product">
          {name}
          <br />-{" "}
          <span>
            {color}/{size}
          </span>
        </p>
      </td>
      <td>
        <span className="quantity" style={{ width: "65px" }}>
          <input
            type="text"
            value={quantity}
            readOnly // 이 부분을 readOnly로 변경하여 수정 불가능하게 만듭니다.
          />
        </span>
        <a href="#none" className="delete" onClick={handleOptionDelete}>
          삭제
        </a>
      </td>
      <td className="right">
        <span>{price}원</span>
      </td>
    </tr>
  );
};

export default SelectedOptionBox;
