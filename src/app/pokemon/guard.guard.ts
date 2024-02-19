import { CanActivateFn, Router } from '@angular/router';
import { delay, of } from 'rxjs';

export const guardGuard: CanActivateFn = async (route, state) => {

  switch (new Date().getDay()) {
    case 0:
      const router = new Router();
      await router.navigateByUrl("/notfound");
      return false;
      break
    case 2:
    case 3:
    case 4:
    case 5:
      await of(true).pipe(delay(2000)).toPromise();
      return true;
    case 6:
      await of(true).pipe(delay(5000)).toPromise();
      return true;
    default:
      return true;
  }

};
