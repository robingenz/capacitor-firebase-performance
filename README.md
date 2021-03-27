<p align="center"><br><img src="https://user-images.githubusercontent.com/236501/85893648-1c92e880-b7a8-11ea-926d-95355b8175c7.png" width="128" height="128" /></p>
<h3 align="center">Firebase Performance</h3>
<p align="center"><strong><code>@robingenz/capacitor-firebase-performance</code></strong></p>
<p align="center">
  Capacitor plugin for Firebase Performance Monitoring. 
</p>

<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2021?style=flat-square" />
  <a href="https://github.com/robingenz/capacitor-firebase-performance/actions?query=workflow%3A%22CI%22"><img src="https://img.shields.io/github/workflow/status/robingenz/capacitor-firebase-performance/CI/main?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@robingenz/capacitor-firebase-performance"><img src="https://img.shields.io/npm/l/@robingenz/capacitor-firebase-performance?style=flat-square" /></a>
<br>
  <a href="https://www.npmjs.com/package/@robingenz/capacitor-firebase-performance"><img src="https://img.shields.io/npm/dw/@robingenz/capacitor-firebase-performance?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@robingenz/capacitor-firebase-performance"><img src="https://img.shields.io/npm/v/@robingenz/capacitor-firebase-performance?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<a href="#contributors-"><img src="https://img.shields.io/badge/all%20contributors-1-orange?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
</p>

## Maintainers

| Maintainer | GitHub                                    | Social                                        |
| ---------- | ----------------------------------------- | --------------------------------------------- |
| Robin Genz | [robingenz](https://github.com/robingenz) | [@robin_genz](https://twitter.com/robin_genz) |

## Installation

```bash
npm install @robingenz/capacitor-firebase-performance
npx cap sync
```

## Configuration

No configuration required for this plugin.

<!-- ## Demo

A working example can be found here: [robingenz/capacitor-plugin-demo](https://github.com/robingenz/capacitor-plugin-demo) -->

## Usage

```typescript
import { FirebasePerformance } from '@robingenz/capacitor-firebase-performance';

// TODO
```

## API

<docgen-index>

* [`startTrace(...)`](#starttrace)
* [`stopTrace(...)`](#stoptrace)
* [`incrementMetric(...)`](#incrementmetric)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### startTrace(...)

```typescript
startTrace(options: StartTraceOptions) => any
```

Starts a trace.

Only available for Android and iOS.

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#starttraceoptions">StartTraceOptions</a></code> |

**Returns:** <code>any</code>

--------------------


### stopTrace(...)

```typescript
stopTrace(options: StopTraceOptions) => any
```

Stops a trace.

Only available for Android and iOS.

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#stoptraceoptions">StopTraceOptions</a></code> |

**Returns:** <code>any</code>

--------------------


### incrementMetric(...)

```typescript
incrementMetric(options: IncrementMetricOptions) => any
```

Atomically increments the metric with the given name for the selected trace by the `incrementBy` value.

Only available for Android and iOS.

| Param         | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`options`** | <code><a href="#incrementmetricoptions">IncrementMetricOptions</a></code> |

**Returns:** <code>any</code>

--------------------


### Interfaces


#### StartTraceOptions

| Prop            | Type                | Description                                                                                                                                                                                     |
| --------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`traceName`** | <code>string</code> | Custom trace name. Names for custom code traces must meet the following requirements: no leading or trailing whitespace, no leading underscore (_) character, and max length is 100 characters. |


#### StopTraceOptions

| Prop            | Type                | Description                                       |
| --------------- | ------------------- | ------------------------------------------------- |
| **`traceName`** | <code>string</code> | Name of the trace that was set with `startTrace`. |


#### IncrementMetricOptions

| Prop              | Type                | Description                                       |
| ----------------- | ------------------- | ------------------------------------------------- |
| **`traceName`**   | <code>string</code> | Name of the trace that was set with `startTrace`. |
| **`metricName`**  | <code>string</code> | Name of the metric to be incremented.             |
| **`incrementBy`** | <code>number</code> | Amount by which the metric has to be incremented. |

</docgen-api>

## Changelog

See [CHANGELOG.md](https://github.com/robingenz/capacitor-firebase-performance/blob/master/CHANGELOG.md).

## License

See [LICENSE](https://github.com/robingenz/capacitor-firebase-performance/blob/master/LICENSE).
