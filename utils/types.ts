// types.ts

export interface DescriptionChild {
    type: string;
    text: string;
}

export interface Description {
    type: string;
    children: DescriptionChild[];
}

export interface ImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
}

export interface ImageAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        thumbnail: ImageFormat;
        small: ImageFormat;
        medium: ImageFormat;
        large?: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
}

export interface Image {
    data: {
        id: number;
        attributes: ImageAttributes;
    };
}

export interface Service {
    id: number;
    attributes: {
        name: string;
        description: Description[];
        rating: number;
        review_count: number;
        location: string;
        services_offered: string[];
        Industries_served: string[];
        project_cost: string;
        retainer: string;
        image: Image;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}


// // types.ts

// export interface DescriptionChild {
//     type: string;
//     text: string;
// }

// export interface Description {
//     type: string;
//     children: DescriptionChild[];
// }

// export interface Service {
//     name: string;
//     description: Description[];
//     rating: number;
//     review_count: number;
//     location: string;
//     services_offered: string[];
//     Industries_served: string[];
//     project_cost: string;
//     retainer: string;
// }
