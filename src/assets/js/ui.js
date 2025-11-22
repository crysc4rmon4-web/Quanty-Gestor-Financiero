// ==============================
// ui.js
// ==============================
// Este módulo se encarga de actualizar la interfaz: tarjetas, inputs, historial, modales y tooltips.

export function renderTotals(totals, elementosDOM) {
  elementosDOM.ingresosTotalDOM.textContent = totals.ingresos.toFixed(2) + " €";
  elementosDOM.gastosTotalDOM.textContent = totals.gastos.toFixed(2) + " €";
  elementosDOM.ahorroTotalDOM.textContent = totals.ahorro.toFixed(2) + " €";
  elementosDOM.saldoTotalDOM.textContent = totals.saldo.toFixed(2) + " €";
}

export function renderTransactionRow(transaction, historialDOM) {
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${transaction.descripcion}</td>
    <td>${transaction.monto.toFixed(2)} ${transaction.divisa}</td>
    <td>${transaction.tipo}</td>
    <td>${new Date().toLocaleDateString()}</td>
    <td><button class="btn btn-sm btn-outline-danger">Eliminar</button></td>
  `;
  historialDOM.prepend(fila);
}

export function clearInputs(inputs) {
  inputs.forEach(input => input.value = "");
}

// Modal de ahorro
export function initSavingsModal(btnAhorro, modalAhorro, cerrarModal) {
  btnAhorro.addEventListener("click", () => { modalAhorro.style.display = "flex"; });
  cerrarModal.addEventListener("click", () => { modalAhorro.style.display = "none"; });
  window.addEventListener("click", (e) => { if (e.target === modalAhorro) modalAhorro.style.display = "none"; });
}

// Inicializar tooltips Bootstrap
export function initTooltips() {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(t => new bootstrap.Tooltip(t));
}
