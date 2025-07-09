import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { LinearScale,RadarController, Chart, registerables  } from 'chart.js';

Chart.register(LinearScale,RadarController, ...registerables);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
