import request from './base';

export const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello world!')
    }, 3000);
  }
  );
};

