import styled from "styled-components";

const Container = styled.div`
  width: 1200px;
  min-width: 1000px;
  margin: 0 auto;
  height: 1000px;
`;
const CommunityTable = styled.table`
  width: 100%;
  position: relative;
  margin-top: 50px;
  border-top: 1px solid #d9d9d9;
  border-top-color: #fff;
  line-height: 1.5;
  font-size: 14px;
  tbody {
    display: flex;
    flex-direction: column;
  }
`;
const BoardHeader = styled.tr`
  display: flex;
  justify-content: center;
  text-align: center;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  line-height: 1.5;
  margin: 10px 0;
`;
const Tbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;
const Th = styled.th`
  flex: ${(props) => props.width || 1};
  margin: 20px 0;
`;
const Tr = styled.th`
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 10px;
  padding-bottom: 10px;
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;
const Td = styled.th`
  justify-content: center;
  text-align: center;
  line-height: 1.5;
  margin: 12px 0;
  color: #353535;
  font-weight: 100;
  &:nth-child(1) {
    width: 100px;
  }
  &:nth-child(2) {
    width: 120px;
  }
  &:nth-child(3) {
    width: 640px;
    font-weight: 700;
  }
  &:nth-child(4) {
    width: 120px;
  }
  &:nth-child(5) {
    width: 120px;
  }
  &:nth-child(6) {
    width: 100px;
  }
`;

export function Community() {
  return (
    <>
      <Container>
        <CommunityTable>
          <thead>
            <BoardHeader>
              <Th width="100px">No</Th>
              <Th width="120px">Product</Th>
              <Th width="640px">Subject</Th>
              <Th width="120px">Name</Th>
              <Th width="120px">Date</Th>
              <Th width="100px">Hit</Th>
            </BoardHeader>
          </thead>
          <Tbody>
            <Tr>
              <Td>공지</Td>
              <Td></Td>
              <Td>[주문/결제문의]주문취소는 어떻게 하나요?</Td>
              <Td>NERDY</Td>
              <Td>2021-11-16</Td>
              <Td>5768</Td>
            </Tr>
            <Tr>
              <Td>공지</Td>
              <Td></Td>
              <Td>[배송문의]배송지 주소(또는 연락처)를 변경하고 싶어요.</Td>
              <Td>NERDY</Td>
              <Td>2021-11-12</Td>
              <Td>3505</Td>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Td>Number</Td>
              <Td></Td>
              <Td>Title</Td>
              <Td>Name</Td>
              <Td>Date</Td>
              <Td>조회수</Td>
            </Tr>
          </Tbody>
        </CommunityTable>
      </Container>
    </>
  );
}
