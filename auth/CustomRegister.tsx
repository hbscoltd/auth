import React from 'react'
import { Form, } from 'react-bootstrap'
import Auth from './Auth'
import { CustomButton, CustomLink } from './Styles'
import { handleEnterAction, handleKeyDown, inputChangeService } from './Utils'

const CustomRegister = ({
    logo,
    title,
    mainBgColor,
    authBgColor,
    textColor,
    buttonbgColor,
    linkTextColor,
    loading,
    formData,
    setFormData,
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
        loading: boolean,
        formData: any,
        setFormData: any,
        handleSubmit: any,
        handleGoLogin: any,
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
            subtitle={'Create an account'}
        >
            <Form>
                <Form.Group className="mb-4 input-form-control" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onChange={handleChange} value={formData?.name} onKeyDown={handleKeyDown} />
                </Form.Group>


                <Form.Group className="mb-4 input-form-control" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" onChange={handleChange} value={formData?.email} onKeyDown={handleKeyDown} />
                </Form.Group>

                <Form.Group className="mb-4 input-form-control" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={handleChange} value={formData?.password} autoComplete="off" onKeyDown={handleKeyDown} />
                </Form.Group>

                <Form.Group className="mb-4 input-form-control" controlId="confirmPassword">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" onChange={handleChange} value={formData?.confirmPassword} autoComplete="off" onKeyDown={(e) => handleEnterAction(e, handleSubmit)} />
                </Form.Group>
            </Form>
            <CustomButton buttonbgcolor={buttonbgColor} onClick={handleSubmit} className="w-100" >
                {loading ? <div> <div className="spinner-grow spinner-grow-sm text-white" />  Processing . . .</div> : "Register"}
            </CustomButton>
            <div className='d-flex justify-content-center mt-3'>
                <small>Already have an account ? <CustomLink linkTextColor={linkTextColor} onClick={handleGoLogin}>Sign In</CustomLink></small>
            </div>
        </Auth>
    )
}

export default CustomRegister