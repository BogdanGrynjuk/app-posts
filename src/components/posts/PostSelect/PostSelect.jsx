import React from 'react';
import PropTypes from 'prop-types';
import GenerictSelect from 'components/ui/GenerictSelect';
import css from './PostSelect.module.css';

const PostSelect = ({ selectedSort, sortPost}) => {

  const selectOptions = [
    {value: "title", name: "За назвою"},
    {value: "body", name: "За описом"}
  ]
  return (
    <GenerictSelect
      options={selectOptions}
      defaultOption={"Метод сортування"}
      label={"Сортування постів"}
      value={selectedSort}
      onChange={sortPost}
      customStyles={css}
    />
  );
}

PostSelect.propTypes = {
  selectedSort: PropTypes.string.isRequired,
  sortPost: PropTypes.func.isRequired,
};

export default PostSelect;
