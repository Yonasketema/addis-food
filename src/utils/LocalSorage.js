export function getLocalStorage(key) {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : null;
}

export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
