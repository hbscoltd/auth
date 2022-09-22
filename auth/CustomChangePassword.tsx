import React from 'react'
import { Col, Form, Row, } from 'react-bootstrap'
import { CardContainer, CustomButton, CustomInput, } from './Styles'
import { inputChangeService } from './Utils'

const CustomChangePassword = ({
    cardColor,
    buttonbgColor,
    formData,
    setFormData,
    loading,
    handleSubmit,
}:
    {
        cardColor: string,
        buttonbgColor: string,
        formData: any,
        setFormData: any,
        loading: boolean,
        handleSubmit: any,
    }) => {


    const handleChange = (evt: any) => {
        inputChangeService({ evt: evt, formData: formData, setFormData: setFormData });
    }

    return (
        <CardContainer cardColor={cardColor}>
            <p>Please follow this guide for a strong password:</p>
            <small>
                <ul className="text-muted">
                    <li>One special characters</li>
                    <li>Must be 8-20 characters long</li>
                    <li>One number (2 are recommended)</li>
                    <li>Must not contain spaces, special characters, or emoji</li>
                    <li>Change it often</li>
                </ul>
            </small>

            <Row>
                <Col>
                    <Form.Group className="mb-4 input-form-control" controlId="password">
                        <Form.Label>Current password</Form.Label>
                        <CustomInput />
                        {/* <Form.Control type="password" onChange={handleChange} value={formData?.password} autoComplete="off" onKeyDown={(e) => handleEnterAction(e, handleSubmit)} /> */}
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-4 input-form-control" controlId="password">
                        <Form.Label>New password</Form.Label>
                        <CustomInput />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-4 input-form-control" controlId="password">
                        <Form.Label>Confirm password</Form.Label>
                        <CustomInput />
                    </Form.Group>
                </Col>
                {/* <Col>
                    <Form.Group className="mb-4 input-form-control" controlId="password">
                        <Form.Label>Current password</Form.Label>
                        <Form.Control type="password" onChange={handleChange} value={formData?.password} autoComplete="off" onKeyDown={(e) => handleEnterAction(e, handleSubmit)} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-4 input-form-control" controlId="password">
                        <Form.Label>New password</Form.Label>
                        <Form.Control type="password" onChange={handleChange} value={formData?.password} autoComplete="off" onKeyDown={(e) => handleEnterAction(e, handleSubmit)} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-4 input-form-control" controlId="password">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password" onChange={handleChange} value={formData?.password} autoComplete="off" onKeyDown={(e) => handleEnterAction(e, handleSubmit)} />
                    </Form.Group>
                </Col> */}
            </Row>
            <CustomButton buttonbgcolor={buttonbgColor} onClick={handleSubmit} >
                {loading ? <div> <div className="spinner-grow spinner-grow-sm text-white" />  Processing . . .</div> : "Change Password"}
            </CustomButton>
        </CardContainer>
    )
}

export default CustomChangePassword