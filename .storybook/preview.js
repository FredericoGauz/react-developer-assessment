import { addDecorator } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(StoryRouter());