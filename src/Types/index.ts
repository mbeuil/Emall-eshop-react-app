/** @format */

export interface StateUserProps {
  currentUser: boolean;
}

export interface StateCartProps {
  hidden: boolean;
  cartItems: CartItemProps[];
}

interface SectionProps {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
}

export interface StateSectionsProps {
  sections: SectionProps[];
}

export interface StateShopProps {
  collections: CollectionMapProps;
}

export interface StateProps {
  user: StateUserProps;
  cart: StateCartProps;
  directory: StateSectionsProps;
  shop: StateShopProps;
}

export interface CollectionItemProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export interface CollectionItemsProps {
  id: string;
  items: CollectionItemProps[];
  title: string;
  routeName: string;
}

export interface CollectionMapProps {
  [index: string]: CollectionItemsProps;
}

export interface CartItemProps {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
}
