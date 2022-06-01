function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const body = document.querySelector('body');
const questions = body.querySelector('.questions');const question_0 = questions.querySelector('#question_0');
const ul0_answer = question_0.querySelector('#answers_0');
const answer0_box = ul0_answer.querySelectorAll('.qt-answer');
const answers_0 = [
    'answ_true.Audit',
    'answ.Senedlere nezaret prosesia',
    'answ.Autsors olunmus proses',
    'answ.Ana proses',
    'answ.Olcme',
];

shuffle(answers_0);
answer0_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_0[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_1 = questions.querySelector('#question_1');
const ul1_answer = question_1.querySelector('#answers_1');
const answer1_box = ul1_answer.querySelectorAll('.qt-answer');
const answers_1 = [
    'answ_true.Minor uygunsuzluq',
    'answ.Ehemiyyetsiz uygunsuzluq',
    'answ.Major uygunsuzluq',
    'answ.Yuksek ehemiyyetli uygunsuzluq',
    'answ.Hec biri',
];

shuffle(answers_1);
answer1_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_1[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_2 = questions.querySelector('#question_2');
const ul2_answer = question_2.querySelector('#answers_2');
const answer2_box = ul2_answer.querySelectorAll('.qt-answer');
const answers_2 = [
    'answ_true.ISO 19011',
    'answ.OHSAS 18001',
    'answ.ISO 9001',
    'answ.ISO 14001',
    'answ.ISO IEC 17025',
];

shuffle(answers_2);
answer2_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_2[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_3 = questions.querySelector('#question_3');
const ul3_answer = question_3.querySelector('#answers_3');
const answer3_box = ul3_answer.querySelectorAll('.qt-answer');
const answers_3 = [
    'answ_true.Bas auditor',
    'answ.Rehberlik',
    'answ.Audit qrupu',
    'answ.Auditor',
    'answ.Qrup rehberi',
];

shuffle(answers_3);
answer3_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_3[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_4 = questions.querySelector('#question_4');
const ul4_answer = question_4.querySelector('#answers_4');
const answer4_box = ul4_answer.querySelectorAll('.qt-answer');
const answers_4 = [
    'answ_true.Bas auditor',
    'answ.Rehberlik',
    'answ.Audit qrupu',
    'answ.Auditor',
    'answ.Qrup rehberi',
];

shuffle(answers_4);
answer4_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_4[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_5 = questions.querySelector('#question_5');
const ul5_answer = question_5.querySelector('#answers_5');
const answer5_box = ul5_answer.querySelectorAll('.qt-answer');
const answers_5 = [
    'answ_true.Muessisenin fealiyyetinin standartin sertlerine, elece de dvletin qanun ve qaydalarina uygun olub-olmadiginin askar edilmesi ',
    'answ.Muessisenin maliyye gstericilerinin duzgun teyin edilmesi',
    'answ.Muessisede fealiyyet gsteren butun personalin celb edilmesi',
    'answ.Rehberlik terefinden standartin tetbiqi istiqametinde iscilere tezyiq gsterilmesi',
    'answ.Isci memnuniyyetinin artirilmasi',
];

shuffle(answers_5);
answer5_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_5[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_6 = questions.querySelector('#question_6');
const ul6_answer = question_6.querySelector('#answers_6');
const answer6_box = ul6_answer.querySelectorAll('.qt-answer');
const answers_6 = [
    'answ_true.Acilis toplantisi',
    'answ.Rehberliyin tehlili toplantisi',
    'answ.Qapanis toplantisi',
    'answ.Audit qruplarin toplantisi',
    'answ.Auditorlarin qrup daxili toplantisi',
];

shuffle(answers_6);
answer6_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_6[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_7 = questions.querySelector('#question_7');
const ul7_answer = question_7.querySelector('#answers_7');
const answer7_box = ul7_answer.querySelectorAll('.qt-answer');
const answers_7 = [
    'answ_true.Auditor qrupu ile audit olunan teref arasinda obyektiv delillere esaslanaraq askar edilmis uygunsuzluqlarin fikir mubadilesini',
    'answ.Rehberliyin auditin gedisati haqda meruzesini',
    'answ.Auditor qrupu ile audit olunan teref arasinda musahidelere esaslanaraq askar edilmis uygunsuzluqlarin fikir mubadilesini',
    'answ.Askarlanmis uygunsuzluqlarin aradan qaldirilma usullarini',
    'answ.Onceden kecirilmis auditlerin neticelerini',
];

shuffle(answers_7);
answer7_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_7[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_8 = questions.querySelector('#question_8');
const ul8_answer = question_8.querySelector('#answers_8');
const answer8_box = ul8_answer.querySelectorAll('.qt-answer');
const answers_8 = [
    'answ_true.Muessise terefinden qebul edilen her hansi sertin yerine yetirilmemis olmasidir ',
    'answ.Proqnozlasdirilan hadiseler toplusudur',
    'answ.Standartin teleblerine riayet etmekdir',
    'answ.Muessise rehberinin iscilerin uzerinde nezaretidir',
    'answ.Musteri memnuniyyetidir',
];

shuffle(answers_8);
answer8_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_8[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_9 = questions.querySelector('#question_9');
const ul9_answer = question_9.querySelector('#answers_9');
const answer9_box = ul9_answer.querySelectorAll('.qt-answer');
const answers_9 = [
    'answ_true.Bir seyin dogrulugunu ve ya mumkunluyunu destekleyen melumatlar ',
    'answ.Subuta yetirilmemis faktlar',
    'answ.Iddialar',
    'answ.Texmin edilen fikirler',
    'answ.Proqnozlar',
];

shuffle(answers_9);
answer9_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_9[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_10 = questions.querySelector('#question_10');
const ul10_answer = question_10.querySelector('#answers_10');
const answer10_box = ul10_answer.querySelectorAll('.qt-answer');
const answers_10 = [
    'answ_true.2',
    'answ.3',
    'answ.4',
    'answ.5',
    'answ.6',
];

shuffle(answers_10);
answer10_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_10[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_11 = questions.querySelector('#question_11');
const ul11_answer = question_11.querySelector('#answers_11');
const answer11_box = ul11_answer.querySelectorAll('.qt-answer');
const answers_11 = [
    'answ_true.Muessisenin zu terefinden audit edilmesidir',
    'answ.4Sifarisci terefinden heyata kecirilen auditdir',
    'answ.Sertifikatlasdirma teskilati terefinden kecirilen auditdir',
    'answ.Yuksek cinli memur terefinden kecirilen auditdir',
    'answ.Muessise rehberinin sexsi yoxlamasidir',
];

shuffle(answers_11);
answer11_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_11[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_12 = questions.querySelector('#question_12');
const ul12_answer = question_12.querySelector('#answers_12');
const answer12_box = ul12_answer.querySelectorAll('.qt-answer');
const answers_12 = [
    'answ_true.Sifarisci terefinden heyata kecirilen auditdir ',
    'answ.Muessisenin zu terefinden audit edilmesidir ',
    'answ.Sertifikatlasdirma teskilati terefinden kecirilen auditdir',
    'answ.Yuksek cinli memur terefinden kecirilen auditdir',
    'answ.Muessise rehberinin sexsi yoxlamasidir',
];

shuffle(answers_12);
answer12_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_12[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_13 = questions.querySelector('#question_13');
const ul13_answer = question_13.querySelector('#answers_13');
const answer13_box = ul13_answer.querySelectorAll('.qt-answer');
const answers_13 = [
    'answ_true.Sertifikatlasdirma teskilati terefinden kecirilen auditdir',
    'answ.Sifarisci terefinden heyata kecirilen auditdir',
    'answ.Muessisenin zu terefinden audit edilmesidir',
    'answ.Yuksek cinli memur terefinden kecirilen auditdir',
    'answ.Muessise rehberinin z muessisesini yoxlamasidir',
];

shuffle(answers_13);
answer13_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_13[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_14 = questions.querySelector('#question_14');
const ul14_answer = question_14.querySelector('#answers_14');
const answer14_box = ul14_answer.querySelectorAll('.qt-answer');
const answers_14 = [
    'answ_true.Sual siyahilarinin aktuallasdirilmasi',
    'answ.Audit raportunun hazirlanmasi',
    'answ.Audit zamani qeydlerin aparilmasi',
    'answ.Qapanis toplantisi',
    'answ.Duzeldici fealiyyetin grulmesi',
];

shuffle(answers_14);
answer14_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_14[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_15 = questions.querySelector('#question_15');
const ul15_answer = question_15.querySelector('#answers_15');
const answer15_box = ul15_answer.querySelectorAll('.qt-answer');
const answers_15 = [
    'answ_true.Telim kecmis auditorlar terefinden',
    'answ.Muessisenin rehberi terefinden',
    'answ.Audit edilecek sbenin mudiri terefinden',
    'answ.Audit edilecek sbenin iscileri terefinden',
    'answ.Kenardan gelmis mutexessisler terefinden',
];

shuffle(answers_15);
answer15_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_15[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_16 = questions.querySelector('#question_16');
const ul16_answer = question_16.querySelector('#answers_16');
const answer16_box = ul16_answer.querySelectorAll('.qt-answer');
const answers_16 = [
    'answ_true.Audit olunan blmenin cavabdehi terefinden',
    'answ.Qrup rehberi terefinden',
    'answ.Bas auditor terefinden ',
    'answ.Auditor terefinden',
    'answ.Audit eden muessisenin rehberi terefinden ',
];

shuffle(answers_16);
answer16_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_16[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_17 = questions.querySelector('#question_17');
const ul17_answer = question_17.querySelector('#answers_17');
const answer17_box = ul17_answer.querySelectorAll('.qt-answer');
const answers_17 = [
    'answ_true.Mueyyen olunmus uygunsuzlugun sebebinin aradan qaldirilmasi ucun',
    'answ.Bas vere bilecek uygunsuzlugun aradan qaldirilmasi ucun',
    'answ.Potensial uygunsuzlugun aradan qaldirilmasi ucun',
    'answ.Yalniz senedlerdeki uygunsuzluqlarin aradan qaldirilmasi ucun',
    'answ.Yalniz istehsalatdaki uygunsuzlugun aradan qaldirilmasi ucun',
];

shuffle(answers_17);
answer17_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_17[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_18 = questions.querySelector('#question_18');
const ul18_answer = question_18.querySelector('#answers_18');
const answer18_box = ul18_answer.querySelectorAll('.qt-answer');
const answers_18 = [
    'answ_true.Uygunsuzlugun bas verdiyi sbe/blmenin reisi ile auditor arasinda umumi raziliq esasinda',
    'answ.Auditor',
    'answ.Sertifikatlasdirma orqaninin rehberi',
    'answ.Muessisenin rehberi',
    'answ.Uygunsuzlugun bas verdiyi sbe/blmenin iscileri',
];

shuffle(answers_18);
answer18_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_18[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_19 = questions.querySelector('#question_19');
const ul19_answer = question_19.querySelector('#answers_19');
const answer19_box = ul19_answer.querySelectorAll('.qt-answer');
const answers_19 = [
    'answ_true.Auditorun calisdigi struktur blme',
    'answ.Rehberlik',
    'answ.Rehberlik temsilcisi',
    'answ.Diger auditor terefinden audit olunmus blme',
    'answ.Auditorun ixtisasina aid olmayan blme',
];

shuffle(answers_19);
answer19_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_19[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_20 = questions.querySelector('#question_20');
const ul20_answer = question_20.querySelector('#answers_20');
const answer20_box = ul20_answer.querySelectorAll('.qt-answer');
const answers_20 = [
    'answ_true.Auditin semereli kecmesinin teminati olaraq audit qrupu ucun muvafiq seraitin temin olunmasi',
    'answ.Auditin semereli kecmesi ucun struktur blmenin bosaldilmasi',
    'answ.Auditin semereli kecmesi ucun is prosesinin dayandirilmasi',
    'answ.Iscilerin audit prosesinden tamamile kenar tutulmasi',
    'answ.Hec bir informasiyanin verilmemesi ',
];

shuffle(answers_20);
answer20_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_20[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_21 = questions.querySelector('#question_21');
const ul21_answer = question_21.querySelector('#answers_21');
const answer21_box = ul21_answer.querySelectorAll('.qt-answer');
const answers_21 = [
    'answ_true.Bas auditor',
    'answ.Blme rehberi',
    'answ.Muessise rehberi',
    'answ.Texniki mutexessis',
    'answ.Rehberlik temsilcisi',
];

shuffle(answers_21);
answer21_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_21[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_22 = questions.querySelector('#question_22');
const ul22_answer = question_22.querySelector('#answers_22');
const answer22_box = ul22_answer.querySelectorAll('.qt-answer');
const answers_22 = [
    'answ_true.Rehberlik terefinden kecirilen yekun tehlil toplantisinda',
    'answ.Acilis toplantisinda',
    'answ.Qapanis toplantisinda',
    'answ.Ayliq kecirilen toplantida',
    'answ.Rubluk olaraq kecirilen toplantida',
];

shuffle(answers_22);
answer22_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_22[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_23 = questions.querySelector('#question_23');
const ul23_answer = question_23.querySelector('#answers_23');
const answer23_box = ul23_answer.querySelectorAll('.qt-answer');
const answers_23 = [
    'answ_true.Teskilatin umumi fealiyyetinin davamli olaraq yaxsilasdirmaq ucun tekrar edilen fealiyyetlerdir',
    'answ.Musteri memnuniyyetidir',
    'answ.Keyfiyyetli mehsul istehsali ucun prosesler arasinda elaqenin qurulmasi ve proseslerin ardicilliginin temin edilmesidir',
    'answ.Askar edilen uygunsuzluqlarin aradan qaldirilmasidir',
    'answ.Hec bir variantda cavab duzgun gsterilmemisdir',
];

shuffle(answers_23);
answer23_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_23[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_24 = questions.querySelector('#question_24');
const ul24_answer = question_24.querySelector('#answers_24');
const answer24_box = ul24_answer.querySelectorAll('.qt-answer');
const answers_24 = [
    'answ_true.Ireliye dogru audit',
    'answ.aquli audit',
    'answ.Geriye dogru audit',
    'answ.fuqi audit',
    'answ.Hec bir variantda cavab duzgun gsterilmemisdir',
];

shuffle(answers_24);
answer24_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_24[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_25 = questions.querySelector('#question_25');
const ul25_answer = question_25.querySelector('#answers_25');
const answer25_box = ul25_answer.querySelectorAll('.qt-answer');
const answers_25 = [
    'answ_true.Kompleks audit',
    'answ.Birlesdirilmis audit',
    'answ.Birge audit',
    'answ.Maraqli teref auditi',
    'answ.Hec bir cavab dogru deyil',
];

shuffle(answers_25);
answer25_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_25[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_26 = questions.querySelector('#question_26');
const ul26_answer = question_26.querySelector('#answers_26');
const answer26_box = ul26_answer.querySelectorAll('.qt-answer');
const answers_26 = [
    'answ_true.Auditi davam etmelidir',
    'answ.Uygunsuzluq qeyde almalidir',
    'answ.Bu barede rey ve tekliflerini vermelidir',
    'answ.Muessise rehberini melumatlandirmalidir',
    'answ.Hec bir cavab dogru deyil',
];

shuffle(answers_26);
answer26_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_26[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_27 = questions.querySelector('#question_27');
const ul27_answer = question_27.querySelector('#answers_27');
const answer27_box = ul27_answer.querySelectorAll('.qt-answer');
const answers_27 = [
    'answ_true.Askar edilmis uygunsuzluqlar ve sebebleri ucun tedbir grulmesi temin edilmelidir',
    'answ.Auditorlar z sahelerini audit ede bilerler',
    'answ.Daxili audit prosedurundan kenar hereket etmek olar',
    'answ.Daxili auditler musteriler terefinden aparila biler',
    'answ.Daxili auditler personalin motivasiyasini temin etmek ucun kecirilir',
];

shuffle(answers_27);
answer27_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_27[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_28 = questions.querySelector('#question_28');
const ul28_answer = question_28.querySelector('#answers_28');
const answer28_box = ul28_answer.querySelectorAll('.qt-answer');
const answers_28 = [
    'answ_true.Muessise terefinden qebul edilen her hansi bir sertin yerine yetirilmis olmasidir',
    'answ.Muessise terefinden qebul edilen her hansi bir sertden kenara cixmadir',
    'answ.Muessise terefinden qebul edilen her hansi bir sertin nezere alinmamasidir',
    'answ.Muessise terefinden qebul edilen her hansi bir sertin yerine yetirilmesi ile bagli hedeflerin teyin edilmesidir',
    'answ.Hec bir variantda cavab duzgun gsterilmemisdir',
];

shuffle(answers_28);
answer28_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_28[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_29 = questions.querySelector('#question_29');
const ul29_answer = question_29.querySelector('#answers_29');
const answer29_box = ul29_answer.querySelectorAll('.qt-answer');
const answers_29 = [
    'answ_true.Fealiyyet sahesinden asili olmayaraq istenilen muessisede tetbiq etmek mumkundur',
    'answ.Muessisenin idareetme sisteminin tetbiqi ile bagli xerclerini artirir',
    'answ.Dvlet muessiselerinde tetbiq edilmir ve ancaq zel sirketler ucun kecerlidir',
    'answ.Ancaq keyfiyyet ve SETEMM uzre cavabdeh blum mesuliyyet dasiyir',
    'answ.Hec bir variantda cavab duzgun gsterilmemisdir',
];

shuffle(answers_29);
answer29_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_29[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_30 = questions.querySelector('#question_30');
const ul30_answer = question_30.querySelector('#answers_30');
const answer30_box = ul30_answer.querySelectorAll('.qt-answer');
const answers_30 = [
    'answ_true.Isci sayini tenzimlemek',
    'answ.Sistemin inkisafina yardimci olmaq',
    'answ.Hedeflerin reallasmasina nail olmaq',
    'answ.Uygunsuzluqlarin azaldilmasi ucun obyektiv delilleri temin etmek',
    'answ.Muessisede zune inam formalasdirmaq',
];

shuffle(answers_30);
answer30_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_30[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_31 = questions.querySelector('#question_31');
const ul31_answer = question_31.querySelector('#answers_31');
const answer31_box = ul31_answer.querySelectorAll('.qt-answer');
const answers_31 = [
    'answ_true.Butun variantlar dogrudur',
    'answ.KIS-in semereli tetbiq edilib, islek veziyyetde olmasini',
    'answ.KIS-in ISO 9001:2015-in teleblerine cavab verib-vermemesini',
    'answ.KIS-in, teskilat terefinden islenib hazirlanmis KIS-e dair teleblere uygun olub-olmamasini ',
    'answ.Tetbiq sahesine uygun olaraq standartin zeruri tetbiq edilmeli olan maddeleri nezere alinib-alinmamasini',
];

shuffle(answers_31);
answer31_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_31[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_32 = questions.querySelector('#question_32');
const ul32_answer = question_32.querySelector('#answers_32');
const answer32_box = ul32_answer.querySelectorAll('.qt-answer');
const answers_32 = [
    'answ_true.Acilis toplantisinda',
    'answ.Qapanis toplantisinda',
    'answ.DFK toplantisi',
    'answ.Auditorlarin mesveret toplantisi',
    'answ.Hec biri',
];

shuffle(answers_32);
answer32_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_32[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_33 = questions.querySelector('#question_33');
const ul33_answer = question_33.querySelector('#answers_33');
const answer33_box = ul33_answer.querySelectorAll('.qt-answer');
const answers_33 = [
    'answ_true.Musahide, lcme, muayine vasitesi ile',
    'answ.Istintaq vasitesi ile',
    'answ.Muhakime vasitesi ile ',
    'answ.Audit edilecek iscilerin tesdiqi ile',
    'answ.Qrup rehberinin yazili tesdiqi ile',
];

shuffle(answers_33);
answer33_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_33[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_34 = questions.querySelector('#question_34');
const ul34_answer = question_34.querySelector('#answers_34');
const answer34_box = ul34_answer.querySelectorAll('.qt-answer');
const answers_34 = [
    'answ_true.Qerezlilik',
    'answ.Obyektivlik ',
    'answ.Calisqanliq ',
    'answ.Nezaket ',
    'answ.Pesekarliliq',
];

shuffle(answers_34);
answer34_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_34[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_35 = questions.querySelector('#question_35');
const ul35_answer = question_35.querySelector('#answers_35');
const answer35_box = ul35_answer.querySelectorAll('.qt-answer');
const answers_35 = [
    'answ_true.Yekun raportun muzakire edilmesi',
    'answ.Tanisliq, auditin meqsedi ve ehate dairesi',
    'answ.Aciqlanmali melumatlar, riayet edilmesi vacib olan qaydalar ',
    'answ.Beledcinin mueyyen edilmesi ',
    'answ.Audit proqrami haqqinda melumatlandirma',
];

shuffle(answers_35);
answer35_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_35[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_36 = questions.querySelector('#question_36');
const ul36_answer = question_36.querySelector('#answers_36');
const answer36_box = ul36_answer.querySelectorAll('.qt-answer');
const answers_36 = [
    'answ_true.3 il',
    'answ.2 il',
    'answ.Muddetsizdir',
    'answ.5 il',
    'answ.10 il',
];

shuffle(answers_36);
answer36_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_36[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_37 = questions.querySelector('#question_37');
const ul37_answer = question_37.querySelector('#answers_37');
const answer37_box = ul37_answer.querySelectorAll('.qt-answer');
const answers_37 = [
    'answ_true.cuncu teref auditi',
    'answ.Maraqli terefin kecirdiyi audit',
    'answ.Birinci teref auditi',
    'answ.Ikinci teref auditi',
    'answ.Hec bir audit nvunden istifade olunmur',
];

shuffle(answers_37);
answer37_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_37[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_38 = questions.querySelector('#question_38');
const ul38_answer = question_38.querySelector('#answers_38');
const answer38_box = ul38_answer.querySelectorAll('.qt-answer');
const answers_38 = [
    'answ_true.Bas auditor',
    'answ.Texniki mutexessis',
    'answ.Ekspert',
    'answ.Audit qrupu',
    'answ.Hec bir cavab dogru deyil',
];

shuffle(answers_38);
answer38_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_38[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_39 = questions.querySelector('#question_39');
const ul39_answer = question_39.querySelector('#answers_39');
const answer39_box = ul39_answer.querySelectorAll('.qt-answer');
const answers_39 = [
    'answ_true.Butun mvzulara toxundugunuza qerar vere bilirsiniz ',
    'answ.Iscilerin inkisafina yardimci olur',
    'answ.Davamli inkisafi temin edir',
    'answ.Tedarukculerin secilmesine kmek edir',
    'answ.nsiyyet ve elaqe yaradir',
];

shuffle(answers_39);
answer39_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_39[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_40 = questions.querySelector('#question_40');
const ul40_answer = question_40.querySelector('#answers_40');
const answer40_box = ul40_answer.querySelectorAll('.qt-answer');
const answers_40 = [
    'answ_true.Obyektivlik',
    'answ.Nezaketlilik',
    'answ.nsiyyetlilik',
    'answ.Prinsipialliq',
    'answ.Qabiliyyetlilik',
];

shuffle(answers_40);
answer40_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_40[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_41 = questions.querySelector('#question_41');
const ul41_answer = question_41.querySelector('#answers_41');
const answer41_box = ul41_answer.querySelectorAll('.qt-answer');
const answers_41 = [
    'answ_true.Audit edilecek muessise terefinden esaslandirilmis istisnalara esasen',
    'answ.Audit teskilati terefinden serbest teyin edilir',
    'answ.Audit eden teskilatla audit olunan teskilat arasinda umumi raziliq esasinda',
    'answ.Audit olunan teskilatin isteyi esasinda',
    'answ.Hec bir cavab dogru deyil',
];

shuffle(answers_41);
answer41_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_41[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_42 = questions.querySelector('#question_42');
const ul42_answer = question_42.querySelector('#answers_42');
const answer42_box = ul42_answer.querySelectorAll('.qt-answer');
const answers_42 = [
    'answ_true.Audit raportunun tesdiqi ve yayimi ',
    'answ.Isci senedlerin hazirlanmasi',
    'answ.Audit musahidelerinin tertibati',
    'answ.Audit qrupunun secilmesi qrupu',
    'answ.Audit planinin hazirlanmasi',
];

shuffle(answers_42);
answer42_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_42[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_43 = questions.querySelector('#question_43');
const ul43_answer = question_43.querySelector('#answers_43');
const answer43_box = ul43_answer.querySelectorAll('.qt-answer');
const answers_43 = [
    'answ_true.Daxili auditin neticeleri ',
    'answ.Auditin meqsedi',
    'answ.Auditin meyarlari',
    'answ.Tetbiq sahesi',
    'answ.Auditin obyektleri',
];

shuffle(answers_43);
answer43_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_43[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_44 = questions.querySelector('#question_44');
const ul44_answer = question_44.querySelector('#answers_44');
const answer44_box = ul44_answer.querySelectorAll('.qt-answer');
const answers_44 = [
    'answ_true.Major',
    'answ.Minor',
    'answ.Tertibat',
    'answ.Netice',
    'answ.Yoxlama',
];

shuffle(answers_44);
answer44_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_44[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_45 = questions.querySelector('#question_45');
const ul45_answer = question_45.querySelector('#answers_45');
const answer45_box = ul45_answer.querySelectorAll('.qt-answer');
const answers_45 = [
    'answ_true.I, III, V',
    'answ.II, III, IV, V',
    'answ.III, IV, V',
    'answ.I, II, III, V',
    'answ.I, II, III, IV, V',
];

shuffle(answers_45);
answer45_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_45[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_46 = questions.querySelector('#question_46');
const ul46_answer = question_46.querySelector('#answers_46');
const answer46_box = ul46_answer.querySelectorAll('.qt-answer');
const answers_46 = [
    'answ_true.1;2;4',
    'answ.1;2;3',
    'answ.2;3;4',
    'answ.1;3;5',
    'answ.3;4;5',
];

shuffle(answers_46);
answer46_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_46[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_47 = questions.querySelector('#question_47');
const ul47_answer = question_47.querySelector('#answers_47');
const answer47_box = ul47_answer.querySelectorAll('.qt-answer');
const answers_47 = [
    'answ_true.1;4;5;6',
    'answ.1;2;3;6',
    'answ.3;4;5;6',
    'answ.2;3;4;5',
    'answ.1;3;4;6',
];

shuffle(answers_47);
answer47_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_47[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_48 = questions.querySelector('#question_48');
const ul48_answer = question_48.querySelector('#answers_48');
const answer48_box = ul48_answer.querySelectorAll('.qt-answer');
const answers_48 = [
    'answ_true.I, IV, V, II, III',
    'answ.I, III, V, II',
    'answ.II, III, IV, V ',
    'answ.II, IV, V, I',
    'answ.I, IV, III, V',
];

shuffle(answers_48);
answer48_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_48[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});const question_49 = questions.querySelector('#question_49');
const ul49_answer = question_49.querySelector('#answers_49');
const answer49_box = ul49_answer.querySelectorAll('.qt-answer');
const answers_49 = [
    'answ_true.I, II, IV',
    'answ.I, III, V',
    'answ.II, IV, V',
    'answ.I, II, III, V',
    'answ.III, IV, V',
];

shuffle(answers_49);
answer49_box.forEach((box, b) => {
    const set_answer = document.createElement('p');
    const answer_arr = answers_49[b].split('.');
    box.classList.add(answer_arr[0]);
    answer_arr.shift();
    let get_answer = '';
    answer_arr.forEach(arr => {
        get_answer += arr;
    });
    set_answer.innerHTML = get_answer;
    box.appendChild(set_answer);
});