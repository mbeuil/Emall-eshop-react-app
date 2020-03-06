/** @format */

/**
 * store state's interface
 **/

export interface StateProps {
  user: StateUserProps;
  cart: StateCartProps;
  directory: StateSectionsProps;
  shop: StateShopProps;
}

/**
 * user state's interface
 **/

export interface StateUserProps {
  currentUser: firebase.firestore.DocumentData | undefined;
}

/**
 * cart state's interfaces
 **/

export interface StateCartProps {
  hidden: boolean;
  cartItems: CartItemProps[];
}

export interface CartItemProps {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
}

/**
 * sections state's interfaces
 **/

export interface StateSectionsProps {
  sections: SectionProps[];
}

export interface SectionProps {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: string;
}

/**
 * shop state's interfaces
 **/

export interface StateShopProps {
  collections: CollectionMapProps;
}

export interface CollectionMapProps {
  [index: string]: CollectionItemsProps;
}

export interface CollectionItemsProps {
  id: string;
  items: CollectionItemProps[];
  title: string;
  routeName: string;
}

export interface CollectionItemProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}
