import moment from 'moment';

export const slidingArraySum = (arr, windowSize, maxSum) => {
  let sum = arr[0][1];
  let startTime = arr[0][0];
  let i = 0;
  let j = 1;

  while (i < arr.length - 2 && j < arr.length - 1) {
    if (
      moment(arr[j][0]).isBefore(moment(startTime).add(windowSize, 'hours'))
    ) {
      sum += arr[j][1];
      j++;
    } else {
      sum = sum - arr[i][1];
      i++;
      startTime = arr[i][0];
    }
    if (sum > maxSum) {
      return true;
    }
  }

  return false;
};
