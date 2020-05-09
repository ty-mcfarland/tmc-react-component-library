import * as React from 'react'
import { HeaderComponent } from './../../../src/Header';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

storiesOf('HeaderComponent', module)
  .addDecorator(withKnobs)
  .add('Default', () => <HeaderComponent text={text('Text', '')} />)