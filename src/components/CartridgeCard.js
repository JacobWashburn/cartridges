import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  border-bottom: 1px solid black;
`;

const AttrLight = styled.div`
  width: 10%;
  border-right: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AttrDark = styled.div`
  background-color: lightgrey;
  width: 10%;
  border-right: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CartridgeCard = ({cartridge}) => {
    return (
        <Card>
            <AttrLight>{cartridge.name}</AttrLight>
            <AttrLight>{cartridge.caseType.toUpperCase()}</AttrLight>
            <AttrDark >{cartridge.bulletDiameter}</AttrDark>
            <AttrLight>{cartridge.neckDiameter}</AttrLight>
            <AttrDark >{cartridge.shoulderDiameter}</AttrDark>
            <AttrLight>{cartridge.baseDiameter}</AttrLight>
            <AttrDark >{cartridge.rimDiameter}</AttrDark>
            <AttrLight>{cartridge.rimThickness}</AttrLight>
            <AttrDark >{cartridge.caseLength}</AttrDark>
            <AttrLight>{cartridge.cartridgeLength}</AttrLight>
            <AttrDark >{cartridge.primer.toUpperCase()}</AttrDark>
        </Card>
    );
};

export default CartridgeCard;