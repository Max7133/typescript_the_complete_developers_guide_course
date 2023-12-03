import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
import { dateStringToDate } from './utils';

// Tuple
type MatchData = [Date, string, string, number, number, MatchResult, string];

// at CsvFileReader I inserted the Generic Notation <MatchData> - Type that I want to be applied to <T> inside of 'CsvFileReader.ts'
// In this case I'm customizing the 'CsvFileReader.ts' over inside the 'MatchReader.ts' (give me a copy of 'MatchReader' that's going to extend 'CsvFileReader' that's have been customized to work with 'MatchData')
export class MatchReader extends CsvFileReader<MatchData> {
  // takes a single 'row' of Array of Strings, returns something related to MatchData
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      // MatchResult (Enum Type)
      // Type Assertion (overwriting TS default behavior) output: 'H', 'A', 'D'
      row[5] as MatchResult,
      row[6],
    ];
  }
}
