const IMG={"6": "assets/02-ef315a0b.jpg", "16": "assets/03-b3c147c7.jpg", "22": "assets/04-8d471bc5.jpg", "36": "assets/05-d375fd67.jpg", "38": "assets/06-13afad37.jpg", "40": "assets/07-9bd813e5.jpg", "42": "assets/08-57e9b7cf.jpg", "44": "assets/09-ee83e05f.jpg", "46": "assets/10-ba56e4fb.jpg", "48": "assets/11-41214b8c.jpg", "50": "assets/12-2b6ec868.jpg", "52": "assets/13-23e06df2.jpg", "54": "assets/14-05086962.jpg", "56": "assets/15-f82210d8.jpg", "58": "assets/16-f9d6f96a.jpg", "60": "assets/17-e7ad482c.jpg", "62": "assets/18-29dd3aae.jpg", "64": "assets/19-e7195a7e.jpg", "66": "assets/20-967a2159.jpg", "68": "assets/21-a9d39f3d.jpg", "s1": "assets/22-eefd6e0d.jpg", "s2": "assets/23-ffe3323e.jpg", "s3": "assets/24-d175399c.jpg", "s4": "assets/25-e67901b0.jpg", "s5": "assets/26-f102ed64.jpg", "r1": "assets/27-c1adfb57.jpg", "r2": "assets/28-4b468131.jpg", "r3": "assets/29-21dd94d8.jpg", "r4": "assets/30-b5e0595a.jpg", "e1": "assets/31-6de4aa39.jpg", "e2": "assets/32-3f9c0f2f.jpg", "e3": "assets/33-e22a93cb.jpg", "e4": "assets/34-7eac4ac0.jpg", "e5": "assets/35-5b9652b8.jpg"};
/* ФОТО проектов: s1–s5 — мельница Шмидта, r1–r4 — ул. Рыльского, e1–e5 — Этнодеревня */
const PROJECTS=[
 {t:'Малая мельница Шмидта',s:'Ритейл – проект, г. Саратов',p:['s1','s2','s3','s4','s5'].map(k=>IMG[k])},
 {t:'Улица Максима Рыльского',s:'Общественное пространство, г. Уфа',p:['r1','r2','r3','r4'].map(k=>IMG[k])},
 {t:'Этнодеревня',s:'Туристическое пространство, д. Шамонино',p:['e1','e2','e3','e4','e5'].map(k=>IMG[k])}];
/* Галерея: [ширина-доля, высота, фото] */
const ROWS=[[[201,118,36],[145,118,60]],[[150,118,68],[195,118,64]],[[357,145,66]],[[141,198,38],[205,248,48]],[[357,200,46,1]],[[205,250,58],[141,250,44]],[[357,88,62]],[[175,232,40],[170,232,42]],[[357,275,56]],[[141,200,50],[205,250,54]],[[357,205,52,1]]];
const FORMINIT='https://forminit.com/f/s1m4qo2qifu';
const $=s=>document.querySelector(s),pad=n=>String(n).padStart(2,'0');
const AR='<svg viewBox="0 0 38 14" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 7h36M31 1l6 6-6 6"/></svg>';
const phrase='ОТ ПЕШЕХОДНЫХ ПОТОКОВ ДО 3Д-ВИЗУАЛИЗАЦИИ';
$('#mq').innerHTML=Array(10).fill('<span>'+phrase+'</span>').join('');
PROJECTS.forEach(pr=>{
 const d=document.createElement('div');d.className='pj rv';
 d.innerHTML=`<h3>${pr.t}</h3><small>${pr.s}</small><div class="ph">${pr.p.map((s,i)=>`<img src="${s}" alt="${pr.t}" class="${i?'':'on'}">`).join('')}</div><div class="ctl"><button class="btn" aria-label="Назад">${AR.replace('M1 7h36M31 1l6 6-6 6','M37 7H1M7 1L1 7l6 6')}</button><div class="cnt"><span>01</span> / ${pad(pr.p.length)}</div><button class="btn" aria-label="Вперёд">${AR}</button></div>`;
 const imgs=[...d.querySelectorAll('img')],c=d.querySelector('.cnt span');let n=0;
 const go=k=>{imgs[n].classList.remove('on');n=(n+k+imgs.length)%imgs.length;imgs[n].classList.add('on');c.textContent=pad(n+1)};
 const [a,b]=d.querySelectorAll('.ctl button');a.onclick=()=>go(-1);b.onclick=()=>go(1);
 let x0=null;const bx=d.querySelector('.ph');
 bx.addEventListener('touchstart',e=>x0=e.touches[0].clientX,{passive:true});
 bx.addEventListener('touchend',e=>{if(x0===null)return;const dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40)go(dx<0?1:-1);x0=null});
 $('#pjs').appendChild(d);
});
$('#gallery').innerHTML=ROWS.map(r=>r[0][3]?`<div class="lw rv" style="--h:${r[0][1]/10}rem"><img loading="lazy" src="${IMG[r[0][2]]}" alt=""></div>`:`<div class="gr rv">${r.map(([w,h,i])=>`<div style="--w:${w};--h:${h/10}rem"><img loading="lazy" src="${IMG[i]}" alt=""></div>`).join('')}</div>`).join('');
function layoutL(){if(!$('#gallery').classList.contains('on'))return;const rem=parseFloat(getComputedStyle(document.documentElement).fontSize),r=14*rem/10;
 document.querySelectorAll('.lw').forEach(el=>{el.style.marginTop='0px';const pv=el.previousElementSibling,a=pv.children[0],b=pv.children[1],W=el.offsetWidth,H=el.offsetHeight,cut=b.offsetHeight-a.offsetHeight,nx=a.offsetWidth;
  el.style.marginTop=(-cut)+'px';
  el.style.clipPath=`path('M${r} 0H${nx-r}A${r} ${r} 0 0 1 ${nx} ${r}V${cut-r}A${r} ${r} 0 0 0 ${nx+r} ${cut}H${W-r}A${r} ${r} 0 0 1 ${W} ${cut+r}V${H-r}A${r} ${r} 0 0 1 ${W-r} ${H}H${r}A${r} ${r} 0 0 1 0 ${H-r}V${r}A${r} ${r} 0 0 1 ${r} 0Z')`})}
