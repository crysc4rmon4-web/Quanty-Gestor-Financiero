// motivation.js
// --------------------------------------------------
// Módulo de frases y consejos motivacionales.
// --------------------------------------------------

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
  "Cada decisión cuenta. Haz que sume 📈",
  "Planifica hoy para sonreír mañana 😄",
  "Las metas pequeñas sostenidas superan los impulsos grandes y pasajeros 🧭",
  "Tus finanzas mejoran con hábitos, no con suerte 🍃",
  "Un euro ahorrado es un euro que trabaja por ti 📊",
  "Invierte en hábito: revisa tus gastos semanalmente 🗓️"
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
  "💸 Consejo: Crea un fondo de emergencia equivalente a 3-6 meses de gastos.",
  "💸 Consejo: Aprovecha el interés compuesto reinvirtiendo de manera constante.",
  "💸 Consejo: Usa presupuestos flexibles, ajustándolos según tus ingresos.",
  "💸 Consejo: No pongas todos tus ahorros en un solo lugar, diversifica.",
  "💸 Consejo: Piensa en compras grandes como inversión en calidad, no solo gasto."
];

export function getRandomPhrase() {
  const i = Math.floor(Math.random() * frases.length);
  return frases[i];
}

export function getRandomTip() {
  const i = Math.floor(Math.random() * consejos.length);
  return consejos[i];
}

// Utilidades opcionales para runtime (añadir/quitar)
export function addPhrase(text) {
  if (typeof text !== "string" || !text.trim()) return false;
  frases.push(text.trim());
  return true;
}
export function removePhrase(index) {
  if (typeof index !== "number" || index < 0 || index >= frases.length) return null;
  return frases.splice(index, 1)[0];
}
export function addTip(text) {
  if (typeof text !== "string" || !text.trim()) return false;
  consejos.push(text.trim());
  return true;
}
export function removeTip(index) {
  if (typeof index !== "number" || index < 0 || index >= consejos.length) return null;
  return consejos.splice(index, 1)[0];
}
export function getAllPhrases() { return [...frases]; }
export function getAllTips() { return [...consejos]; }
