const task1 = () => {
  let arr = [
    "ax",
    "mof",
    "4",
    "63",
    "42",
    "3",
    "10",
    "[",
    "23",
    "adidas",
    "ba",
    ")",
    "ABC",
  ];

  arr = arr.sort();

  let arrNum = arr
    .filter((item) => /\d+/.test(item))
    .map((item) => Number(item))
    .sort((a, b) => a - b)
    .map((item) => JSON.stringify(item));
  let arrStr = arr.filter((item) => /[A-Za-z]/.test(item));
  let arrChar = arr.filter((item) => /\W+/.test(item));

  return JSON.stringify([...arrNum, ...arrStr, ...arrChar]);
};

const insertChar = (i, len, val, str, arr) => {
  let f = "";
  let temp = arr;
  if (/-/.test(str)) {
    f = [str.slice(0, val[i] + i + 1), "-", str.slice(val[i] + i + 1)].join("");
    temp.push(f);
  } else {
    f = [str.slice(0, val[i] + 1), "-", str.slice(val[i] + 1)].join("");
    temp.push(f);
  }
  i += 1;
  if (i <= len && val[i]) {
    insertChar(i, len, val, f, temp);
  } else {
    return temp;
  }
};

function variations(string) {
  let output = string;
  let arrIndex = [];
  let arrOutput = [];
  for (let index = 0; index < output.length; index++) {
    if (output[index + 1]) {
      if (/\d/.test(output[index]) && /[A-Za-z]/.test(output[index + 1])) {
        arrIndex.push(index);
      }
      if (/\d/.test(output[index + 1]) && /[A-Za-z]/.test(output[index])) {
        arrIndex.push(index);
      }
    }
  }

  let i = 0;

  for (let index = 0; index < arrIndex.length; index++) {
    insertChar(index, arrIndex.length, arrIndex, output, arrOutput);
  }

  return arrOutput;
}

const task4 = () => {
  let input =
    "Products are created with 132cxvx SKUs and MXX and CSV and 79 and mic7979 and m98opt options";
  let arrStr = input.split(" ");
  arrStr = arrStr.filter((i) => /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(i));
  let output = "";
  arrStr.forEach((item) => {
    output += variations(item).join(", ") + ", ";
  });

  return output;
};

const calculateParkingFee = (timeIn) => {
  const day = 24 * 1000 * 3600;
  let totalTimes = (Date.now() - new Date(timeIn)) / day;
  let fee = 0;
  if (day <= 1) {
    fee = 5;
  } else {
    fee = totalTimes.toFixed(2) * 5;
  }
  return JSON.stringify(fee);
};

module.exports = {
  task1,
  task4,
  calculateParkingFee,
};
