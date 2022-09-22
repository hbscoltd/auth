import React from 'react'
import { Image } from 'react-bootstrap'
import { AuthContainer, BgContainer, } from './Styles'

const Auth = ({
    logo,
    title,
    subtitle,
    mainBgColor,
    authBgColor,
    textColor,
    children,
}:
    {
        logo?: string,
        title: string,
        subtitle: string,
        mainBgColor: string,
        authBgColor: string,
        textColor: string,
        children: any,
    }) => {


    return (
        <BgContainer mainBgColor={mainBgColor}>
            <AuthContainer authBgColor={authBgColor} textColor={textColor}>
                <div className='text-center mb-4'>
                    {logo && <Image src={logo} width={80} />}
                    <h4 className='fw-bold my-2'>{title}</h4>
                    <small>{subtitle}</small>
                </div>
                {children}
            </AuthContainer>
        </BgContainer>
    )
}

export default Auth