import React from 'react'
import { Link } from '~components'
import styled from 'styled-components/macro'
import { Box } from '~styled'

export const HeaderButtonWrapper = styled(Box)`
    .btn{
        min-width:125px;
        height: 42px;
        border-radius: 3px;
        color: var(--bs-white);
        font-size: 13px;
        font-weight: 500;
        line-height: 1.2;
        display:flex;
        align-items:center;
        justify-content:center;
        padding-left:15px;
        padding-right:15px;
        letter-spacing: -0.4px;
        color:#fff;
        margin-left:10px;
        background-color: #099a97;
        border-color: #099a97;
        box-shadow:-12px 20px 50px rgb(0 153 153 / 30%);
        border-radius:500px;
        &:hover{
            box-shadow:-12px 20px 50px rgb(0 153 153 / 0%);
            /* box-shadow: 0 0px 0px rgba(241, 139, 98, 0.3); */
        }
    }
`
const HeaderButton = ({btnLink,btnText,...rest})=>{
    return(
        <HeaderButtonWrapper {...rest}>
            <Link target="_blank" className="btn" to={btnLink ? btnLink : "/"}>
                {btnText}
            </Link>
        </HeaderButtonWrapper>
    )
}

export default HeaderButton;