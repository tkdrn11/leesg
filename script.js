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
        q: "오빠가 나랑 싸우고 속상해하면?",
        a: "차분하게 대화로 원인을 분석한다.",
        b: "일단 꼭 안아주며 마음부터 달래준다.",
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
        q: "오빠랑 싸웠을 때 나의 화해 방식은?",
        a: "문제가 해결될 때까지 논리적으로 따진다.",
        b: "풀어질 때까지 애교 부리거나 스킨십한다.",
        type: "TF", aScore: "T", bScore: "F"
    },
    {
        q: "오빠가 나한테 삐진 것 같을 때?",
        a: "왜 삐졌는지 조목조목 이유를 묻는다.",
        b: "일단 미안하다고 하고 기분을 살핀다.",
        type: "TF", aScore: "T", bScore: "F"
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
        type: "SN", aScore: "S", bScore: "N"
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
        q: "연애 백문백답을 한다면?",
        a: "질문 하나하나 성실하고 정확하게 채운다.",
        b: "내 마음이 이끄는 대로 느낌 있게 적는다.",
        type: "JP", aScore: "J", bScore: "P"
    },
];

const results = {
    "TYPE1": {
        title: "로맨틱한 정열가 🌹",
        img: "🌹",
        desc: "리모니는 온 마음을 다해 사랑을 쏟아붓는 열정적인 로맨티시스트예요! 사소한 기념일 하나도 소홀히 하지 않고, 오빠를 향한 애정 표현이 누구보다 확실하죠. 가끔은 질투쟁이 같은 모습도 보이지만, 그건 모두 오빠를 너무나 사랑하기 때문이랍니다. 세상 모든 로맨틱한 순간을 오빠와 함께 나누고 싶어 하는 진정한 사랑꾼 타입이에요.",
        tags: ["#사랑꾼", "#이벤트장인", "#질투쟁이"],
        manual: ["사랑한다는 말 하루 3번 필수", "기념일 까먹으면 큰일남", "눈을 맞추고 이야기 들어주세요"],
        stats: { cute: 80, sense: 60, humor: 50 }
    },
    "TYPE2": {
        title: "포근한 힐러 🧸",
        img: "🧸",
        desc: "리모니는 존재만으로도 주변을 따뜻하게 물들이는 인간 난로 같은 사람이에요. 오빠가 지치고 힘들 때 말없이 곁을 지켜주며 가장 큰 위로를 건네주는 든든한 휴식처죠. 세심한 배려와 깊은 공감 능력으로 상대의 마음을 녹여내며, 갈등보다는 화합을 중요시하는 부드럽지만 강한 내면을 가진 힐러 스타일이랍니다.",
        tags: ["#인간난로", "#배려왕", "#평화주의자"],
        manual: ["힘들 때 조용히 안아주세요", "거짓말하면 상처받아요", "맛있는 거 사주면 기분 풀림"],
        stats: { cute: 70, sense: 90, humor: 40 }
    },
    "TYPE3": {
        title: "스마트한 리더 😎",
        img: "😎",
        desc: "리모니는 연애에서 명확한 방향을 제시하는 똑똑하고 든든한 길잡이예요! 데이트 장소 선정부터 일정 조율까지, 막힘없는 추진력으로 오빠의 고민을 덜어주는 멋진 여자친구죠. 어떠한 돌발 상황에서도 당황하지 않고 지혜롭게 해결책을 찾아내며, 자기 주관이 뚜렷하면서도 오빠를 배려하는 세련된 리더십을 보여준답니다.",
        tags: ["#걸크러쉬", "#뇌섹녀", "#해결사"],
        manual: ["답답하게 굴면 화낼 수 있음", "칭찬해주면 더 잘해줌", "가끔은 리드 당하고 싶어함"],
        stats: { cute: 40, sense: 95, humor: 60 }
    },
    "TYPE4": {
        title: "자유로운 영혼 🦋",
        img: "🦋",
        desc: "리모니는 통통 튀는 반전 매력으로 매일매일을 시트콤처럼 만드는 즐거운 에너지의 소유자예요! 뻔한 데이트보다는 늘 새롭고 재미있는 경험을 즐기며, 오빠와 함께라면 어디든 모험이 되곤 하죠. 장난기 가득한 귀여운 모습 뒤에 자신만의 뚜렷한 세계를 가진 신비로운 매력까지 있어, 오빠가 도저히 눈을 뗄 수 없게 만드는 마성의 타입이랍니다.",
        tags: ["#통통튀는매력", "#4차원", "#장꾸"],
        manual: ["집에만 가둬두면 시무룩해짐", "같이 엽기사진 찍어주기", "가끔 혼자만의 시간도 필요함"],
        stats: { cute: 90, sense: 50, humor: 95 }
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
        "리모니를 분석 중...",
        "애정도 측정 중... ❤️",
        "상구쓰와의 궁합 계산 중...",
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

    // Map MBTI to 4 types
    let randomType = "TYPE1";
    if (mbti.includes('F') && mbti.includes('P')) randomType = "TYPE4"; // Free Spirit
    else if (mbti.includes('F') && mbti.includes('J')) randomType = mbti.includes('E') ? "TYPE1" : "TYPE2"; // Romantic or Healer
    else if (mbti.includes('T') && mbti.includes('J')) randomType = "TYPE3"; // Leader
    else if (mbti.includes('T') && mbti.includes('P')) randomType = "TYPE4"; // Free Spirit (or Leader?) -> Let's say TYPE4

    // Better mapping
    if (mbti === "ENFJ" || mbti === "ESFJ" || mbti === "ENFP") randomType = "TYPE1";
    else if (mbti === "INFJ" || mbti === "ISFJ" || mbti === "INFP" || mbti === "ISFP") randomType = "TYPE2";
    else if (mbti === "ENTJ" || mbti === "ESTJ" || mbti === "INTJ" || mbti === "ISTJ") randomType = "TYPE3";
    else randomType = "TYPE4"; // ENTP, ESTP, INTP, ISTP...

    const res = results[randomType];
    document.getElementById('result-title').innerText = res.title;
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

    // Compatibility Logic (Fixed to always be good with 'Warm Healer')
    // User is "Rimoni", Companion is "Oppa" (Fixed as TYPE2: Warm Healer)
    const compatibilityText = document.getElementById('compatibility-text');

    if (randomType === "TYPE1") {
        compatibilityText.innerHTML = `
            <b>[정열적인 장미 🌹 & 포근한 힐러 🧸]</b><br>
            사랑에 모든 걸 쏟는 리모니의 뜨거운 마음을 오빠의 넓고 따뜻한 이해심이 완벽하게 감싸 안아주는 조합이에요!
            리모니가 때로 격정적인 감정을 보일지라도, 오빠는 그 속에 담긴 깊은 사랑을 알아봐 주고 묵묵히 곁을 지켜주죠.
            리모니의 열정이 오빠에게 에너지가 되고, 오빠의 평온함이 리모니에게 안식처가 되는 환상의 케미입니다! 🔥❤️🧸
        `;
    } else if (randomType === "TYPE2") {
        compatibilityText.innerHTML = `
            <b>[포근한 힐러 🧸 & 포근한 힐러 🧸]</b><br>
            말하지 않아도 서로의 마음을 읽어내는 '영혼의 단짝' 같은 커플이에요!
            두 분 다 배려가 몸에 배어 있어 다툴 일이 거의 없고, 서로에게 상처 주지 않으려 노력하는 모습이 너무 예쁜 조합이죠.
            리모니와 오빠가 함께 있으면 세상 그 어디보다 편안한 온기가 가득해요.
            서로가 서로의 최고의 편이 되어주는 가장 평화롭고 따뜻한 사랑을 하고 계시네요. 🧸❤️🧸
        `;
    } else if (randomType === "TYPE3") {
        compatibilityText.innerHTML = `
            <b>[스마트한 리더 😎 & 포근한 힐러 🧸]</b><br>
            똑 부러지게 앞장서는 리모니와 그런 리모니를 뒤에서 든든하게 받쳐주는 오빠의 만남!
            리모니가 세상의 거친 파도를 헤쳐 나갈 때, 오빠는 언제든 돌아와 쉴 수 있는 가장 포근한 구명보트가 되어줄 거예요.
            리모니의 지혜로운 판단력과 오빠의 세심한 정서적 지지가 만나면 그 어떤 시련도 두렵지 않은 무적의 커플이 된답니다. �✨
        `;
    } else if (randomType === "TYPE4") {
        compatibilityText.innerHTML = `
            <b>[자유로운 영혼 🦋 & 포근한 힐러 🧸]</b><br>
            어디로 튈지 모르는 리모니의 엉뚱하고 귀여운 장난을 오빠가 너그러운 웃음으로 다 받아주는 찰떡궁합이에요!
            리모니가 매일 새로운 세상을 꿈꿀 때 오빠는 그 꿈이 안전하게 펼쳐질 수 있도록 보금자리를 만들어주죠.
            때로는 시트콤 같고 때로는 멜로 영화 같은 다채로운 연애!
            오빠라는 넓은 바다 위에서 리모니라는 나비가 마음껏 날아다니는 아름다운 모습이에요. 🦋�🧸
        `;
    }

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
