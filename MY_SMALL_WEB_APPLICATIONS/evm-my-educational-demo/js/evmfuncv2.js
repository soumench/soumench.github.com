  /* Created by Soumen Chakraborty - 2018 - 
(Strictly for Educational Demonstration, Non-Profit and Strictly Non-Commercial purpose. All Rights Reserved.)*/
    function evmOn(){lampon(LPon); On.value="ON"; candLampsOff(); evmONTog=true; displayColor("aqua"); powerOnDisplay();}
    function evmOff(){allLamsOff(); On.value="OFF"; display(""); displayColor("#000000"); evmONTog=false;}       
    function clearPoll(){if(resultIsDeclared && pollIsClosed){
          LcandOFF(msgDuration); firstballotpressed=false; clearTheResult();          
          storedVotes=[]; resultIsDeclared=false; pollIsClosed=false;}}    
    function pollClosed(){ pollIsClosed=true; if(pst=="Poll not started."){
            var now = new Date().toLocaleString(); pst=`${now}`;}
        if(pet=="Poll not ended."){var now = new Date().toLocaleString(); pet=`${now}`;}
        LcandOFF(msgDuration); closeThePoll();}        
    function BallotIssuedFunc(){if(evmONTog && !pollIsClosed){ 
            ballotIssued=true;  if(firstballotpressed==false){firstballotpressed=true;
                var now = new Date().toLocaleString(); pst=`${now}`; pollcleared=false; }
            lampon(busyCU);lampon(busyBU); display(`Ballot issued.<br>Press a button <br>in the Ballot Unit <br>to vote.`);} else if(evmONTog && pollIsClosed){display(closedMsg);} paperTrailPos("-8px");} 
    function seeTotalVotes(){LcandOFF(msgDuration); checkTotal();}        
    function result(){if(pollIsClosed){ calculateResult(); resultIsDeclared=true;}LcandOFF(msgDuration); }       
    function addvote(s){longBeepsound.play();storeTheVotes();
        var now = new Date().toLocaleString();
        trailMsg.innerHTML=`You have voted <br>for<br> ${s} <br>on<br> ${now}`;  storedVotes.push(s);
        c1 = storedVotes.filter(i => i === cn1).length;
        c2 = storedVotes.filter(i => i === cn2).length;
        c3 = storedVotes.filter(i => i === cn3).length;
        c4 = storedVotes.filter(i => i === cn4).length;
        candBtnAction();   paperTrailAnimAppear();}        
    function lampon(e){e.style.backgroundColor="red";}        
    function allLamsOff(){ const lamps= [LPon, busyCU, busyBU,LCand1,LCand2,LCand3,LCand4 ];
        var c= lamps.length; while(c--){lamps[c].style.backgroundColor="grey";}}
    function candLampsOff(){ paperTrailPos("100px"); paperTrail.style.zIndex=-2;
        const lamps1=[LCand1,LCand2,LCand3,LCand4,busyCU,busyBU ];
        var c=lamps1.length; while(c--){lamps1[c].style.backgroundColor="grey";}}
    function LcandOFF(mytime){setTimeout(candLampsOff,mytime);}        
    function candBtnAction(){ ballotIssued = false; LcandOFF(msgDuration);}
    function display(txt){document.getElementById("display").innerHTML=txt;}
    function displayColor(col){document.getElementById("display").style.backgroundColor=col;}
    var closedMsg=`Poll is Closed.<br>No further Voting is possible.`; 
    var onMsg="EVM is on.<br>Press<br>the Ballot Button <br>to continue.";
    function paperTrailPos(pos){ paperTrail.style.top=pos;}
    function paperTrailAnimAppear(){vvpatSound.play();
        paperTrail.style.zIndex=1; var myTime = setInterval(myTimer, 10); var m=10;
        function myTimer(){if(m>=130){clearInterval(myTime);}m+=2; paperTrail.style.top=m+"px";}}
    function lidOpenAnim(){ slideSound.play(); var minN=12; var maxN=250; var speed=10;
        if(lidOpen=lidOpen^1){var myTime = setInterval(myTimer, speed);
            var m=minN;function myTimer(){if(m>=maxN){clearInterval(myTime);}
                m+=2; cuLid.style.left=m+"px";}}
        else{var myTime = setInterval(myTimer, speed);
            var m=maxN;function myTimer(){if(m<=minN){clearInterval(myTime);}
                m-=2; cuLid.style.left=m+"px";}}}