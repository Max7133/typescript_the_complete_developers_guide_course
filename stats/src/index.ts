import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read(); // read the file definition and assign it to 'data' Property

// enum - enumeration
// enum - because it's good use for a Collection of closly related Values
// type: MatchResult
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUnitedWins = 0;
// iterating through collection of matches
for (let match of reader.data) {
  // MU won as home team
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
    // MU won as away team
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`); // Man United won 18 games
