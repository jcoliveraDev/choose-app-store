const linkStore = {
   desktop: 'https://link-desktop.com',
   iphone: 'https://link-iphone.com',
   android: 'https://link-android.com',
   windowsPhone: 'https://link-windows-phone.com',
   other: 'https://link-other.com'
}

const getMobileOS = link => {
   const ua = navigator.userAgent;
   if(/iPad|iPhone|iPod/.test(ua)){
      link.setAttribute('href', linkStore.iphone);
   }else if(/android/i.test(ua)){
      link.setAttribute('href', linkStore.android);
   }else if (/Windows Phone/i.test(ua)){
      link.setAttribute('href', linkStore.windowsPhone);
   }else{
      link.setAttribute('href', linkStore.other);
   }
}

const readyApp = () => {
   if (innerWidth < 768) {
      const ctas = document.querySelectorAll('a[data-set-link="true"]');
      ctas.forEach( cta => {
         getMobileOS(cta);
      });
   }
}

globalThis.addEventListener('DOMContentLoaded', readyApp);





