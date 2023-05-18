export type ILogin = {
    email: string;
    password: string;
}

export interface IUser {
    id: number
    name: string
    email: string
    email_verified_at: any
    password: string
    remember_token: string
    created_at: string
    updated_at: string
    auth_token: string
    phone: string
    default_address_id: number
    delivery_guy_detail_id: any
    avatar: string
    is_active: boolean
    tax_number: any
    userWhatsAppNumber: any
    userWhatsAppKey: any
    user_ip: any
    zone_id: any
    is_notifiable: number
    latitude: string
    longitude: string
    restaurant_id: any
    role: string
}

export interface IReturnLogin {
    user: IUser
    token: string
}

export type IAuthContext = {
    handleLogin: (values: ILogin) => Promise<void>;
    isAuthenticated: boolean;
    user: IUser | null;
    handleLogout: () => void
    loading: boolean;
    socket: any;
}