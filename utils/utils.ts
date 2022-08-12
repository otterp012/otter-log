// export const select = (obj: object, keys: string[]) => {
//   return keys.reduce((acc, key) => {
//     acc[key] = obj[key];
//     return acc;
//   }, {});
// };

function select<T extends object, U extends keyof T>(obj: T, keys: U[]) {
  return keys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});
}
