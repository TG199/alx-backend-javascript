export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const returnedValue = mathFunction();
    queue.push(returnedValue);
  } catch (error) {
    queue.push(error);
  }
  queue.push('Guardrail was processed');
  return [queue];
}
