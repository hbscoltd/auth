import React from 'react'
import { Form, } from 'react-bootstrap'
import { handleKeyDown } from '../helper'
import Auth from './Auth'
import { CustomButton, CustomLink } from './Styles'
import { handleEnterAction, inputChangeService } from './Utils'

const CustomLogin = ({
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
    handleGoRegister,
    handleGoForgotPassword,
}:
    {
        logo?: string,
        title: string,
        mainBgColor: string,
        authBgColor: string,
        textColor: string,
        buttonbgColor: string,
        linkTextColor: string,
        loading: boolean,
        formData: any,
        setFormData: any,
        handleSubmit: any,
        handleGoRegister: any,
        handleGoForgotPassword: any
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
            subtitle={'Sign in your acount'}
        >
            <Form>
                <Form.Group className="mb-4 input-form-control" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" onChange={handleChange} value={formData?.email} onKeyDown={handleKeyDown} />
                </Form.Group>

                <Form.Group className="mb-4 input-form-control" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={handleChange} value={formData?.password} autoComplete="off" onKeyDown={(e) => handleEnterAction(e, handleSubmit)} />
                </Form.Group>
            </Form>
            <CustomButton buttonbgcolor={buttonbgColor} onClick={handleSubmit} className="w-100"  >
                {loading ? <div> <div className="spinner-grow spinner-grow-sm text-white" />  Processing . . .</div> : "Login"}
            </CustomButton>
            <div className='d-flex justify-content-between mt-3'>
                <small><span className='d-lg-inline-flex d-none'>Don't have an account ?</span><CustomLink linkTextColor={linkTextColor} onClick={handleGoRegister}> Sign Up</CustomLink></small>
                <small><CustomLink linkTextColor={linkTextColor} onClick={handleGoForgotPassword}>Forgot password ?</CustomLink></small>
            </div>
        </Auth>
    )
}

export default CustomLogin