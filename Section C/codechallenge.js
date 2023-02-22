
//The numbers array contains the English names for numbers 0-20 and multiples of 10 up to 90.
const numbers = [
  '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
  'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
  'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'
];

//The array of arrays contains additional number and name pairs for multiples of 10 beyond 90. These pairs are then added to the names array using the forEach() method.
[
  [30, 'thirty'], [40, 'forty'], [50, 'fifty'], [60, 'sixty'],
  [70, 'seventy'], [80, 'eighty'], [90, 'ninety']
].forEach(([i, e]) => numbers[i] = e);


/**
 * 
 * 
 * The getNumber() function takes a number and returns its English name.
 *  If the number is already in the numbers array, the function returns the corresponding name.
 *  Otherwise, it breaks the number down into its hundreds, tens, and ones place using destructuring assignment 
 * and the padStart() method. It then concatenates the appropriate English names for each place and returns the
 *  full name. 
 * 
 */
const getNumber= n => {
  if (numbers[n]) return numbers[n];
  const [a, b, c] = [...`${n}`.padStart(3, '0')].map(Number);
  const hundred = a ? (numbers[a] + ' hundred and ') : '';
  return hundred + numbers[b * 10] + ((b && c) ? '-' : '') + numbers[c];
};

/**
 * 
 * The numberSuffix() function takes a number n and returns
 *  the appropriate suffix for that power
 * (e.g., 'thousand', 'million', 'billion', etc.).
 *  
 */
const numberSuffix = n => (
  ['', ' thousand', ' million', ' billion', ' trillion'][n]
);

/**
 * The sayNumber() function takes a number and returns its English name as a string. 
 * It does this by breaking the number down into groups of three digits (starting from the right) using reverse(), 
 * flatMap(), and slice(). It then maps each group to its English name using getNumber(), adding the appropriate 
 * suffix using numberSuffix(). Finally, it joins the resulting array with
 *  commas and replaces the final comma with 'and' (if necessary) using replace().
 * 
 */
 const sayNumber = num => {
  const numberGroups = [...`${num}`].reverse().flatMap((_, i, a) => (
    (i % 3) ? [] : Number(a.slice(i, i + 3).reverse().join(''))
  )).reverse();

  return numberGroups.flatMap((n, i, a) => {
    const [isFirst, isLast] = [!i, i === a.length - 1];
    if (!n) return (isFirst && isLast) ? 'zero' : [];
    const prefix = (isLast && !isFirst && (n < 100)) ? 'and ' : '';
    const name = getNumber(n);
    const suffix = numberSuffix(a.length - i - 1);
    return prefix + name + suffix;
  }).join(', ')[
    (numberGroups.pop() < 100) ? 'replace' : 'valueOf'
  ](/, and/, ' and').replace(/^./, m => m.toUpperCase()) + '.';
};

//Calling the sayNumber function
sayNumber(0)
sayNumber(11)
sayNumber(43)
sayNumber(1043283)
sayNumber(90376000010012)


module.exports=sayNumber