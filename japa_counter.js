//Accessing the elements of the Document

//Counter Elements
let single_count = document.getElementById('count-single');
let mala_count = document.getElementById('count-Mala');
let addSingle = document.getElementById('add-single');
let addMala = document.getElementById('add-Mala');
let minusSingle = document.getElementById('minus-single')
let minusMala = document.getElementById('minus-Mala')

//Notification Panel elements
let close_btn = document.getElementById('Hari-Bol');
let noti_panel = document.getElementsByClassName('notification-bar')[0];
let message = document.getElementsByClassName('message')[0];

//Set LocalStorage
/* Counter Variables */


let count1 = parseInt(localStorage.getItem("Single Count")) || 0;
let count2 = parseInt(localStorage.getItem("Japa Count")) || 0;
document.addEventListener("DOMContentLoaded", () => {
    single_count.innerHTML = `<b>${count1}</b>`;
    mala_count.innerHTML = `<b>${count2}</b>`;
});

//Function for addition of Single Count
addSingle.onclick = () => {
    count1++;
    localStorage.setItem("Single Count",`${count1}`);
    single_count.innerHTML = `<b>${count1}<b>`;
    let r = count1 % 108
    if(count1>=108){
        count1-=108;
    }
    if (r === 0 && count1 !== 0) {
        count2++;
        localStorage.setItem("Japa Count",`${count2}`)
        message.innerHTML = `${count2} Round(s) <br> Completed!`;
        noti_panel.style.display = "flex";
        noti_panel.style.visibility = "visibility";
        mala_count.innerHTML = `<b>${count2}<b>`;
    }

    
};

//Function for subtraction of Single Count
minusSingle.onclick = () => {
    if (Number(single_count.innerText) !== 0) {
        count1--;
        single_count.innerHTML = `<b>${count1}<b>`;
    }
    else {
        single_count.innerHTML = `<b>0<b>`;
    }
};

//Function for addition of Mala Count - manually
addMala.onclick = () => {
    count2++;
    mala_count.innerHTML = `<b>${count2}<b>`;
};

//Function for subtraction of Mala Count - manually
minusMala.onclick = () => {
    if (Number(mala_count.innerText) !== 0) {
        count2--;
        mala_count.innerHTML = `<b>${count2}<b>`;
    }
    else {
        mala_count.innerHTML = `<b>0<b>`;
    }
};

//Function for Closing the Notification Panel
close_btn.onclick = () => {
    noti_panel.style.display = "none";
};

let upper_panel = document.getElementsByClassName('upper-part')[0];
let explore_btn = document.getElementById('more');
let further_conc = document.getElementsByClassName("further-conc")[0];
let toggle_state = false;
let back_btn = `<svg id="more" xmlns="http://www.w3.org/2000/svg" width="31" height="34" viewBox="0 0 31 34" fill="none">
                <path d="M7.75 12.75L15.5 21.25L23.25 12.75" stroke="#848484" stroke-width="3.48718" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
explore_btn.onclick = () => {
    upper_panel.innerHTML = `
        <div class="further-conc">
            <span class="title">
                Enjoy Mahamantra<br>with:
            </span>
            <br>
            <span class="white-noise">
                1. White Noise
            </span>
            <br>
            <audio id="m1" src="audio1.mp3" controls loop></audio>
            <br>
    
            <span class="white-noise">
                2.Recite with<br>Srila Prabhupada
            </span>
            <br>
            <audio id="m2" src="audio2.mp3" controls loop></audio>
            <span class="recite-along"><u>Recite Along</u></span>
            <span class="japa" id="onebyfour">
                || हरे कृष्ण हरे कृष्ण
            </span>
            <span class="japa" id="twobyfour">
                कृष्ण कृष्ण हरे हरे
            </span>
            <span class="japa" id="threebyfour">
                हरे राम हरे राम
            </span>
            <span class="japa" id="fourbyfour">
                राम राम हरे हरे ||
            </span>
            <span id="counting"><li id="content">0</li><li></li></span>
        </div>
          `
    const audio_1 = document.getElementById("m1");
    const audio_2 = document.getElementById("m2")
    let l1 = document.getElementById('onebyfour');
    let l2 = document.getElementById('twobyfour');
    let l3 = document.getElementById('threebyfour');
    let l4 = document.getElementById('fourbyfour');

    function colorDelay(element, delay) {
        setTimeout(() => {
            element.style.color = "grey";
        }, delay);
    }

    function colorBlack(element, delay) {
        setTimeout(() => {
            element.style.color = "black";
        }, delay + 500);
    }
    let counter=0;
    function counter_default() {
        counter++;
        let conc_count = document.getElementById("content");
        if (conc_count) {
            conc_count.innerHTML = counter;
        }
        console.log(counter);
    }

    const array = [l1, l2, l3, l4];
    let interval;

    audio_1.onplay = () => {
        let time = 0;
        
        interval = setInterval(() => {
            array.forEach((element, index) => {
                setTimeout(() => {
                    colorDelay(element);
                    setTimeout(() => colorBlack(element), 600);
                }, index * 500); // Staggered effect for each element
            });

        setTimeout(counter_default, 2000); // Keep counter update **constant**
        
        time += 2000; // Ensures uniform cycle speed
    }, 4000); // Keeps **consistent** delay for each cycle
};

    audio_1.onpause = () => {

        clearInterval(interval);
    };

    audio_1.onended = () => {
        clearInterval(interval);
    };

    audio_2.onplay = () => {
        let time = 0;
        interval = setInterval(() => {
            array.forEach((element, index) => {
                setTimeout(() => {
                    colorDelay(element);
                    setTimeout(() => colorBlack(element), 600);
                }, index * 500); // Staggered effect for each element
            });

        setTimeout(counter_default, 2000); // Keep counter update **constant**
        
        time += 2000; // Ensures uniform cycle speed
    }, 4000); // Keeps **consistent** delay for each cycle
};

    audio_2.onpause = () => {

        clearInterval(interval);
    };

    audio_2.onended = () => {
        clearInterval(interval);
    };


    
}

let reload = document.getElementsByClassName("reload")[0];
let reset = document.getElementById("reload");
reset.onclick = () => {
    document.location.reload();
    localStorage.clear();
}
reload.onclick = () => {
    document.location.reload();
}


