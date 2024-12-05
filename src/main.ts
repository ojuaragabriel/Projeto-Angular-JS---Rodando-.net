import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHotToastConfig } from '@ngxpert/hot-toast';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHotToastConfig(),
    provideHttpClient(),
    ...appConfig.providers,
  ],
})
  .then(() => {
    console.log('Aplicação inicializada com sucesso!');
  })
  .catch((err) => console.error(err));
