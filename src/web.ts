import { WebPlugin } from '@capacitor/core';

import type { FirebasePerformancePlugin } from './definitions';

export class FirebasePerformanceWeb extends WebPlugin implements FirebasePerformancePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
