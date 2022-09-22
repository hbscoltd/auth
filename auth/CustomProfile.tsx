import React from 'react'
import { Col, Form, Row, } from 'react-bootstrap'
import { IconCamera, IconPerson } from './Icons'
import { CardContainer, CustomButton, CustomInput, UploadButton } from './Styles'
import { inputChangeService } from './Utils'
import './Style.scss'

const CustomProfile = ({
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
            <div className="d-flex flex-column justify-content-center align-items-center my-4">
                <div className="position-relative">
                    <div className="avatar">
                        <IconPerson size={80} />
                    </div>

                    <UploadButton buttonbgcolor={buttonbgColor}> <IconCamera /></UploadButton>
                </div>

                {/* {!imageUploadLoading ? <div className="position-relative">
                    <div className="avatar">
                        {fileName ? <img src={`${RES_API_URL}/assets/avatar/${fileName}`} className="thumb-img" alt={fileName} />
                            :
                            <IconPerson size={80} />
                        }
                    </div>

                    {!fileName && <div className="btn-upload">
                        <div {...getRootProps({ className: " mb-3" })} >
                            <input {...getInputProps()} />
                            <IconCamera />
                        </div>
                    </div>}
                </div> : <div>
                    <Skeleton height={150} width={150} borderRadius={100} />
                </div>} */}


                {/* {fileName && <small className="mt-3 cursor text-danger" onClick={() => toggle(fileName, 0)}>Remove avatar</small>} */}
            </div>

            <Row>
                <Col md={6}>
                    <Form.Group className="mb-4 input-form-control" controlId="password">
                        <Form.Label>Full name</Form.Label>
                        <CustomInput />
                        {/* <Form.Control type="password" onChange={handleChange} value={formData?.password} autoComplete="off" onKeyDown={(e) => handleEnterAction(e, handleSubmit)} /> */}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-4 input-form-control" controlId="password">
                        <Form.Label>Email</Form.Label>
                        <CustomInput />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-4 input-form-control" controlId="password">
                        <Form.Label>Phone</Form.Label>
                        <CustomInput />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-4 input-form-control" controlId="password">
                        <Form.Label>Address</Form.Label>
                        <CustomInput />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-4 input-form-control" controlId="password">
                        <Form.Label>Country</Form.Label>
                        <CustomInput />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-4 input-form-control" controlId="password">
                        <Form.Label>Region / State</Form.Label>
                        <CustomInput />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-4 input-form-control" controlId="password">
                        <Form.Label>City</Form.Label>
                        <CustomInput />
                    </Form.Group>
                </Col>
            </Row>
            <CustomButton buttonbgcolor={buttonbgColor} onClick={handleSubmit} >
                {loading ? <div> <div className="spinner-grow spinner-grow-sm text-white" />  Processing . . .</div> : "Save"}
            </CustomButton>
        </CardContainer>
    )
}

export default CustomProfile