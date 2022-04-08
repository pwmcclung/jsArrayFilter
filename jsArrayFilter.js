function getEvenNumbers(numbersArray){
  // filter out the odd numbers
  const nums = numbersArray.filter(nums => nums %2 === 0)
  return nums
}
