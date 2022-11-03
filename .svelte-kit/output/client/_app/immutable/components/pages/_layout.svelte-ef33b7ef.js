import{G as Ee,S as Wt,i as Yt,s as Jt,e as lt,b as tt,f as O,g as Xt,t as X,d as Zt,h as f,k as Et,H as h,a as St,q as Se,l as Ct,m as p,I as g,c as xt,r as Ce,n as i,J as d,K as xe,L as Mt,v as ke,w as Fe,x as Re,y as $e,o as Oe,M as De,N as Me,O as Pe,P as Le}from"../../chunks/singletons-bb028f6e.js";import{f as Ge,g as Ne}from"../../chunks/stores-9ceea556.js";import{r as nt,_ as ut,C as ft,E as Qt,a as ht,F as te,o as qe,L as je,g as ee,i as Ue,b as Be,d as Ve,c as Pt,e as ze,v as He,f as Ke,h as We,j as Ye,k as Je}from"../../chunks/index-6bd8d405-d2aa026e.js";var Xe="firebase",Ze="9.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nt(Xe,Ze,"app");const ne="@firebase/installations",Ft="0.5.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=1e4,ae=`w:${Ft}`,ie="FIS_v2",Qe="https://firebaseinstallations.googleapis.com/v1",tn=60*60*1e3,en="installations",nn="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},j=new Qt(en,nn,rn);function oe(t){return t instanceof te&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se({projectId:t}){return`${Qe}/projects/${t}/installations`}function ce(t){return{token:t.token,requestStatus:2,expiresIn:on(t.expiresIn),creationTime:Date.now()}}async function le(t,e){const r=(await e.json()).error;return j.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ue({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function an(t,{refreshToken:e}){const n=ue(t);return n.append("Authorization",sn(e)),n}async function fe(t){const e=await t();return e.status>=500&&e.status<600?t():e}function on(t){return Number(t.replace("s","000"))}function sn(t){return`${ie} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=se(t),a=ue(t),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&a.append("x-firebase-client",u)}const s={fid:n,authVersion:ie,appId:t.appId,sdkVersion:ae},c={method:"POST",headers:a,body:JSON.stringify(s)},l=await fe(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:ce(u.authToken)}}else throw await le("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=/^[cdef][\w-]{21}$/,kt="";function fn(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=dn(t);return un.test(n)?n:kt}catch{return kt}}function dn(t){return ln(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=new Map;function he(t,e){const n=gt(t);ge(n,e),pn(n,e)}function ge(t,e){const n=pe.get(t);if(!!n)for(const r of n)r(e)}function pn(t,e){const n=hn();n&&n.postMessage({key:t,fid:e}),gn()}let q=null;function hn(){return!q&&"BroadcastChannel"in self&&(q=new BroadcastChannel("[Firebase] FID Change"),q.onmessage=t=>{ge(t.data.key,t.data.fid)}),q}function gn(){pe.size===0&&q&&(q.close(),q=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="firebase-installations-database",yn=1,U="firebase-installations-store";let vt=null;function Rt(){return vt||(vt=qe(mn,yn,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(U)}}})),vt}async function dt(t,e){const n=gt(t),a=(await Rt()).transaction(U,"readwrite"),o=a.objectStore(U),s=await o.get(n);return await o.put(e,n),await a.done,(!s||s.fid!==e.fid)&&he(t,e.fid),e}async function me(t){const e=gt(t),r=(await Rt()).transaction(U,"readwrite");await r.objectStore(U).delete(e),await r.done}async function mt(t,e){const n=gt(t),a=(await Rt()).transaction(U,"readwrite"),o=a.objectStore(U),s=await o.get(n),c=e(s);return c===void 0?await o.delete(n):await o.put(c,n),await a.done,c&&(!s||s.fid!==c.fid)&&he(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(t){let e;const n=await mt(t.appConfig,r=>{const a=wn(r),o=In(t,a);return e=o.registrationPromise,o.installationEntry});return n.fid===kt?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function wn(t){const e=t||{fid:fn(),registrationStatus:0};return ye(e)}function In(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(j.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=_n(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bn(t)}:{installationEntry:e}}async function _n(t,e){try{const n=await cn(t,e);return dt(t.appConfig,n)}catch(n){throw oe(n)&&n.customData.serverCode===409?await me(t.appConfig):await dt(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function bn(t){let e=await Lt(t.appConfig);for(;e.registrationStatus===1;)await de(100),e=await Lt(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await $t(t);return r||n}return e}function Lt(t){return mt(t,e=>{if(!e)throw j.create("installation-not-found");return ye(e)})}function ye(t){return vn(t)?{fid:t.fid,registrationStatus:0}:t}function vn(t){return t.registrationStatus===1&&t.registrationTime+re<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn({appConfig:t,heartbeatServiceProvider:e},n){const r=An(t,n),a=an(t,n),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&a.append("x-firebase-client",u)}const s={installation:{sdkVersion:ae,appId:t.appId}},c={method:"POST",headers:a,body:JSON.stringify(s)},l=await fe(()=>fetch(r,c));if(l.ok){const u=await l.json();return ce(u)}else throw await le("Generate Auth Token",l)}function An(t,{fid:e}){return`${se(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(t,e=!1){let n;const r=await mt(t.appConfig,o=>{if(!we(o))throw j.create("not-registered");const s=o.authToken;if(!e&&Cn(s))return o;if(s.requestStatus===1)return n=En(t,e),o;{if(!navigator.onLine)throw j.create("app-offline");const c=kn(o);return n=Sn(t,c),c}});return n?await n:r.authToken}async function En(t,e){let n=await Gt(t.appConfig);for(;n.authToken.requestStatus===1;)await de(100),n=await Gt(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ot(t,e):r}function Gt(t){return mt(t,e=>{if(!we(e))throw j.create("not-registered");const n=e.authToken;return Fn(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Sn(t,e){try{const n=await Tn(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await dt(t.appConfig,r),n}catch(n){if(oe(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await me(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await dt(t.appConfig,r)}throw n}}function we(t){return t!==void 0&&t.registrationStatus===2}function Cn(t){return t.requestStatus===2&&!xn(t)}function xn(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+tn}function kn(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Fn(t){return t.requestStatus===1&&t.requestTime+re<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(t){const e=t,{installationEntry:n,registrationPromise:r}=await $t(e);return r?r.catch(console.error):Ot(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $n(t,e=!1){const n=t;return await On(n),(await Ot(n,e)).token}async function On(t){const{registrationPromise:e}=await $t(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t){if(!t||!t.options)throw Tt("App Configuration");if(!t.name)throw Tt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Tt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Tt(t){return j.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="installations",Mn="installations-internal",Pn=t=>{const e=t.getProvider("app").getImmediate(),n=Dn(e),r=ht(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Ln=t=>{const e=t.getProvider("app").getImmediate(),n=ht(e,Ie).getImmediate();return{getId:()=>Rn(n),getToken:a=>$n(n,a)}};function Gn(){ut(new ft(Ie,Pn,"PUBLIC")),ut(new ft(Mn,Ln,"PRIVATE"))}Gn();nt(ne,Ft);nt(ne,Ft,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="analytics",Nn="firebase_id",qn="origin",jn=60*1e3,Un="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_e="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=new je("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Bn(t,e){const n=document.createElement("script");n.src=`${_e}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Vn(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function zn(t,e,n,r,a,o){const s=r[a];try{if(s)await e[s];else{const l=(await be(n)).find(u=>u.measurementId===a);l&&await e[l.appId]}}catch(c){T.error(c)}t("config",a,o)}async function Hn(t,e,n,r,a){try{let o=[];if(a&&a.send_to){let s=a.send_to;Array.isArray(s)||(s=[s]);const c=await be(n);for(const l of s){const u=c.find(w=>w.measurementId===l),y=u&&e[u.appId];if(y)o.push(y);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,a||{})}catch(o){T.error(o)}}function Kn(t,e,n,r){async function a(o,s,c){try{o==="event"?await Hn(t,e,n,s,c):o==="config"?await zn(t,e,n,r,s,c):o==="consent"?t("consent","update",c):t("set",s)}catch(l){T.error(l)}}return a}function Wn(t,e,n,r,a){let o=function(...s){window[r].push(arguments)};return window[a]&&typeof window[a]=="function"&&(o=window[a]),window[a]=Kn(o,t,e,n),{gtagCore:o,wrappedGtag:window[a]}}function Yn(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(_e))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},A=new Qt("analytics","Analytics",Jn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=30,Zn=1e3;class Qn{constructor(e={},n=Zn){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ve=new Qn;function tr(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function er(t){var e;const{appId:n,apiKey:r}=t,a={method:"GET",headers:tr(r)},o=Un.replace("{app-id}",n),s=await fetch(o,a);if(s.status!==200&&s.status!==304){let c="";try{const l=await s.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw A.create("config-fetch-failed",{httpStatus:s.status,responseMessage:c})}return s.json()}async function nr(t,e=ve,n){const{appId:r,apiKey:a,measurementId:o}=t.options;if(!r)throw A.create("no-app-id");if(!a){if(o)return{measurementId:o,appId:r};throw A.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new ir;return setTimeout(async()=>{c.abort()},n!==void 0?n:jn),Te({appId:r,apiKey:a,measurementId:o},s,c,e)}async function Te(t,{throttleEndTimeMillis:e,backoffCount:n},r,a=ve){var o,s;const{appId:c,measurementId:l}=t;try{await rr(r,e)}catch(u){if(l)return T.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(o=u)===null||o===void 0?void 0:o.message}]`),{appId:c,measurementId:l};throw u}try{const u=await er(t);return a.deleteThrottleMetadata(c),u}catch(u){const y=u;if(!ar(y)){if(a.deleteThrottleMetadata(c),l)return T.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:c,measurementId:l};throw u}const w=Number((s=y==null?void 0:y.customData)===null||s===void 0?void 0:s.httpStatus)===503?Pt(n,a.intervalMillis,Xn):Pt(n,a.intervalMillis),E={throttleEndTimeMillis:Date.now()+w,backoffCount:n+1};return a.setThrottleMetadata(c,E),T.debug(`Calling attemptFetch again in ${w} millis`),Te(t,E,r,a)}}function rr(t,e){return new Promise((n,r)=>{const a=Math.max(e-Date.now(),0),o=setTimeout(n,a);t.addEventListener(()=>{clearTimeout(o),r(A.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ar(t){if(!(t instanceof te)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ir{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function or(t,e,n,r,a){if(a&&a.global){t("event",n,r);return}else{const o=await e,s=Object.assign(Object.assign({},r),{send_to:o});t("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(){var t;if(ze())try{await He()}catch(e){return T.warn(A.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return T.warn(A.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function cr(t,e,n,r,a,o,s){var c;const l=nr(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&T.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>T.error(m)),e.push(l);const u=sr().then(m=>{if(m)return r.getId()}),[y,w]=await Promise.all([l,u]);Yn()||Bn(o,y.measurementId),a("js",new Date);const E=(c=s==null?void 0:s.config)!==null&&c!==void 0?c:{};return E[qn]="firebase",E.update=!0,w!=null&&(E[Nn]=w),a("config",y.measurementId,E),y.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this.app=e}_delete(){return delete et[this.app.options.appId],Promise.resolve()}}let et={},Nt=[];const qt={};let At="dataLayer",ur="gtag",jt,Ae,Ut=!1;function fr(){const t=[];if(Ue()&&t.push("This is a browser extension environment."),Ke()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,a)=>`(${a+1}) ${r}`).join(" "),n=A.create("invalid-analytics-context",{errorInfo:e});T.warn(n.message)}}function dr(t,e,n){fr();const r=t.options.appId;if(!r)throw A.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)T.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw A.create("no-api-key");if(et[r]!=null)throw A.create("already-exists",{id:r});if(!Ut){Vn(At);const{wrappedGtag:o,gtagCore:s}=Wn(et,Nt,qt,At,ur);Ae=o,jt=s,Ut=!0}return et[r]=cr(t,Nt,qt,e,jt,At,n),new lr(t)}function pr(t=Be()){t=ee(t);const e=ht(t,pt);return e.isInitialized()?e.getImmediate():hr(t)}function hr(t,e={}){const n=ht(t,pt);if(n.isInitialized()){const a=n.getImmediate();if(Ve(e,n.getOptions()))return a;throw A.create("already-initialized")}return n.initialize({options:e})}function gr(t,e,n,r){t=ee(t),or(Ae,et[t.app.options.appId],e,n,r).catch(a=>T.error(a))}const Bt="@firebase/analytics",Vt="0.8.0";function mr(){ut(new ft(pt,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return dr(r,a,n)},"PUBLIC")),ut(new ft("analytics-internal",t,"PRIVATE")),nt(Bt,Vt),nt(Bt,Vt,"esm2017");function t(e){try{const n=e.getProvider(pt).getImmediate();return{logEvent:(r,a,o)=>gr(n,r,a,o)}}catch(n){throw A.create("interop-component-reg-failed",{reason:n})}}}mr();function zt(t,{delay:e=0,duration:n=400,easing:r=Ee}={}){const a=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:o=>`opacity: ${o*a}`}}function Ht(t){let e,n,r,a,o,s,c,l,u,y,w,E,m,B,S,C,x,k,I,Z,V,z,_,H,D,M,b,K,P,L,v,W,G,N,yt,Y,wt,F,rt;return{c(){e=Et("main"),n=h("svg"),r=h("rect"),a=h("rect"),o=h("defs"),s=h("linearGradient"),c=h("stop"),l=h("stop"),u=h("linearGradient"),y=h("stop"),w=h("stop"),E=St(),m=h("svg"),B=h("path"),S=h("rect"),C=h("rect"),x=h("rect"),k=h("defs"),I=h("linearGradient"),Z=h("stop"),V=h("stop"),z=h("stop"),_=h("linearGradient"),H=h("stop"),D=h("stop"),M=h("stop"),b=h("linearGradient"),K=h("stop"),P=h("stop"),L=h("stop"),v=h("linearGradient"),W=h("stop"),G=h("stop"),N=h("stop"),yt=St(),Y=Et("h3"),wt=Se("Carregando..."),this.h()},l(R){e=Ct(R,"MAIN",{class:!0});var $=p(e);n=g($,"svg",{xmlns:!0,width:!0,height:!0,class:!0,viewBox:!0,fill:!0});var at=p(n);r=g(at,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0,transform:!0,fill:!0}),p(r).forEach(f),a=g(at,"rect",{y:!0,width:!0,height:!0,rx:!0,transform:!0,fill:!0}),p(a).forEach(f),o=g(at,"defs",{});var It=p(o);s=g(It,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var _t=p(s);c=g(_t,"stop",{"stop-color":!0}),p(c).forEach(f),l=g(_t,"stop",{offset:!0,"stop-color":!0}),p(l).forEach(f),_t.forEach(f),u=g(It,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var bt=p(u);y=g(bt,"stop",{"stop-color":!0}),p(y).forEach(f),w=g(bt,"stop",{offset:!0,"stop-color":!0}),p(w).forEach(f),bt.forEach(f),It.forEach(f),at.forEach(f),E=xt($),m=g($,"svg",{xmlns:!0,width:!0,height:!0,class:!0,viewBox:!0,fill:!0});var J=p(m);B=g(J,"path",{d:!0,fill:!0}),p(B).forEach(f),S=g(J,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0,transform:!0,fill:!0}),p(S).forEach(f),C=g(J,"rect",{width:!0,height:!0,rx:!0,transform:!0,fill:!0}),p(C).forEach(f),x=g(J,"rect",{width:!0,height:!0,rx:!0,transform:!0,fill:!0}),p(x).forEach(f),k=g(J,"defs",{});var Q=p(k);I=g(Q,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var it=p(I);Z=g(it,"stop",{"stop-color":!0}),p(Z).forEach(f),V=g(it,"stop",{offset:!0,"stop-color":!0}),p(V).forEach(f),z=g(it,"stop",{offset:!0,"stop-color":!0}),p(z).forEach(f),it.forEach(f),_=g(Q,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var ot=p(_);H=g(ot,"stop",{"stop-color":!0,"stop-opacity":!0}),p(H).forEach(f),D=g(ot,"stop",{offset:!0,"stop-color":!0,"stop-opacity":!0}),p(D).forEach(f),M=g(ot,"stop",{offset:!0,"stop-color":!0,"stop-opacity":!0}),p(M).forEach(f),ot.forEach(f),b=g(Q,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var st=p(b);K=g(st,"stop",{"stop-color":!0,"stop-opacity":!0}),p(K).forEach(f),P=g(st,"stop",{offset:!0,"stop-color":!0,"stop-opacity":!0}),p(P).forEach(f),L=g(st,"stop",{offset:!0,"stop-color":!0,"stop-opacity":!0}),p(L).forEach(f),st.forEach(f),v=g(Q,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var ct=p(v);W=g(ct,"stop",{"stop-color":!0,"stop-opacity":!0}),p(W).forEach(f),G=g(ct,"stop",{offset:!0,"stop-color":!0,"stop-opacity":!0}),p(G).forEach(f),N=g(ct,"stop",{offset:!0,"stop-color":!0,"stop-opacity":!0}),p(N).forEach(f),ct.forEach(f),Q.forEach(f),J.forEach(f),yt=xt($),Y=Ct($,"H3",{class:!0});var Dt=p(Y);wt=Ce(Dt,"Carregando..."),Dt.forEach(f),$.forEach(f),this.h()},h(){i(r,"x","37.5356"),i(r,"y","10.9951"),i(r,"width","52"),i(r,"height","17"),i(r,"rx","8.5"),i(r,"transform","rotate(-12.2071 37.5356 10.9951)"),i(r,"fill","url(#paint0_linear_175_70)"),i(a,"y","31.3931"),i(a,"width","142"),i(a,"height","17"),i(a,"rx","8.5"),i(a,"transform","rotate(-12.2071 0 31.3931)"),i(a,"fill","url(#paint1_linear_175_70)"),i(c,"stop-color","#CECECE"),i(l,"offset","1"),i(l,"stop-color","#7F7F7F"),i(s,"id","paint0_linear_175_70"),i(s,"x1","63.5356"),i(s,"y1","10.9951"),i(s,"x2","63.5356"),i(s,"y2","27.9951"),i(s,"gradientUnits","userSpaceOnUse"),i(y,"stop-color","#AFB3B0"),i(w,"offset","1"),i(w,"stop-color","#747474"),i(u,"id","paint1_linear_175_70"),i(u,"x1","71"),i(u,"y1","31.3931"),i(u,"x2","71"),i(u,"y2","48.3931"),i(u,"gradientUnits","userSpaceOnUse"),i(n,"xmlns","http://www.w3.org/2000/svg"),i(n,"width","143"),i(n,"height","49"),i(n,"class","svg-1 svelte-snii0w"),i(n,"viewBox","0 0 143 49"),i(n,"fill","none"),i(B,"d","M1.98347 14.7343C0.933672 6.93585 6.99842 0 14.8673 0H120.085C127.971 0 134.04 6.96343 132.964 14.7749L115.047 144.775C114.16 151.208 108.663 156 102.169 156H32.3673C25.8579 156 20.3519 151.186 19.4835 144.734L1.98347 14.7343Z"),i(B,"fill","url(#paint0_linear_178_79)"),i(S,"x","16"),i(S,"y","21.3774"),i(S,"width","17.3686"),i(S,"height","95.1972"),i(S,"rx","8.68429"),i(S,"transform","rotate(-7.86739 16 21.3774)"),i(S,"fill","url(#paint1_linear_178_79)"),i(C,"width","17.3686"),i(C,"height","115.82"),i(C,"rx","8.68429"),i(C,"transform","matrix(-0.990588 -0.136881 -0.136881 0.990588 120.236 21.3774)"),i(C,"fill","url(#paint2_linear_178_79)"),i(x,"width","17.3686"),i(x,"height","95.1972"),i(x,"rx","8.68429"),i(x,"transform","matrix(0.99934 -0.036312 -0.036312 -0.99934 60.7339 112.481)"),i(x,"fill","url(#paint3_linear_178_79)"),i(Z,"stop-color","#AFB3B0"),i(V,"offset","0.826394"),i(V,"stop-color","#878787"),i(z,"offset","1"),i(z,"stop-color","#747474"),i(I,"id","paint0_linear_178_79"),i(I,"x1","50.5"),i(I,"y1","1.40324e-06"),i(I,"x2","102"),i(I,"y2","151.5"),i(I,"gradientUnits","userSpaceOnUse"),i(H,"stop-color","#747474"),i(H,"stop-opacity","0.29"),i(D,"offset","0.50868"),i(D,"stop-color","#7F7F7F"),i(D,"stop-opacity","0.17"),i(M,"offset","1"),i(M,"stop-color","#747474"),i(M,"stop-opacity","0.33"),i(_,"id","paint1_linear_178_79"),i(_,"x1","24.6843"),i(_,"y1","21.3774"),i(_,"x2","24.2136"),i(_,"y2","115.355"),i(_,"gradientUnits","userSpaceOnUse"),i(K,"stop-color","#747474"),i(K,"stop-opacity","0.29"),i(P,"offset","0.50868"),i(P,"stop-color","#7F7F7F"),i(P,"stop-opacity","0.17"),i(L,"offset","1"),i(L,"stop-color","#747474"),i(L,"stop-opacity","0.33"),i(b,"id","paint2_linear_178_79"),i(b,"x1","8.68429"),i(b,"y1","0"),i(b,"x2","7.9876"),i(b,"y2","114.334"),i(b,"gradientUnits","userSpaceOnUse"),i(W,"stop-color","#747474"),i(W,"stop-opacity","0.29"),i(G,"offset","0.50868"),i(G,"stop-color","#7F7F7F"),i(G,"stop-opacity","0.17"),i(N,"offset","1"),i(N,"stop-color","#747474"),i(N,"stop-opacity","0.33"),i(v,"id","paint3_linear_178_79"),i(v,"x1","8.68429"),i(v,"y1","0"),i(v,"x2","8.21361"),i(v,"y2","93.9774"),i(v,"gradientUnits","userSpaceOnUse"),i(m,"xmlns","http://www.w3.org/2000/svg"),i(m,"width","135"),i(m,"height","156"),i(m,"class","svg2 svelte-snii0w"),i(m,"viewBox","0 0 135 156"),i(m,"fill","none"),i(Y,"class","svelte-snii0w"),i(e,"class","loading svelte-snii0w")},m(R,$){tt(R,e,$),d(e,n),d(n,r),d(n,a),d(n,o),d(o,s),d(s,c),d(s,l),d(o,u),d(u,y),d(u,w),d(e,E),d(e,m),d(m,B),d(m,S),d(m,C),d(m,x),d(m,k),d(k,I),d(I,Z),d(I,V),d(I,z),d(k,_),d(_,H),d(_,D),d(_,M),d(k,b),d(b,K),d(b,P),d(b,L),d(k,v),d(v,W),d(v,G),d(v,N),d(e,yt),d(e,Y),d(Y,wt),rt=!0},i(R){rt||(xe(()=>{F||(F=Mt(e,zt,{duration:200},!0)),F.run(1)}),rt=!0)},o(R){F||(F=Mt(e,zt,{duration:200},!1)),F.run(0),rt=!1},d(R){R&&f(e),R&&F&&F.end()}}}function yr(t){let e,n,r=t[0]&&Ht();return{c(){r&&r.c(),e=lt()},l(a){r&&r.l(a),e=lt()},m(a,o){r&&r.m(a,o),tt(a,e,o),n=!0},p(a,[o]){a[0]?r?o&1&&O(r,1):(r=Ht(),r.c(),O(r,1),r.m(e.parentNode,e)):r&&(Xt(),X(r,1,1,()=>{r=null}),Zt())},i(a){n||(O(r),n=!0)},o(a){X(r),n=!1},d(a){r&&r.d(a),a&&f(e)}}}function wr(t,e,n){let{isLoading:r=!1}=e;return t.$$set=a=>{"isLoading"in a&&n(0,r=a.isLoading)},[r]}class Ir extends Wt{constructor(e){super(),Yt(this,e,wr,yr,Jt,{isLoading:0})}}function Kt(t){let e;const n=t[2].default,r=De(n,t,t[1],null);return{c(){r&&r.c()},l(a){r&&r.l(a)},m(a,o){r&&r.m(a,o),e=!0},p(a,o){r&&r.p&&(!e||o&2)&&Me(r,n,a,a[1],e?Le(n,a[1],o,null):Pe(a[1]),null)},i(a){e||(O(r,a),e=!0)},o(a){X(r,a),e=!1},d(a){r&&r.d(a)}}}function _r(t){let e,n,r,a,o;n=new Ir({props:{isLoading:t[0]}});let s=!t[0]&&Kt(t);return{c(){e=Et("main"),ke(n.$$.fragment),r=St(),s&&s.c(),a=lt()},l(c){e=Ct(c,"MAIN",{});var l=p(e);Fe(n.$$.fragment,l),l.forEach(f),r=xt(c),s&&s.l(c),a=lt()},m(c,l){tt(c,e,l),Re(n,e,null),tt(c,r,l),s&&s.m(c,l),tt(c,a,l),o=!0},p(c,[l]){const u={};l&1&&(u.isLoading=c[0]),n.$set(u),c[0]?s&&(Xt(),X(s,1,1,()=>{s=null}),Zt()):s?(s.p(c,l),l&1&&O(s,1)):(s=Kt(c),s.c(),O(s,1),s.m(a.parentNode,a))},i(c){o||(O(n.$$.fragment,c),O(s),o=!0)},o(c){X(n.$$.fragment,c),X(s),o=!1},d(c){c&&f(e),$e(n),c&&f(r),s&&s.d(c),c&&f(a)}}}function br(t,e,n){let{$$slots:r={},$$scope:a}=e,o=!0;const s=We(Ge),c=Ye();return Oe(async()=>{n(0,o=!1),pr(s),Je(c,l=>{l||Ne("/login")})}),t.$$set=l=>{"$$scope"in l&&n(1,a=l.$$scope)},[o,a,r]}class Er extends Wt{constructor(e){super(),Yt(this,e,br,_r,Jt,{})}}export{Er as default};
