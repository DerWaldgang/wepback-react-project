import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReduxDecorator } from 'shared/config/storybook/ReduxDecorator/ReduxDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [ReduxDecorator({ loginForm: { username: 'foo', password: 'bar' } })];
