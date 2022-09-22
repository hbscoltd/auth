import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import localizedFormat from 'dayjs/plugin/localizedFormat'

const defaultTimeZone = 'Asia/Yangon'
const dateTimeFormat = 'YYYY-MM-DD hh:mm A'
const dateFormat = 'DD-MM-YYYY'
const dateFormatYMD = 'YYYY-MM-DD'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(localizedFormat)

export const handleDateFormat = ({
  date,
  isYMD,
}: {
  date: any
  isYMD?: boolean
}) => {
  return dayjs(date)
    .tz(defaultTimeZone)
    .format(isYMD ? dateFormatYMD : dateFormat)
}

export const handleDateTimeFormat = (date: any) => {
  return dayjs(date).tz(defaultTimeZone).format(dateTimeFormat)
}

export const numberFormat = (x: any) => {
  return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '-'
}

export const disableScroll = (e: any) => {
  e.currentTarget.blur()
}

export const handleKeyDown = (event: any) => {
  if (event.key.toLowerCase() === 'enter') {
    const form = event.target.form
    const index = [...form].indexOf(event.target)
    form.elements[index + 1].focus()
    event.preventDefault()
  }
}

export const openUrl = (link: string) => {
  window.open(link, '_blank')
}

export function toFloat(x: any) {
  return x
    ? parseFloat(x)
        .toFixed(3)
        .replace(/\.?0+$/, '')
    : 0
}

export const getNumber = (index: number, skip: number, limit: number) => {
  return index + 1 + skip * limit
}
