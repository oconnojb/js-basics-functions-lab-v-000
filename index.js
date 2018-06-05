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

function distanceTravelledInFeet(s, e) {
  if (s>=e) {
    return (s-e)*264
  } else {
    return (e-s)*264
  }
}

function calculatesFarePrice(s, e) {
  let distance = distanceTravelledInFeet(s, e)
  switch (distance) {
    case distance <= 400:
      return 0
      break;
    case distance > 400 && distance <=2000:
      return (distance-400)*2
      break;
    default:

  }
}
