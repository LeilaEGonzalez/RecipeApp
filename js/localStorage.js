const getItemLocalStorage = (key, defaultValue = {}) => {
  const getStringItem = localStorage.getItem(key);
  const itemString = JSON.parse(getStringItem);
  return itemString ?? defaultValue;
};

const setItemToLocalStorage = (key, item) => {
  const stringItem = JSON.stringify(item);
  localStorage.setItem(key, stringItem);
};
