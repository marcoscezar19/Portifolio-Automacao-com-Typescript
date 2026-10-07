// Exercício 6: Classificação de Cenários para Automação

interface CenarioQA {
  id: number;
  titulo: string;
  frequenciaExecucao: "alta" | "media" | "baixa";
  complexidadeManual: "alta" | "media" | "baixa";
  estabilidadeRegras: boolean;
}

const listaCenarios: CenarioQA[] = [
  { id: 1, titulo: "Login com sucesso", frequenciaExecucao: "alta", complexidadeManual: "baixa", estabilidadeRegras: true },
  { id: 2, titulo: "Teste de Usabilidade Visual", frequenciaExecucao: "baixa", complexidadeManual: "alta", estabilidadeRegras: false },
  { id: 3, titulo: "Cálculo de Imposto no Checkout", frequenciaExecucao: "alta", complexidadeManual: "alta", estabilidadeRegras: true },
  { id: 4, titulo: "Exploração de novos layouts da Home", frequenciaExecucao: "baixa", complexidadeManual: "baixa", estabilidadeRegras: false },
  { id: 5, titulo: "Validação de Token JWT na API", frequenciaExecucao: "alta", complexidadeManual: "baixa", estabilidadeRegras: true }
];

function deveAutomatizar(cenario: CenarioQA): boolean {
  if (cenario.frequenciaExecucao === "alta" && cenario.estabilidadeRegras) {
    return true;
  } else {
    return false;
  }
}

let totalAutomatizaveis = 0;

console.log("=== Análise de Automação de Cenários ===");

for (const cenario of listaCenarios) {
  const automatizar = deveAutomatizar(cenario);
  
  if (automatizar) {
    totalAutomatizaveis++;
    console.log(`Cenário "${cenario.titulo}": DECISÃO -> Automatizar`);
  } else {
    console.log(`Cenário "${cenario.titulo}": DECISÃO -> Teste Manual / Não Automatizar`);
  }
}

console.log(`\nTotal de cenários automatizáveis: ${totalAutomatizaveis}`);
// Esperado:
// Cenário "Login com sucesso": DECISÃO -> Automatizar
// Cenário "Teste de Usabilidade Visual": DECISÃO -> Teste Manual / Não Automatizar
// Cenário "Cálculo de Imposto no Checkout": DECISÃO -> Automatizar
// Cenário "Exploração de novos layouts da Home": DECISÃO -> Teste Manual / Não Automatizar
// Cenário "Validação de Token JWT na API": DECISÃO -> Automatizar
// Total de cenários automatizáveis: 3