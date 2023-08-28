import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { en, ta } from '../constants/lang.constant'

const resources = {
    en: {
        translation: {
            ...en
        },
    },
    ta: {
        translation: {
            ...ta
        },
    },
};
i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false,
        },
    });
export default i18next;