addEventListener('resize',layoutL);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1,rootMargin:'0px 0px -5% 0px'});
const watch=r=>r.querySelectorAll('.rv:not(.in)').forEach(el=>io.observe(el));watch(document);
let savedY=0;
function show(){const g=location.hash==='#gallery';$('#home').classList.toggle('on',!g);$('#gallery').classList.toggle('on',g);scrollTo({top:g?0:savedY,behavior:'instant'});if(g)layoutL();upd();watch(document)}
addEventListener('hashchange',show);
const toContacts=()=>{if($('#home').classList.contains('on'))$('#contacts').scrollIntoView({behavior:'smooth'});else{location.hash='';setTimeout(()=>$('#contacts').scrollIntoView({behavior:'smooth'}),80)}};
document.addEventListener('click',e=>{
 const b=e.target.closest('[data-go],[data-ext],.btn,.fab');if(!b)return;
 b.classList.add('pressed');setTimeout(()=>b.classList.remove('pressed'),220);
 if(b.dataset.ext){e.preventDefault();setTimeout(()=>window.open(b.dataset.ext,'_blank','noopener'),200)}
 else if(b.dataset.go){const t=b.dataset.go;setTimeout(()=>{if(t==='#form')$('#form').scrollIntoView({behavior:'smooth'});else{savedY=scrollY;location.hash='gallery'}},200)}
 else if(b.id==='dn')setTimeout(toContacts,200);
 else if(b.id==='bk')setTimeout(()=>{location.hash=''},200)});
const dn=$('#dn'),bk=$('#bk');
function upd(){const home=$('#home').classList.contains('on');bk.classList.toggle('on',!home);
 const ct=$('#contacts').getBoundingClientRect().top;
 dn.classList.toggle('on',home&&scrollY>innerHeight*.6&&ct>innerHeight*.85)}
addEventListener('scroll',upd,{passive:true});addEventListener('resize',upd);
// phone → +79171234567
const phEl=$('#ph');
phEl.addEventListener('input',()=>{const v=phEl.value;if(/[A-Za-zА-Яа-я@_]/.test(v))return;let d=v.replace(/\D/g,'');if(!d){phEl.value='';return}if(d[0]==='7'||d[0]==='8')d=d.slice(1);phEl.value='+7'+d.slice(0,10)});
$('#fi').onchange=e=>{const f=e.target.files[0];$('#fl').classList.toggle('has',!!f);$('#fn').textContent=f?f.name:'Прикрепить план участка'};
const flag=(el,ok)=>{el.classList.remove('er');if(!ok){void el.offsetWidth;el.classList.add('er')}return ok};
$('#cb').onchange=()=>$('#ck').classList.remove('er');
$('#f').addEventListener('submit',async e=>{
 e.preventDefault();const m=$('#ms');m.className='msg';
 const nm=$('#nm').value.trim(),p=phEl.value.trim(),okP=/^\+7\d{10}$/.test(p)||/^@?[A-Za-z0-9_.\-]{3,}$/.test(p)&&/[A-Za-z@_]/.test(p);
 const r=[flag($('#nm'),nm.length>1),flag(phEl,okP),flag($('#ck'),$('#cb').checked)];
 if(r.includes(false))return;
 const fd=new FormData($('#f'));fd.set('fi-sender-fullName',nm);fd.set('fi-sender-phone',p);if(!$('#fi').files[0])fd.delete('fi-file-plan');
 const sb=$('#sb');sb.disabled=true;sb.textContent='Отправляем…';
 let why='';try{const res=await fetch(FORMINIT,{method:'POST',body:fd,headers:{Accept:'application/json'}});if(!res.ok){why=' (код '+res.status+')';throw 0}
  $('#f').reset();$('#fl').classList.remove('has');$('#fn').textContent='Прикрепить план участка';sb.textContent='Спасибо, скоро вернёмся!';sb.classList.add('ok');return}
 catch(err){console.error('Forminit:',err);if(!why)why=' (запрос заблокирован или нет связи)';m.textContent='Не удалось отправить'+why+'. Напишите нам в Telegram или MAX.';m.className='msg on'}
 sb.disabled=false;sb.textContent='Получить расчёт'});
$('#f').addEventListener('input',()=>{const s=$('#sb');if(s.classList.contains('ok')){s.classList.remove('ok');s.disabled=false;s.textContent='Получить расчёт'}});
show();
