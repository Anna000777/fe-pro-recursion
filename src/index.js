/**
 * Принимает два объекта, должна вернуть или true или false, если объекты идентичны внутри, возвращает
 * true, если есть различие, false. То есть проверяет каждое свойство, вне зависимости от вложенности,
 * делаем через рекурсию(а других вариантов и нет)
 */
export const deepEqual = (obj, anotherObject) => {
  console.log(Object.entries(obj));
  return Object.entries(obj).every(([key, value], index) => {
    if (typeof value !== 'object') {
      return (
        key === Object.keys(anotherObject)[index] &&
        value === anotherObject[key]
      );
    }
    console.log(value, anotherObject[key]);
    return deepEqual(value, anotherObject[key]);
  });
};

/**
 * Принимает объект, возвращает его глубокую копию, то есть ни одно свойство
 * не является ссылочным у другого объекта, точно возвращает новое.
 * Если это массив, возвращает новый массив(map) и если элемент массива не простого типа,
 * то тогда в рекурсию. С объектом также. Поскольку массив при typeof возвращает object, чтобы
 * их различить берем метод Array.isArray и он на массивах вернет тру
 */
export const deepCopy = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map((item) => {
      if (!Array.isArray(item)) {
        return item;
      }
      return deepCopy(item);
    });
  }
  if (typeof obj === 'object') {
    let cloneObj = {};
    Object.entries(obj).map(([key, value]) => {
      if (typeof value === 'object') {
        cloneObj[key] = deepCopy(value);
      } else {
        cloneObj[key] = value;
      }
    });
    return cloneObj;
  }
};

/**
 * Мы передаем объект, и должны вернуть массив уникальных названий свойств
 * То есть если у нас объект { name: { bohdan: { name: 'test' } } } вернет ['name', 'bohdan']
 */
export const getAllObjectKeys = (obj) => {
  return Object.entries(obj).reduce((accum, [key, value]) => {
    console.log(key);
    accum.push(key);
    if (typeof value === 'object') {
      console.log(getAllObjectKeys(value));
      accum.push(...getAllObjectKeys(value));
    }
    return Array.from(new Set(accum));
  }, []);
};
