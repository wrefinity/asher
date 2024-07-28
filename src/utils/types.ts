import { PropertyTransactionsType } from '@prisma/client';
import { Request } from 'express';

export type JWTPayload = {
    id: string;
    role: string;
    email: string;
}

export interface CustomRequest extends Request {
    user: JWTPayload;
    files: {
        [fieldname: string]: Express.Multer.File[];
    };
}

export type EmailDataType = {
    senderEmail: string;
    recieverEmail: string;
    subject: string;
    body: string;
    attachment?: string;
    isDraft?: boolean;
    isSent?: boolean;
    isRead?: boolean;
}
export interface CloudinaryFile extends Express.Multer.File {
    buffer: Buffer;
}
interface RespData {
    authorization_url: string;
    access_code: string;
    reference: string;
}
export type PaystackResponseType = {
    status: boolean;
    message: string;
    data: RespData;
}

interface Authorization {
    authorization_code: string;
    bin: string;
    last4: string;
    exp_month: string;
    exp_year: string;
    channel: string;
    card_type: string;
    bank: string;
    country_code: string;
    brand: string;
    reusable: boolean;
    signature: string;
    account_name: string | null;
}

interface Customer {
    id: number;
    first_name: string | null;
    last_name: string | null;
    email: string;
    customer_code: string;
    phone: string | null;
    metadata: string | null;
    risk_action: string;
    international_format_phone: string | null;
}

interface Source {
    type: string;
    source: string;
    entry_point: string;
    identifier: string | null;
}

export interface WebHookData {
    id: number;
    domain: string;
    status: string;
    reference: string;
    amount: number;
    message: string | null;
    gateway_response: string;
    paid_at: string;
    created_at: string;
    channel: string;
    currency: string;
    ip_address: string;
    metadata: string;
    fees_breakdown: any | null;
    log: any | null;
    fees: number;
    fees_split: any | null;
    authorization: Authorization;
    customer: Customer;
    plan: object; // Assuming plan is an object, specify further if needed
    subaccount: object; // Assuming subaccount is an object, specify further if needed
    split: object; // Assuming split is an object, specify further if needed
    order_id: string | null;
    paidAt: string;
    requested_amount: number;
    pos_transaction_data: any | null;
    source: Source;
}

export type WebhookEventResponse = {
    event: string;
    data: WebHookData;
}

export type PayBillType = {
    amount: number;
    billType: PropertyTransactionsType
}