import * as f from 'f';
export default (key, value = '', descriptor = {}) => (document.cookie = `${key}=${value};domain=${f.or(descriptor.domain, '')};path=${f.or(descriptor.path, '/')};expires=${f.or(descriptor.expires, '')}`);
