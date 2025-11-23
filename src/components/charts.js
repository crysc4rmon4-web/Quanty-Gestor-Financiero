// charts.js
// --------------------------------------------------
// Inicializa y actualiza los gráficos Chart.js.
// No toca inputs ni modales.
// --------------------------------------------------

export function initBalanceChart(ctx) {
  const gradientIngresos = ctx.createLinearGradient(0, 0, 400, 0);
  gradientIngresos.addColorStop(0, "#00ff99");
  gradientIngresos.addColorStop(1, "#198754");
  const gradientGastos = ctx.createLinearGradient(0, 0, 400, 0);
  gradientGastos.addColorStop(0, "#ff5c5c");
  gradientGastos.addColorStop(1, "#dc3545");
  const gradientAhorros = ctx.createLinearGradient(0, 0, 400, 0);
  gradientAhorros.addColorStop(0, "#ffd54f");
  gradientAhorros.addColorStop(1, "#ffc107");

  return new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Ingresos", "Gastos", "Ahorros"],
      datasets: [{
        label: "Balance (€)",
        data: [0, 0, 0],
        backgroundColor: [gradientIngresos, gradientGastos, gradientAhorros],
        borderRadius: 6,
        barPercentage: 0.6,
        categoryPercentage: 0.5
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: true, text: "Balance General", font: { size: 18 }, color: "#00ff99" },
        tooltip: {
          enabled: true,
          callbacks: {
            label: ctx => `${ctx.dataset.label}: €${ctx.raw}`
          }
        }
      },
      scales: {
        x: { beginAtZero: true, ticks: { color: "#fff" }, grid: { color: "rgba(255,255,255,0.1)" } },
        y: { ticks: { color: "#fff" }, grid: { display: false } }
      }
    }
  });
}

export function initSavingsChart(ctx) {
  return new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Ahorro", "Restante"],
      datasets: [{
        label: "Progreso de Ahorro",
        data: [0, 100],
        backgroundColor: ["#0dcaf0", "rgba(13,202,240,0.2)"],
        borderWidth: 2,
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      cutout: "70%",
      plugins: {
        legend: { display: false },
        title: { display: true, text: "Progreso de Ahorro", font: { size: 16 }, color: "#0dcaf0" },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              if (ctx.label === "Ahorro") return `Ahorro: €${Number(ctx.raw).toFixed(2)}`;
              return "Restante";
            }
          }
        }
      }
    }
  });
}

export function updateBalanceChart(chart, totals) {
  chart.data.datasets[0].data = [totals.ingresos, totals.gastos, totals.ahorro];
  chart.update();
}

export function updateSavingsChart(chart, totals) {
  // Restante = ingresos - ahorro automático (informativo)
  const restante = Math.max(totals.ingresos - (typeof totals.ahorroAutomatico !== "undefined" ? totals.ahorroAutomatico : totals.ahorro), 0);
  chart.data.datasets[0].data = [totals.ahorro, restante];
  chart.update();
}
