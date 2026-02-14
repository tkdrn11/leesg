const questions = [
    {
        q: "데이트 계획을 세울 때 나는?",
        a: "시간 단위로 꼼꼼하게 계획한다!",
        b: "그날 기분에 맞춰 유동적으로 정한다!",
        type: "JP", aScore: "J", bScore: "P"
    },
    {
        q: "오빠에게 줄 선물 고를 때?",
        a: "가장 실용적이고 필요한 것!",
        b: "정성과 감성이 듬뿍 담긴 것!",
        type: "TF", aScore: "T", bScore: "F"
    },
    {
        q: "나의 소중한 물건을 오빠가 실수로 깨뜨렸다면?",
        a: "속상하지만 이미 벌어진 일. '조심 좀 하지 왜 그랬어?'",
        b: "당황해서 미안해하는 오빠 마음부터 살펴. '괜찮아! 안 다쳤어?'",
        type: "TF", aScore: "T", bScore: "F"
    },
    {
        q: "데이트 없는 주말, 나의 에너지는?",
        a: "집에서 뒹굴거리며 폰 하기 (기력 보충)",
        b: "친구라도 만나서 밖으로 나가기 (기분 전환)",
        type: "EI", aScore: "I", bScore: "E"
    },
    {
        q: "여행 가서 갑자기 일정이 틀어진다면?",
        a: "스트레스 받지만 대안을 빨리 찾는다.",
        b: "그럴 수도 있지! 발길 닿는 대로 간다.",
        type: "JP", aScore: "J", bScore: "P"
    },
    {
        q: "기념일에 받고 싶은 선물은?",
        a: "내가 말했던 바로 그 필요한 아이템!",
        b: "오빠가 고민해서 준비한 서프라이즈!",
        type: "SN", aScore: "S", bScore: "N"
    },
    {
        q: "내 절친의 깻잎을 오빠가 떼어준다면?",
        a: "매너 좋네! 고맙다고 한다.",
        b: "손이 없어? 왜 떼어줘? 질투 폭발!",
        type: "TF", aScore: "T", bScore: "F"
    },
    {
        q: "연락 빈도, 나에게 더 중요한 건?",
        a: "일정한 시간에 규칙적인 연락",
        b: "자유롭지만 실시간으로 소통하기",
        type: "JP", aScore: "J", bScore: "P"
    },
    {
        q: "관계에서의 '선의의 거짓말'에 대해?",
        a: "아무리 그래도 거짓말은 지양해야 해.",
        b: "상대에게 상처 주지 않기 위해 가끔은 필요해.",
        type: "TF", aScore: "T", bScore: "F"
    },
    {
        q: "집 데이트 후 어지러진 방을 보면?",
        a: "나중에 오빠 가고 나서 천천히 치운다.",
        b: "깔끔한 게 좋아! 그때그때 바로 정리한다.",
        type: "JP", aScore: "P", bScore: "J"
    },
    {
        q: "데이트 중 예쁜 카페를 발견했다면?",
        a: "메뉴판 먼저 확인하고 맛이 중요하지!",
        b: "카페 분위기랑 인테리어 상상하며 설렌다!",
        type: "SN", aScore: "S", bScore: "N"
    },
    {
        q: "오빠가 '나 몸이 안 좋아'라고 하면?",
        a: "어디가 어떻게 아픈데? 약은 먹었어?",
        b: "헐 어떡해ㅠㅠ 내가 갈까? 많이 아파?ㅠㅠ",
        type: "SN", aScore: "S", bScore: "N" // This acts more like TF but kept for SN balance per previous logic
    },
    {
        q: "우리의 미래를 이야기할 때 나는?",
        a: "구체적인 수입, 집, 자녀 계획 등 현실적인 얘기",
        b: "함께 늙어가는 따뜻한 분위기와 막연한 행복",
        type: "SN", aScore: "S", bScore: "N"
    },
    {
        q: "기념일 데이트 장소를 고를 때?",
        a: "오붓하게 우리끼리만 있는 조용한 공간",
        b: "사람 많고 화려한 요즘 제일 핫한 핫플",
        type: "EI", aScore: "I", bScore: "E"
    },
    {
        q: "영화나 드라마 볼 때 나의 몰입도는?",
        a: "상황 설정의 현실성을 따지며 본다.",
        b: "내가 주인공이 된 것처럼 감정 이입한다.",
        type: "SN", aScore: "S", bScore: "N"
    },
    {
        q: "연인과 약속 없는 '번개 데이트'에 대한 생각은?",
        a: "갑자기 보니까 더 반갑고 설레! 언제든 환영이야.",
        b: "내 일정이 꼬이는 것 같아 조금 부담스러워. 미리 정하는 게 좋아.",
        type: "JP", aScore: "P", bScore: "J"
    },
    {
        q: "내가 고민을 털어놓을 때, 상대가 해줬으면 하는 것은?",
        a: "나를 속 시원하게 해줄 구체적인 해결책과 조언.",
        b: "내 마음을 토닥여주는 따뜻한 위로와 무조건적인 공감.",
        type: "TF", aScore: "T", bScore: "F"
    },
    {
        q: "서운함이 생겼을 때 나의 대화 스타일은?",
        a: "왜 서운한지 논리적으로 조목조목 설명하고 풀려 한다.",
        b: "지금 내 기분이 얼마나 상처받았는지 감정 위주로 전달한다.",
        type: "TF", aScore: "T", bScore: "F"
    },
    {
        q: "오빠랑 하루의 일상을 공유할 때?",
        a: "지금 뭐 하고 있는지 사소한 것도 실시간 브리핑!",
        b: "정리가 된 후에 굵직한 일 위주로 나중에 공유.",
        type: "EI", aScore: "E", bScore: "I"
    },
    {
        q: "다른 커플과의 '더블 데이트' 제안을 받는다면?",
        a: "새로운 사람도 만나고 다 같이 노는 거 재밌지!",
        b: "모르는 사람 섞이면 피곤해.. 우리 둘이서만 놀자.",
        type: "EI", aScore: "E", bScore: "I"
    }
];

