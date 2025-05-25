interface TaskRepository {
  findById(id: number): string;
}

class MemoryTaskRepository implements TaskRepository {
  findById(id: number): string {
    return `Tarefa ${id}: Criar formulário`;
  }
}

class TaskService {
  constructor(private repository: TaskRepository) {}

  showTask(id: number): void {
    const task = this.repository.findById(id);
    console.log(task);
  }
}

const repository = new MemoryTaskRepository();
const service = new TaskService(repository);
service.showTask(1);
