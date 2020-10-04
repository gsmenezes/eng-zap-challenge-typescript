export interface IProperty {
    usableAreas: number;
    listingType: string;
    createdAt: string;
    listingStatus: string;
    id: string;
    parkingSpaces: number;
    updatedAt: string;
    owner: boolean;
    images: string[];
    address: IPropertyLocal[];
    bathrooms: number;
    bedrooms: number;
    pricingInfos: IPropertyValues[];
}

export interface IPropertyLocal {
    city?: string | null | void;
    neighborhood?: string | null | void;
    geoLocation: IGeolocationProperty[];
}

export interface IGeolocationProperty {
    precision: string;
    location: ILongLat[];
}

export interface ILongLat {
    lon: number;
    lat: number;
}

export interface IPropertyValues {
    yearlyIptu: number;
    price: number;
    businessType: string;
    monthlyCondoFee: number;
}