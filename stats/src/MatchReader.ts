import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  // reader: DataReader; (Don't need this, because with using 'public' it will automatically define this as a Property on this 'class')
  constructor(public reader: DataReader) {}

  // the 'load' Method is going to load up all the information through the 'CsvFileReader' and then do the actual conversion process
  load(): void {
    // whatever 'reader' is given
    this.reader.read(); // the entire 'loading process' (get the .csv file, parce all the info inside of it, and produce the 2 dimensional Array of strings)
    // gives back a 'New 2 Dimensional Array', and then it turns them in to all appropriate Values
    // assigning all that transformed data (2 Dim Arr) to 'this.matches' after the Mapping Operation
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      // go through each individual 'row' and convert each 'value' inside of each of those 'rows' into correct type
      // row - 1 of the single rows
      // taking each value of 'row' of Strings and do some processing
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
    });
  }
}
