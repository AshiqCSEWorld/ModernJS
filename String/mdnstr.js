function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator);

  console.log(`The original string is ${stringToSplit}`);
  console.log(`The separator is ${separator}`);
  console.log(`The array has ${arrayOfStrings.length} elements: ${arrayOfStrings.join(' / ')}`);
  
}

//Strings
const str = 'Oh bravo I am a linux user. Currently my primary OS is manjaro';
const month = 'Jan,Feb,March,April,May,Jun,July,August,September,Oct,Nov,Dec';

//separator
const space = ' ';
const comma = ',';

splitString(str, space);
splitString(str);
splitString(month, comma);