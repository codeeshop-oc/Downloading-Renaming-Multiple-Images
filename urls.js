/**
  First what we do is taking the pattern from the images to download
  Here after going through the website we found out that images are changing one of their iterating values
  So we create a loop from js and put all the values in the arr field
  
  Note: For Starters run this code in the terminal ( Ctrl + Shift + T ) in Chrome and Firefox
*/

let arr = []

for( let i = 1; i < 59; i++){
    arr.push('Your_Active_URL' + (i < 10 ? '0' : '') + i + '.jpg')
}

// Using this you can check the array and all the URL's
console.log(arr)

/*** After that in the terminal you can write command copy(variable_name) like below */
// copy(arr)
