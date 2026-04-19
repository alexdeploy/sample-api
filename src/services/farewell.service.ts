export interface Farewell {
  message: string;
  timestamp: string;
}

export function getFarewell(): Farewell {
  return {
    message: 'Goodbye, world!',
    timestamp: new Date().toISOString(),
  };
}
