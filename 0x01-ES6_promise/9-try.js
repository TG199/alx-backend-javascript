export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const returnedValue = mathFunction();
    queue.push(returnedValue);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  }
  queue.push('Guardrail was processed');
  return queue;
}
