import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from 'i18n/en.json';


i18n
    .use(initReactI18next)
    .init({    // the translations , manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: {
                    translationEN
                }
            }
        },
        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        } // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    });

export default i18n;
