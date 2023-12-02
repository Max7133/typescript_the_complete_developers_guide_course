// for reading the contents of the CSV file (need to install npm install @types/node)
import fs from 'fs'; // module in the Node Standard Library
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

export class CsvFileReader {
  data: string[][] = []; // starts as an empty Array

  // public - automatically defining a Property on the Class "filename"
  // whatever I pass in as the 1st Arg when I create a CsvFileReader, will be assigned to the "filename" Property on the Object instance
  constructor(public filename: string) {}

  read(): void {
    // opens the file
    // 1st Arg - the name of the file that I want to open 'football.csv'
    // 2nd Arg - options Object with Flag 'encoding'
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8', // with this 'readFileSync, it can read any type of file, so an Image,executable, JSON file or CSV
      })
      .split('\n')
      // split's a single string 'row' into Array of Strings
      // for every row that I expect to be a String, it will return an Array of Strings
      // it will 'map' over each individual string and 'split' on the comma, so at the end there will be a 2 Dimensional Array of Strings
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map((row: string[]): any => {
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
