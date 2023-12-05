// for reading the contents of the CSV file (need to install npm install @types/node)
import fs from 'fs'; // module in the Node Standard Library

// 'CsvFileReader' is now a Generic Class, whenever I use this 'class' in any way, I'm going to have to pass in the Type to customize 'CsvFileReader'
// that means that, when I use 'CsvFileReader', I'm going to pass in for instance 'MatchData' Tuple
// and then visually instead of 'T' there will be 'MatchData'
export abstract class CsvFileReader<T> {
  data: T[] = []; // starts as an empty Array

  // public - automatically defining a Property on the Class "filename"
  // whatever I pass in as the 1st Arg when I create a CsvFileReader, will be assigned to the "filename" Property on the Object instance
  constructor(public filename: string) {}

  // helper function (marking it as 'abstract' that's going to be implemented by the Child Class)
  // takes one row and converts the information inside of it and then return it
  // takes in a single 'row' that is going to be an Array of Strings and it's going to return a 'MatchData' Tuple
  abstract mapRow(row: string[]): T;

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
      // go through each individual 'row' and convert each 'value' inside of each of those 'rows' into correct type
      // row - 1 of the single rows
      // taking each value of 'row' of Strings and do some processing
      .map(this.mapRow); // passing in a reference to 'mapRow'
  }
}