const results = {
    "TYPE1": {
        title: "로맨틱한 정열가 🌹",
        img: "🌹",
        desc: "사랑을 아낌없이 표현하고 관계의 성장을 위해 끊임없이 노력하는 따뜻한 리더예요! 연인을 위한 서프라이즈와 꼼꼼한 케어를 즐기며, 함께하는 모든 순간에 온 마음을 다합니다. 때론 격한 질투도 사랑의 증거라 믿는 뜨거운 사랑꾼 타입이죠.",
        tags: ["#표현의왕", "#사랑의리더", "#열정사랑꾼"],
        manual: ["사랑한다는 말 아끼지 않기", "사소한 변화도 알아채주기", "미래 계획 함께 세우기"],
        stats: { cute: 85, sense: 70, humor: 60 }
    },
    "TYPE2": {
        title: "다정한 수호자 🧸",
        img: "🧸",
        desc: "조용히 곁을 지켜주며 연인의 필요를 세심하게 알아채는 헌신적인 안식처예요. 화려한 이벤트보다 진심 어린 말 한마디와 한결같은 태도를 소중히 여깁니다. 연인이 지쳤을 때 아무 말 없이 안아주는 것만으로도 큰 위안을 주는 깊은 내면의 소유자랍니다.",
        tags: ["#헌신적안식처", "#배려의달인", "#한결같음"],
        manual: ["고마움을 충분히 표현하기", "거짓말은 금물!", "조용히 쉬고 싶을 때 방해하지 않기"],
        stats: { cute: 75, sense: 95, humor: 40 }
    },
    "TYPE3": {
        title: "스마트한 가이드 😎",
        img: "😎",
        desc: "명확한 주관과 논리적인 소통으로 관계를 주도하는 든든한 해결사예요! 데이트의 질과 효율을 중요하게 생각하며, 어려운 상황에서도 지혜롭게 돌파구를 찾아내죠. 감정적인 소모보다는 명쾌한 대화를 선호하며, 연인에게 의지가 되는 멋진 파트너 스타일입니다.",
        tags: ["#해결사파트너", "#명쾌한소통", "#자기관리철저"],
        manual: ["답답하게 굴지 않기", "능력을 인정하고 칭찬하기", "가끔은 투정도 다 받아주기"],
        stats: { cute: 45, sense: 98, humor: 65 }
    },
    "TYPE4": {
        title: "침착한 분석가 �",
        img: "�",
        desc: "겉은 단단하고 차가워 보일 수 있지만, 사실 누구보다 관계를 진지하고 깊게 생각하는 신중파예요. 섣부른 감정 폭발보다 문제의 본질을 파악하려 노력하며, 한번 신뢰한 연인에게는 끝까지 충성스러운 알짜배기 사랑꾼이랍니다. 독립적인 공간과 시간이 소중한 현실적인 연인이에요.",
        tags: ["#내공깊은사랑", "#신중한관계", "#알짜배기"],
        manual: ["감정적으로 몰아세우지 않기", "함께 성장하는 대화하기", "혼자만의 시간 존중해주기"],
        stats: { cute: 40, sense: 90, humor: 50 }
    },
    "TYPE5": {
        title: "빛나는 비타민 ☀️",
        img: "☀️",
        desc: "함께 있으면 지루할 틈이 없는 에너자이저! 밝은 에너지와 긍정적인 생각으로 연인의 삶에 웃음꽃을 피워줍니다. 뻔한 데이트 루틴을 거부하며, 늘 새로운 즐거움을 찾아내어 매일을 특별한 영화의 한 장면처럼 만드는 마법 같은 존재랍니다.",
        tags: ["#긍정비타민", "#시트콤연애", "#무한매력"],
        manual: ["같이 신나게 리액션해주기", "장난꾸러기 같은 모습 귀여워하기", "가끔은 차분하게 들어주기"],
        stats: { cute: 98, sense: 60, humor: 95 }
    },
    "TYPE6": {
        title: "섬세한 예술가 🎨",
        img: "🎨",
        desc: "사소한 온기와 말투 하나에도 깊게 반응하고 감동하는 말랑말랑한 감성파예요. 화려함보다 두 사람만의 특별한 감성과 고유한 분위기를 무엇보다 소중히 여깁니다. 상처받기 쉽지만 그만큼 연인을 향한 마음이 깊고 아름다운 로맨티시스트랍니다.",
        tags: ["#감동하는마음", "#예술적감성", "#순수한사랑"],
        manual: ["예쁜 말만 골라쓰기", "마음을 충분히 읽어주기", "작은 선물에도 의미 부여해주기"],
        stats: { cute: 90, sense: 55, humor: 50 }
    },
    "TYPE7": {
        title: "쿨한 모험가 ⛵",
        img: "⛵",
        desc: "뒤끝 없이 시원시원하고 스릴 넘치는 연애를 추구하는 자유로운 영혼이에요! 복잡한 밀당보다 솔직하고 직설적인 표현을 선호하며, 함께 있을 때 가장 재미있는 친구 같은 연인이기도 하죠. 고리타분한 형식을 벗어나 매 순간을 즐기는 쿨한 매력의 소유자랍니다.",
        tags: ["#쿨한매력", "#스릴넘치는연애", "#솔직담백"],
        manual: ["속으로 쌓아두지 말고 말하기", "같이 즐거운 모험 떠나기", "자존심 건드리지 않기"],
        stats: { cute: 50, sense: 85, humor: 98 }
    },
    "TYPE8": {
        title: "시크한 마이웨이 🦋",
        img: "🦋",
        desc: "자신만의 세계가 뚜렷하고 타인의 시선에 흔들리지 않는 쿨한 개인주의자 스타일이에요. 서로의 사생활과 경계를 완벽하게 존중해 줄 때 가장 행복을 느낍니다. 겉보기엔 무심해 보여도 오직 당신에게만 마음을 열고 곁을 허락한, 아주 특별하고 시크한 연인이죠.",
        tags: ["#독립적관계", "#쿨내진동", "#특별한허락"],
        manual: ["적당한 거리 유지 필수", "과도한 관심보다는 믿음 보여주기", "진솔하고 담백하게 다가가기"],
        stats: { cute: 35, sense: 95, humor: 80 }
    }
};

