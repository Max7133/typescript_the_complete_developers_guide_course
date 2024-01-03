import { MatchData } from './MatchData';

export interface Analyzer {
  // Takes in a List of 'matches', that's going to be an Array of 'MatchData' Tuples, needs to return a String (is actual data from running the analysis)
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  // Takes in an Argument 'report' as a String and doesn't return anything
  print(report: string): void;
}

// Composition
// Created an instance of class Summary
// Passing in an Instance on an Object to use as the 'analyzer' and an Intance to use as the 'OutputTarget' as well
export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches); // list of 'matches', run() gives back a 'string' === actual report data
    this.outputTarget.print(output);
  }
}
