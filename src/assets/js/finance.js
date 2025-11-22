// ==============================
// finance.js
// ==============================
// Este módulo contiene toda la lógica de cálculos financieros: ingresos, gastos, ahorro, balance.
// No manipula el DOM directamente, solo devuelve valores o actualiza totales.

let totalIngresos = 0;
let totalGastos = 0;
let totalAhorros = 0;

// Agregar ingreso o gasto
export function addTransaction(amount, type) {
  if (type === "ingreso") totalIngresos += amount;
  if (type === "gasto") totalGastos += amount;

  // Ahorro siempre es el 10% de los ingresos
  totalAhorros = totalIngresos * 0.1;
}

// Calcular balance general
export function calculateBalance() {
  return totalIngresos - totalGastos;
}

// Calcular ahorro a partir de un ingreso específico
export function calculateSavingFromIncome(amount) {
  return amount * 0.1;
}

// Obtener totales para renderizar
export function getTotals() {
  return {
    ingresos: totalIngresos,
    gastos: totalGastos,
    ahorro: totalAhorros,
    saldo: calculateBalance()
  };
}
