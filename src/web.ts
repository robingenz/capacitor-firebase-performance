import { WebPlugin } from '@capacitor/core';

import type {
  FirebasePerformancePlugin,
  IncrementMetricOptions,
  StartTraceOptions,
  StopTraceOptions,
} from './definitions';

export class FirebasePerformanceWeb
  extends WebPlugin
  implements FirebasePerformancePlugin {
  public async startTrace(_options: StartTraceOptions): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  public async stopTrace(_options: StopTraceOptions): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  public async incrementMetric(
    _options: IncrementMetricOptions,
  ): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }
}
