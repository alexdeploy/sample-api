export interface Greeting {
  message: string;
  timestamp: string;
}

export function getGreeting(name?: string, language?: 'en' | 'es'): Greeting {
  const resolvedName = name ?? 'world';
  const greeting = language === 'es' ? 'Hola' : 'Hello';
  return {
    message: `${greeting}, ${resolvedName}!`,
    timestamp: new Date().toISOString(),
  };
}
