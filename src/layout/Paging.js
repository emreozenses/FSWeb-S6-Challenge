import React, { useState } from "react";
import { useEffect } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import styled from "styled-components";

const Paging = (props) => {
  const { numberOfPages, pageHandler } = props;

  return (
    <Pagination>
      <PaginationItem>
        <PaginationLink
          first
          onClick={() => {
            {
              pageHandler(1);
            }
          }}
        />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          onClick={() => {
            {
              pageHandler("previous");
            }
          }}
          previous
        />
      </PaginationItem>
      {[...Array(numberOfPages)].map((item, index) => (
        <PaginationItem key={index}>
          <PaginationLink
            onClick={() => {
              {
                pageHandler(index + 1);
              }
            }}
          >
            {index + 1}
          </PaginationLink>
        </PaginationItem>
      ))}

      <PaginationItem>
        <PaginationLink
          onClick={() => {
            {
              pageHandler("next");
            }
          }}
          next
        />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          onClick={() => {
            {
              pageHandler(numberOfPages);
            }
          }}
          last
        />
      </PaginationItem>
    </Pagination>
  );
};

export default Paging;
