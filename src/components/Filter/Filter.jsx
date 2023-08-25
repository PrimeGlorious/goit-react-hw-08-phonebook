import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Input } from '@chakra-ui/react';
import { FilterTitle, FilterLabel } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();
  const inputValue = evt => {
    const value = evt.target.value;
    console.log(value);

    dispatch(setFilter(value));
  };

  return (
    <>
      <FilterTitle>Contacts</FilterTitle>
      <FilterLabel>
        Find contacts by name
        <Input
          name="filter"
          onChange={inputValue}
          type="text"
        ></Input>
      </FilterLabel>
    </>
  );
}

export { Filter };
