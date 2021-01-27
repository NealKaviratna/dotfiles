/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";Error.stackTraceLimit=100,process.on("SIGPIPE",()=>{console.error(new Error("Unexpected SIGPIPE"))}),exports.injectNodeModuleLookupPath=function(e){if(!e)throw new Error("Missing injectPath");const r=require("module"),o=require("path").join(__dirname,"../node_modules"),n=r._resolveLookupPaths;r._resolveLookupPaths=function(r,t){const s=n(r,t);if(Array.isArray(s))for(let r=0,n=s.length;r<n;r++)if(s[r]===o){s.splice(r,0,e);break}return s}},exports.removeGlobalNodeModuleLookupPaths=function(){const e=require("module"),r=e.globalPaths,o=e._resolveLookupPaths;e._resolveLookupPaths=function(e,n){const t=o(e,n);let s=0;for(;s<t.length&&t[t.length-1-s]===r[r.length-1-s];)s++;return t.slice(0,t.length-s)}},exports.enableASARSupport=function(e){const r=require("module"),o=require("path");let n=e;n||(n=o.join(__dirname,"../node_modules"));const t=n+".asar",s=r._resolveLookupPaths;r._resolveLookupPaths=function(e,r){const o=s(e,r);if(Array.isArray(o))for(let e=0,r=o.length;e<r;e++)if(o[e]===n){
o.splice(e,0,t);break}return o}},exports.uriFromPath=function(e){let r,o=require("path").resolve(e).replace(/\\/g,"/");return o.length>0&&"/"!==o.charAt(0)&&(o="/"+o),(r="win32"===process.platform&&o.startsWith("//")?encodeURI("file:"+o):encodeURI("file://"+o)).replace(/#/g,"%23")},exports.readFile=function(e){const r=require("fs");return new Promise((function(o,n){r.readFile(e,"utf8",(function(e,r){e?n(e):o(r)}))}))},exports.writeFile=function(e,r){const o=require("fs");return new Promise((function(n,t){o.writeFile(e,r,"utf8",(function(e){e?t(e):n()}))}))},exports.mkdirp=function(e){const r=require("fs");return new Promise((o,n)=>r.mkdir(e,{recursive:!0},r=>r&&"EEXIST"!==r.code?n(r):o(e)))},exports.setupNLS=function(){const e=require("path");let r={availableLanguages:{}};if(process.env.VSCODE_NLS_CONFIG)try{r=JSON.parse(process.env.VSCODE_NLS_CONFIG)}catch(e){}if(r._resolvedLanguagePackCoreLocation){const o=Object.create(null);r.loadBundle=function(n,t,s){const i=o[n];if(i)return void s(void 0,i)
;const c=e.join(r._resolvedLanguagePackCoreLocation,n.replace(/\//g,"!")+".nls.json");exports.readFile(c).then((function(e){const r=JSON.parse(e);o[n]=r,s(void 0,r)})).catch(e=>{try{r._corruptedFile&&exports.writeFile(r._corruptedFile,"corrupted").catch((function(e){console.error(e)}))}finally{s(e,void 0)}})}}return r},exports.configurePortable=function(){const e=require("../product.json"),r=require("path"),o=require("fs"),n=r.dirname(__dirname);function t(){return process.env.VSCODE_DEV?n:"darwin"===process.platform?r.dirname(r.dirname(r.dirname(n))):r.dirname(r.dirname(n))}const s=function(){if(process.env.VSCODE_PORTABLE)return process.env.VSCODE_PORTABLE;if("win32"===process.platform||"linux"===process.platform)return r.join(t(),"data");const o=e.portable||`${e.applicationName}-portable-data`;return r.join(r.dirname(t()),o)}(),i=!("target"in e)&&o.existsSync(s),c=r.join(s,"tmp"),a=i&&o.existsSync(c);return i?process.env.VSCODE_PORTABLE=s:delete process.env.VSCODE_PORTABLE,
a&&("win32"===process.platform?(process.env.TMP=c,process.env.TEMP=c):process.env.TMPDIR=c),{portableDataPath:s,isPortable:i}},exports.avoidMonkeyPatchFromAppInsights=function(){process.env.APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL=!0,global.diagnosticsSource={}};
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/288852d8c26d797974bfb8aed06e1bff9b809223/core/bootstrap.js.map