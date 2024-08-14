export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let returnString = '';
  for (const value of set) {
    if (value.startsWith(startString)) {
      const restOfString = value.slice(startString.length, value.length);
      returnString += `${restOfString}-`;
    }
  }
  return returnString.endsWith('-') ? returnString.slice(0, -1) : returnString;
}
