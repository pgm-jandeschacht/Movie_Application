import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { BaseLayout } from '../layouts'
import { BigListContainer, BigListSelector } from '../components/BigLists'
import { Filter } from '../components/input/filter'

const MoviesPage = () => {
  const [isChanged, setIsChanged] = useState('popular');

  const handleCallChange = (isFiltered) => {
    setIsChanged(isFiltered)
  }

  let path = useLocation();
  let location = (path.pathname.split('/')[1]);

  return (
    <BaseLayout>
      <BigListSelector location={location} onCallChange={handleCallChange}/>
      <Filter />
      <BigListContainer location={location} filter={isChanged}/>
    </BaseLayout>
  );
};

export default MoviesPage;