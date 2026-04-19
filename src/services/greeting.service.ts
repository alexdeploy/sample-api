export interface Greeting {
  message: string;
  timestamp: string;
}

export function getGreeting(name?: string): Greeting {
  return {
    message: `Hello, ${name ?? 'world'}!`,
    timestamp: new Date().toISOString(),
  };
}
