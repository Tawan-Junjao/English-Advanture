const VERSION="5.0.0";const WORDS=[{"word": "apple", "emoji": "🍎", "letter": "A", "thai": "แอป-เพิล"}, {"word": "ant", "emoji": "🐜", "letter": "A", "thai": "แอนท์"}, {"word": "alligator", "emoji": "🐊", "letter": "A", "thai": "แอล-ลิ-เก-เทอร์"}, {"word": "bear", "emoji": "🐻", "letter": "B", "thai": "แบร์"}, {"word": "box", "emoji": "📦", "letter": "B", "thai": "บ็อกซ์"}, {"word": "bee", "emoji": "🐝", "letter": "B", "thai": "บี"}, {"word": "cat", "emoji": "🐱", "letter": "C", "thai": "แคท"}, {"word": "car", "emoji": "🚗", "letter": "C", "thai": "คาร์"}, {"word": "cot", "emoji": "🛏️", "letter": "C", "thai": "ค็อท"}, {"word": "dog", "emoji": "🐶", "letter": "D", "thai": "ด็อก"}, {"word": "dad", "emoji": "👨", "letter": "D", "thai": "แดด"}, {"word": "door", "emoji": "🚪", "letter": "D", "thai": "ดอร์"}, {"word": "elephant", "emoji": "🐘", "letter": "E", "thai": "เอล-ละ-เฟินท์"}, {"word": "egg", "emoji": "🥚", "letter": "E", "thai": "เอ็ก"}, {"word": "eight", "emoji": "8️⃣", "letter": "E", "thai": "เอท"}, {"word": "fox", "emoji": "🦊", "letter": "F", "thai": "ฟ็อกซ์"}, {"word": "fish", "emoji": "🐟", "letter": "F", "thai": "ฟิช"}, {"word": "fan", "emoji": "🌀", "letter": "F", "thai": "แฟน"}, {"word": "girl", "emoji": "👧", "letter": "G", "thai": "เกิร์ล"}, {"word": "goat", "emoji": "🐐", "letter": "G", "thai": "โกท"}, {"word": "gift", "emoji": "🎁", "letter": "G", "thai": "กิฟท์"}, {"word": "hat", "emoji": "👒", "letter": "H", "thai": "แฮท"}, {"word": "horse", "emoji": "🐴", "letter": "H", "thai": "ฮอร์ส"}, {"word": "hand", "emoji": "✋", "letter": "H", "thai": "แฮนด์"}, {"word": "insect", "emoji": "🦗", "letter": "I", "thai": "อิน-เซ็กท์"}, {"word": "iguana", "emoji": "🦎", "letter": "I", "thai": "อิ-กวา-นะ"}, {"word": "igloo", "emoji": "🧊", "letter": "I", "thai": "อิก-ลู"}, {"word": "jam", "emoji": "🍓", "letter": "J", "thai": "แจม"}, {"word": "jet", "emoji": "✈️", "letter": "J", "thai": "เจ็ต"}, {"word": "juice", "emoji": "🧃", "letter": "J", "thai": "จูซ"}, {"word": "king", "emoji": "🤴", "letter": "K", "thai": "คิง"}, {"word": "key", "emoji": "🔑", "letter": "K", "thai": "คี"}, {"word": "koala", "emoji": "🐨", "letter": "K", "thai": "โค-อา-ละ"}, {"word": "lion", "emoji": "🦁", "letter": "L", "thai": "ไล-อัน"}, {"word": "lemon", "emoji": "🍋", "letter": "L", "thai": "เลม-เมิน"}, {"word": "lamp", "emoji": "💡", "letter": "L", "thai": "แลมพ์"}, {"word": "mom", "emoji": "👩", "letter": "M", "thai": "มอม"}, {"word": "milk", "emoji": "🥛", "letter": "M", "thai": "มิลค์"}, {"word": "mitten", "emoji": "🧤", "letter": "M", "thai": "มิท-เทิน"}, {"word": "nurse", "emoji": "👩‍⚕️", "letter": "N", "thai": "เนิร์ส"}, {"word": "neck", "emoji": "🧍", "letter": "N", "thai": "เน็ก"}, {"word": "net", "emoji": "🥅", "letter": "N", "thai": "เน็ต"}, {"word": "otter", "emoji": "🦦", "letter": "O", "thai": "ออท-เทอร์"}, {"word": "octopus", "emoji": "🐙", "letter": "O", "thai": "อ็อค-ทะ-พัส"}, {"word": "ox", "emoji": "🐂", "letter": "O", "thai": "อ็อกซ์"}, {"word": "pen", "emoji": "🖊️", "letter": "P", "thai": "เพ็น"}, {"word": "pot", "emoji": "🍲", "letter": "P", "thai": "พ็อท"}, {"word": "pink", "emoji": "🩷", "letter": "P", "thai": "พิงก์"}, {"word": "queen", "emoji": "👸", "letter": "Q", "thai": "ควีน"}, {"word": "quilt", "emoji": "🧵", "letter": "Q", "thai": "ควิลท์"}, {"word": "quarter", "emoji": "🪙", "letter": "Q", "thai": "ควอร์-เทอร์"}, {"word": "red", "emoji": "🔴", "letter": "R", "thai": "เรด"}, {"word": "ring", "emoji": "💍", "letter": "R", "thai": "ริง"}, {"word": "rock", "emoji": "🪨", "letter": "R", "thai": "ร็อก"}];const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];const KEY="englishAdventureV5";let S={mode:null,q:0,total:12,current:null,lock:false,score:0,filter:null,progress:JSON.parse(localStorage.getItem(KEY)||"{}")};
function show(id){$$('.screen').forEach(x=>x.classList.remove('active'));$('#'+id).classList.add('active')}function shuffle(a){return[...a].sort(()=>Math.random()-.5)}function save(){localStorage.setItem(KEY,JSON.stringify(S.progress));$('#stars').textContent=Object.values(S.progress).reduce((a,v)=>a+(v.correct||0)*2,0)}function stat(w){return S.progress[w.word]||{correct:0,wrong:0}}function pool(){return S.filter?WORDS.filter(w=>w.letter===S.filter):WORDS}function pick(){let p=[];pool().forEach(w=>{let s=stat(w),n=Math.max(1,4+s.wrong-s.correct);for(let i=0;i<n;i++)p.push(w)});return p[Math.floor(Math.random()*p.length)]}
const AUDIO_VERSION="5.0.0";

