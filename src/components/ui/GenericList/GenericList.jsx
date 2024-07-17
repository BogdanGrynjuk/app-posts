import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './GenericList.module.css';

const GenericList = ({
  items,
  renderItem,
  keyExtractor,
  listName,
  customStyles = {},
}) => {  

  return (
    <div className={classNames(css.wrapper, customStyles.wrapper)}>
      {listName &&
        <h2
          className={classNames(css.title, customStyles.title)}>
          {listName}
        </h2>}
      <ul className={classNames(css.list, customStyles.list)}>
        {items.map((item, index) => (
          <li
            className={classNames(css.list_item, customStyles.list_item)}
            key={keyExtractor(item)}
          >
            {renderItem(item, index)}
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
  customStyles: PropTypes.object,
};

export default GenericList;

