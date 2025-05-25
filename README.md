# SOLID — Exemplo com TypeScript

Este projeto apresenta 4 princípios de design de software com exemplos em TypeScript. Cada princípio é explicado com um código simples, comentado e organizado por pasta.

## Princípios Escolhidos

1. Single Responsibility Principle (Princípio da Responsabilidade Única)  
2. Open-Closed Principle (Princípio Aberto-Fechado)  
3. Dependency Inversion Principle (Princípio da Inversão de Dependência)  
4. Prefira Composição à Herança


## 1. Single Responsibility Principle (SRP)

**O que é:**  
Uma classe deve ter apenas uma única responsabilidade.

**Para que serve:**  
Facilita a manutenção, testes e organização do código. Cada classe deve mudar por apenas um motivo.

**Exemplo:**  
Em `src/srp/estimation-service.ts`, a responsabilidade de calcular, salvar e registrar uma estimativa foi separada em três classes distintas. Cada uma executa apenas uma tarefa.


## 2. Open-Closed Principle (OCP)

**O que é:**  
As classes devem estar abertas para extensão, mas fechadas para modificação.

**Para que serve:**  
Permite adicionar novos comportamentos sem modificar classes existentes.

**Exemplo:**  
Em `src/ocp/report-export.ts`, a classe `ReportGenerator` recebe uma estratégia de exportação via injeção de dependência. Para adicionar um novo formato (como JSON), basta criar uma nova classe que implementa a interface `Exporter`.


## 3. Dependency Inversion Principle (DIP)

**O que é:**  
Dependa de abstrações, não de implementações concretas.

**Para que serve:**  
Reduz o acoplamento entre módulos e facilita testes e mudanças futuras.

**Exemplo:**  
Em `src/dip/task-service.ts`, a classe `TaskService` depende da interface `TaskRepository`, e não de uma implementação direta. Isso permite trocar a fonte de dados sem modificar a lógica de negócio.


## 4. Prefira Composição à Herança

**O que é:**  
Compor funcionalidades é preferível a criar hierarquias complexas com herança.

**Para que serve:**  
Aumenta a flexibilidade e reaproveitamento de código, evitando acoplamento excessivo.

**Exemplo:**  
Em `src/composition/project-feature.ts`, o comportamento de notificação é fornecido por composição através do tipo `Notifier`, permitindo facilmente reutilizar ou substituir a lógica de envio sem alterar a estrutura da classe `Project`.
