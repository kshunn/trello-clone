import React from 'react';
import styled from 'styled-components';


export default function Card({ content }){
    return (
        <card>{content}</card>
    );
}

const card = styled.div`
    flex: 1;
    width: 300px;
    border: 1px solid black;
`;