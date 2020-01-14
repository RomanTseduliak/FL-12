function convert(...pizza) {
  let result = [];
  for (let part of pizza) {
    if (typeof part === 'string') {
      result.push(parseInt(part));
    } else if (typeof part === 'number') {
      result.push(part.toString());
    } else {
      result.push(part);
    }
  }
  return result;
}
convert('1', 2, 3, '4');

function executeforEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

executeforEach([1, 2, 3], function(el) {
  console.log(el * 2);
});

function mapArray(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

mapArray([1, 2, 3], function(el) {
  console.log(el + 3);
});

function filterArray(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

filterArray([2, 5, 8], function(el) {
  if (el % 2 === 0) {
    let filtered = el;
    console.log('filterArray', filtered);
  }
});

function reverse(str) {
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
console.log(reverse('Hello'));

function createArray([startOfArray, endOfArray]) {
  const newArray = [];
  for (let i = startOfArray; i <= endOfArray; i++) {
    newArray.push(i);
  }
  return newArray;
}
console.log(createArray([2, 7]));

function objectKey(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

objectKey(
  [
    { name: 'Ivan', age: '20' },
    { name: 'Vova', age: '50' }
  ],
  function(obj) {
    let newArray = [];
    newArray.push(obj.name);
    console.log(newArray);
  }
);

function substitute(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 30) {
      newArray.push('*');
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log(substitute([58, 14, 48, 2, 31, 29]));

const date = new Date(2019, 0, 2);
function getPastDate(date, amountOfDays) {
  const msInDay = 86400000;
  return new Date(date.getTime() - amountOfDays * msInDay).getDate();
}
console.log(getPastDate(date, 10));

function formatDate(date) {
  return `${date.getFullYear()}/${date.getMonth() +
    1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}

formatDate(new Date('6/15/2018 09:15:00'));
formatDate(new Date());
