export const getCountOfPages = (totalCountElements, limitElements) => {
  return Math.ceil(totalCountElements / limitElements);
};
