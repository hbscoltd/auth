import React from 'react'
import { Form, } from 'react-bootstrap'
import Auth from './Auth'
import { CustomButton } from './Styles'
import { handleEnterAction, handleKeyDown, inputChangeService } from './Utils'

const CustomResetPassword = ({
    logo,
    title,
    mainBgColor,
    authBgColor,
    textColor,
    buttonbgColor,
    loading,
    formData,
    setFormData,
    handleSubmit,
}:
    {
        logo?: string,
        title: string,
        mainBgColor: string,
        authBgColor: string,
        textColor: string,
        buttonbgColor: string,
        loading: boolean,
        formData: any,
        setFormData: any,
        handleSubmit: any,
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
            subtitle={'Reset new password'}
        >
            <Form>
                <Form.Group className="mb-4 input-form-control" controlId="resetCode">
                    <Form.Label>Reset code</Form.Label>
                    <Form.Control type="text" onChange={handleChange} value={formData?.resetCode} onKeyDown={handleKeyDown} />
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
                {loading ? <div> <div className="spinner-grow spinner-grow-sm text-white" />  Processing . . .</div> : "Reset password"}
            </CustomButton>
        </Auth>
    )
}

export default CustomResetPassword