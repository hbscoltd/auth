import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export interface BgContainerProps {
    mainBgColor: string;
}

export interface AuthContainerProps {
    authBgColor: string;
    textColor: string;
}

export interface CutomButtonProps {
    buttonbgcolor: string;
}

export interface CutomCardProps {
   cardColor: string;
}

export interface CutomLinkProps {
    linkTextColor: string;
}

export const CustomInput = styled.input`
    border: 1px solid #666;
    border-radius:0.25rem;
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const CardContainer = styled.div`
    background-color: ${(p: CutomCardProps) => p.cardColor};
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    padding: 1.5rem;
    border-radius:0.25rem;
`;

export const BgContainer = styled.div`
    width:100vw;
    height:100vh;
    background-color: ${(p: BgContainerProps) => p.mainBgColor};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AuthContainer = styled.div`
    width:35vw;
    border-radius:0.25rem;
    border: 1px solid #666;
    padding:1.5rem;
    color: ${(p: AuthContainerProps) => p.textColor};
    background-color: ${(p: AuthContainerProps) => p.authBgColor};
    @media (min-width: 2560px) {
        width:30vw;
    };
    @media (max-width: 1024px) {
        width:50vw;
    };
    @media (max-width: 768px) {
        width:80vw;
    }
`;


export const CustomButton = styled(Button)`
  background: ${(p: CutomButtonProps) => p.buttonbgcolor};
  color: white;
  border:none;
  width:"100%";
  &:hover {
    background: ${(p: CutomButtonProps) => p.buttonbgcolor};
 }
 &:focus {
    background: ${(p: CutomButtonProps) => p.buttonbgcolor};
 }
`

export const UploadButton = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    padding: 2px 0 0 8px;
    cursor: pointer;
    position: absolute;
    right: 5px;
    bottom: 10px;
    color: #fff;
    background: ${(p: CutomButtonProps) => p.buttonbgcolor};
`



export const CustomLink = styled.a`
    color: ${(p: CutomLinkProps) => p.linkTextColor};
    text-decoration: none;
    cursor: pointer;
    &:hover {
                color: #00B0FF;
            }
`

// export const SidebarLink = styled(NavLink)`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     height: 3.25rem;
//     font-size: 1.025rem;
//     padding: 1.5rem;
//     text-decoration: none;
//     color: #fff;

//     &:hover {
//         font-weight:bold;
//         color: #fff;
//     }

//    &.${props => props.activeClassName} {
//         color:  ${primaryColor};
//         font-weight:bold;
//         background-color: #fff;
//     }
  
// `;

// export const DropdownLink = styled(NavLink)`
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     height: 3.75rem;
//     font-size: 1.025rem;
//     padding-left: 3rem;
//     text-decoration: none;
//     color: #ffffff;

//     &:hover {
//         font-weight:bold;
//         color: #fff;
//     }

//     &.${props => props.activeClassName} {
//         color:  ${primaryColor};
//         font-weight:bold;
//         background-color: #fff;
//     }
// `;

// export const AgencyCard = styled.div`
//     padding: 1.5rem;
//     // padding-left: 1.5rem;
//     // padding-right: 1.5rem;
//     margin-bottom: 2rem;
//     border-top: 2rem solid ${props => props.color};
//     box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
// `;

// export const AgencyImageCard = styled.div`
//     width:10rem;
//     height:10rem;
//     background-color: ${props => props.color};
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     img{
//         width:100%;
//     }
// `;




