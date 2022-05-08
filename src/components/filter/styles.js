import styled from 'styled-components';

export const DateContainer = styled.div`
  .react-date-picker__wrapper {
    margin-bottom: 200px;
    border-color: pink;
    border-radius: 15px;
    button {
      background: none;
    }
    padding: 6px 0;
    svg {
      stroke: '#000';
    }
  }
`;

export const DateLabel = styled.div`
  display: flex;
  justifycontent: center;
  alignitems: center;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  margin: 10px 0;
`;

export const InputCustom = styled.input`
  border: solid;
  border-radius: 15px;
  margin: 0 15px;
  background-color: transparent;
  color: #979797;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;

  text-align: center;

  & :: placeholder {
    color: #979797;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
  }
`;