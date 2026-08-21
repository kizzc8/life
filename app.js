
const DEFAULT_TASKS = [{"name": "確認畢業門檻", "cat": "study", "start": "2026-08-21", "end": "2026-08-31", "done": false, "note": "確認所有畢業學分與英文校定必修安排"}, {"name": "英文校定必修", "cat": "study", "start": "2026-09-01", "end": "2027-06-15", "done": false, "note": "優先完成剩餘英文校定必修"}, {"name": "N4 → N3", "cat": "study", "start": "2026-08-21", "end": "2026-12-31", "done": false, "note": "建立日文基礎與聽讀能力"}, {"name": "N3 → N2", "cat": "study", "start": "2027-01-01", "end": "2027-07-31", "done": false, "note": "JLPT N2主線，BJT 400備案"}, {"name": "Sound Creator作品①", "cat": "music", "start": "2026-09-01", "end": "2026-12-31", "done": false, "note": "第一首完整製作作品"}, {"name": "Sound Creator作品②", "cat": "music", "start": "2027-01-01", "end": "2027-06-15", "done": false, "note": "第二首DAW原創／編曲作品"}, {"name": "BJT第一次", "cat": "study", "start": "2027-03-01", "end": "2027-03-31", "done": false, "note": "目標400分以上"}, {"name": "申請陸軍優先入營", "cat": "admin", "start": "2027-05-01", "end": "2027-06-15", "done": false, "note": "依2027年度役政公告調整"}, {"name": "MI線上說明會", "cat": "admin", "start": "2027-05-01", "end": "2027-06-30", "done": false, "note": "AO前置準備"}, {"name": "銘傳大學畢業", "cat": "study", "start": "2027-06-15", "end": "2027-06-15", "done": false, "note": "預計2027年6月中"}, {"name": "JLPT N2", "cat": "study", "start": "2027-07-01", "end": "2027-07-31", "done": false, "note": "正式日期依公告調整"}, {"name": "陸軍4個月兵役", "cat": "admin", "start": "2027-07-15", "end": "2027-11-15", "done": false, "note": "先以理想梯次預排，之後可直接改日期"}, {"name": "MI AO Entry", "cat": "admin", "start": "2027-08-15", "end": "2027-09-30", "done": false, "note": "依2028年度募集要項更新"}, {"name": "MI AO正式出願", "cat": "admin", "start": "2027-09-01", "end": "2027-10-31", "done": false, "note": "Sound Creator Course"}, {"name": "MI線上面試", "cat": "admin", "start": "2027-10-01", "end": "2027-10-31", "done": false, "note": "海外／遠距離流程"}, {"name": "一般入學備案", "cat": "admin", "start": "2027-11-01", "end": "2027-12-20", "done": false, "note": "AO未完成時切換一般入學"}, {"name": "COE／學費程序", "cat": "admin", "start": "2027-12-15", "end": "2028-02-29", "done": false, "note": "錄取後留學程序"}, {"name": "東京住宿／赴日準備", "cat": "admin", "start": "2028-01-01", "end": "2028-03-15", "done": false, "note": "住宿、預算、搬家、生活行政"}, {"name": "日本留學簽證", "cat": "admin", "start": "2028-02-01", "end": "2028-03-01", "done": false, "note": "依COE進度"}, {"name": "前往東京", "cat": "admin", "start": "2028-03-15", "end": "2028-03-31", "done": false, "note": "開學前抵達"}, {"name": "MI TOKYO Sound Creator", "cat": "study", "start": "2028-04-01", "end": "2030-03-31", "done": false, "note": "兩年制主線"}, {"name": "MI第一年作品累積", "cat": "music", "start": "2028-04-01", "end": "2029-03-31", "done": false, "note": "作品、人脈、合作"}, {"name": "拓展日本音樂人脈", "cat": "music", "start": "2028-06-01", "end": "2030-12-31", "done": false, "note": "樂手、歌手、製作人與業界"}, {"name": "Producer Portfolio v1", "cat": "music", "start": "2028-08-01", "end": "2028-12-31", "done": false, "note": "整理可公開展示作品"}, {"name": "第一次外部合作", "cat": "music", "start": "2028-11-01", "end": "2028-12-31", "done": false, "note": "嘗試外部合作"}, {"name": "開始低價／友情價接案", "cat": "music", "start": "2029-06-01", "end": "2029-09-30", "done": false, "note": "建立第一次音樂收入"}, {"name": "混音＋Vocal Production強化", "cat": "music", "start": "2029-07-01", "end": "2029-12-31", "done": false, "note": "強化可市場化能力"}, {"name": "日本業界求職／實習", "cat": "admin", "start": "2029-09-01", "end": "2030-03-31", "done": false, "note": "同步準備畢業後出路"}, {"name": "累積正式合作Credit", "cat": "music", "start": "2029-11-01", "end": "2030-12-31", "done": false, "note": "正式作品合作紀錄"}, {"name": "畢業作品／Portfolio最終版", "cat": "music", "start": "2030-01-01", "end": "2030-03-31", "done": false, "note": "求職與接案用"}, {"name": "MI畢業", "cat": "study", "start": "2030-03-01", "end": "2030-03-31", "done": false, "note": "完成Sound Creator"}, {"name": "正式音樂職涯", "cat": "music", "start": "2030-04-01", "end": "2030-12-31", "done": false, "note": "Producer／Sound Creator為主"}, {"name": "穩定客戶與工作來源", "cat": "music", "start": "2030-05-01", "end": "2030-12-31", "done": false, "note": "建立穩定收入"}, {"name": "2031–2035規劃", "cat": "admin", "start": "2030-12-01", "end": "2030-12-31", "done": false, "note": "下一階段人生規劃"}];
const STORAGE_KEY = "lifePlannerTasksV2";
let tasks = loadTasks();
let unit = "month";
let anchor = new Date("2026-08-21T00:00:00");
let deferredPrompt = null;

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const D = s => new Date(s + "T00:00:00");
const fmt = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
const addDays = (d,n) => { const x=new Date(d); x.setDate(x.getDate()+n); return x; };
const diff = (a,b) => Math.round((b-a)/86400000);

