import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Date=()=>{
 return(
     <>
      <D>{moment("20010704T120854").format("llll")} </D>
     </>
 )
}
export default Date;
const D=styled.p`
height: 16px;
width: 187px;
color: #FFFFFF;
font-family: Roboto;
font-size: 14px;
letter-spacing: 0;
line-height: 16px;
text-align: right;
`;

