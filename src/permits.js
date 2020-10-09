import router from './router';
import NProgrss from 'nprogress';
import {
  getToken
} from '@/utils/auth';
NProgrss.configure({
  showSpinner: false
});
const whiteList = ['/home'];
router.beforeEach((to, from, next) => {
  NProgrss.start();
  if (to.name) document.title = to.name;
  if (!getToken()) {
    if (whiteList.includes(to.path)) {
      return next()
    } else {
      return next('/home')
    }
  }
  next()
});

router.afterEach((to) => {
  NProgrss.done();
  window.scrollTo(0, 0);
});