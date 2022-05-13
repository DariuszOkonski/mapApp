export type Location = {
    lat: number;
    lng: number;
}

export interface Mappable {
    showInformation(): string;
    getLat(): number;
    getLng(): number;
}