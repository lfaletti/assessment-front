export interface Client {
    id: string;
    name: string;
    email: string;
    role: string;
}

export interface Policy {
    id: string;
    amountinsured: number;
    email: string;
    inceptiondate: Date;
    installmentpayment: boolean;
    clientid: string;
}

export interface ClientsResponse {
    clients: Client[];
}

export interface PoliciesResponse {
    policies: Policy[];
}