function cloneDefault(){ return JSON.parse(JSON.stringify(DEFAULT_TASKS)); }
function saveTasks(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)); }
function loadTasks(){
  try{
    const s=localStorage.getItem(STORAGE_KEY);
    return s ? JSON.parse(s) : cloneDefault();
  }catch{ return cloneDefault(); }
}
function range(){
  const a=new Date(anchor);
  if(unit==="year") return [new Date(a.getFullYear(),0,1),new Date(a.getFullYear(),11,31)];
  if(unit==="month") return [new Date(a.getFullYear(),a.getMonth(),1),new Date(a.getFullYear(),a.getMonth()+1,0)];
  if(unit==="week"){
    const s=new Date(a); const day=(s.getDay()+6)%7; s.setDate(s.getDate()-day);
    return [s,addDays(s,6)];
  }
  return [new Date(a.getFullYear(),a.getMonth(),a.getDate()),new Date(a.getFullYear(),a.getMonth(),a.getDate())];
}
function visible(t,s,e){ return D(t.end)>=s && D(t.start)<=e; }
function phase(s){
  if(s < D("2027-06-15")) return "畢業＋日文";
  if(s < D("2028-04-01")) return "兵役＋申請";
  if(s < D("2030-04-01")) return "MI＋作品";
  return "音樂職涯";
}
function ticks(s,e){
  const out=[], total=Math.max(1,diff(s,addDays(e,1)));
  if(unit==="year"){
    for(let m=0;m<12;m++){const d=new Date(s.getFullYear(),m,1);out.push({label:`${m+1}月`,pos:diff(s,d)/total*100});}
  }else if(unit==="month"){
    const span=diff(s,e)+1, step=span>28?7:5;
    for(let i=0;i<span;i+=step){const d=addDays(s,i);out.push({label:`${d.getMonth()+1}/${d.getDate()}`,pos:i/total*100});}
  }else if(unit==="week"){
    ["一","二","三","四","五","六","日"].forEach((x,i)=>out.push({label:x,pos:i/7*100}));
  }else out.push({label:`${s.getMonth()+1}/${s.getDate()}`,pos:0});
  return out;
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));}
function escapeAttr(s){return escapeHtml(s);}

