// Functions Assignment

// 1. Declare a function fullName and print out your full name.
function fullName() {
    console.log("Michel Kemunto Mayenga");
  }
  
  // 2. Declare a function fullName with firstName, lastName as parameters and return full name.
  function fullNameWithParams(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  
  // 3. Declare a function addNumbers that takes two parameters and returns their sum.
  function addNumbers(num1, num2) {
    return num1 + num2;
  }
  
  // Higher Order Functions Assignment
  
  const countries = [
    'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany',
    'Hungary', 'IceLand', 'Ireland', 'Japan', 'Kenya',
  ];
  
  const names = ['Tamara', 'Mathias', 'Elias', 'Brook'];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: '' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];
  
  // Use .forEach to log each country in the countries array.
  countries.forEach(country => console.log(country));
  
  // Use .forEach to log each name in the names array.
  names.forEach(name => console.log(name));
  
  // Use .forEach to log each number in the numbers array.
  numbers.forEach(number => console.log(number));
  
  // Use .map to create a new array by changing each country to uppercase in the countries array.
  const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase);

  
  // Use .map to create an array of countries length from countries array.
  const countryLengths = countries.map(country => country.length);
  console.log(countryLengths);
  
  // Use .map to create a new array by changing each number to square in the numbers array.
  const squaredNumbers = numbers.map(number => number * number);
  console.log(squaredNumbers);
  
  // Use .map to change each name to uppercase in the names array.
  const upperCaseNames = names.map(name => name.toUpperCase());
  console.log(upperCaseNames);
  
  // Use .map to map the products array to its corresponding prices.
  const productPrices = products.map(product => product.price);
  console.log(productPrices);
  
  // Use .filter to filter out countries containing 'a'.
  const countriesWithA = countries.filter(country => country.includes('a'));
  console.log(countriesWithA);
  
  // Use .filter to filter out countries having six characters.
  const countriesWithSixCharacters = countries.filter(country => country.length === 6);
  console.log(countriesWithSixCharacters);
  
  // Use .filter to filter out countries containing six letters and more.
  const countriesWithSixLettersAndMore = countries.filter(country => country.length >= 6);
  console.log(countriesWithSixLettersAndMore);
  
  // Use .filter to filter out countries that start with 'E'.
  const countriesStartingWithE = countries.filter(country => country.startsWith('E'));
  console.log(countriesStartingWithE);
  
  // Use .filter to filter out only products with prices with values.
  const productsWithPrices = products.filter(product => product.price !== '');
  console.log(productsWithPrices);
  
  // Declare a function called patternCountries which returns an array of countries with a common pattern (like 'land', 'ia', 'island', 'stan').
  function patternCountries(pattern) {
    return countries.filter(country => country.toLowerCase().includes(pattern.toLowerCase()));
  }
  
  const countriesWithLand = patternCountries('land');
  console.log(countriesWithLand);
  
  
  // Objects Assignment
  
  // 1. Create an empty object called dog.
  const dog = {};
  
  // 2. Add name, legs, color, age, and bark properties for the dog object.
  dog.name = "Rex";
  dog.legs = 4;
  dog.color = "brown";
  dog.age = 5;
  dog.bark = function() {
    return `${this.name} says Woof!`;
  };
  
  // 3. Print the dog object on the console.
  console.log(dog);
  
  // 4. Get name, legs, color, age, and bark value from the dog object.
  console.log(`Name: ${dog.name}, Legs: ${dog.legs}, Color: ${dog.color}, Age: ${dog.age}, Bark: ${dog.bark()}`);
  