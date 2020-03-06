import React, { useState } from 'react';
import styled from 'styled-components';


export default function Card({ content }){
    const { content } = this.props;
    return (
        <card>{content}</card>
    );
}

const card = styled.div`
    flex: 1;
    width: 300px;
    border: 1px solid black;
`;