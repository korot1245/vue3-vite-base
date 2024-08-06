import ru from "./ru"
import { NumberFormatRU } from "./numberFormats"
import { DateTimeRu } from "./dateTimeFormats"
import { createI18n } from "vue-i18n"

type MessageSchema = typeof ru
type NumberSchema = typeof NumberFormatRU
type DateTimeFormat = typeof DateTimeRu

const i18n = createI18n<{
    message: MessageSchema,
    number: NumberSchema,
    datetime: DateTimeFormat
}, 'ru'>({
    locale: 'ru',
    fallbackLocale: 'ru',
    numberFormats: {
        //@ts-ignore
        ru: NumberFormatRU
    },
    legacy: false,
    datetimeFormats: {
        ru: DateTimeRu
    },
    messages: {
        ru
    }
})

export { i18n }