//writing functions to get the minimum and maximum values for the plots
export const getMin = (...arr) => {
  //initialize a variable called min with the value of first element
  let min = arr[0];

  //looping through the array to see if there is a lower value than min
  //and return the min value in the end
  for(let i = 1; i <= arr.length; i++){
    if ( arr[i] < min ) {
      min = arr[i];
    }
  }
  return min;
}

export const getMax = (...arr) => {
  //initialize a variable called min with the value 0
  //there can not be values lower than 0
  let max = 0;

  //looping through the array to see if there is a higher value than max
  //and return the min value in the end
  for(let i = 0; i <= arr.length; i++){
    if ( arr[i] > max ) {
      max = arr[i];
    }
  }
  return max;
}
