interface Commodity {
  id: number;
  documentId: string;
  title: string;
  color: string;
  material: string;
  length: number;
  price: number;
  link: string;
  supplier: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: StrapiImage;
}

interface CommodityImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    small?: FormatImage;
    medium?: FormatImage;
    thumbnail?: FormatImage;
    [key: string]: FormatImage | undefined;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface FormatImage {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}
