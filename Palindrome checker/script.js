function palindrome(str){
    const len = str.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (str[i] !== str[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}


function calculate(){
    let inputValue = document.querySelector("#inp").value;
    return palindrome(inputValue);
}


document.querySelector("#btn").onclick = 
function(){
    document.querySelector("#result").innerHTML = calculate();
}

