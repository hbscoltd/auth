import React from 'react'
import { Form, } from 'react-bootstrap'
import Auth from './Auth'
import { CustomButton, CustomLink } from './Styles'
import { handleEnterAction, inputChangeService } from './Utils'

const CustomForgotPassword = ({
    logo,
    title,
    mainBgColor,
    authBgColor,
    textColor,
    buttonbgColor,
    linkTextColor,
    formData,
    setFormData,
    loading,
    handleSubmit,
    handleGoLogin,
}:
    {
        logo?: string,
        title: string,
        mainBgColor: string,
        authBgColor: string,
        textColor: string,
        buttonbgColor: string,
        linkTextColor: string,
        formData: any,
        setFormData: any,
        loading: boolean,
        handleSubmit: any,
        handleGoLogin: any
    }) => {


    const handleChange = (evt: any) => {
        inputChangeService({ evt: evt, formData: formData, setFormData: setFormData });
    }

    return (
        <Auth
            mainBgColor={mainBgColor}
            authBgColor={authBgColor}
            textColor={textColor}
            logo={logo}
            title={title}
            subtitle={'Forgot Password ?'}
        >
            <Form>
                <Form.Group className="mb-4 input-form-control" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" onChange={handleChange} value={formData?.email} onKeyDown={(e) => handleEnterAction(e, handleSubmit)} />
                </Form.Group>
            </Form>
            <CustomButton buttonbgcolor={buttonbgColor} onClick={handleSubmit} className="w-100"  >
                {loading ? <div> <div className="spinner-grow spinner-grow-sm text-white" />  Processing . . .</div> : " Send password reset link"}
            </CustomButton>
            <div className='d-flex justify-content-center mt-3'>
                <small><CustomLink linkTextColor={linkTextColor} onClick={handleGoLogin}>Sign In</CustomLink></small>
            </div>
        </Auth>
    )
}

export default CustomForgotPassword