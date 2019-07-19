import React from 'react'
import styled from 'styled-components'

 const StyledDiv = styled.div`
    width: 70%;
    margin-left: 15%;
`;


function Description({photoDescription, copyright}) {

    return <StyledDiv>
        <p>(C) {copyright}</p>
        <p>{photoDescription}</p>
        </StyledDiv>
}

export default Description