export const isEnvBrowser = (): boolean => typeof window !== "undefined" && !(window as any).invokeNative;
