/**
 * UI strings that live in components rather than in content.json.
 *
 * Section headings, taglines and other editorial copy belong in the content
 * files. This module only covers chrome: button labels, aria labels and small
 * inline labels that every language needs.
 */

import { currentLanguage, type Language } from './language'

type UIStrings = {
  skipToContent: string
  openMenu: string
  closeMenu: string
  hideDetails: string
  showHighlights: string
  email: string
  location: string
  sendEmail: string
  emailSubject: string
  switchLanguage: string
  technologies: string
  allRightsReserved: string
  languageName: Record<Language, string>
}

const strings: Record<Language, UIStrings> = {
  pt: {
    skipToContent: 'Pular para o conteúdo principal',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    hideDetails: 'Ocultar detalhes',
    showHighlights: 'Ver destaques',
    email: 'E-mail',
    location: 'Localização',
    sendEmail: 'Enviar e-mail',
    emailSubject: 'Contato via portfólio',
    switchLanguage: 'Mudar idioma',
    technologies: 'Tecnologias',
    allRightsReserved: 'Todos os direitos reservados.',
    languageName: { pt: 'Português', en: 'English' },
  },
  en: {
    skipToContent: 'Skip to main content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    hideDetails: 'Hide details',
    showHighlights: 'Show highlights',
    email: 'Email',
    location: 'Location',
    sendEmail: 'Send email',
    emailSubject: 'Reaching out from your portfolio',
    switchLanguage: 'Switch language',
    technologies: 'Technologies',
    allRightsReserved: 'All rights reserved.',
    languageName: { pt: 'Português', en: 'English' },
  },
}

export const t: UIStrings = strings[currentLanguage]
