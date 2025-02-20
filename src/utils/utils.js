import { useMediaQuery } from '@vueuse/core'

export function isMobileUse() {
  return useMediaQuery('(max-width: 768px)')
}
