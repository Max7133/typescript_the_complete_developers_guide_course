import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

// this class needs to satisfy the "Analyzer interface"
// implements Analyser - is going to tell TS, that I'm trying to get this Class to implement this Interface, give some help and check the Class for me
export class WinsAnalysis implements Analyzer {
  // I want this Class to take in the name of a team and find the number of times that team won a match
  constructor(public team: string) {}

  // this 'run()' is required by the 'interface Analyzer'
  // interface isn't limiting from adding other helper Methods to this class, it only requires certain Methods
  // matches (the info it will iterate over to make the analysis)
  // I don't need to call the Argument 'matches' if I don't have to, it's only to get some context out of it
  // returns the result of String
  run(matches: MatchData[]): string {
    let wins = 0;
    // iterating through collection of matches
    for (let match of matches) {
      // MU won as home team
      if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        wins++;
        // MU won as away team
      } else if (
        match[2] === 'Man United' &&
        match[5] === MatchResult.AwayWin
      ) {
        wins++;
      }
    }

    // Returning the string output
    return `Team ${this.team} won ${wins} games`;
  }
}
