export const toNumber = (value: any): number => {
  try {
    if (typeof value != "number") {
      value = parseInt(value, 10);
    }
    return value;
  } catch (err) {
    throw err;
  }
};


export function isNull (obj: any): boolean {
  return obj == null || obj === undefined
}