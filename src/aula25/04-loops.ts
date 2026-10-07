// Exercício 4: Loops
const suitesDeTeste: string[] = ["Login", "Checkout", "Perfil", "Pagamento"];

console.log("Suítes a executar:");
for (let i = 0; i < suitesDeTeste.length; i++) {
  console.log(`- ${suitesDeTeste[i]}`);
}
// Saída esperada:
// - Login
// - Checkout
// - Perfil
// - Pagamento