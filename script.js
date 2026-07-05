/* =======================================================
   遊園 | Chapter I : 桃源鄕
======================================================= */

/* =======================================================
   Fade Animation
======================================================= */

const fadeElements = document.querySelectorAll(
  ".section-title, .section-description, .character-card, .world-block, .calendar-wrapper, .schedule-info",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

fadeElements.forEach((el) => {
  el.classList.add("fade");

  observer.observe(el);
});

/* =======================================================
   Olive Leaves
======================================================= */

function createLeaf() {
  const leaf = document.createElement("div");

  leaf.className = "leaf";

  leaf.style.left = Math.random() * 100 + "vw";

  leaf.style.animationDuration = 10 + Math.random() * 8 + "s";

  leaf.style.opacity = 0.18 + Math.random() * 0.35;

  leaf.style.transform = `rotate(${Math.random() * 360}deg)`;

  leaf.style.filter = `blur(${Math.random() * 1.2}px)`;

  document.body.appendChild(leaf);

  setTimeout(() => {
    leaf.remove();
  }, 15000);
}

setInterval(createLeaf, 2800);

/* =======================================================
   Character Modal
======================================================= */

const modal = document.querySelector("#character-modal");

const modalContent = document.querySelector("#modal-content");

const closeBtn = document.querySelector(".close-modal");

const characterData = {

sao:{

no:"001",

title:"쇼호인 사오",

jp:"匠鳳院 紗緒",

quote:"안개는 길을 기억한다.",

age:"22세",

height:"175cm",

birth:"七月 七日",

symbol:"못",

group:"遊園",

story:`
안개가 가장 짙게 머무는 새벽이면
신사 뒤편 연못가를 홀로 걷는다.

그는 말이 적지만
누군가 길을 잃으면
가장 먼저 찾아오는 사람이다.

마을 사람들은
그를 '신의 아이'라 부르기도 한다.
`,

relation:`
소네

현 무녀.

────────────

시모가 시논

오랜 친구.

────────────

사야 소우시

비가 오는 날이면 자주 마주친다.
`

},

soushi:{

no:"002",

title:"사야 소우시",

jp:"紗夜 奏志",

quote:"비는 모든 흔적을 지운다.",

age:"23세",

height:"178cm",

birth:"七月 十三日",

symbol:"먹",

group:"遊園",

story:`
항상 조용한 표정으로
붓을 들고 글을 적는다.

마을에서 가장 많은 기록을 남기지만
정작 자신의 이야기는
한 줄도 적지 않는다.

비가 오는 날이면
혼자 신사 처마 밑에 앉아 있는 모습을
종종 볼 수 있다.
`,

relation:`
쇼호인 사오

조용한 벗.

────────────

소네

제례를 함께 준비한다.
`

},

sone:{

no:"003",

title:"소네",

jp:"苑",

quote:"신께 올리는 기도는 거짓이 없어야 합니다.",

age:"22세",

height:"168cm",

birth:"七月 二十一日",

symbol:"방울",

group:"遊園 神社",

story:`
유원의 현 무녀.

마을의 제사와 의식을 모두 주관하며
신의 뜻을 가장 가까이에서 전한다고 여겨진다.

항상 온화하게 웃지만
안개가 짙어지는 날에는
그 누구도 그녀에게 말을 걸지 않는다.
`,

relation:`
쇼호인 사오

늘 함께 행동한다.

────────────

사야 소우시

제례 준비를 함께한다.
`

},

  shinon:{

no:"004",

title:"시모가 시논",

jp:"下賀 紫乃",

quote:"종이학은 바람을 기억한다.",

age:"21세",

height:"172cm",

birth:"七月 二十八日",

symbol:"종이학",

group:"遊園",

story:`
말보다 행동이 앞서는 청년.

언제나 종이학을 접어
마을 아이들에게 나누어 준다.

겉으로는 무심해 보이지만
누군가 다치거나 길을 잃으면
가장 먼저 달려오는 사람이다.

그가 접은 종이학은
유원의 부적으로 여겨진다.
`,

relation:`
쇼호인 사오

오랜 친구.

────────────

소네

종종 신사 일을 도와준다.

────────────

셋츠 시즈마

말은 적지만 서로를 이해한다.
`

},

shizuma:{

no:"005",

title:"셋츠 시즈마",

jp:"雪津 静真",

quote:"바람은 흔적을 남기지 않는다.",

age:"24세",

height:"181cm",

birth:"七月 三十日",

symbol:"시메나와",

group:"遊園",

story:`
마을에서도 가장 조용한 남자.

늘 사람들보다 한 걸음 뒤에 서 있으며
필요할 때만 모습을 드러낸다.

그가 언제 잠드는지,
언제 일어나는지
아는 사람은 아무도 없다.

안개가 가장 짙은 밤,
홀로 신사 숲으로 향하는 모습을
봤다는 이야기만 전해질 뿐이다.
`,

relation:`
시모가 시논

말없이 함께 있는 시간이 많다.

────────────

소네

신사를 지키는 일을 돕는다.
`

}

};
/* =======================================================
   Character Modal
======================================================= */

document.querySelectorAll(".character-card").forEach((card)=>{

    card.addEventListener("click",()=>{

        const id=card.dataset.character;

        const data=characterData[id];

        if(!data) return;

        modal.classList.add("show");

        modalContent.innerHTML=`

<div class="archive-top">

<div class="archive-logo">

遊園

</div>

<div class="archive-title">

人物錄

</div>

<div class="archive-number">

No.${data.no}

</div>

<div class="archive-name">

${data.title}

</div>

<div class="archive-jp">

${data.jp}

</div>

</div>

<div class="archive-divider"></div>

<div class="archive-quote">

「 ${data.quote} 」

</div>

<div class="archive-grid">

<div class="archive-side">

<div class="archive-card">

<h3>人物</h3>

<div class="profile-table">

<div class="profile-label">나이</div>
<div class="profile-value">${data.age}</div>

<div class="profile-label">신장</div>
<div class="profile-value">${data.height}</div>

<div class="profile-label">생일</div>
<div class="profile-value">${data.birth}</div>

<div class="profile-label">상징</div>
<div class="profile-value">${data.symbol}</div>

<div class="profile-label">소속</div>
<div class="profile-value">${data.group}</div>

</div>

</div>

<div class="archive-card">

<h3>關係</h3>

<div class="archive-relations">

${data.relation.replace(/\n/g,"<br>")}

</div>

</div>

</div>

<div class="archive-story">

<h3>記錄</h3>

<p>

${data.story.replace(/\n/g,"<br>")}

</p>

</div>

</div>

`;

    });

});

/* 닫기 버튼 */

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

/* 바깥 클릭 */

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

/* ESC */

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("show");
  }
});
/* =======================================================
   Calendar
======================================================= */

