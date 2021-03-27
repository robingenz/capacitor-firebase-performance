export interface FirebasePerformancePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
