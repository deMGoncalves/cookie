import * as f from 'f'
import settings from './settings'

export default function (key, value = '', descriptor = {}) {
  const domain = f.or(descriptor.domain, settings.domain, '')
  const expires = f.or(descriptor.expires, settings.expirespath, '')
  const path = f.or(descriptor.path, settings.path, '/')

  document.cookie = `${key}=${value};domain=${domain};expires=${expires};path=${path}`
}
