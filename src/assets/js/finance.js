// finance.js
// --------------------------------------------------
// Lógica financiera pura. No toca el DOM.
// - Soporta tipos: "ingreso", "gasto", "ahorro" (ahorro manual).
// - Calcula ahorro automático = 10% de totalIngresos.
// --------------------------------------------------

let totalIngresos = 0;        // suma de ingresos
let totalGastos = 0;         // suma de gastos
let totalAhorrosManual = 0;  // ahorros que el usuario añade con tipo 'ahorro'

// Añadir una transacción: actualiza los totales internos.
// Nota: no manipulamos el DOM aquí.
export function addTransaction(amount, type) {
  if (type === "ingreso") {
    totalIngresos += amount;
  } else if (type === "gasto") {
    totalGastos += amount;
  } else if (type === "ahorro") {
    // Ahorro manual (por ejemplo cuando el usuario transfiere a ahorros)
    totalAhorrosManual += amount;
  }
}

// Balance disponible: ingresos - gastos - ahorros manuales
export function calculateBalance() {
  return totalIngresos - totalGastos - totalAhorrosManual;
}

// Calcular 10% a partir de un monto (útil para mostrar mientras el usuario escribe)
export function calculateSavingFromIncome(amount) {
  return amount * 0.1;
}

// Obtener totales para la UI. Incluye ahorro automático y ahorro manual por separado.
export function getTotals() {
  const ahorroAutomatico = totalIngresos * 0.1;
  const ahorroTotal = ahorroAutomatico + totalAhorrosManual;
  return {
    ingresos: totalIngresos,
    gastos: totalGastos,
    ahorro: ahorroTotal,             // mostrable en tarjeta (automático + manual)
    ahorroAutomatico,                // 10% de ingresos (lo que comentas que debe mostrarse)
    ahorroManual: totalAhorrosManual,
    saldo: calculateBalance()
  };
}

// Función de utilidad para desarrollo / tests: reinicia totales.
export function _resetAllForDev() {
  totalIngresos = 0;
  totalGastos = 0;
  totalAhorrosManual = 0;
}
