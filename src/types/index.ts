
export interface DescriptionChild {
    type: string;
    text: string;
}

export interface Description {
    type: string;
    children: { text: string; type: string }[];
}

export interface ImageFormats {
    small: { ext: string; url: string; hash: string; mime: string; name: string; path: string | null; size: number; width: number; height: number; sizeInBytes: number; provider_metadata: { public_id: string; resource_type: string } };
    medium: { ext: string; url: string; hash: string; mime: string; name: string; path: string | null; size: number; width: number; height: number; sizeInBytes: number; provider_metadata: { public_id: string; resource_type: string } };
    thumbnail: { ext: string; url: string; hash: string; mime: string; name: string; path: string | null; size: number; width: number; height: number; sizeInBytes: number; provider_metadata: { public_id: string; resource_type: string } };
}

export interface Image {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: ImageFormats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: { public_id: string; resource_type: string };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
}



export interface Service {
    id: number;
    documentId: string;
    name: string;
    description: Description[];
    rating: number | null;
    review_count: number | null;
    location: string | null;
    services_offered: string;
    Industries_served: string;
    project_cost: string | null;
    retainer: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
    image: Image | null;
}



export interface Category {
    category: string;
    items: Item[];
}

export interface Item {
    title: string;
    subcategories: string[];
}

export interface CategoryListProps {
    category: Category;
}