import * as React from 'react'
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs'
import {
  NumberInput,
  DEFAULT_NUMBER_INPUT_MAX_LENGTH,
  DEFAULT_NUMBER_INPUT_MIN_LENGTH,
} from './../../../src/Input/NumberInput';
import {
  TextInput,
  DEFAULT_TEXT_INPUT_MAX_LENGTH,
  DEFAULT_TEXT_INPUT_MIN_LENGTH,
} from './../../../src/Input/TextInput';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('Number', () =>
    <NumberInput
      maxLength={number('Max Length', DEFAULT_NUMBER_INPUT_MAX_LENGTH)}
      minLength={number('Min Length', DEFAULT_NUMBER_INPUT_MIN_LENGTH)}
    />
  )
  .add('Text', () =>
    <TextInput
      maxLength={number('Max Length', DEFAULT_TEXT_INPUT_MAX_LENGTH)}
      minLength={number('Min Length', DEFAULT_TEXT_INPUT_MIN_LENGTH)}
    />
  )
