const sampleArray = [
  469,
  755,
  244,
  245,
  758,
  450,
  302,
  20,
  712,
  71,
  456,
  21,
  398,
  339,
  882,
  848,
  179,
  535,
  940,
  472
];
const twenty = Array.from(Array(20), (e, i) => i + 1);
const hundred = Array.from(Array(100), (e, i) => i + 1);
// create new reverse arrays so we do not mutate original by calling .reverse()
const twentyReversed = Array.from(Array(20), (e, i) => i + 1).reverse();
const hundredReversed = Array.from(Array(100), (e, i) => i + 1).reverse();
// // instructions need this to be in an html element,
// // not console log, will have to brainstorm on that

function kata1() {
  return twenty;
}

function kata2() {
  return twenty.filter(x => x % 2 === 0);
}

function kata3() {
  return twenty.filter(x => x % 2 !== 0);
}

function kata4 () {
  return hundred.filter(x => x % 5 === 0);
}

function kata5() {
  return hundred.filter(x => Number.isInteger(Math.sqrt(x)));
}

function kata6() {
  return twentyReversed;
}

function kata7() {
  return twentyReversed.filter(x => x % 2 === 0);
}

function kata8() {
  return twentyReversed.filter(x => x % 2 !== 0);
}

function kata9() {
  return hundredReversed.filter(x => x % 5 === 0);
}

function kata10 () {
  return hundredReversed.filter(x => Number.isInteger(Math.sqrt(x)));
}

function kata11() {
  return sampleArray;
}

function kata12() {
  return sampleArray.filter(number => number % 2 === 0);
}

function kata13() {
  return sampleArray.filter(number => number % 2 !== 0);
}

function kata14() {
  return sampleArray.map(x => x * x);
}

function kata15() {
  const sum = (total, num) => total + num;
  let N = 21;
  let a = Array.apply(null, { length: N }).map(Number.call, Number);
  return a.reduce(sum);
}

function kata16() {
  // const sum = (total, num) => total + num;
  let sum = 0;
  for(let i = 0; i < sampleArray.length; i++) {
    sum += sampleArray[i];
  }
  return sum;
}

function kata17() {
  let currentMin = sampleArray[0];
  for(let i = 1; i < sampleArray.length; i++) {
    if (sampleArray[i] < currentMin) {
      currentMin = sampleArray[i];
    }
  }
  return currentMin;
}

function kata18() {
  let currentMax = sampleArray[0];
  for(let i = 1; i < sampleArray.length; i++) {
    if (sampleArray[i] > currentMax) {
      currentMax = sampleArray[i];
    }
  }
  return currentMax;
}