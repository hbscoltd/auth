import React from 'react'
import { Form } from 'react-bootstrap'
import { disableScroll, handleKeyDown } from '../helper'


export const TextInput = ({
    label,
    id,
    handleChange,
    value,
    inputType = "text",
    wantString = false,
    disable = false,
    disableMargin = false }:
    {
        label: string,
        id: string,
        handleChange: any,
        value: any,
        inputType?: string,
        wantString?: boolean,
        disable?: boolean,
        disableMargin?: boolean
    }) => (
    (
        <Form.Group className={`${inputType !== "textarea" && 'input-form-control'} ${!disableMargin && 'mb-2'}`}>
            <Form.Label>{label}</Form.Label>
            {inputType === "textarea" ?
                <Form.Control as="textarea" rows={2} id={id} value={value} onChange={handleChange} />
                :
                <Form.Control type={inputType === "number" ? "number" : "text"} id={id} onChange={(e) => handleChange(e, wantString)} value={value} onWheel={disableScroll} onKeyDown={handleKeyDown} disabled={disable} />
            }
        </Form.Group>
    )
)
export default TextInput