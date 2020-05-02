import * as React from 'react'
// import classnames from 'classnames'
// const headerStyles = require('./styles.scss')
import './styles.scss'

export interface HeaderComponentProps {
    text?: string
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({ text }) => (<div className="header">{text}</div>)

