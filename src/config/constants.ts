import environment from './environments';

if (process.env.NODE_ENV !== 'production') {
    const env = environment;
}

export const SECRET_KEY = 
    process.env.SECRET || 'Tripoli@4030';

export enum COLLECTIONS {
    USERS = 'users',
    GENRES = 'genres',
    SHOP_PRODUCT = 'products_platforms',
    PRODUCTS = 'products',
    PLATFORMS = 'platforms'
}


export enum MESSAGES {
    TOKEN_VERIFICATION_FAILED = 'token no valido, inicia sesion de nuevo'
}


/**
 * H = Horas
 * M = Minutos
 * D = Días
 */
export enum EXPIRETIME {
    H1 = 60 * 60,
    H24 = 24 * H1,
    M15 = H1 / 4,
    M20 = H1 / 3,
    D3 = H24 * 3
}

export enum ACTIVE_VALUES_FILTER {
    ALL = 'ALL',
    INACTIVE = 'INACTIVE',
    ACTIVE = ' ACTIVE'
}