let currentQuestion = 0;
let score = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
};
let userAnswers = [];

function startQuiz() {
    document.getElementById('intro').classList.remove('active');
    document.getElementById('intro').style.display = 'none';
    document.getElementById('quiz').classList.add('active');
    document.getElementById('quiz').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question-text').innerText = q.q;
    document.getElementById('btn-A').innerText = q.a;
    document.getElementById('btn-B').innerText = q.b;

    // Progress Bar
    const percent = ((currentQuestion) / questions.length) * 100;
    document.getElementById('progress').style.width = percent + '%';

    // Back Button Visibility
    const backBtn = document.getElementById('btn-back');
    if (currentQuestion > 0) {
        backBtn.style.display = 'inline-block';
    } else {
        backBtn.style.display = 'none';
    }
}

function nextQuestion(choice) {
    // Blur buttons to fix sticky hover on mobile
    document.getElementById('btn-A').blur();
    document.getElementById('btn-B').blur();

    // Store answer
    userAnswers[currentQuestion] = choice;

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        calculateScore();
        showLoading();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function calculateScore() {
    // Reset score
    score = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    userAnswers.forEach((choice, index) => {
        const q = questions[index];
        const point = (choice === 'A') ? q.aScore : q.bScore;
        score[point]++;
    });
}

function showLoading() {
    document.getElementById('quiz').classList.remove('active');
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('loading').classList.add('active');
    document.getElementById('loading').style.display = 'block';

    // Fake analysis text animation
    const loadingTexts = [
        "리모니의 연애관 분석 중...",
        "우리의 갈등 해결 방식 측정 중...",
        "상구쓰와의 운명적 데이터 대입 중...",
        "결과 도출 완료!"
    ];

    let step = 0;
    const interval = setInterval(() => {
        if (step < loadingTexts.length) {
            document.getElementById('loading-text').innerText = loadingTexts[step];
            step++;
        } else {
            clearInterval(interval);
            showResult();
        }
    }, 800);
}

function showResult() {
    document.getElementById('loading').classList.remove('active');
    document.getElementById('loading').style.display = 'none';
    document.getElementById('result').classList.add('active');
    document.getElementById('result').style.display = 'block';

    // Calculate final MBTI
    const mbti =
        (score.E >= score.I ? 'E' : 'I') +
        (score.S >= score.N ? 'S' : 'N') +
        (score.T >= score.F ? 'T' : 'F') +
        (score.J >= score.P ? 'J' : 'P');

    // --- Granular 8-Type Mapping ---
    let finalType = "TYPE1";

    if (mbti.includes('FJ')) {
        finalType = mbti.includes('E') ? "TYPE1" : "TYPE2"; // ExFJ: TYPE1, IxFJ: TYPE2
    } else if (mbti.includes('TJ')) {
        finalType = mbti.includes('E') ? "TYPE3" : "TYPE4"; // ExTJ: TYPE3, IxTJ: TYPE4
    } else if (mbti.includes('FP')) {
        finalType = mbti.includes('E') ? "TYPE5" : "TYPE6"; // ExFP: TYPE5, IxFP: TYPE6
    } else if (mbti.includes('TP')) {
        finalType = mbti.includes('E') ? "TYPE7" : "TYPE8"; // ExTP: TYPE7, IxTP: TYPE8
    }

    const res = results[finalType];
    document.getElementById('result-title').innerHTML = `${res.title} <span style="font-size: 1rem; color: #888;">(${mbti})</span>`;
    document.getElementById('result-img').innerText = res.img;
    document.getElementById('result-desc').innerText = res.desc;

    // Update Fun Elements
    // Hashtags
    document.getElementById('result-tag1').innerText = res.tags[0];
    document.getElementById('result-tag2').innerText = res.tags[1];
    document.getElementById('result-tag3').innerText = res.tags[2];

    // Manual
    const manualList = document.getElementById('result-manual');
    manualList.innerHTML = '';
    res.manual.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        manualList.appendChild(li);
    });

    // Stats (Animate bars)
    setTimeout(() => {
        document.getElementById('stat-cute').style.width = res.stats.cute + '%';
        document.getElementById('stat-sense').style.width = res.stats.sense + '%';
        document.getElementById('stat-humor').style.width = res.stats.humor + '%';
    }, 100);

    // Compatibility Logic (All compared against TYPE8 - Chic Individualist)
    const compatibilityText = document.getElementById('compatibility-text');

    const descriptions = {
        "TYPE1": {
            pair: "정열적인 장미 🌹 & 시크한 마이웨이 🦋",
            msg: "불꽃처럼 뜨거운 리모니와 고요한 밤바다 같은 오빠의 만남! 리모니의 넘치는 애정 표현이 무심한 오빠의 심장을 매일 새롭게 뛰게 합니다. 오빠의 차분함은 리모니의 불안을 잠재우고, 리모니의 활력은 오빠의 세상을 밝혀주는 정반대의 매력이 시너지를 내는 환상의 조합이에요! 🔥❤️🦋"
        },
        "TYPE2": {
            pair: "다정한 수호자 🧸 & 시크한 마이웨이 🦋",
            msg: "묵묵히 연인을 지키는 리모니와 혼자만의 선을 중시하는 오빠는 서로의 사생활을 가장 잘 존중해 줄 수 있는 커플입니다. 오빠가 동굴로 들어가고 싶을 때, 리모니는 밖에서 따뜻한 차를 끓여두고 기다릴 줄 아는 최고의 이해자죠. 시간이 갈수록 신뢰가 겹겹이 쌓이는 아주 단단하고 평온한 관계예요! 🧸❤️🦋"
        },
        "TYPE3": {
            pair: "스마트한 가이드 😎 & 시크한 마이웨이 🦋",
            msg: "똑 부러지는 리모니와 쿨한 오빠의 만남은 '세련된 어른들의 연애' 그 자체입니다! 감정 소모보다는 명확한 대화와 서로의 커리어를 중시하죠. 각자의 영역을 침범하지 않으면서도, 어려운 일이 생기면 머리를 맞대고 가장 효율적인 답을 찾아내어 함께 승리하는 멋진 파트너십을 보여줍니다! �❤️🦋"
        },
        "TYPE4": {
            pair: "침착한 분석가 🧐 & 시크한 마이웨이 🦋",
            msg: "둘 다 신중하고 이성적인 성향이라 다툴 일이 거의 없는 '평화주의 지적 커플'입니다. 긴 말 하지 않아도 서로의 생각을 읽어낼 수 있는 깊은 동질감을 느끼죠. 화려한 데이트 대신 각자 책을 읽거나 할 일을 하면서 같은 공간에 있는 것만으로도 충분히 행복을 느끼는, 아주 높은 싱크로율의 짝꿍이에요! 🧐❤️🦋"
        },
        "TYPE5": {
            pair: "빛나는 비타민 ☀️ & 시크한 마이웨이 🦋",
            msg: "통통 튀는 비타민 리모니가 시크한 오빠의 일상에 매일 작은 마법을 부리는 조합입니다! 오빠는 리모니의 엉뚱하고 밝은 매력에 피식 웃음을 터뜨리고, 리모니는 오빠의 묵직한 안정감 속에서 마음껏 뛰어놀죠. 정적인 오빠를 움직이게 만드는 리모니의 에너지가 관계를 항상 싱그럽게 유지해 줍니다! ☀️❤️🦋"
        },
        "TYPE6": {
            pair: "섬세한 예술가 🎨 & 시크한 마이웨이 🦋",
            msg: "말랑말랑한 감성을 가진 리모니를 오빠가 조금은 무뚝뚝하지만 확실한 논리로 지켜주는 관계예요. 리모니가 감정의 파도에 휩쓸릴 때 오빠는 단단한 바위처럼 그 자리를 지켜주죠. 리모니의 섬세함은 오빠의 건조한 세상에 색채를 입히고, 오빠의 현실적인 조언은 리모니에게 든든한 등대가 되어줍니다. 🎨❤️🦋"
        },
        "TYPE7": {
            pair: "쿨한 모험가 ⛵ & 시크한 마이웨이 🦋",
            msg: "뒤끝 없는 쿨한 두 사람의 만남! 관계의 구속보다 '함께 즐거운가'가 가장 중요한 쿨한 커플입니다. 서로 집착하지 않으면서도 번개 데이트나 예상치 못한 즐거움을 아주 잘 즐기죠. 복잡한 생각 없이 현재의 행복에 충실하며, 친구 같은 편안함과 연인의 설렘을 동시에 유지하는 아주 트렌디한 조합이에요! ⛵❤️🦋"
        },
        "TYPE8": {
            pair: "시크한 마이웨이 🦋 & 시크한 마이웨이 🦋",
            msg: "말하지 않아도 서로가 가장 필요로 하는 '적당한 거리'를 완벽하게 아는 소울메이트! 둘 다 개인의 자유를 중시하기 때문에 집착이나 간섭 없는 가장 편안한 연애를 할 수 있어요. 각자 할 일 하다가 문득 눈이 마주쳤을 때 느끼는 동질감과 편안함이 이 커플의 가장 큰 무기입니다. 독립적이면서도 가장 끈끈한 세상 유일무이한 복제 커플! 🦋❤️🦋"
        }
    };

    const comp = descriptions[finalType];
    compatibilityText.innerHTML = `
        <b>[${comp.pair}]</b><br>
        ${comp.msg}
    `;

    // Confetti Effect
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}

