import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// OLD WAY
/* // Create an Object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something that satisfies the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load(); */

// BETTER WAY
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// OLD WAY
// Create an instance of 'Summary', 'WinsAnalysis' and 'ConsoleReport'
// 'WinsAnalysis' and 'ConsoleReport' will be fed into 'Summary'

// 1st Arg - Instance of the Analyzer which is WinsAnalysis (need to pass there the Name of the Team that I want to find the number of WINS for)
/* const summary = new Summary(
  new WinsAnalysis('Man United'),
  //new ConsoleReport()
  new HtmlReport()
); */

// BETTER WAY
// When using a 'class method' I don't need to use the 'new keyword', I use the 'new keyword' inside the 'class method' (Summary.ts line 22)
const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches); // Team Man United won 18 games
