function waves(){
    const svgWidth = window.innerWidth;
    const svgHeight = 50;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svg.setAttribute("width", svgWidth);
    svg.setAttribute("height", svgHeight);

    //global sine variables
    var phaseBase = 0.1;
    //sine 1
    const frequency1 = 0.15;
    const amplitude1 = 5;
    const phase1 = 1;
    //sine 2
    const frequency2 = 0.1;
    const amplitude2 = 5;
    const phase2 = 0.5;
    //sine 3
    const frequency3 = 0.05;
    const amplitude3 = 5;
    const phase3 = -0.25;
    //sine 4
    const frequency4 = 0.01;
    const amplitude4 = 10;
    const phase4 = 0.2;

    setInterval(() => {
        const svgWidth = window.innerWidth;
        svg.setAttribute("width", window.innerWidth);
        phaseBase += 0.01;
        let pathData = `M 0 0`
    
        for (let index = 0; index < svgWidth; index++) {
            const sine1 = amplitude1 * Math.sin(frequency1 * index + (phase1 * phaseBase));
            const sine2 = amplitude2 * Math.sin(frequency2 * index + (phase2 * phaseBase));
            const sine3 = amplitude3 * Math.sin(frequency3 * index + (phase3 * phaseBase));
            const sine4 = amplitude4 * Math.sin(frequency4 * index + phase4 * phaseBase);
            const y = (sine1 + sine2 + sine3 + sine4) + svgHeight/2;
            pathData += `L ${index} ${y}`;
        }
    
        pathData += `L ${svgWidth} ${svgHeight} L ${svgWidth} 0 Z`
    
    
     
    
    
        path.setAttribute("d", pathData);
        svg.appendChild(path);
        const waveContainer = document.getElementById("wave-container");
        waveContainer.appendChild(svg);
        path.setAttribute("fill", "#ffb300");
    }, 2);
}

waves();