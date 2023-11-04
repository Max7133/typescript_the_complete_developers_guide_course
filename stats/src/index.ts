// for reading the contents of the CSV file (need to install npm install @types/node)
import fs from 'fs'; // module in the Node Standard Library

// 1st Arg - the name of the file that I want to open 'football.csv'
// 2nd Arg - options Object with Flag 'encoding'
const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8', // with this 'readFileSync, it can read any type of file, so an Image,executable, JSON file or CSV
  })
  .split('\n')
  // for every row that I expect to be a String, it will return an Array of Strings
  // it will 'map' over each individual string and 'split' on the comma, so at the end there will be a 2 Dimensional Array of Strings
  .map((row: string): string[] => {
    return row.split(',');
  });
