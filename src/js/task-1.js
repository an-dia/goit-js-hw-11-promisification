export const delay = ms => {
  let time = ms;
  const promise = new Promise((resolve) => {
    setTimeout(() => {
    resolve(time) 
   }, time) 
  })
  return promise
};


export const logger = time => console.log(`Resolved after ${time}ms`);


