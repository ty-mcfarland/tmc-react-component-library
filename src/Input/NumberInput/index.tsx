import * as React from 'react'
import { InputMode, BaseInput, InputType } from '../BaseInput'


export const DEFAULT_NUMBER_INPUT_PATTERN = /^[0-9]*$/
export const DEFAULT_NUMBER_INPUT_MAX_LENGTH = 10
export const DEFAULT_NUMBER_INPUT_MIN_LENGTH = 0
const defaultNumberOnChangeEventHandler = () => {}

interface NumberInputProps {
    maxLength?: number,
    minLength?: number,
    onChange?: (event: React.FormEvent<HTMLInputElement>) => void,
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void,
}

export const NumberInput: React.FC<NumberInputProps> = ({
    maxLength = DEFAULT_NUMBER_INPUT_MAX_LENGTH,
    minLength = DEFAULT_NUMBER_INPUT_MIN_LENGTH,
    onChange = defaultNumberOnChangeEventHandler,
    onFocus,
}) => {

    const [inputValue, setInputValue] = React.useState('')
    const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget

        if (DEFAULT_NUMBER_INPUT_PATTERN.test(value)) {
            setInputValue(value)
        }

        onChange(event)
    }

    return (
        BaseInput({
            inputMode: InputMode.NUMERIC,
            maxLength,
            minLength,
            onChange: handleOnChange,
            onFocus,
            type: InputType.TEXT,
            value: inputValue,
        })
    )
}