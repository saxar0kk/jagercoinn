var textcontent = 1
const infocontent = document.getElementById('text-1');
const referalcontent = document.getElementById('text-2');
const contactcontent = document.getElementById('text-3');

function getInfo(){
textcontent = 1
if(textcontent == 1){
  infocontent.style.display = 'block';
  referalcontent.style.display = 'none';
  contactcontent.style.display = 'none';
  textcontent = 1;
   
}
else{
    console.log('info content is not found')
}}
function getReferal(){
    textcontent = 2 
    if(textcontent == 2){
        infocontent.style.display = 'none';
        referalcontent.style.display = 'block';
        contactcontent.style.display = 'none';
        textcontent = 2;
        
    }
    else{
        console.log('referal content is not found')
    }
}
let Language  = 'rus'
let count = 0
function changeLanguage(){
    count++;
    if (count % 2 === 0) {
        Language = 'rus';
        infocontent.innerHTML = `<span class="important-text" > Jägermeister (Jager) ­это криптопроект, созданный на блокчейне TON.</span><br>
                    <span class="important-text">Идея монеты:</span>
                    Jägermeister(Jager) 
                    - Это новая, уникальная валюта, которой можно будет расплачиваться в "Jagermini app”. В скором времени будет запущена уникальная игра, в которой ранние
                    инвестора проекта смогут забрать свою прибыль уже на старте проекта, а вскоре
                    приумножать свои активы на стабильной основе.
                    <Br><span class="important-text" >Особенности проекта Jägermeister(Jager)</span>:
                    -Участие сообщества: Наша команда всегда открыта к новым идеям от нашего сообщества. В чате всегда есть наши администраторы, готовые прислушаться к пожеланиям и
                    идеям, касательно развития нашего проекта.
                    ­<br> <span class="important-text" > Амбициозные планы </span> : 
                    Мы планируем выйти за пределы DEX и залиститься на централизованных биржах, что откроет новые возможности для развития проекта`;
        referalcontent.innerHTML = `    <input id="ref" type="button" value="Ссылка для друга!" onclick="copyToClipboard('t.me/JagerCoinBot/jager')" ></input><br>
       </span>`;
            let button = document.getElementById('lang');
            button.value = 'RUS';
    } else {
        Language = 'eng';
        infocontent.innerHTML = `<span class="important-text" > Jägermeister (Jager) is a crypto project created on the TON blockchain.</span><br>
                    <span class="important-text">Coin idea:</span>
                    - Jägermeister(Jager)
                    - This is a new, unique currency that can be used to pay in the "Jagermini app". A unique game will be launched soon, in which early
                     investors of the project will be able to take their profits at the start of the project, and soon
                     increase their assets on a stable basis.
                    <br><span class="important-text" >Features of the Jägermeister(Jager) project</span>:
                    -Community participation: Our team is always open to new ideas from our community. Our administrators are always present in the chat, ready to listen to suggestions and
                    ideas regarding the development of our project.
                    <br> <span class="important-text" > Ambitious plans </span> : 
                    We plan to go beyond DEX and get listed on centralized exchanges, which will open up new opportunities for the development of the project`;
        referalcontent.innerHTML = `    <input id="ref" type="button" value="Link for a friend!" onclick="copyToClipboard('t.me/JagerCoinBot/jager')" ></input><br>
        </span>`
            let button = document.getElementById('lang');
            button.value = 'ENG';
    }
}
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Copying to clipboard was successful!');
        alert('Copied to clipboard!');
    }, function(err) {
        console.error('Could not copy text: ', err);
        alert('Failed to copy text. Please try again.');
    });
}