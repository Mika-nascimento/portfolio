/**
 * Language selection.
 *
 * The portfolio ships two content files (Portuguese and English). The active
 * language is resolved once, at module load, so the config loader can pick the
 * right JSON before any component renders. Switching language performs a full
 * reload, which keeps the loader simple and avoids threading a translation
 * context through every component.
 *
 * Resolution order: ?lang= query param > saved preference > browser language.
 */

export const LANGUAGES = ['pt', 'en'] as const

export type Language = (typeof LANGUAGES)[number]

export const DEFAULT_LANGUAGE: Language = 'pt'

const STORAGE_KEY = 'portfolio-language'

function isLanguage(value: string | null | undefined): value is Language {
  return value != null && (LANGUAGES as readonly string[]).includes(value)
}

/**
 * Resolve the language to render in. Safe to call during SSR/build: falls back
 * to the default when `window` is unavailable.
 */
export function resolveLanguage(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE

  try {
    const fromQuery = new URLSearchParams(window.location.search).get('lang')
    if (isLanguage(fromQuery)) return fromQuery

    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (isLanguage(saved)) return saved

    const browser = window.navigator.language.toLowerCase()
    if (browser.startsWith('pt')) return 'pt'
    if (browser.startsWith('en')) return 'en'
  } catch {
    // Private browsing or a blocked storage API should never break rendering.
  }

  return DEFAULT_LANGUAGE
}

export const currentLanguage: Language = resolveLanguage()

/**
 * Persist the chosen language and reload so the loader re-reads config.
 */
export function setLanguage(language: Language): void {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(STORAGE_KEY, language)
  } catch {
    // Ignore: the query param below still carries the choice through reload.
  }

  const url = new URL(window.location.href)
  url.searchParams.set('lang', language)
  window.location.href = url.toString()
}
