import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text, ThemeText } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Test',
    text: 'some text',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Test',
    text: 'some text',
    theme: ThemeText.ERROR,
};

export const PrimaryTitle = Template.bind({});
PrimaryTitle.args = {
    title: 'Test',
};

export const PrimaryText = Template.bind({});
PrimaryText.args = {
    text: 'some text',
};
