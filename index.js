// Code your solution in this file!
function distanceFromHqInBlocks(n) {
  if (n >= 42) {
    return n-42
  } else {
    return 42-n
  }
}

function distanceFromHqInFeet(n) {
  return distanceFromHqInBlocks(n)*264
}