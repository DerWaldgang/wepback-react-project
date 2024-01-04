import { CountryEnum, CurrencyEnum } from 'shared/const/common';

export interface Profile {
        firstname: string,
        lastname: string,
        age: 23,
        currency: CurrencyEnum,
        country: CountryEnum,
        city: string,
        username: string,
        avatar: string
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    isReadOnly: boolean;
}
