import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { ReduxProvider, StateSchema } from 'app/providers/ReduxProvider';

export const ReduxDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <ReduxProvider initialState={state}>
        <StoryComponent />
    </ReduxProvider>
);
