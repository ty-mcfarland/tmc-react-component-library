import * as React from 'react'
import { InputMode, BaseInput, InputType, BaseInputProps } from '../BaseInput'


export const DEFAULT_NUMBER_INPUT_PATTERN = /^[0-9]*$/
export const DEFAULT_NUMBER_INPUT_MAX_LENGTH = 10
export const DEFAULT_NUMBER_INPUT_MIN_LENGTH = 0
const defaultNumberOnChangeEventHandler = () => {}

interface NumberInputProps extends BaseInputProps {
    maxLength?: number,
    minLength?: number,
    onChange?: (event: React.FormEvent<HTMLInputElement>) => void,
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void,
}

interface NumberInputState {
    inputValue: string
}

export class NumberInput
    extends React.Component<NumberInputProps, NumberInputState>
    implements BaseInput
    {
    constructor(props: NumberInputProps) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }
    
    handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { onChange = defaultNumberOnChangeEventHandler } = this.props
        const { value: inputValue } = event.currentTarget
        
        if (DEFAULT_NUMBER_INPUT_PATTERN.test(inputValue)) {
            this.setState({ inputValue })
        }

        onChange(event)
    }

    render = (
        { maxLength, minLength, onFocus } = this.props, 
        { inputValue } = this.state,
    ) => (
        <BaseInput
            inputMode={InputMode.NUMERIC}
            maxLength={maxLength}
            minLength={minLength}
            onChange={this.handleOnChange}
            onFocus={onFocus}
            type={InputType.TEXT}
            value={inputValue}
        />
    )
}