export interface BuenosDiasResponse {
  message: string;
  timestamp: string;
}

export function getBuenosDias(): BuenosDiasResponse {
  return {
    message: 'Buenos dias!!',
    timestamp: new Date().toISOString(),
  };
}
