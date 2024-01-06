import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

// Create an Object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something that satisfies the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// Create an instance of 'Summary', 'WinsAnalysis' and 'ConsoleReport'
// 'WinsAnalysis' and 'ConsoleReport' will be fed into 'Summary'

// 1st Arg - Instance of the Analyzer which is WinsAnalysis (need to pass there the Name of the Team that I want to find the number of WINS for)
const summary = new Summary(
  new WinsAnalysis('Man United'),
  //new ConsoleReport()
  new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches); // Team Man United won 18 games