function showLetter() {
    const msg = document.getElementById('special-msg');
    const btn = document.querySelector('.special-btn');
    const bgm = document.getElementById('bgm');
    const video = document.getElementById('special-video');

    // Play BGM (Mute if video has sound and you prefer that, but playing together for now)
    bgm.play();
    bgm.volume = 0.3;

    // Show and Play Video
    video.style.display = 'block';
    video.play();

    // Letter Content
    msg.innerHTML = `
        사랑하는 리몬쓰에게 ❤️

        하이 리몬쓰 ㅎㅎ
        리모니가 어떤 유형이 나오든,
        나한테는 리모니가 세상에서 제일 예쁘고 소중한 사람이야.

        우리 앞으로도 지금처럼 싸우지않고 예쁘게 만나자.
        익숙함에 속아 소중함을 잃지말자 리몬쓰!! 

        526일동안 함께해줘서 고마워 발렌타인 데이 선물이야 ㅎㅎ
        사랑해 리몬쓰 💕
    `;

    msg.style.display = 'block';
    btn.style.display = 'none';

    // More confetti specifically for the letter
    if (typeof confetti === 'function') {
        var duration = 3000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        var randomInRange = function (min, max) {
            return Math.random() * (max - min) + min;
        };

        var interval = setInterval(function () {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            var particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    }
}
