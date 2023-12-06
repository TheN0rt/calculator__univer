export const formatPrice = (price) => {
   if(price === undefined){
      return ''
   }
   
   return format(price.toLocaleString('en-US') + "₽")
}

const format = (sum) => {
   return sum.split(',').join('.')
}

export const genUUID = () => {
   let d = new Date().getTime();
   if (window.performance && typeof window.performance.now === 'function') {
       d += performance.now();
   }
   return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
       const r = (d + Math.random() * 16) % 16 | 0;
       d = Math.floor(d / 16);
       return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
   });
}