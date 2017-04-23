var a = 250;
    var b = 200;
    var c = 170;
    var d = 140;
    var e = 175;
    var x = 250;
    let z = 40;
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#00D3FD';
    ctx.lineWidth = 17;
    ctx.lineCap = 'round';
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#28d1fa';
    function degToRad(degree) {
        var factor = Math.PI/180;
        return degree * factor;


    }

    function renderTime() {
        var now = new Date();
        var today = now.toDateString();
        var time = now.toLocaleTimeString();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var milliseconds = now.getMilliseconds();
        var newSeconds = seconds* (milliseconds/1000);
        // Background
        gradient = ctx.createRadialGradient(x, x, 5, x, x, 300);
        gradient.addColorStop(0, '#09303a');
        gradient.addColorStop(1, 'black');
        ctx.fillStyle = gradient;
        ctx.fillStyle = '#333333';
        ctx.fillRect(0, 0, 500, 500);
        // Hours
        ctx.beginPath();

        ctx.arc(a, a, b, degToRad(270), degToRad(hours*16)-90);
        ctx.stroke();
        // Minutes
        ctx.beginPath();
        ctx.arc(a, a, c, degToRad(270), degToRad(minutes*6)-90);
        ctx.stroke();
        // Seconds
        ctx.beginPath();
        ctx.arc(a, a, d, degToRad(270), degToRad(newSeconds*6)-90);
        ctx.stroke();
        // Date
        ctx.font = '25px Arial bold';
        ctx.fillStyle = '#28d1fa';
        ctx.fillText(today, e, x);
        // Time
        ctx.font = '25px Arial';
        ctx.fillStyle = '#28d1fa';
        ctx.fillText(time, e, 280);

        var dataURL = canvas.toDataURL();
        document.getElementById('myImage').src = dataURL;
    }
    setInterval(renderTime, z);