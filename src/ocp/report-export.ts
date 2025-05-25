interface Exporter {
  export(data: string[]): void;
}

class PdfExporter implements Exporter {
  export(data: string[]): void {
    console.log("Exportando para PDF:", data.join(", "));
  }
}

class CsvExporter implements Exporter {
  export(data: string[]): void {
    console.log("Exportando para CSV:", data.join(";"));
  }
}

class ReportGenerator {
  constructor(private exporter: Exporter) {}

  generate(data: string[]): void {
    this.exporter.export(data);
  }
}

const data = ["História: Cadastro", "Estimativa: 13 pontos"];
const generator = new ReportGenerator(new PdfExporter());
generator.generate(data);
