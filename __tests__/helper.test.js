import { slidingArraySum } from '../helper';

describe('Test the Fraudlent Credit Cards', () => {
  test('When a card is fraudlent', () => {
    const cardObj = {
      '10d7ce2f43e35fa57d1bbf8b1e2': [
        ['2020-12-01T13:15:54', 103.0],
        ['2020-12-02T13:21:56', 570.0],
        ['2020-12-02T14:20:22', 400.0],
        ['2020-12-04T14:39:22', 900.0],
        ['2020-12-04T14:45:22', 200.0],
        ['2020-12-04T14:50:22', 110.0],
        ['2020-12-04T14:59:22', 130.0],
      ],
    };
    const response = slidingArraySum(
      cardObj['10d7ce2f43e35fa57d1bbf8b1e2'],
      15,
      1200,
    );
    expect(response).toBeTruthy();
  });
  test('When a card is not fraudlent', () => {
    const cardObj = {
      '10d7ce2f43e35fa57d1bbf8b1e3': [
        ['2020-12-01T13:15:54', 113.0],
        ['2020-12-02T13:21:56', 530.0],
        ['2020-12-02T14:20:22', 410.0],
        ['2020-12-03T14:39:22', 950.0],
        ['2020-12-03T14:45:22', 210.0],
        ['2020-12-03T14:50:22', 120.0],
        ['2020-12-04T14:59:22', 150.0],
      ],
    };
    Object.keys(cardObj).map((card) => {
      const response = slidingArraySum(
        cardObj['10d7ce2f43e35fa57d1bbf8b1e3'],
        15,
        2000,
      );
      expect(response).toEqual(false);
    });
  });
});
