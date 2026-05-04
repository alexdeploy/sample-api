export interface PruebaResponse {
  message: string;
  timestamp: string;
}

export function getPrueba(message?: string): PruebaResponse {
  return {
    message: message ?? 'esto es una prueba',
    timestamp: new Date().toISOString(),
  };
}
