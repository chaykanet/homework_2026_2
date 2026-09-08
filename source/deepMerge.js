/**
 * Рекурсивно объединяет два объекта.
 * При совпадении ключей вложенные объекты объединяются,
 * остальные значения заменяются значениями из второго объекта.
 *
 * @param {Object} object1 - исходный объект
 * @param {Object} object2 - объект, значения которого имеют приоритет
 * @returns {Object} объединённый объект
 */
const deepMerge  = (object1, object2) => {

    const result = { ...object1 };

    for (const key in object2) {

        const value1 = result[key];
        const value2 = object2[key];

        const isObject1 = value1 !== null && typeof value1 === 'object' && !Array.isArray(value1);
        const isObject2 = value2 !== null && typeof value2 === 'object' && !Array.isArray(value2);


        if (isObject1 && isObject2) {
            result[key] = deepMerge(value1, value2);
        } else {
            result[key] = value2;
        }
    }

    return result;
}