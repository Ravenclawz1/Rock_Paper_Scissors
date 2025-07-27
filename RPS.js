const choices =document.querySelectorAll(".choice");
let user=0;
let bot=0;
const userScr=document.querySelector('#user_score');
const botScr=document.querySelector('#bot_score');
const msg=document.querySelector("#message");
choices.forEach((choice)=>
{
    choice.addEventListener('click',()=>
        {
            const userChoice=choice.getAttribute("id");
            checkWin(userChoice);
        })
})
const comptChoiceGenerate=()=>
{
    const option=['Rock','Paper','Scissors'];
    bot_choice=Math.floor(Math.random()*3);
    return option[bot_choice];
}
const checkWin=(userChoice)=>{
    const botChoice=comptChoiceGenerate();
    const userWin=true;
    if(userChoice===botChoice)
    {
        gameDraw();
    }
    else{
        let userWin=true;
        if(userChoice==='Rock')
        {
            userWin=botChoice==='Paper'?false:true;
        }
        else if(userChoice==='Paper')
        {
            userWin=botChoice==="Scissors"?false:true;
        }
        else {
            userWin=botChoice==="Rock"?false:true;
        }
        ShowWin(userWin);
    }
    
}

const gameDraw=()=>
{
    msg.innerText='Draw';
    msg.style.backgroundColor='#ABC7DB';
}

const ShowWin=(userWin)=>
{
    if(userWin===true)
    {
        msg.innerText="You Win";
        msg.style.backgroundColor='#CBF3D2';
        user++;
        userScr.innerText=user;
    }
    else
    {
        msg.innerText="You Lose";
        msg.style.backgroundColor="#F77B72";
        bot++;
        botScr.innerText=bot;
    }
}