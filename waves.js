function waves(){
    var svgWidth = window.visualViewport.width;
    const svgHeight = 60;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svg.setAttribute("width", svgWidth);
    svg.setAttribute("height", svgHeight);

    //global sine variables
    var phaseBase = 0.1;
    //sine 1
    const frequency1 = 0.03;
    const amplitude1 = 5;
    const phase1 = -0.65;
    const offset1 = (Math.random() * 100)
    //sine 2
    const frequency2 = 0.025;
    const amplitude2 = 5;
    const phase2 = -0.5;
    const offset2 = (Math.random() * 100)
    //sine 3
    const frequency3 = 0.05;
    const amplitude3 = 5;
    const phase3 = -0.25;
    const offset3 = (Math.random() * 100)
    //sine 4
    const frequency4 = 0.01;
    const amplitude4 = 10;
    const phase4 = 0.2;
    const offset4 = (Math.random() * 100)
    
    setInterval(() => {
        svgWidth = window.visualViewport.width;
        svg.setAttribute("width", svgWidth);
        phaseBase += 0.01;
        let pathData = `M 0 0`
    
        for (let index = 0; index <= svgWidth; index++) {
            const sine1 = amplitude1 * Math.sin(frequency1 * index + (phase1 * phaseBase) + offset1);
            const sine2 = amplitude2 * Math.sin((frequency2) * index + (phase2 * phaseBase) + offset2);
            const sine3 = amplitude3 * Math.sin(frequency3 * index + (phase3 * phaseBase) + offset3);
            const sine4 = amplitude4 * Math.sin(frequency4 * index + (phase4 * phaseBase) + offset4);
            const y = (sine1 + sine2 + sine3 + sine4) + svgHeight/2;
            pathData += `L ${index} ${y}`;
        }
    
        pathData += `L ${svgWidth} 0 L ${svgWidth} 0 Z`
    
    
     
    
    
        path.setAttribute("d", pathData);
        svg.appendChild(path);
        const waveContainer = document.getElementById("wave-container");
        waveContainer.appendChild(svg);
        path.setAttribute("fill", "#ffb300");
    }, 2);
}

waves();