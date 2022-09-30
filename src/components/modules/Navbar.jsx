import { Fragment, useState } from "react";
import styled, { css } from "styled-components";

const Navbar = ({ setQuery }) => {
  const [text, setText] = useState("");

  const onChangeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };
  const onKeyPressEnter = (e) => {
    if (e.key === "Enter") setQuery((prev) => ({ query: text, start: 1 }));
  };

  return (
    <Container>
      <h1>Natver</h1>
      <InputBox>
        <input
          placeholder="영화 검색"
          value={text}
          onKeyPress={onKeyPressEnter}
          onChange={onChangeInput}
        ></input>
      </InputBox>
      <Button>
        <button
          type="button"
          onClick={() => setQuery((prev) => ({ query: text, start: 1 }))}
        >
          검색
        </button>
      </Button>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  background: #060d17;
  z-index: 100;
  height: 56px;
  display: flex;
  position: sticky;
  top: 0;
  h1 {
    margin: 0px;
    color: #2db400;
  }
`;
const InputBox = styled.div`
  flex-grow: 0.5;
  padding: 8px;
  margin-left: auto;
  input {
    box-sizing: border-box;
    padding: 4px 15px;
    width: 100%;
    border-radius: 4px;
    height: 100%;
    background: #10161d;
    border: none;
    outline: none;
    color: #fff;
    max-widt: 500px;
  }
`;
const Button = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: 15px;
  align-items: center;
  button {
    padding: 8px 15px;
    background-color: #1c252f;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
  }
`;
