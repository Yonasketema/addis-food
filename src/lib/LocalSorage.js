export const localStorageKey = "addis-auth-token";

export function getLocalStorage(key) {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : null;
}

export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function deleteLocalStorage(key) {
  window.localStorage.removeItem(key);
  window.location.assign(window.location);
}
