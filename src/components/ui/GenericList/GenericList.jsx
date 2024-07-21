import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './GenericList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
        <TransitionGroup className="generic-list">
          {items.map((item, index) => (
            <CSSTransition
              key={keyExtractor(item)}
              timeout={500}
              classNames="item"
            >
          <li
            className={classNames(css.list_item, customStyles.list_item)}            
          >
            {renderItem(item, index)}
              </li>
              </CSSTransition>
        ))}

        </TransitionGroup>
        
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

