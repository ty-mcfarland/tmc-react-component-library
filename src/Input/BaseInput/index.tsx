import * as React from 'react'
import './styles.scss'

export enum InputMode {
    TEXT = 'text',
    NONE = 'none',
    TEL = 'tel',
    URL = 'url',
    EMAIL = 'email',
    NUMERIC = 'numeric',
    DECIMAL = 'decimal',
    SEARCH = 'search'
}

export enum InputType {
    BUTTON = 'button',
    CHECKBOT = 'checkbox',
    COLOR = 'color',
    DATE = 'date',
    DATETIME_LOCAL = 'datetime-local',
    EMAIL = 'email',
    FILE = 'file',
    HIDDEN = 'hidden',
    IMAGE = 'image',
    MONTH = 'month',
    NUMBER = 'number',
    PASSWORD = 'password',
    RADIO = 'radio',
    RANGE = 'range',
    SEARCH = 'search',
    SUBMIT = 'submit',
    TEL = 'tel',
    TEXT = 'text',
    TIME = 'time',
    URL = 'url',
    WEEK = 'week'
}

export interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
    onChange?: (event: React.FormEvent<HTMLInputElement>) => void
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
}


export class BaseInput extends React.Component<BaseInputProps> {

    render = ({
        disabled,
        id,
        inputMode,
        maxLength,
        minLength,
        onBlur,
        onChange,
        onFocus,
        placeholder,
        type,
        value
    } = this.props) => (
        <input
            className='baseInput'
            disabled={ disabled }
            id={ id }
            inputMode={ inputMode }
            maxLength={ maxLength }
            minLength={ minLength }
            onBlur={ onBlur }
            onChange={ onChange }
            onFocus={ onFocus }
            placeholder={ placeholder }
            type={ type }
            value={ value }
        />
    )
}
