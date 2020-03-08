import React from 'react';
import styled from 'styled-components';


export default function Card({ content }){
    return (
        <Cardtext>{content}</Cardtext>
    );
}

const Cardtext = styled.div`
    width: 100%;
    padding: 5px;
    text-align: left;
    font-size: 14px;
`;