class EstimationCalculator {
  calculate(hours: number, complexity: number): number {
    return hours * complexity;
  }
}

class EstimationSaver {
  save(value: number): void {
    console.log(`Estimativa de ${value} pontos salva com sucesso.`);
  }
}

class EstimationLogger {
  log(value: number): void {
    console.log(`Estimativa registrada no histórico: ${value} pontos.`);
  }
}

const calculator = new EstimationCalculator();
const saver = new EstimationSaver();
const logger = new EstimationLogger();

const estimation = calculator.calculate(8, 3);
saver.save(estimation);
logger.log(estimation);
