import * as React from 'react'
import { HeaderComponent } from './../../../src/Header';
import { storiesOf } from '@storybook/react';

storiesOf('HeaderComponent', module)
  .add('Default', () => <HeaderComponent />)
  .add('With Text', () => <HeaderComponent text="This is a header" />)