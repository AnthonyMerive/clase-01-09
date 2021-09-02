import React from 'react';
import styled from 'styled-components'

export default function Titulo() {
    const StyledH1 = styled.h1`
        color: black;
        margin: 0 20%;
        padding-left: 20%;
        font-family: monospace;
        border: dotted 1px;
        border-radius: 10px;
    `
    const StyledH3 = styled.h3`
        color: black;
        margin: 5px 20%;
        padding-left: 20%;
        font-family: monospace;
        border: dotted 1px;
        border-radius: 10px;
    `
        return (<>
                <StyledH1>Hoja de Vida</StyledH1>
                <StyledH3>Anthony Colmenares</StyledH3>
            </>
        )

}