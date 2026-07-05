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
  sao: {
    title: "쇼호인 사오",
    text: "상징물 : 못\n안개가 늘 함께하는 청년.",
  },

  soushi: {
    title: "사야 소우시",
    text: "상징물 : 먹\n비가 내리는 날을 사랑한다.",
  },

  sone: {
    title: "소네",
    text: "상징물 : 방울\n신을 모시는 현 무녀.",
  },

  shinon: {
    title: "시모가 시논",
    text: "상징물 : 종이학\n말보다 행동이 앞서는 청년.",
  },

  shizuma: {
    title: "셋츠 시즈마",
    text: "상징물 : 시메나와\n바람처럼 흔적을 남기지 않는다.",
  },
};
/* =======================================================
   Character Modal
======================================================= */

document.querySelectorAll(".character-card").forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.dataset.character;

    const data = characterData[id];

    if (!data) return;

    modal.classList.add("show");

    modalContent.innerHTML = `
<h2>${data.title}</h2>
<p>${data.text.replace(/\n/g, "<br>")}</p>
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
   Calendar Button
======================================================= */

const prevMonth = document.getElementById("prevMonth");

const nextMonth = document.getElementById("nextMonth");

prevMonth.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);

  renderCalendar();
});

nextMonth.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);

  renderCalendar();
});
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
