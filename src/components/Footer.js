import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const FooterContainer = styled.div`
    background-color: #222222;
    height: 25vh;
`;

const Links = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    margin-right: 50px;
    font-size: 16px;
`;

function Footer() {
    return (
        <FooterContainer>
            <Links>
                <Link to="/login" style={{textDecoration: "none", color: "white"}}>Login</Link>
            </Links>
        </FooterContainer>
    )
}

export default Footer;
