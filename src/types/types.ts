export type Product = {
    id: number
    title: string
    date: string
    type: string
    description: string
    price: number
};

export type ProductErrors = {
    titleError: string
    dateError: string
    typeError: string
    priceError: string
};

export type Feedback = {
    id: number
    description: string
    date: any
};

export type FeedbackError = {
    descriptionError: string
};

export type Order = {
    id: number
    totalPrice: number
    date: string
    username: string
    address: string
    email: string
    phoneNumber: string
    orderItems: Array<OrderItem>
};

export type OrderItem = {
    id: number
    amount: number
    quantity: number
    product: Product
};

export type OrderError = {
    emailError: string
    usernameError: string
    addressError: string
    phoneNumberError: string
};

export type User = {
    id: number
    email: string
    username: string
    address: string
    phoneNumber: string
    roles: Array<string>
};

export type UserEdit = {
    id: number | undefined
    userame: string | undefined
    address: string | undefined
    phoneNumber: string | undefined
};

export type UserEditErrors = {
    userameError: string
};

export type UserData = {
    email: string
    password: string
};

export type UserRegistration = {
    email: string
    username: string
    password: string
    password2: string
    captcha: string | null
};


export type AuthErrors = {
    captchaError: string
    emailError: string
    userameError: string
    passwordError: string
    password2Error: string
};

export type FilterParamsType = {
    products: Array<string>
    types: Array<string>
    prices: Array<number>
    sortByPrice?: boolean
};

export type ProductPrice = {
    id: number
    name: string
    array: Array<number>
};

export type CartItemType = {
    id: number;
    type: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
  };

export type BrandType = {
    name: string
    url: string
};
