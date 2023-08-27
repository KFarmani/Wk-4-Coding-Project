
        // Array of ages
        let ages = [3, 9, 23, 64, 2, 8, 28, 93];
        
        // Calculate the difference between the last and first element
        let lastIndex = ages.length - 1;
        let ageDifference = ages[lastIndex] - ages[0];
        console.log("Age difference:", ageDifference);
        
        // Add a new age to the array
        ages.push(42);
        lastIndex = ages.length - 1;
        ageDifference = ages[lastIndex] - ages[0];
        console.log("New age difference:", ageDifference);
        
        // Calculate the average age
        let sum = 0;
        for (let i = 0; i < ages.length; i++) {
            sum += ages[i];
        }
        let averageAge = sum / ages.length;
        console.log("Average age:", averageAge);
        
        // Array of names
        let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
        
        // Calculate average number of letters per name
        let totalLetters = 0;
        for (let i = 0; i < names.length; i++) {
            totalLetters += names[i].length;
        }
        let averageLetters = totalLetters / names.length;
        console.log("Average letters per name:", averageLetters);
        
        // Concatenate all names together
        let allNames = '';
        for (let i = 0; i < names.length; i++) {
            allNames += names[i] + ' ';
        }
        console.log("All names:", allNames);
        
        // Accessing the last element of an array
        let lastElement = names[names.length - 1];
        console.log("Last element:", lastElement);
        
        // Accessing the first element of an array
        let firstElement = names[0];
        console.log("First element:", firstElement);
        
        // Create an array of name lengths
        let nameLengths = [];
        for (let i = 0; i < names.length; i++) {
            nameLengths.push(names[i].length);
        }
        console.log("Name lengths:", nameLengths);
        
        // Calculate the sum of elements in nameLengths
        let sumNameLengths = 0;
        for (let i = 0; i < nameLengths.length; i++) {
            sumNameLengths += nameLengths[i];
        }
        console.log("Sum of name lengths:", sumNameLengths);
        
        // Function to concatenate a word n times
        function concatenateWord(word, n) {
            return word.repeat(n);
        }
        console.log(concatenateWord('Hello', 3));
        
        // Function to create a full name
        function getFullName(firstName, lastName) {
            return firstName + ' ' + lastName;
        }
        console.log(getFullName('John', 'Doe'));
        
        // Function to check if sum of array is greater than 100
        function isSumGreaterThan100(arr) {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            return sum > 100;
        }
        console.log(isSumGreaterThan100([50, 30, 25]));
        
        // Function to calculate average of array
        function calculateAverage(arr) {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            return sum / arr.length;
        }
        console.log(calculateAverage([10, 20, 30]));
        
        // Function to compare averages of two arrays
        function compareArrayAverages(arr1, arr2) {
            let avg1 = calculateAverage(arr1);
            let avg2 = calculateAverage(arr2);
            return avg1 > avg2;
        }
        console.log(compareArrayAverages([5, 10, 15], [20, 25, 30]));
        
        // Function to decide if to buy a drink
        function willBuyDrink(isHotOutside, moneyInPocket) {
            return isHotOutside && moneyInPocket > 10.50;
        }
        console.log(willBuyDrink(true, 15));