export interface FirebasePerformancePlugin {
  /**
   * Starts a trace.
   * 
   * Only available for Android and iOS.
   */
  startTrace(options: StartTraceOptions): Promise<void>;
  /**
   * Stops a trace.
   * 
   * Only available for Android and iOS.
   */
  stopTrace(options: StopTraceOptions): Promise<void>;
  /**
   * Atomically increments the metric with the given name for the selected trace by the `incrementBy` value.
   * 
   * Only available for Android and iOS.
   */
  incrementMetric(options: IncrementMetricOptions): Promise<void>;
}

export interface StartTraceOptions {
  /**
   * Custom trace name.
   * 
   * Names for custom code traces must meet the following requirements: 
   * no leading or trailing whitespace, no leading underscore (_) character, 
   * and max length is 100 characters.
   */
   traceName: string;
}

export interface StopTraceOptions {
  /**
   * Name of the trace that was set with `startTrace`.
   */
   traceName: string;
}

export interface IncrementMetricOptions {
  /**
   * Name of the trace that was set with `startTrace`.
   */
  traceName: string;
  /**
   * Name of the metric to be incremented.
   */
  metricName: string;
  /**
   * Amount by which the metric has to be incremented.
   * 
   * Default: `1`
   */
  incrementBy?: number;
}
