import * as React from 'react'
import './styles.scss'

export interface HeaderComponentProps {
    text?: string
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({ text }) => (<div className="header">{text}</div>)

