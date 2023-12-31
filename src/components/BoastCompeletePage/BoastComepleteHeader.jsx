import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledBoastCompeleteHeader = styled.div`
width: 390px;
height: 71px;
background-color: #f7f7f7;
display: flex;
justify-content: start;
align-items: center;
padding: 16px;
`

export default function BoastCompeleteHeader () {
    return(
        <StyledBoastCompeleteHeader>
            <Link to="/boast">
                <img src="/assets/icons/arrow-back.svg"/>
            </Link>
        </StyledBoastCompeleteHeader>
    )
}
