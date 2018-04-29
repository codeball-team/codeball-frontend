import md5 from 'js-md5';

export default (object = '') => md5(JSON.stringify(object));
