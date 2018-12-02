function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
var ScrollPosition=0;

async function scrol() {
	await sleep(Math.floor((Math.random() * 1000) + 3000));
	if((window.innerHeight + window.scrollY) < document.body.scrollHeight){
		window.scrollTo(0, window.scrollY+200);
	}
	else{
		window.scrollTo(0, window.scrollY-700);
	}
	scrol();
}

async function SurfPage() {
  scrol();
  await sleep(Math.floor((Math.random() * 100000) + 1000));
  clickLink();
}



function clickLink() {
	var links = [
              "https://www.adtc-app.com/Dashboard/",
              "https://www.adtc-app.com/Dashboard/Tracking/",
              "https://www.adtc-app.com/Dashboard/CallLogs/",
              "https://www.adtc-app.com/Dashboard/CallRecording/",
			  "https://www.adtc-app.com/Dashboard/CallRestriction/",
			  "https://www.adtc-app.com/Dashboard/SMSRecord/",
			  "https://www.adtc-app.com/Dashboard/ContactBook/",
			  "https://www.adtc-app.com/Dashboard/LockCode/",
			  "https://www.adtc-app.com/Dashboard/LiveRecording/",
			  "https://www.adtc-app.com/Dashboard/InstalledAppList/",
			  "https://www.adtc-app.com/Dashboard/FileExplorer/",
			  "https://www.adtc-app.com/Dashboard/RemoteControl/",
			  "https://www.adtc-app.com/Dashboard/DeviceInformation/"
			  ];
	var randIdx = Math.random() * links.length;
	randIdx = parseInt(randIdx, 10);
	var link = links[randIdx];
	if(location.href=="https://www.adtc-app.com"){
		var win = window.open("https://www.adtc-app.com/Dashboard/", '_self');
        win.focus();
	}
    var win = window.open(link, '_self');
     win.focus();
   }
   
SurfPage();