const AUDIO_DB_NAME="EnglishAdventureHumanAudio";
const AUDIO_STORE="recordings";
let audioDbPromise=null;
function openAudioDb(){
  if(audioDbPromise)return audioDbPromise;
  audioDbPromise=new Promise((resolve,reject)=>{
    const req=indexedDB.open(AUDIO_DB_NAME,1);
    req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains(AUDIO_STORE))db.createObjectStore(AUDIO_STORE)};
    req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);
  });return audioDbPromise;
}
async function getRecordedAudio(key){try{const db=await openAudioDb();return await new Promise((resolve,reject)=>{const tx=db.transaction(AUDIO_STORE,"readonly"),req=tx.objectStore(AUDIO_STORE).get(key);req.onsuccess=()=>resolve(req.result||null);req.onerror=()=>reject(req.error)})}catch{return null}}
async function setRecordedAudio(key,blob){const db=await openAudioDb();return new Promise((resolve,reject)=>{const tx=db.transaction(AUDIO_STORE,"readwrite");tx.objectStore(AUDIO_STORE).put(blob,key);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}
async function deleteRecordedAudio(key){const db=await openAudioDb();return new Promise((resolve,reject)=>{const tx=db.transaction(AUDIO_STORE,"readwrite");tx.objectStore(AUDIO_STORE).delete(key);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}
async function listRecordedAudio(){const db=await openAudioDb();return new Promise((resolve,reject)=>{const tx=db.transaction(AUDIO_STORE,"readonly"),store=tx.objectStore(AUDIO_STORE),keys=store.getAllKeys(),vals=store.getAll();tx.oncomplete=()=>resolve(keys.result.map((key,i)=>({key,blob:vals.result[i]})));tx.onerror=()=>reject(tx.error)})}
async function clearRecordedAudio(){const db=await openAudioDb();return new Promise((resolve,reject)=>{const tx=db.transaction(AUDIO_STORE,"readwrite");tx.objectStore(AUDIO_STORE).clear();tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}
function blobToDataUrl(blob){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(blob)})}
async function dataUrlToBlob(dataUrl){const res=await fetch(dataUrl);return await res.blob()}

let activeAudio=null;
let audioRun=0;

function stopAudio(){
  audioRun++;
  if(activeAudio){
    activeAudio.pause();
    activeAudio.currentTime=0;
    activeAudio=null;
  }
}

function playFile(src, volume=1){
  return new Promise(resolve=>{
    stopAudio();
    const run=audioRun;
    const a=new Audio(src);
    activeAudio=a;
    a.preload="auto";
    a.volume=volume;
    a.onended=()=>{if(run===audioRun)activeAudio=null;resolve()};
    a.onerror=()=>{activeAudio=null;resolve()};
    a.play().catch(()=>resolve());
  });
}

function playFileWithoutStopping(src, run, volume=1){
  return new Promise(resolve=>{
    if(run!==audioRun){resolve();return}
    const a=new Audio(src);
    activeAudio=a;
    a.preload="auto";
    a.volume=volume;
    a.onended=()=>{if(run===audioRun)activeAudio=null;resolve()};
    a.onerror=()=>{if(run===audioRun)activeAudio=null;resolve()};
    a.play().catch(()=>resolve());
  });
}

function wordAudioPath(word){
  return `words_${word.toLowerCase()}.mp3?v=${AUDIO_VERSION}`;
}

function letterAudioPath(letter){
  return `letters_${letter.toLowerCase()}.mp3?v=${AUDIO_VERSION}`;
}

function uiAudioPath(name){
  return `ui_${name}.mp3?v=${AUDIO_VERSION}`;
}

async function sayWord(word){
  stopAudio();const run=audioRun;const custom=await getRecordedAudio(`word:${word.toLowerCase()}`);if(run!==audioRun)return;
  if(custom){const url=URL.createObjectURL(custom);await playFileWithoutStopping(url,run);URL.revokeObjectURL(url)}
  else await playFileWithoutStopping(wordAudioPath(word),run);
}

async function sayUi(name){
  stopAudio();
  const run=audioRun;
  await playFileWithoutStopping(uiAudioPath(name),run);
}

async function spellWord(word){
  stopAudio();const run=audioRun;const letters=word.toUpperCase().split("");const nodes=[...document.querySelectorAll("[data-spell-letter]")];
  nodes.forEach(n=>n.classList.remove("speaking"));await new Promise(r=>setTimeout(r,180));
  for(let i=0;i<letters.length;i++){
    if(run!==audioRun)return;nodes.forEach(n=>n.classList.remove("speaking"));if(nodes[i])nodes[i].classList.add("speaking");
    const custom=await getRecordedAudio(`letter:${letters[i]}`);
    if(run!==audioRun)return;
    if(custom){const url=URL.createObjectURL(custom);await playFileWithoutStopping(url,run);URL.revokeObjectURL(url)}
    else await playFileWithoutStopping(letterAudioPath(letters[i]),run);
    if(run!==audioRun)return;await new Promise(r=>setTimeout(r,420));
  }
  nodes.forEach(n=>n.classList.remove("speaking"));
}
function record(ok){let k=S.current.word;S.progress[k]||={correct:0,wrong:0,last:0};S.progress[k][ok?'correct':'wrong']++;S.progress[k].last=Date.now();save()}function good(){if(S.lock)return;S.lock=true;record(true);S.score++;$('#feedback').textContent='เก่งมาก! ⭐';sayUi('great-job');setTimeout(()=>S.q>=S.total?finish():next(),850)}function bad(b){record(false);b?.classList.add('wrong');$('#feedback').textContent='ลองอีกครั้งนะ';sayWord(S.current.word)}
function start(mode,filter=null){S.mode=mode;S.filter=filter;S.q=0;S.score=0;show('game');if(mode==='memory')return memory();next()}function next(){S.lock=false;S.q++;S.current=pick();$('#progress').textContent=`ข้อ ${S.q}/${S.total}`;$('#feedback').textContent='';$('#hint').textContent='';render()}function finish(){$('#prompt').textContent='จบรอบแล้ว 🎉';$('#visual').textContent='🏆';$('#hint').textContent='';$('#answers').innerHTML='<button class="answer" id="again">เล่นอีกครั้ง</button><button class="answer" id="homeBtn">หน้าแรก</button>';$('#feedback').textContent=`ทำได้ ${S.score} จาก ${S.total} ข้อ`;$('#again').onclick=()=>start(S.mode,S.filter);$('#homeBtn').onclick=()=>show('home')}function opts(w){return shuffle([w,...shuffle(WORDS.filter(x=>x.word!==w.word)).slice(0,3)])}function choices(items,ans,fmt=x=>x.word){$('#answers').innerHTML=items.map(x=>`<button class="answer" data-v="${x.word}">${fmt(x)}</button>`).join('');$$('.answer').forEach(b=>b.onclick=()=>b.dataset.v===ans?(b.classList.add('correct'),good()):bad(b))}
function render(){let w=S.current,m=S.mode;if(m==='lesson')m=['readspell','picture','listen','spell','missing'][S.q%5];if(m==='readspell'){$('#prompt').textContent='ฟังคำและการสะกด';$('#visual').innerHTML=`<div>${w.emoji}</div><div class="spellDisplay">${w.word.toUpperCase().split('').map((l,i)=>`<span data-spell-letter="${i}">${l}</span>`).join('<span class="dot">·</span>')}</div>`;$('#hint').textContent=`${w.word} — ${w.thai}`;choices(opts(w),w.word);setTimeout(()=>spellWord(w.word),250)}else if(m==='picture'){$('#prompt').textContent='รูปนี้คือคำว่าอะไร?';$('#visual').textContent=w.emoji;$('#hint').textContent=w.thai;choices(opts(w),w.word);sayWord(w.word)}else if(m==='listen'){$('#prompt').textContent='ฟังแล้วเลือกรูป';$('#visual').textContent='🔊';choices(opts(w),w.word,x=>`${x.emoji}<br><small>${x.word}</small>`);sayWord(w.word)}else if(m==='missing'){let i=Math.floor(Math.random()*w.word.length),a=w.word[i].toUpperCase(),x=w.word.toUpperCase().split('');x[i]='_';$('#prompt').textContent='เติมตัวอักษรที่หายไป';$('#visual').innerHTML=`<div>${w.emoji}</div><div class="spellDisplay">${x.join(' ')}</div>`;$('#hint').textContent=w.thai;let letters=shuffle([a,...shuffle('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter(z=>z!==a)).slice(0,3)]);$('#answers').innerHTML=letters.map(z=>`<button class="answer" data-v="${z}">${z}</button>`).join('');$$('.answer').forEach(b=>b.onclick=()=>b.dataset.v===a?(b.classList.add('correct'),good()):bad(b))}else if(m==='spell'){$('#prompt').textContent='ฟังเสียงสะกด แล้วเรียงตัวอักษร';$('#visual').innerHTML=`<div>${w.emoji}</div>`;$('#hint').textContent='ฟังตัวอักษรทีละตัว แล้วเรียงให้ถูก';let built=[],letters=shuffle(w.word.toUpperCase().split(''));$('#answers').innerHTML=`<div style="grid-column:1/-1"><div class="slots">${w.word.split('').map(()=>'<div class="slot"></div>').join('')}</div><div class="tiles">${letters.map(l=>`<button class="tile" data-l="${l}">${l}</button>`).join('')}</div></div>`;setTimeout(()=>spellWord(w.word),250);$$('.tile').forEach(b=>b.onclick=()=>{if(b.disabled)return;b.disabled=true;built.push(b.dataset.l);$$('.slot')[built.length-1].textContent=b.dataset.l;let t=w.word.toUpperCase();if(!t.startsWith(built.join(''))){bad(b);built=[];$$('.slot').forEach(s=>s.textContent='');$$('.tile').forEach(x=>x.disabled=false)}else if(built.join('')===t)good()})}else if(m==='speak'){$('#prompt').textContent='กดไมค์แล้วพูดตาม';$('#visual').innerHTML=`<div>${w.emoji}</div><div style="font-size:36px">${w.word}</div>`;$('#hint').textContent=w.thai;$('#answers').innerHTML='<div style="grid-column:1/-1;text-align:center"><button class="mic" id="mic">🎤</button><p>ระบบจะฟังคำที่พูด</p></div>';sayWord(w.word);$('#mic').onclick=listenSpeech}}
function listenSpeech(){let R=window.SpeechRecognition||window.webkitSpeechRecognition;if(!R){$('#feedback').textContent='อุปกรณ์นี้ยังไม่รองรับ กรุณาใช้ Chrome บน Android หรือคอม';return}let r=new R();r.lang='en-US';$('#feedback').textContent='กำลังฟัง…';r.onresult=e=>{let h=e.results[0][0].transcript.toLowerCase();h.includes(S.current.word)?good():($('#feedback').textContent=`ได้ยินว่า “${h}” ลองอีกครั้ง`,record(false),sayWord(S.current.word))};r.onerror=()=>$('#feedback').textContent='ยังฟังไม่ชัด ลองอีกครั้ง';r.start()}
function memory(){$('#progress').textContent='จับคู่ให้ครบ';$('#prompt').textContent='จับคู่รูปกับคำ';$('#visual').textContent='';$('#hint').textContent='';let ws=shuffle(pool()).slice(0,6),cards=shuffle(ws.flatMap(w=>[{id:w.word,text:w.emoji},{id:w.word,text:w.word}]));let first=null,lock=false,matched=0;$('#answers').innerHTML=`<div class="memory" style="grid-column:1/-1">${cards.map(c=>`<button data-id="${c.id}" data-text="${c.text}">?</button>`).join('')}</div>`;$$('.memory button').forEach(b=>b.onclick=()=>{if(lock||b.classList.contains('matched')||b===first)return;b.classList.add('open');b.textContent=b.dataset.text;if(!first){first=b;return}if(first.dataset.id===b.dataset.id){first.classList.add('matched');b.classList.add('matched');matched++;sayWord(b.dataset.id);first=null;if(matched===ws.length)$('#feedback').textContent='จับคู่ครบแล้ว! 🏆'}else{lock=true;setTimeout(()=>{first.classList.remove('open');b.classList.remove('open');first.textContent='?';b.textContent='?';first=null;lock=false},650)}})}
function lettersPage(){show('letters');let ls=[...'ABCDEFGHIJKLMNOPQR'];$('#letterGrid').innerHTML=ls.map(l=>{let ws=WORDS.filter(w=>w.letter===l);return `<button class="letterCard" data-l="${l}"><strong>${l}</strong><span>${ws.map(w=>w.emoji).join('')}</span><small>${ws.map(w=>w.word).join(', ')}</small></button>`}).join('');$$('.letterCard').forEach(b=>b.onclick=()=>{let l=b.dataset.l,w=WORDS.find(x=>x.letter===l);start('readspell',l);setTimeout(()=>{stopAudio();playFile(letterAudioPath(l));setTimeout(()=>sayWord(w.word),1100)},250)})}function parent(){show('parent');let v=Object.values(S.progress),c=v.reduce((a,x)=>a+x.correct,0),w=v.reduce((a,x)=>a+x.wrong,0),done=Object.keys(S.progress).length,acc=Math.round(c/Math.max(1,c+w)*100);$('#summary').innerHTML=`<div><strong>${done}</strong>คำที่ฝึก</div><div><strong>${c}</strong>ตอบถูก</div><div><strong>${w}</strong>ลองใหม่</div><div><strong>${acc}%</strong>ความแม่น</div>`;let weak=WORDS.map(x=>({...x,...stat(x)})).sort((a,b)=>(b.wrong-b.correct)-(a.wrong-a.correct)).slice(0,12);$('#weak').innerHTML=weak.map(x=>`<div class="row"><span>${x.emoji} <b>${x.word}</b></span><span class="badge">ถูก ${x.correct} / ผิด ${x.wrong}</span></div>`).join('');$('#letterStats').innerHTML=[...'ABCDEFGHIJKLMNOPQR'].map(l=>{let ws=WORDS.filter(x=>x.letter===l),cc=ws.reduce((a,x)=>a+stat(x).correct,0),ww=ws.reduce((a,x)=>a+stat(x).wrong,0),p=Math.round(cc/Math.max(1,cc+ww)*100);return `<div class="row"><span><b>${l}</b> — ${ws.map(x=>x.word).join(', ')}</span><span style="min-width:90px">${p}%<div class="meter"><span style="width:${p}%"></span></div></span></div>`}).join('')}

let studioTab="letters",studioTarget=null,mediaRecorder=null,recordChunks=[],pendingRecording=null,recordStream=null;
function studioItems(){return studioTab==="letters"?[..."ABCDEFGHIJKLMNOPQR"].map(l=>({key:`letter:${l}`,title:l,sub:"ชื่ออักษร"})):WORDS.map(w=>({key:`word:${w.word}`,title:`${w.emoji} ${w.word}`,sub:w.thai}))}
async function studioPage(){show("studio");await renderStudioGrid()}
async function renderStudioGrid(){const saved=new Set((await listRecordedAudio()).map(x=>x.key));$("#recordingGrid").innerHTML=studioItems().map(item=>`<button class="record-item ${saved.has(item.key)?"recorded":""}" data-record-key="${item.key}"><strong>${item.title}</strong><small>${saved.has(item.key)?"✅ มีเสียงคนจริง":item.sub}</small></button>`).join("");$$("[data-record-key]").forEach(b=>b.onclick=()=>selectRecordTarget(b.dataset.recordKey))}
function selectRecordTarget(key){const item=studioItems().find(x=>x.key===key);if(!item)return;studioTarget=item;pendingRecording=null;$("#recorderPanel").hidden=false;$("#recordTarget").textContent=item.title;$("#recordStatus").textContent="พร้อมบันทึก กรุณาพูดชัด ๆ เพียงครั้งเดียว";$("#startRecordBtn").disabled=false;$("#stopRecordBtn").disabled=true;$("#previewRecordBtn").disabled=true;$("#saveRecordBtn").disabled=true}
async function startRecording(){try{recordStream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,autoGainControl:true}});const preferred=["audio/webm;codecs=opus","audio/mp4","audio/webm"].find(t=>MediaRecorder.isTypeSupported(t));mediaRecorder=new MediaRecorder(recordStream,preferred?{mimeType:preferred}:undefined);recordChunks=[];mediaRecorder.ondataavailable=e=>{if(e.data.size)recordChunks.push(e.data)};mediaRecorder.onstop=()=>{pendingRecording=new Blob(recordChunks,{type:mediaRecorder.mimeType||"audio/webm"});recordStream?.getTracks().forEach(t=>t.stop());recordStream=null;$("#recordStatus").textContent="อัดเสร็จแล้ว กรุณากดฟังทดสอบก่อนบันทึก";$("#previewRecordBtn").disabled=false;$("#saveRecordBtn").disabled=false;$("#startRecordBtn").disabled=false;$("#stopRecordBtn").disabled=true};mediaRecorder.start();$("#recordStatus").innerHTML='<span class="recording-dot"></span> กำลังอัดเสียง…';$("#startRecordBtn").disabled=true;$("#stopRecordBtn").disabled=false;$("#previewRecordBtn").disabled=true;$("#saveRecordBtn").disabled=true}catch{$("#recordStatus").textContent="เปิดไมโครโฟนไม่ได้ กรุณาอนุญาตสิทธิ์ไมโครโฟนและเปิดผ่าน HTTPS"}}
function stopRecording(){if(mediaRecorder&&mediaRecorder.state==="recording")mediaRecorder.stop()}
async function previewRecording(){if(!pendingRecording)return;stopAudio();const url=URL.createObjectURL(pendingRecording);await playFile(url);URL.revokeObjectURL(url)}
async function saveRecording(){if(!studioTarget||!pendingRecording)return;await setRecordedAudio(studioTarget.key,pendingRecording);$("#recordStatus").textContent="บันทึกแล้ว ✅ เกมจะใช้เสียงนี้ทันที";pendingRecording=null;$("#previewRecordBtn").disabled=true;$("#saveRecordBtn").disabled=true;await renderStudioGrid()}
async function removeRecording(){if(!studioTarget)return;await deleteRecordedAudio(studioTarget.key);pendingRecording=null;$("#recordStatus").textContent="ลบเสียงที่บันทึกแล้ว ระบบจะกลับไปใช้เสียงสำรอง";await renderStudioGrid()}
async function exportRecordings(){const items=await listRecordedAudio(),payload={version:1,createdAt:new Date().toISOString(),recordings:[]};for(const item of items)payload.recordings.push({key:item.key,data:await blobToDataUrl(item.blob)});const blob=new Blob([JSON.stringify(payload)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="english-adventure-v5-human-audio.json";a.click();URL.revokeObjectURL(a.href)}
async function importRecordings(file){try{const payload=JSON.parse(await file.text());for(const item of payload.recordings||[])await setRecordedAudio(item.key,await dataUrlToBlob(item.data));alert("นำเข้าเสียงเรียบร้อย");await renderStudioGrid()}catch{alert("ไฟล์เสียงสำรองไม่ถูกต้อง")}}
$$(".studio-tab").forEach(b=>b.onclick=()=>{$$(".studio-tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");studioTab=b.dataset.studioTab;$("#recorderPanel").hidden=true;renderStudioGrid()});
$("#startRecordBtn").onclick=startRecording;$("#stopRecordBtn").onclick=stopRecording;$("#previewRecordBtn").onclick=previewRecording;$("#saveRecordBtn").onclick=saveRecording;$("#deleteRecordBtn").onclick=removeRecording;$("#exportAudioBtn").onclick=exportRecordings;$("#importAudioInput").onchange=e=>e.target.files[0]&&importRecordings(e.target.files[0]);$("#clearAudioBtn").onclick=async()=>{if(confirm("ล้างเสียงคนจริงทั้งหมดหรือไม่?")){await clearRecordedAudio();$("#recorderPanel").hidden=true;renderStudioGrid()}};

$$('[data-mode]').forEach(b=>b.onclick=()=>start(b.dataset.mode));$$('[data-page]').forEach(b=>b.onclick=()=>b.dataset.page==='letters'?lettersPage():b.dataset.page==='studio'?studioPage():parent());$$('.back').forEach(b=>b.onclick=()=>show('home'));$('#wordBtn').onclick=()=>S.current&&sayWord(S.current.word);$('#spellBtn').onclick=()=>S.current&&spellWord(S.current.word);$('#resetBtn').onclick=()=>{if(confirm('ล้างข้อมูลทั้งหมดหรือไม่?')){S.progress={};save();parent()}};let dp=null;window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();dp=e;$('#installBtn').hidden=false});$('#installBtn').onclick=async()=>{if(dp){dp.prompt();await dp.userChoice;dp=null;$('#installBtn').hidden=true}};let ios=/iphone|ipad|ipod/i.test(navigator.userAgent),standalone=matchMedia('(display-mode: standalone)').matches||navigator.standalone;if(ios&&!standalone)$('#iosTip').hidden=false;save();
if('serviceWorker'in navigator){navigator.serviceWorker.getRegistrations().then(rs=>rs.forEach(r=>r.unregister())).finally(()=>navigator.serviceWorker.register('sw.js?v=50'))}
