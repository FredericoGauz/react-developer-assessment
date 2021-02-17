import { addDecorator } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
import '../src/styles/index.css';

// Include mock API.
import '../src/mock';

//Include global decorators [Story Router,]
addDecorator(StoryRouter());