const jpMonths=[
"一月","二月","三月","四月",
"五月","六月","七月","八月",
"九月","十月","十一月","十二月"
];

const schedules={

"2001-7-7":{
title:"칠석 제례",
desc:"신사에서 칠석 제례를 준비합니다.",
icon:"🌫"
},

"2001-7-13":{
title:"무녀 의식",
desc:"현 무녀가 신에게 기도를 올립니다.",
icon:"🎐"
},

"2001-7-21":{
title:"신사 청소",
desc:"마을 주민들이 모두 신사를 정비합니다.",
icon:"⛩"
},

"2001-7-28":{
title:"안개 관측",
desc:"짙은 안개의 흐름을 기록합니다.",
icon:"🌧"
}

};

let currentDate=new Date(2001,6,1);

const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

function renderCalendar(){

const body=document.getElementById("calendarBody");

body.innerHTML="";

const year=currentDate.getFullYear();

const month=currentDate.getMonth();

document.getElementById("calendarTitle").textContent=
jpMonths[month];

document.getElementById("calendarSubTitle").textContent=
year;

const first=new Date(year,month,1).getDay();

const last=new Date(year,month+1,0).getDate();

let row=document.createElement("tr");

for(let i=0;i<first;i++){

row.appendChild(document.createElement("td"));

}

for(let day=1;day<=last;day++){

const td=document.createElement("td");

const key=`${year}-${month+1}-${day}`;

td.innerHTML=day;

if(schedules[key]){

td.classList.add("event-day");

td.innerHTML=`
${day}
<span class="event-flower">❀</span>
`;

}

td.onclick=()=>{

const data=schedules[key];

if(!data){

document.getElementById("scheduleTitle").textContent="등록된 일정 없음";

document.getElementById("scheduleDescription").textContent=
"이 날에는 기록이 남아있지 않습니다.";

document.getElementById("scheduleDate").textContent="";

return;

}

document.getElementById("scheduleTitle").textContent=
`${data.icon} ${data.title}`;

document.getElementById("scheduleDescription").textContent=
data.desc;

document.getElementById("scheduleDate").textContent=
`${year}年 ${month+1}月 ${day}日`;

};

row.appendChild(td);

if((first+day)%7===0){

body.appendChild(row);

row=document.createElement("tr");

}

}

while(row.children.length<7){

row.appendChild(document.createElement("td"));

}

body.appendChild(row);

}

renderCalendar();

prevMonth.onclick=()=>{

currentDate.setMonth(currentDate.getMonth()-1);

renderCalendar();

};

nextMonth.onclick=()=>{

currentDate.setMonth(currentDate.getMonth()+1);

renderCalendar();

};
/* =======================================================
   Music
======================================================= */

const music = document.getElementById("bgm");
const musicButton = document.getElementById("music-button");

let playing = false;

if (music && musicButton) {
  musicButton.addEventListener("click", () => {
    if (!playing) {
      music.play();

      playing = true;

      musicButton.innerHTML = "<span>❚❚</span>";
    } else {
      music.pause();

      playing = false;

      musicButton.innerHTML = "<span>♫</span>";
    }
  });
}
/* =======================================================
   Smooth Scroll Navigation
======================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

/* =======================================================
   Hero Scroll Effect
======================================================= */

const hero = document.getElementById("hero");

window.addEventListener("scroll", () => {
  const y = window.scrollY;

  hero.style.backgroundPositionY = `${y * 0.15}px`;
});

/* =======================================================
   Random Leaf Rotation
======================================================= */

setInterval(() => {
  document.querySelectorAll(".leaf").forEach((leaf) => {
    leaf.style.rotate = `${Math.random() * 360}deg`;
  });
}, 1200);

/* =======================================================
   Console Message
======================================================= */

console.log(
  `遊園 | Chapter I : 桃源鄕

외부인의 접근을 환영합니다.

하지만...

안개가 짙은 날에는
길을 잃지 않기를 바랍니다.`,
);
/* =======================================================
   Mist Parallax
======================================================= */

const fog = document.querySelector(".fog");

if (fog) {
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;

    fog.style.transform = `translate(${x}px, ${y}px)`;
  });
}
/* =======================================================
   Fog Mouse Drift
======================================================= */

const fogLayers = document.querySelectorAll(".fog-layer");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 12;

  const y = (e.clientY / window.innerHeight - 0.5) * 8;

  fogLayers.forEach((layer, index) => {
    const depth = (index + 1) * 0.5;

    layer.style.transform = `translate(${x * depth}px,${y * depth}px)`;
  });
});
