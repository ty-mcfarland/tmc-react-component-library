import { mount } from 'configured-enzyme'
import * as React from 'react'
import { BaseInput } from '.'

describe('<BaseInput />', () => {
    it('should exist', () => {
        const component = mount(<BaseInput />)
        expect(component).toBeDefined()
    })
})