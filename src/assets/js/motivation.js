// ==============================
// motivation.js
// ==============================
// Este módulo devuelve frases motivacionales y consejos aleatorios.
// No manipula el DOM directamente; app.js o ui.js se encargan de actualizarlo.

const frases = [
  "Cada euro cuenta, pero la constancia vale más 💪",
  "Ahorra hoy para disfrutar mañana 🌅",
  "Tu futuro financiero empieza con un clic 🏦",
  "Controlar tus gastos es controlar tu libertad 💼",
  "El mejor momento para empezar fue ayer. El segundo mejor, hoy ⏰",
  "Tu cartera digital, tu tranquilidad 💖",
  "No ahorres lo que te queda después de gastar; gasta lo que te quede después de ahorrar 💡",
  "Pequeños pasos crean grandes logros 🚀",
  "Domina tu dinero, no dejes que él te domine 🔥",
  "Cada decisión cuenta. Haz que sume 📈"
];

const consejos = [
  "💸 Consejo: Reserva siempre al menos un 10% de tus ingresos antes de gastar en otras cosas.",
  "💸 Consejo: Lleva un registro sencillo de tus gastos diarios para tener control total.",
  "💸 Consejo: Revisa tus gastos recurrentes mensualmente y elimina lo innecesario.",
  "💸 Consejo: Prioriza pagar deudas con mayor interés para reducir carga financiera.",
  "💸 Consejo: Automatiza tus ahorros para que no dependan de tu fuerza de voluntad.",
  "💸 Consejo: Invierte tiempo en aprender sobre finanzas personales, no solo dinero.",
  "💸 Consejo: Divide tu dinero en categorías: ahorro, gasto, inversión y emergencias.",
  "💸 Consejo: Evita compras impulsivas y espera 24 horas antes de decidir.",
  "💸 Consejo: Establece metas financieras claras y realistas cada mes.",
  "💸 Consejo: Compara antes de gastar en productos grandes o servicios recurrentes.",
  "💸 Consejo: Aprovecha el interés compuesto reinvirtiendo de manera constante.",
  "💸 Consejo: Crea un fondo de emergencia equivalente a 3-6 meses de gastos.",
  "💸 Consejo: Usa presupuestos flexibles, ajustándolos según tus ingresos.",
  "💸 Consejo: No pongas todos tus ahorros en un solo lugar, diversifica.",
  "💸 Consejo: Aprende a leer y entender tus estados financieros personales.",
  "💸 Consejo: Piensa en compras grandes como inversión en calidad, no solo gasto.",
  "💸 Consejo: Revisa tus metas financieras trimestralmente y ajusta estrategias.",
  "💸 Consejo: Evita endeudarte por consumo innecesario, prioriza tu libertad.",
  "💸 Consejo: Pequeñas acciones diarias suman grandes resultados a largo plazo."
];

export function getRandomPhrase() {
  const idx = Math.floor(Math.random() * frases.length);
  return frases[idx];
}

export function getRandomTip() {
  const idx = Math.floor(Math.random() * consejos.length);
  return consejos[idx];
}
