export const SERVER_BASE_URL = __IS_DEV__ ? 'http://localhost:8000' : 'http://production.com';

export enum CurrencyEnum {
    ETH = 'Eth',
    BTC = 'Btc',
    USDC = 'Usdc'
}

export enum CountryEnum {
    Japan = 'Japan',
    America = 'America',
}
