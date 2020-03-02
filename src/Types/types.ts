/** @format */

interface StateUserProps {
  currentUser: null;
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

interface StateSectionsProps {
  sections: SectionProps[];
}

interface StateShopProps {
  collections: collectionItemsProps;
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

export interface collectionItemsProps {
  id: string;
  items: CollectionItemProps[];
  title: string;
  routeName: string;
}

export interface CartItemProps {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
}

export interface ItemToAddProps {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity?: number;
}
