import React from 'react';
import PropTypes from 'prop-types';

const GenericList = ({ items, renderItem, keyExtractor, listName, className }) => {
  return (
    <div className={className}>
      {listName && <h2>{listName}</h2>}
      <ul>
        {items.map((item) => (
          <li key={keyExtractor(item)}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

GenericList.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  keyExtractor: PropTypes.func.isRequired,
  listName: PropTypes.string,
  className: PropTypes.string,
};

export default GenericList;

