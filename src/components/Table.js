import React, {useState} from 'react';
import styled from 'styled-components';
import {PlusIcon, MinusIcon} from '../icons';

const Table = ({children, headers, color, isCollapsible}) => {
  const [isOpen, setIsOpen] = useState(false);
  const TableElem = color === 'white' ? WhiteTable : GreenTable;
  return (
    <TableElem>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={header || index}>{header}</th>
          ))}
          {isCollapsible && (
            <th style={{textAlign: 'right', padding: 0, height: 42}}>
              <Button
                onClick={() => {
                  setIsOpen((isOpen) => !isOpen);
                }}
              >
                {isOpen ? <MinusIcon /> : <PlusIcon />}
              </Button>
            </th>
          )}
        </tr>
      </thead>
      <tbody style={{display: isCollapsible && !isOpen ? 'none' : null}}>
        {children}
      </tbody>
    </TableElem>
  );
};

export default Table;

const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 42px;
  appearance: none;
  text-align: right;
  transition: opacity 0.25s;
  background: transparent;
  padding: 0 1em;

  @media (hover) {
    &:hover,
    &:focus {
      outline: 0;
      opacity: 0.5;
    }
  }
`;

const WhiteTable = styled.table`
  position: relative;
  width: 100%;
  max-width: 600px;
  text-align: left;
  border-collapse: collapse;
  color: #000;
  border: 1px solid #fff;

  thead {
    color: #000;
    th {
      padding: 0.5em 1em;
      background: #fff;

      &:first-child {
        border-radius: 4px 0 0 0;
      }
      &:last-child {
        border-radius: 0 4px 0 0;
      }
    }
  }
  tbody tr:not(:first-child) {
    border-top: 1px solid #fff;
  }
  td {
    color: #fff;
    vertical-align: middle;
  }
  p {
    margin: 0.25em 0;
  }
  svg {
    display: inline-block;
    vertical-align: middle;
  }
`;

const GreenTable = styled.table`
  position: relative;
  width: 100%;
  max-width: 600px;
  text-align: left;
  border-collapse: collapse;
  color: #fff;
  border: 1px solid #2cce9f;

  thead {
    color: #000;
    th {
      padding: 0.5em 1em;
      background: #2cce9f;

      &:first-child {
        border-radius: 4px 0 0 0;
      }
      &:last-child {
        border-radius: 0 4px 0 0;
      }
    }
  }
  tbody tr:not(:first-child) {
    border-top: 1px solid #fff;
  }
  td {
    vertical-align: middle;
  }
  p {
    margin: 0.25em 0;
  }
  svg {
    display: inline-block;
    vertical-align: middle;
  }
`;
