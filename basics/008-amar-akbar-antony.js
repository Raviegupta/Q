// Amar, Akbar and Anthony are the three individuals occupying the space in the room. They must choose the air conditioner's temperature setting. Everybody has a different demand

// Amar wants the temperature to be at least A degrees.
// Akbar wants the temperature to be at most B degrees.
// Anthony wants the temperature to be at least C degrees.

// https://replit.com/@ac102-batch/Temperature-Raviegupta

const temp = (a, b, c) => {
  if (a <= b && c <= b) {
    return "YES";
  } else {
    return "NO";
  }
};
console.log(temp(30, 35, 30));