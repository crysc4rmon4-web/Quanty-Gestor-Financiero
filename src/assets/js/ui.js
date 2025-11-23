// ui.js
// --------------------------------------------------
// Funciones que manipulan el DOM: render, limpieza de inputs, modales y tooltips.
// Se añadió manejo para cerrar el consejo (#tipsAhorro) cuando el usuario pulsa el
// botón de cierre dentro del alert, usando la API de Bootstrap Collapse.
// --------------------------------------------------

export function renderTotals(totals, elementosDOM) {
  elementosDOM.ingresosTotalDOM.textContent = totals.ingresos.toFixed(2) + " €";
  elementosDOM.gastosTotalDOM.textContent = totals.gastos.toFixed(2) + " €";
  elementosDOM.ahorroTotalDOM.textContent = totals.ahorro.toFixed(2) + " €";
  elementosDOM.saldoTotalDOM.textContent = totals.saldo.toFixed(2) + " €";
}

// Renderiza una fila en el historial. Añade handler de eliminar que remueve la fila.
// (Si quieres que eliminar revierta totales, habría que manejarlo en finance.)
export function renderTransactionRow(transaction, historialDOM) {
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${transaction.descripcion}</td>
    <td>${transaction.monto.toFixed(2)} ${transaction.divisa}</td>
    <td>${transaction.tipo}</td>
    <td>${new Date().toLocaleDateString()}</td>
    <td><button class="btn btn-sm btn-outline-danger btn-eliminar">Eliminar</button></td>
  `;

  // Handler básico: elimina la fila del DOM.
  // (Si quieres que eliminar actualice totales, implementamos función de revertir en finance.)
  fila.querySelector('.btn-eliminar').addEventListener('click', () => {
    fila.remove();
  });

  historialDOM.prepend(fila);
}

// Limpia inputs. Si se pasa `totals` y `ahorroInput`, actualiza el input de ahorro con el ahorro automático.
export function clearInputs(inputs, totals = null, ahorroInput = null) {
  inputs.forEach(input => {
    // Si el input es un select, restauramos a su primer valor vacío si existe
    if (input.tagName === "SELECT") input.selectedIndex = 0;
    else input.value = "";
  });

  if (ahorroInput && totals) {
    // Mostramos el ahorro automático (10% de ingresos) al usuario tras registrar transacción
    if (typeof totals.ahorroAutomatico !== "undefined") {
      ahorroInput.value = totals.ahorroAutomatico.toFixed(2);
    } else {
      ahorroInput.value = (0).toFixed(2);
    }
  }
}

// Inicializa el modal personalizado de ahorro (el modal custom con id modalAhorroConsejo).
export function initSavingsModal(btnAhorro, modalAhorro, cerrarModal) {
  if (!btnAhorro || !modalAhorro || !cerrarModal) return;
  btnAhorro.addEventListener("click", () => { modalAhorro.style.display = "flex"; });
  cerrarModal.addEventListener("click", () => { modalAhorro.style.display = "none"; });
  window.addEventListener("click", (e) => { if (e.target === modalAhorro) modalAhorro.style.display = "none"; });
}

// Inicializa tooltips Bootstrap y además añade manejo para cerrar el panel de consejos
// (porque en tu HTML el alert trae un botón de cierre que originalmente solo elimina el alert,
// nosotros lo hacemos también colapsar el contenedor #tipsAhorro para liberar la UI).
export function initTooltipsAndCollapseClose() {
  // Inicializar tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(t => new bootstrap.Tooltip(t));

  const collapseEl = document.getElementById("tipsAhorro");
  if (!collapseEl) return;

  // Instancia de collapse
  let bsCollapse = bootstrap.Collapse.getInstance(collapseEl);
  if (!bsCollapse) {
    bsCollapse = new bootstrap.Collapse(collapseEl, { toggle: false });
  }

  // Botón cerrar del alert
  const closeBtn = collapseEl.querySelector(".btn-close");
  if (!closeBtn) return;

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Ocultar alert
    const alert = collapseEl.querySelector(".alert");
    if (alert) alert.classList.add("d-none");

    // Ocultar collapse
    bsCollapse.hide();

    // Opcional: limpiar espacio muerto
    collapseEl.style.display = "none";
  });
}