function render(){
  $("#anchorDate").value=fmt(anchor);
  const [s,e]=range();
  const vis=tasks.filter(t=>visible(t,s,e)).sort((a,b)=>a.start.localeCompare(b.start));
  $("#viewName").textContent={year:"年",month:"月",week:"週",day:"日"}[unit];
  $("#countVisible").textContent=vis.length;
  $("#countDone").textContent=vis.filter(t=>t.done).length;
  $("#phaseName").textContent=phase(s);
  $("#rangeText").textContent=`${fmt(s)} ～ ${fmt(e)}`;
  $$(".segmented button").forEach(b=>b.classList.toggle("active",b.dataset.unit===unit));
  renderTimeline(vis,s,e);
  renderEditor(vis);
}
function renderTimeline(vis,s,e){
  const header=$("#timelineHeader"); header.innerHTML="";
  const lab=document.createElement("div"); lab.className="timeline-label"; lab.textContent="計畫";
  const tickBox=document.createElement("div"); tickBox.className="ticks";
  ticks(s,e).forEach(t=>{const el=document.createElement("div");el.className="tick";el.style.left=t.pos+"%";el.textContent=t.label;tickBox.appendChild(el);});
  header.append(lab,tickBox);

  const rows=$("#timelineRows"); rows.innerHTML="";
  if(!vis.length){ rows.innerHTML='<div style="padding:14px;color:var(--muted);font-size:13px">這個區間目前沒有計畫。</div>'; return; }

  const total=Math.max(1,diff(s,addDays(e,1)));
  vis.forEach(t=>{
    const row=document.createElement("div"); row.className="timeline-row";
    const label=document.createElement("div"); label.className="row-label";
    label.innerHTML=`<b>${escapeHtml(t.done?"✓ "+t.name:t.name)}</b><span>${t.start} → ${t.end}</span>`;
    const track=document.createElement("div"); track.className="bar-track";
    ticks(s,e).forEach(x=>{const g=document.createElement("div");g.className="gridline";g.style.left=x.pos+"%";track.appendChild(g);});
    const bs=D(t.start)>s?D(t.start):s, be=D(t.end)<e?D(t.end):e;
    const left=Math.max(0,diff(s,bs)/total*100);
    const width=unit==="day"?100:Math.max(1,diff(bs,addDays(be,1))/total*100);
    const bar=document.createElement("div"); bar.className=`task-bar ${t.cat}`;
    bar.style.left=left+"%"; bar.style.width=Math.min(100-left,width)+"%"; bar.textContent=t.name;
    track.appendChild(bar); row.append(label,track); rows.appendChild(row);
  });
}
function renderEditor(vis){
  const root=$("#editor"); root.innerHTML="";
  vis.forEach(t=>{
    const i=tasks.indexOf(t);
    const card=document.createElement("div"); card.className=`edit-card ${t.cat}`;
    card.innerHTML=`
      <div class="edit-top">
        <label>計畫名稱<input class="name" value="${escapeAttr(t.name)}"></label>
        <label>分類<select class="cat">
          <option value="study">學業／日文</option>
          <option value="admin">申請／行政</option>
          <option value="music">音樂／職涯</option>
        </select></label>
      </div>
      <div class="two">
        <label>開始日<input class="start" type="date" value="${t.start}"></label>
        <label>結束日<input class="end" type="date" value="${t.end}"></label>
      </div>
      <label>備註<textarea class="note" rows="2">${escapeHtml(t.note||"")}</textarea></label>
      <div class="edit-actions">
        <label class="check"><input class="done" type="checkbox" ${t.done?"checked":""}> 完成</label>
        <button class="delete ghost" type="button">刪除</button>
      </div>`;
    root.appendChild(card);
    card.querySelector(".cat").value=t.cat;
    card.querySelector(".name").addEventListener("input",e=>{t.name=e.target.value;saveTasks();render();});
    card.querySelector(".cat").addEventListener("change",e=>{t.cat=e.target.value;saveTasks();render();});
    card.querySelector(".start").addEventListener("change",e=>{t.start=e.target.value;if(t.end<t.start)t.end=t.start;saveTasks();render();});
    card.querySelector(".end").addEventListener("change",e=>{t.end=e.target.value;if(t.end<t.start)t.start=t.end;saveTasks();render();});
    card.querySelector(".note").addEventListener("input",e=>{t.note=e.target.value;saveTasks();});
    card.querySelector(".done").addEventListener("change",e=>{t.done=e.target.checked;saveTasks();render();});
    card.querySelector(".delete").addEventListener("click",()=>{tasks.splice(i,1);saveTasks();render();});
  });
}
function move(n){
  if(unit==="year") anchor=new Date(anchor.getFullYear()+n,anchor.getMonth(),Math.min(anchor.getDate(),28));
  if(unit==="month") anchor=new Date(anchor.getFullYear(),anchor.getMonth()+n,Math.min(anchor.getDate(),28));
  if(unit==="week") anchor=addDays(anchor,7*n);
  if(unit==="day") anchor=addDays(anchor,n);
  render();
}

