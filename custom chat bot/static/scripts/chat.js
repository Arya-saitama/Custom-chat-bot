var coll= document.getElementsByClassName("collapsible")
for (let i=0;i<coll.length;i++){
coll[i].addEventListener("click",function(){
    this.classList.toggle("active");
    var content=this.nextElementSibling;
    if(content.style.maxHeight){
        content.style.maxHeight=null;
    }else{
        content.style.maxHeight = content.scrollHeight+"px";
    }
});
}
function getTime(){
    let today=new Date()
    hours=today.getHours();
    minutes=today.getMinutes();
    if(hours<10){
        hours="0"+hours;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
    let time=hours+":"+minutes;
    return time;

}
function firstBotMessage() {
    let firstMessage = "Hello, Thank you for contacting Ecomerce Website "

/*"Please Reply with Following: "
    To Know:
    ▶ How to Track Your Order? Please reply with "1"
    
    ▶ Want Size Replacement? Please Reply with "2"
    
    ▶ Want Return & Refund? Please Reply with "3"
    
    ▶  Want To Track your Order? Need Tracking id? Please Reply with "4"
    
    ▶ Want Cash On Delivery Or Want to Know how to place your Order? Please Reply with "5"
    
    ▶ Paid the amount/Place the order but no confirmation received? please reply with "6"
    
  "  ▶ Want to know about Replacement Status? Please Reply with "7""
    
   " ▶ Need Discount of ₹100? To Get Coupon Please Reply with "8""
    Thank you!
    
   " 🙏we are getting very high number of messages, we will get back to you within 24 hrs. Thanks for cooperation🙏
    ?"*/
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}


function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = Hii ;
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}


function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);


}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("❤️")
}

$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});
