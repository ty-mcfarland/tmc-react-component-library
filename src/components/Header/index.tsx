import * as React from 'react'

export interface HeaderComponentProps {
    text?: string
}

export const HeaderComponent = (props: HeaderComponentProps) => (<div>{props.text}</div>)