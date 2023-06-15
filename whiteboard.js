


//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). 
//Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

//spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
//spinWords( "This is a test") => returns "This is a test" 
//spinWords( "This is another test" )=> returns "This is rehtona test"



// split string into array of words
function spinWords(my_str) {

    let words = my_str.split(" ");
    //loop over each word 
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= 5) {
        //reverse the words
        words[i] = words[i].split("").reverse().join("");
        console.log(words)
        }  
    //the words that have been changged ---> back into a STRING
    }
    return words.join(" ");
   
}


//console.log('Hey fellow warriors');

console.log(spinWords('Hey fellow warriors'))

// use let, for result ---> 

