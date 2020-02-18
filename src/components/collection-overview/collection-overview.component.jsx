import React from 'react';
import { useSelector } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

import './collection-overview.style.css';

const CollectionOverview = () => {
  const collections = useSelector(selectShopCollections);

  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;