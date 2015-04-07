window.onload = function() {
    var settings = {
      tl: { radius: 10 },
      tr: { radius: 10 },
      bl: { radius: 10 },
      br: { radius: 10 },
      antiAlias: true
    };
	
	/*Marketing 3 Boxes*/
	for(var i=1; i<=3; i++) 
	{
		var xsysysAdvBox = document.getElementById("xsysys-adv-box"+i);
		curvyCorners(settings, '#xsysys-adv-box'+i);
	}
	
	/*Main Content Boxes*/
	for(var i=1; i<=2; i++) 
	{
		var xsysysMnCntRowBox = document.getElementById("xsysys-mn-content-row1-box"+i);
		curvyCorners(settings, '#xsysys-mn-content-row1-box'+i); 
	}
	for(var i=1; i<=2; i++) 
	{
		var xsysysMnCntRowBox = document.getElementById("xsysys-mn-content-row2-box"+i);
		curvyCorners(settings, '#xsysys-mn-content-row2-box'+i); 
	}
	
}; 