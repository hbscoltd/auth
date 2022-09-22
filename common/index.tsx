import React from 'react'
import TextInput from './TextInput'

export const Welcome = () => {
    return <h1>Welcome to Packages</h1>
}

export const SayHello = ({ name }: { name: string }) => {
    return <h1>Hi {name}</h1>
}

export { TextInput }


