declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // MY_KV: KVNamespace
      NODE_ENV: "development" | "production";
      NEXT_PUBLIC_TURNSTILE: string;
      BIRTHDAY_DATE: string;
    }
  }
}

export {};
