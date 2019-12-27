import React from 'react';
import styled from 'styled-components';
import CartridgeCard from './CartridgeCard';

import {cartridges} from './findCartridges';


const CardWrapper = styled.div`
  border: 1px solid black;
  margin: 3% 2%;
`;
const Title = styled.h1``;
const AttrWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
`;
const AttrLight = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
`;
const AttrDark = styled.div`
  background-color: lightgrey;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
`;
const Button = styled.button`
width: 20%;
margin: 1% auto;
`

const CartridgeList = props => {
    const resetList = e => {
        e.stopPropagation();
        props.setCartridges(cartridges)
    }

    return (
        <CardWrapper>
            <Title>Cartridge List</Title>
            <Button onClick={resetList}>Reset</Button>
            <AttrWrapper>
                <AttrLight>Name </AttrLight>
                <AttrLight>Case </AttrLight>
                <AttrDark>Bullet Diameter </AttrDark>
                <AttrLight>Neck Diameter </AttrLight>
                <AttrDark>Shoulder Diameter </AttrDark>
                <AttrLight>Base Diameter </AttrLight>
                <AttrDark>Rim Diameter </AttrDark>
                <AttrLight>Rim Thickness </AttrLight>
                <AttrDark>Case Length </AttrDark>
                <AttrLight>Cartridge Length </AttrLight>
                <AttrDark>Primer </AttrDark>
            </AttrWrapper>
            {props.cartridges.map(item => <CartridgeCard key={item.name} cartridge={item}/>)}
        </CardWrapper>
    );
};


export default CartridgeList;