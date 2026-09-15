import { Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { currentLanguage, setLanguage } from '@/lib/language'
import { t } from '@/lib/uiStrings'

/**
 * Switches the portfolio between Portuguese and English.
 *
 * The label shows the language you would switch *to*, so the button always
 * reads as an action rather than as a status indicator.
 */
export function LanguageToggle() {
  const next = currentLanguage === 'pt' ? 'en' : 'pt'

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(next)}
      aria-label={`${t.switchLanguage}: ${t.languageName[next]}`}
      title={t.languageName[next]}
      className="gap-1.5 px-2.5 font-mono text-xs tracking-wider uppercase"
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      {next.toUpperCase()}
    </Button>
  )
}
