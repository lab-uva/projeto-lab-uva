import ptbr from 'date-fns/locale/pt-BR'
import { parse, format, formatDistance } from 'date-fns'

// Dates formatters
const tryToConvertDate = (str: string) => {
  if (!str) {
    return Date.parse('01/01/1900')
  }

  return Date.parse(str) || parse(str, 'yyyy-MM-dd', new Date())
}

export const timeAgoFormat = (strDate: string) => {
  const date = tryToConvertDate(strDate)

  return formatDistance(new Date(), new Date(date), { locale: ptbr })
}

export const dateFormat = (strDate: string): string => {
  const date = tryToConvertDate(strDate)

  return format(date, 'dd/MM/yyyy')
}

export const dateTimeFormat = (strDate: string): string => {
  const date = tryToConvertDate(strDate)

  return format(date, "dd/MM/yyyy 'às' HH:mm")
}
