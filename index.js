import { getFraudlentCards } from './readFile';

const app = async () => {
  if (process.argv.length !== 4) {
    console.log('Required Arguments are not passed:', process.argv);
    return;
  }
  try {
    const fraudlentCards = await getFraudlentCards(
      process.argv[2],
      process.argv[3],
    );
    if (fraudlentCards.length !== 0) {
      console.log(fraudlentCards);
    }
  } catch (err) {
    console.log(err);
  }
};

app();