$$(".segmented button").forEach(b=>b.addEventListener("click",()=>{unit=b.dataset.unit;render();}));
$("#anchorDate").addEventListener("change",e=>{anchor=D(e.target.value);render();});
$("#prevBtn").addEventListener("click",()=>move(-1));
$("#nextBtn").addEventListener("click",()=>move(1));
$("#todayBtn").addEventListener("click",()=>{anchor=new Date();render();});

$("#addBtn").addEventListener("click",()=>{
  const [s,e]=range();
  $("#newStart").value=fmt(s); $("#newEnd").value=fmt(e); $("#newName").value=""; $("#newNote").value="";
  $("#taskDialog").showModal();
});
$("#taskForm").addEventListener("submit",e=>{
  if(e.submitter && e.submitter.id==="saveNew"){
    e.preventDefault();
    tasks.push({
      name:$("#newName").value.trim()||"新的計畫",
      cat:$("#newCat").value,
      start:$("#newStart").value,
      end:$("#newEnd").value,
      note:$("#newNote").value.trim(),
      done:false
    });
    saveTasks(); $("#taskDialog").close(); render();
  }
});

$("#exportBtn").addEventListener("click",()=>{
  const blob=new Blob([JSON.stringify(tasks,null,2)],{type:"application/json"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="人生規劃備份.json";
  a.click();
  URL.revokeObjectURL(a.href);
});
$("#importFile").addEventListener("change",async e=>{
  const f=e.target.files[0]; if(!f)return;
  try{
    const imported=JSON.parse(await f.text());
    if(!Array.isArray(imported)) throw new Error();
    tasks=imported; saveTasks(); render(); alert("匯入完成");
  }catch{ alert("JSON檔案格式不正確"); }
  e.target.value="";
});
$("#resetBtn").addEventListener("click",()=>{
  if(confirm("確定要恢復最初的2026–2030計畫嗎？目前修改會被清除。")){
    tasks=cloneDefault(); saveTasks(); render();
  }
});

window.addEventListener("beforeinstallprompt",e=>{
  e.preventDefault(); deferredPrompt=e; $("#installBtn").classList.remove("hidden");
});
$("#installBtn").addEventListener("click",async()=>{
  if(!deferredPrompt)return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt=null;
  $("#installBtn").classList.add("hidden");
});

const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
if(isIOS && !isStandalone && !sessionStorage.getItem("hideIosInstallTip")){
  $("#iosInstallTip").classList.remove("hidden");
}
$("#dismissInstallTip").addEventListener("click",()=>{
  sessionStorage.setItem("hideIosInstallTip","1");
  $("#iosInstallTip").classList.add("hidden");
});

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js"));
}
render();
