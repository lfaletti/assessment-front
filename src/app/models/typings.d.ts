export interface Client {
    id: string;
    name: string;
    email: string;
    role: string;
}

export interface Policy {
    id: string;
    amountInsured: number;
    email: string;
    inceptiondate: Date;
    installmentpayment: boolean;
    clientid: string;
}