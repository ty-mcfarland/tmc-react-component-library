import * as React from 'react'
import { InputMode, BaseInput, InputType, BaseInputProps } from '../BaseInput'


export const DEFAULT_TEXT_INPUT_MAX_LENGTH = 10
export const DEFAULT_TEXT_INPUT_MIN_LENGTH = 0

interface TextInputProps extends BaseInputProps {
    maxLength?: number,
    minLength?: number,
    onChange?: (event: React.FormEvent<HTMLInputElement>) => void,
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void,
}

export class TextInput
    extends React.Component<TextInputProps>
    implements BaseInput {
        render = ({
            maxLength = DEFAULT_TEXT_INPUT_MAX_LENGTH,
            minLength = DEFAULT_TEXT_INPUT_MIN_LENGTH,
            onChange,
            onFocus,
        } = this.props) => (
            <React.Fragment>
                {
                    new BaseInput({
                        inputMode: InputMode.TEXT,
                        maxLength,
                        minLength,
                        onChange,
                        onFocus,
                        type: InputType.TEXT,
                    })
                }
            </React.Fragment>
        )
    }