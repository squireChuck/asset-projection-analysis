export interface Asset {
  Asset: string;
  Attribute: string;
  [key: string]: string;
}

export interface Projection {
  id: string;
  fileName?: string;
  name: string;
  assets: Asset[];
}
