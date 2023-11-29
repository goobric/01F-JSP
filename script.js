// CONSOLE LOGGING
// ctrl + / to comment out a line
/* this is 
a multi line 
comment structure */

console.log(y);

console.log(100);

console.log(20, 'hello', true);

const x = 100;

console.log(x);

console.error('This is an error ALERT');

console.warn('This is a Warning');

console.table({ name: 'Brad', email: 'brad@brad.net', age: 37 });

console.group('Simple Group');
console.log(x);
console.error('This is an error ALERT');
console.warn('This is a Warning');
console.groupEnd();

const styles =
  'padding: 10px; background: #222; color: #bada55; font-size: 20px;';
