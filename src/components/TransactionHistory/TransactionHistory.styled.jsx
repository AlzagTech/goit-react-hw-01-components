import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  tbody td {
    text-align: center;
  }

  thead {
    background-color: #00bcd5;
    color: white;
    text-transform: uppercase;
    height: 40px;
  }

  th + th {
    border-left: 1px solid #ffffff;
  }

  tbody tr:nth-of-type(odd) {
    background-color: #ffffff;
  }

  tbody tr:nth-of-type(even) {
    background-color: #ecf1f3;
  }

  td {
    text-transform: capitalize;
    height: 40px;
  }

  td + td {
    border-left: 1px solid #eaeaea;
  }
`;
