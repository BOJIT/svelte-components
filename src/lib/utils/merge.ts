/**
 * @file merge.ts
 * @author James Bennion-Pedley
 * @brief Merge utilities
 * @date 30/12/2024
 *
 * @copyright Copyright (c) 2024
 *
 */

/*--------------------------------- Functions --------------------------------*/

function isObject(item: any): boolean {
    return item && typeof item === 'object' && !Array.isArray(item);
}

function mergeDeep(target: any, ...sources: any) {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    return mergeDeep(target, ...sources);
}

/*---------------------------------- Exports ---------------------------------*/

export { mergeDeep };
