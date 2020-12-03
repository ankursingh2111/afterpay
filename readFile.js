import csv from 'csv-parser';
import fs from 'fs';
import neatCsv from 'neat-csv';
import { slidingArraySum } from './helper';
const fsPromise = fs.promises;

export const readFile = async (filename) => {
  const cardData = {};

  const response = await fsPromise.readFile(filename);
  const fileData = await neatCsv(response, {
    headers: ['CardNo', 'time', 'amount'],
  });
  fileData.map((data) => {
    const cardNumber = data.CardNo.trim();
    if (!cardData[cardNumber]) cardData[cardNumber] = [];
    cardData[cardNumber].push([
      data.time.trim(),
      parseFloat(data.amount.trim()),
    ]);
  });
  return cardData;
};

export const getFraudlentCards = async (threshold, filename) => {
  const cardData = await readFile(filename);

  const cardNumbers = [];
  Object.keys(cardData).map((cardNo) => {
    if (slidingArraySum(cardData[cardNo], 24, threshold)) {
      cardNumbers.push(cardNo);
    }
  });

  return cardNumbers;
};
