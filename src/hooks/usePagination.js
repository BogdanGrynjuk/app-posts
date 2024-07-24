import { useMemo } from 'react';

export const usePagination = totalCountElements => {
  const pageNumbers = useMemo(() => {
    let numbers = [];
    for (let i = 0; i < totalCountElements; i++) {
      numbers.push(i + 1);
    }
    return numbers;
  }, [totalCountElements]);
  return pageNumbers;
};
