import NProgress from "nprogress";

NProgress.configure({ showSpinner: false, easing: "ease", speed: 500 });

export function onStart() {
  NProgress.start();
}

export function onComplete() {
  NProgress.done();
}
