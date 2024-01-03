import { OutputTarget } from '../Summary'; // Interface

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
