export function generateJoinCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    if (i === 4) result += '-'; // Optional hyphen for readability: XXXX-XXXX
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// If user strictly wants 8 chars without hyphen:
export function generateSimpleJoinCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
