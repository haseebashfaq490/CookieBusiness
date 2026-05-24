export interface Product {
    id: string;
    name: string;
    description: string;
    price: string | Record<string, string>;
    imageSeed?: string;
    options?: string[];
    isSpecial?: boolean;
    tag?: string;
}
