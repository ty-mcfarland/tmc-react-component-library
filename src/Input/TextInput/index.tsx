import * as React from 'react'
import { InputMode, BaseInput, InputType } from '../BaseInput'


export const DEFAULT_TEXT_INPUT_MAX_LENGTH = 10
export const DEFAULT_TEXT_INPUT_MIN_LENGTH = 0
const defaultTextOnChangeEventHandler = () => {}

interface TextInputProps {
    maxLength?: number,
    minLength?: number,
    onChange?: (event: React.FormEvent<HTMLInputElement>) => void,
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void,
}

export const TextInput: React.FC<TextInputProps> = ({
    maxLength = DEFAULT_TEXT_INPUT_MAX_LENGTH,
    minLength = DEFAULT_TEXT_INPUT_MIN_LENGTH,
    onChange = defaultTextOnChangeEventHandler,
    onFocus,
}) => {

    return (
        BaseInput({
            inputMode: InputMode.TEXT,
            maxLength,
            minLength,
            onChange,
            onFocus,
            type: InputType.TEXT,
        })
    )
}