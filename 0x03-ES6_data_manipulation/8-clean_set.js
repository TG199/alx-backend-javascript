export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  const resultArray = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const restOfString = value.slice(startString.length);
      resultArray.push(restOfString);
    }
  }

  return resultArray.join('-');
}
