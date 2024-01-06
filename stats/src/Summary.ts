import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

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
  // Will give back a copy of Instance of Summary that already has 'winsAnalysisWithHtmlReport' loaded up into it
  // returns an Instance of 'Summary'
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches); // list of 'matches', run() gives back a 'string' === actual report data
    this.outputTarget.print(output);
  }
}

//// static methods can be called of the Class itself without creating an instance of this Class 'Summary'
// Example
// export class Summary {
//   static printHello() {
//    console.log('hi');
//   }
//  }
// Summary.printHello();
