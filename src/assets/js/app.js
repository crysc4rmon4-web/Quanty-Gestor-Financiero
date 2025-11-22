import { addTransaction, calculateSavingFromIncome, getTotals } from './finance.js';
import { renderTotals, renderTransactionRow, clearInputs, initSavingsModal, initTooltips } from './ui.js';
import { getRandomPhrase, getRandomTip } from './motivation.js';
import { initBalanceChart, initSavingsChart, updateBalanceChart, updateSavingsChart } from './charts.js';

document.addEventListener("DOMContentLoaded", () => {
  // ------------------------------
  // Referencias al DOM
  // ------------------------------
  const descripcionInput = document.getElementById("descripcion");
  const montoInput = document.getElementById("monto");
  const tipoInput = document.getElementById("tipo");
  const divisaInput = document.getElementById("divisa");
  const ahorroCalculado = document.getElementById("ahorro-calculado");
  const historial = document.getElementById("tabla-movimientos");

  const saldoTotalDOM = document.getElementById("saldo-total");
  const ingresosTotalDOM = document.getElementById("ingresos-total");
  const gastosTotalDOM = document.getElementById("gastos-total");
  const ahorroTotalDOM = document.getElementById("ahorro-total");

  const fraseMotivacional = document.getElementById("frase-motivacional");
  fraseMotivacional.textContent = getRandomPhrase();

  // ------------------------------
  // Inicializar gráficos
  // ------------------------------
  const graficoBalance = initBalanceChart(document.getElementById("graficoBalance").getContext("2d"));
  const graficoAhorro = initSavingsChart(document.getElementById("graficoAhorro").getContext("2d"));

  // ------------------------------
  // Inputs y formulario
  // ------------------------------
  montoInput.addEventListener("input", () => {
    ahorroCalculado.value = calculateSavingFromIncome(parseFloat(montoInput.value) || 0).toFixed(2);
  });

  document.getElementById("form-transaccion").addEventListener("submit", e => {
    e.preventDefault();

    const descripcion = descripcionInput.value.trim();
    const monto = parseFloat(montoInput.value);
    const tipo = tipoInput.value;
    const divisa = divisaInput.value;

    if (!descripcion || isNaN(monto) || monto <= 0 || !tipo) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }

    // Lógica financiera
    addTransaction(monto, tipo);

    // Renderizar UI
    renderTransactionRow({ descripcion, monto, tipo, divisa }, historial);
    clearInputs([descripcionInput, montoInput, tipoInput, ahorroCalculado]);

    const totals = getTotals();
    renderTotals(totals, { ingresosTotalDOM, gastosTotalDOM, ahorroTotalDOM, saldoTotalDOM });
    updateBalanceChart(graficoBalance, totals);
    updateSavingsChart(graficoAhorro, totals);
  });

  // ------------------------------
  // Inicializar tooltips y modales
  // ------------------------------
  initTooltips();
  initSavingsModal(document.getElementById("btnAhorro"), document.getElementById("modalAhorroConsejo"), document.getElementById("cerrarModal"));

  // ------------------------------
  // Consejos aleatorios
  // ------------------------------
  const collapseConsejo = document.querySelector("#tipsAhorro .alert");
  const btnConsejos = document.querySelector('button[data-bs-toggle="collapse"][data-bs-target="#tipsAhorro"]');
  btnConsejos.addEventListener("click", () => { collapseConsejo.textContent = getRandomTip(); });
});
