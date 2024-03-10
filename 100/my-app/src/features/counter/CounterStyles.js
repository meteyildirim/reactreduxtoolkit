import styled from "styled-components";

export const CounterSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f0f0f0;
`;
export const CounterValue = styled.p`
  font-size: 54px;
  font-weight: bold;
  padding: 10px;
`;
export const CounterButton = styled.button`
  padding: 15px;
  margin: 3px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;
