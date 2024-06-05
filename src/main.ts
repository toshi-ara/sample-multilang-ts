import * as Lang from "./lang_strings";

type TypeLang = { [key: string]: string };
type TypeStr = { [key: string]: TypeLang };

const langStr: TypeStr = Lang.langStr;
const langDefault = "ja";


// dropbox
const selectLangEl = <HTMLInputElement>document.getElementById("select_lang")!;

// elements with class="multilang"
const langEl = document.querySelectorAll<HTMLElement>(".multilang");


window.onload = () => {
    selectLangEl.addEventListener("change", () => {
        // selected language
        const lang = selectLangEl.value;

        langEl.forEach((elem) => {
            // get each hash with class="multilang"
            const langId = elem["id"];

            if (langId in langStr) {
                // get hash with lang ("ja", "en", ...)
                const hashStr: TypeLang = langStr[langId]
                if (lang in hashStr) {
                    elem.innerHTML = hashStr[lang];
                } else {
                    elem.innerHTML = hashStr[langDefault];
                }
            };
        });
    });
}

