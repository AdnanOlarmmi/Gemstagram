var e={};(function(t,n){e=n()})(0,(function(){var e=function plugin(e){var t=e.addFilter,n=e.utils;var i=n.Type,a=n.isString,r=n.replaceInString,T=n.guesstimateMimeType,l=n.getExtensionFromFilename,E=n.getFilenameFromURL;var u=function mimeTypeMatchesWildCard(e,t){var n=(/^[^/]+/.exec(e)||[]).pop();var i=t.slice(0,-2);return n===i};var o=function isValidMimeType(e,t){return e.some((function(e){return/\*$/.test(e)?u(t,e):e===t}))};var p=function getItemType(e){var t="";if(a(e)){var n=E(e);var i=l(n);i&&(t=T(i))}else t=e.type;return t};var c=function validateFile(e,t,n){if(0===t.length)return true;var i=p(e);return n?new Promise((function(a,r){n(e,i).then((function(e){o(t,e)?a():r()})).catch(r)})):o(t,i)};var _=function applyMimeTypeMap(e){return function(t){return null!==e[t]&&(e[t]||t)}};t("SET_ATTRIBUTE_TO_OPTION_MAP",(function(e){return Object.assign(e,{accept:"acceptedFileTypes"})}));t("ALLOW_HOPPER_ITEM",(function(e,t){var n=t.query;return!n("GET_ALLOW_FILE_TYPE_VALIDATION")||c(e,n("GET_ACCEPTED_FILE_TYPES"))}));t("LOAD_FILE",(function(e,t){var n=t.query;return new Promise((function(t,i){if(n("GET_ALLOW_FILE_TYPE_VALIDATION")){var a=n("GET_ACCEPTED_FILE_TYPES");var T=n("GET_FILE_VALIDATE_TYPE_DETECT_TYPE");var l=c(e,a,T);var E=function handleRejection(){var e=a.map(_(n("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES_MAP"))).filter((function(e){return false!==e}));var t=e.filter((function(t,n){return e.indexOf(t)===n}));i({status:{main:n("GET_LABEL_FILE_TYPE_NOT_ALLOWED"),sub:r(n("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES"),{allTypes:t.join(", "),allButLastType:t.slice(0,-1).join(", "),lastType:t[e.length-1]})}})};if("boolean"===typeof l)return l?t(e):E();l.then((function(){t(e)})).catch(E)}else t(e)}))}));return{options:{allowFileTypeValidation:[true,i.BOOLEAN],acceptedFileTypes:[[],i.ARRAY],labelFileTypeNotAllowed:["File is of invalid type",i.STRING],fileValidateTypeLabelExpectedTypes:["Expects {allButLastType} or {lastType}",i.STRING],fileValidateTypeLabelExpectedTypesMap:[{},i.OBJECT],fileValidateTypeDetectType:[null,i.FUNCTION]}}};var t="undefined"!==typeof window&&"undefined"!==typeof window.document;t&&document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:e}));return e}));var t=e;export{t as default};

