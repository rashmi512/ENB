
$(document).ready(function(){
	var lncount=1;
	var plancount=1;
	var dscount=1;
	
	$( "#tabs" ).tabs();	
	$("#atab1").click(function(){
			$("#atab1").addClass("present");
			$("#atab2").removeClass("present");
			$("#atab3").removeClass("present");
			$("#atab4").removeClass("present");
	});
	$("#atab2").click(function(){
			$("#atab2").addClass("present");
			$("#atab1").removeClass("present");
			$("#atab3").removeClass("present");
			$("#atab4").removeClass("present");
	});
	$("#atab3").click(function(){
			$("#atab3").addClass("present");
			$("#atab2").removeClass("present");
			$("#atab1").removeClass("present");
			$("#atab4").removeClass("present");
	});
	$("#atab4").click(function(){
			$("#atab4").addClass("present");
			$("#atab2").removeClass("present");
			$("#atab3").removeClass("present");
			$("#atab1").removeClass("present");
	});
	
	$("#lnar").click(function(){
		lncount+=1;
		$("#lntable").append("<tr><td>"+lncount+".</td><td><input type='text' name='lnc"+lncount+"' ></td><td><input type='text' name='lnl"+lncount+"' ></td></tr>");
	});
	
	$("#planr").click(function(){
		plancount+=1;
		$("#plantable").append("<tr><td>"+plancount+".</td><td><input type='text' name='pld"+plancount+"' ></td><td><input type='text' name='plw"+plancount+"' ></td></tr>");
	});
	
	$("#dsr").click(function(){
		dscount+=1;
		$("#dstable").append("<tr><td>"+dscount+".</td><td><input type='text' name='dsd"+dscount+"'></td><td><input type='text' name='dsp"+dscount+"'></td><td><input type='text' name='dsa"+dscount+"'></td><td><input type='text' name='dss"+dscount+"'></td><td><input type='text' name='dse"+dscount+"'></td></tr>");
	});		         
});