type Notifier = {
  send: (msg: string) => void;
};

const ConsoleNotifier: Notifier = {
  send: (msg) => console.log(`[Notificação]: ${msg}`)
};

class Project {
  constructor(private notifier: Notifier) {}

  start(): void {
    this.notifier.send("Projeto iniciado");
  }
}

const project = new Project(ConsoleNotifier);
project.start();
