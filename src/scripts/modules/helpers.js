// loop
export const loop = (elements, callback) => {
  const l = elements.length;
  for (let i = 0; i < l; i++) {
    callback(elements[i]);
  }
};
