/*
     ©CopyRight 2013-2022 by OpenSpeedTest.COM. All Rights Reserved. 
     Official Website : https://OpenSpeedTest.COM | Email: support@openspeedtest.com
     Developed by : Vishnu | https://Vishnu.Pro | Email : me@vishnu.pro 
            
     HTML5 Network Performance Estimation Tool -> [JS,XHR,SVG,HTML,CSS]
     Started in 2011 and Moved to OpenSpeedTest.COM Dedicated Project/Domain Name in 2013.
     SpeedTest Script -> 2013 -> Beta | 2015 -> V1 | 2019 ->V2 | 2020 V2.1 | 2021 V2.12 | 2022 V2.5 2.5.1. & 2.5.2.
     Self-Hosted OpenSpeedTest-Server (iFrame/Nginx) -> 2014.
     OpenSpeedTest-Server (On-premises)
     [Docker] -> V1 2019 | V2 2020 | V2.1 2021 | V2.2 2022
     [Node.js/Electron JS] -> 2020 V1 | 2021 V2 & V2.1 | 2.2 2022
     Android and iOS OpenSpeedTest-Server App V1.4 2022 
     Download -> https://go.openspeedtest.com/Server
     Like this Project? Please Donate NOW & Keep us Alive -> https://go.openspeedtest.com/Donate
     Share — copy and redistribute the material in any medium or format for any purpose, even commercially.
     Read full license terms @ http://go.openspeedtest.com/License
     If you have any Questions, ideas or Comments Please Send it via -> https://go.openspeedtest.com/SendMessage
*/
window.onload = function () {
    OpenSpeedTest.Start();
    ostOnload()
};

window.addEventListener('flutterInAppWebViewPlatformReady', function (_) {

});

(function (bb) {
    function g(a) {
        if (!(this instanceof g)) return new g(a);
        this.el = document.getElementById(a)
    }
    var n, Ha, Ia = function (a) {
        a && "function" === typeof a && a()
    };
    const results = {
        download: null,
        upload: null,
        ping: null,
        jitter: null,
    }
    g.prototype.fade = function (a, c, f) {
        var e = "in" === a,
            t = e ? 0 : 1,
            w = 14 / c,
            m = this;
        e && (m.el.style.display = "block", m.el.style.opacity = t);
        var p = window.setInterval(function () {
            t = e ? t + w : t - w;
            m.el.style.opacity = t;
            0 >= t && (m.el.style.display = "none");
            (0 >= t || 1 <= t) && window.clearInterval(p, Ia(f))
        }, 14)
    };
    var Ja = function (a, c, f, e) {
        a /= e;
        a--;
        return f * (a * a * a + 1) + c
    },
        r = function () {
            this.YourIP =
                g("YourIP");
            this.ipDesk = g("ipDesk");
            this.ipMob = g("ipMob");
            this.downSymbolDesk = g("downSymbolDesk");
            this.upSymbolDesk = g("upSymbolDesk");
            this.upSymbolMob = g("upSymbolMob");
            this.downSymbolMob = g("downSymbolMob");
            this.settingsMob = g("settingsMob");
            this.settingsDesk = g("settingsDesk");
            this.oDoLiveStatus = g("oDoLiveStatus");
            this.ConnectErrorMob = g("ConnectErrorMob");
            this.ConnectErrorDesk = g("ConnectErrorDesk");
            this.downResult = g("downResult");
            this.upRestxt = g("upRestxt");
            this.pingResult = g("pingResult");
            this.jitterDesk =
                g("jitterDesk");
            this.pingMobres = g("pingMobres");
            this.JitterResultMon = g("JitterResultMon");
            this.JitterResultms = g("JitterResultms");
            this.UI_Desk = g("UI-Desk");
            this.UI_Mob = g("UI-Mob");
            this.oDoTopSpeed = g("oDoTopSpeed");
            this.startButtonMob = g("startButtonMob");
            this.startButtonDesk = g("startButtonDesk");
            this.intro_Desk = g("intro-Desk");
            this.intro_Mob = g("intro-Mob");
            this.loader = g("loading_app");
            this.OpenSpeedtest = g("OpenSpeedtest");
            this.mainGaugebg_Desk = g("mainGaugebg-Desk");
            this.mainGaugeBlue_Desk = g("mainGaugeBlue-Desk");
            this.mainGaugeWhite_Desk = g("mainGaugeWhite-Desk");
            this.mainGaugebg_Mob = g("mainGaugebg-Mob");
            this.mainGaugeBlue_Mob = g("mainGaugeBlue-Mob");
            this.mainGaugeWhite_Mob = g("mainGaugeWhite-Mob");
            this.oDoLiveSpeed = g("oDoLiveSpeed");
            this.progressStatus_Mob = g("progressStatus-Mob");
            this.progressStatus_Desk = g("progressStatus-Desk");
            this.graphc1 = g("graphc1");
            this.graphc2 = g("graphc2");
            this.graphMob2 = g("graphMob2");
            this.graphMob1 = g("graphMob1");
            this.text = g("text");
            this.kalahatingBuka = 52;
            this.gaugeRadius = 120;
            this.getScaleDegree = function (scaleNumber, scaleCount) {
                return (3.1416 * this.gaugeRadius * 2 * (1 - (this.kalahatingBuka / 180))) * (1 - (scaleNumber / scaleCount))
            }
            this.scale = [
                {
                    degree: this.getScaleDegree(0, 8),
                    value: 0
                },
                {
                    degree: this.getScaleDegree(1, 8),
                    value: 5
                },
                {
                    degree: this.getScaleDegree(2, 8),
                    value: 15
                },
                {
                    degree: this.getScaleDegree(3, 8),
                    value: 30
                },
                {
                    degree: this.getScaleDegree(4, 8),
                    value: 50
                },
                {
                    degree: this.getScaleDegree(5, 8),
                    value: 100
                },
                {
                    degree: this.getScaleDegree(6, 8),
                    value: 300
                },
                {
                    degree: this.getScaleDegree(7, 8),
                    value: 500
                },
                {
                    degree: this.getScaleDegree(8, 8),
                    value: 1E3
                }
            ];
            console.log( this.scale);
            this.polygon = this.chart = this.element = "";
            this.width = 200;
            this.height = 50;
            this.maxValue = 0;
            this.values = [];
            this.points = [];
            this.vSteps = 5;
            this.measurements = [];
            this.points = []
        };
    r.prototype.reset = function () {
        this.polygon = this.chart = this.element = "";
        this.width = 200;
        this.height = 50;
        this.maxValue = 0;
        this.values = [];
        this.points = [];
        this.vSteps = 5;
        this.measurements = [];
        this.points = []
    };
    r.prototype.ip = function () {
        "block" ===
            this.ipDesk.el.style.display ? (this.ipDesk.el.style.display = "none", this.ipMob.el.style.display = "none") : (this.ipDesk.el.style.display = "block", this.ipMob.el.style.display = "block")
    };
    r.prototype.prePing = function () {
        this.loader.fade("out", 500);
        this.OpenSpeedtest.fade("in", 1E3)
    };
    r.prototype.app = function () {
        this.loader.fade("out", 500, this.ShowAppIntro())
    };
    r.prototype.ShowAppIntro = function () {
        this.OpenSpeedtest.fade("in", 1E3)
        // this.UI_Desk.fade("in", 1E3);
    };
    r.prototype.userInterface = function () {
        // ANIM 1. user pressed start
        console.log("start");
        var animations = document.getElementsByClassName("gauge-connecting");

        const sda = document.querySelector('animate.gauge-connecting[attributeName="stroke-dasharray"]');
        const ra = document.querySelector('animate.gauge-connecting[attributeName="r"]');;
        const r = parseFloat(ra.getAttribute('to'));
        sda.setAttribute('to', `${getArcLength(r * 2 * (1 - (52/180)))}, ${getArcLength(r * 2)}`);

        for (var anim of animations) {
            anim.beginElement();
        }

        const networkConnectionPanel = document.getElementById('networkConnectionPanel');
        networkConnectionPanel.classList.add('zoom-out-slightly-down');

        const testServerPanel = document.getElementById('testServerPanel');
        testServerPanel.classList.add('zoom-out-slightly-up');

        this.ShowUI();
        // this.intro_Desk.fade("out", 1E3);
        // this.intro_Mob.fade("out",
        //     1E3, this.ShowUI())
    };
    r.prototype.readyGauge = function() {
        this.UI_Desk.fade("in", 500);
        this.UI_Mob.fade("in", 500, function (a) {
            
            console.log("Developed by Vishnu. Email --\x3e me@vishnu.pro")
        });
    }
    r.prototype.ShowUI = function () {
        const mainGauge = document.getElementById('gauge');
        const totalGaugeRadius = parseFloat(mainGauge.getAttribute('cx'));
        const gaugeStrokeWidth = parseFloat(mainGauge.getAttribute('stroke-width'));
        const actualGaugeRadius = totalGaugeRadius + gaugeStrokeWidth / 2;

        var animations = document.getElementsByClassName("gauge-starting");
        for (var anim of animations) {
            if (anim.id == "gauge-starting-rotate-anim") {
                const s = document.getElementById("gauge");
                const w = window.getComputedStyle(s, null);
                const t = w.getPropertyValue("transform");

                var values = t.split("(")[1];
                values = values.split(")")[0];
                values = values.split(",");
                var a = values[0];
                var b = values[1];
                var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

                console.log(angle);
                anim.setAttribute(
                    "from",
                    `${angle >= 142 ? angle : angle + 360},158,158`
                );
                anim.setAttribute(
                    "dur",
                    `${((angle >= 142 ? 502 - angle : 502 - angle - 360) / 360) * 750
                    }ms`
                );
            }
            anim.beginElement();
        }
        document.getElementById('gauge-starting-rotate-anim').addEventListener('endEvent', () => {
            n = "Loaded";
        });
    };
    r.prototype.Symbol = function (a) {
        0 == a && (this.downSymbolMob.el.style.display = "block", this.downSymbolDesk.el.style.display = "block", this.upSymbolMob.el.style.display = "none", this.upSymbolDesk.el.style.display = "none");
        1 == a && (this.downSymbolMob.el.style.display = "none", this.downSymbolDesk.el.style.display = "none", this.upSymbolMob.el.style.display =
            "block", this.upSymbolDesk.el.style.display = "block");
        2 == a && (this.downSymbolMob.el.style.display = "none", this.downSymbolDesk.el.style.display = "none", this.upSymbolMob.el.style.display = "none", this.upSymbolDesk.el.style.display = "none")
    };
    r.prototype.Graph = function (a, c) {
        function f(p, z) {
            for (m = e.maxValue = 0; m < e.values.length; m++) e.values[m] > e.maxValue && (e.maxValue = e.values[m]);
            e.maxValue = Math.ceil(e.maxValue);
            if (1 < e.values.length) {
                p = "0," + e.height + " ";
                for (m = 0; m < e.values.length; m++) z = e.values[m] / e.maxValue, z =
                    (130 / (e.values.length - 1) * m).toFixed(2) + "," + (e.height - e.height * z).toFixed(2) + " ", p += z;
                // p += "130," + e.height;
                e.points = p
            }
            for (m = 0; m < e.vSteps; m++) e.measurements.push(Math.ceil(e.maxValue / e.vSteps * (m + 1)));
            e.measurements.reverse();
            console.log("measurement-length", e.measurements.length / e.vSteps);
            for (p = document.getElementsByClassName(w); 0 < p.length;) p[0].remove();
            e.polygon = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
            e.polygon.setAttribute("points", e.points);
            e.polygon.setAttribute("class", w);
            1 < e.values.length && t.appendChild(e.polygon)
        }
        "remove" in Element.prototype ||
            (Element.prototype.remove = function () {
                this.parentNode && this.parentNode.removeChild(this)
            });
        var e = this;
        if (0 === c) {
            var t = this.graphc1.el;
            var w = "line";
            this.graphMob2.el.style.display = "none";
            this.graphMob1.el.style.display = "block"
        } else t = this.graphc2.el, w = "line2", this.graphMob1.el.style.display = "none", this.graphMob2.el.style.display = "block";
        isNaN(a) ? this.values.push("") : this.values.push(a);
        var m;
        0 < a && f(t, a)
    };
    r.prototype.progress = function (a, c) {
        var f = this,
            e = Date.now(),
            t = setInterval(function () {
                var w = (Date.now() -
                    e) / 1E3,
                    m = Ja(w, 400, 400, c),
                    p = Ja(w, 400, -400, c);
                a ? (f.progressStatus_Desk.el.style.strokeDashoffset = m, f.progressStatus_Mob.el.style.strokeDashoffset = m) : (f.progressStatus_Desk.el.style.strokeDashoffset = p, f.progressStatus_Mob.el.style.strokeDashoffset = p);
                w >= c && (clearInterval(t), Ha = "done", f.progressStatus_Desk.el.style.strokeDashoffset = 800, f.progressStatus_Mob.el.style.strokeDashoffset = 800)
            }, 14)
    };
    r.prototype.mainGaugeProgress = function (a) {
        var c = a;
        // 0 > c && (c = 0);
        // var f = this.getNonlinearDegree(c);
        // 0 < a && (this.mainGaugeBlue_Desk.el.style.strokeOpacity =
        //     1, this.mainGaugeWhite_Desk.el.style.strokeOpacity = 1, this.mainGaugeBlue_Mob.el.style.strokeOpacity = 1, this.mainGaugeWhite_Mob.el.style.strokeOpacity = 1, this.mainGaugeBlue_Desk.el.style.strokeDashoffset = f, this.mainGaugeWhite_Desk.el.style.strokeDashoffset = 0 == f ? 1 : f + 1, this.mainGaugeBlue_Mob.el.style.strokeDashoffset = f, this.mainGaugeWhite_Mob.el.style.strokeDashoffset = 0 == f ? 1 : f + 1);
        // 0 == f && 1E3 < c ? (this.mainGaugeBlue_Mob.el.style.strokeDashoffset = 681 <= f ? 681 : f, this.mainGaugeWhite_Mob.el.style.strokeDashoffset =
        //     0 == f ? 1 : f + 1, this.mainGaugeWhite_Desk.el.style.strokeDashoffset = 0 == f ? 1 : f + 1, this.mainGaugeBlue_Desk.el.style.strokeDashoffset = 681 <= f ? 681 : f) : 0 == f && 0 >= c && (this.mainGaugeBlue_Mob.el.style.strokeDashoffset = 681.1, this.mainGaugeWhite_Mob.el.style.strokeDashoffset = .1, this.mainGaugeWhite_Desk.el.style.strokeDashoffset = .1, this.mainGaugeBlue_Desk.el.style.strokeDashoffset = 681.1)
        if (c < 0) {
            c = 0;
        }

        var f = this.getNonlinearDegree(c);
        var adjustedMaxDegree = this.getScaleDegree(0, 6) - 0.0001;
        if (a > 0) {
            this.mainGaugeBlue_Desk.el.style.strokeOpacity = 1;
            this.mainGaugeWhite_Desk.el.style.strokeOpacity = 1;

            this.mainGaugeBlue_Mob.el.style.strokeOpacity = 1;
            this.mainGaugeWhite_Mob.el.style.strokeOpacity = 1;

            this.mainGaugeBlue_Desk.el.style.strokeDashoffset = f;
            this.mainGaugeWhite_Desk.el.style.strokeDashoffset = 0 == f ? 1 : f + 1;

            this.mainGaugeBlue_Mob.el.style.strokeDashoffset = f;
            this.mainGaugeWhite_Mob.el.style.strokeDashoffset = 0 == f ? 1 : f + 1;
        }
        if (f == 0 && c > 1000) {
            this.mainGaugeBlue_Mob.el.style.strokeDashoffset = adjustedMaxDegree <= f ? adjustedMaxDegree : f;
            this.mainGaugeWhite_Mob.el.style.strokeDashoffset = 0 == f ? 1 : f + 1;

            this.mainGaugeWhite_Desk.el.style.strokeDashoffset = 0 == f ? 1 : f + 1;
            this.mainGaugeBlue_Desk.el.style.strokeDashoffset = adjustedMaxDegree <= f ? adjustedMaxDegree : f;
        } else if (f == 0 && c <= 0) {
            this.mainGaugeBlue_Mob.el.style.strokeDashoffset = adjustedMaxDegree + 0.1;
            this.mainGaugeWhite_Mob.el.style.strokeDashoffset = .1;
            
            this.mainGaugeWhite_Desk.el.style.strokeDashoffset = .1;
            this.mainGaugeBlue_Desk.el.style.strokeDashoffset = adjustedMaxDegree + 0.1;
        }

    };
    r.prototype.showStatus = function (a) {
        this.oDoLiveStatus.el.textContent = a
    };
    r.prototype.ConnectionError = function () {
        this.ConnectErrorMob.el.style.display =
            "block";
        this.ConnectErrorDesk.el.style.display = "block"
    };
    r.prototype.uploadResult = function (a) {
        results.upload = a;
        1 > a && (this.upRestxt.el.textContent = a.toFixed(3));
        1 <= a && 9999 > a && (this.upRestxt.el.textContent = a.toFixed(1));
        1E4 <= a && 99999 > a && (this.upRestxt.el.textContent = a.toFixed(1), this.upRestxt.el.style.fontSize = "20px");
        1E5 <= a && (this.upRestxt.el.textContent = a.toFixed(1), this.upRestxt.el.style.fontSize = "18px")
    };
    r.prototype.pingResults = function (a, c) {
        results.ping = a;
        "Ping" === c && (1 <= a && 1E4 > a ? (this.pingResult.el.textContent = Math.floor(a),
            this.pingMobres.el.textContent = Math.floor(a)) : 0 <= a && 1 > a && (this.pingResult.el.textContent = a, this.pingMobres.el.textContent = a));
        "Error" === c && (this.oDoLiveSpeed.el.textContent = a)
    };
    r.prototype.downloadResult = function (a) {
        results.download = a;
        1 > a && (this.downResult.el.textContent = a.toFixed(3));
        1 <= a && 9999 > a && (this.downResult.el.textContent = a.toFixed(1));
        1E4 <= a && 99999 > a && (this.downResult.el.textContent = a.toFixed(1), this.downResult.el.style.fontSize = "20px");
        1E5 <= a && (this.downResult.el.textContent = a.toFixed(1), this.downResult.el.style.fontSize =
            "18px")
    };
    r.prototype.jitterResult = function (a, c) {
        results.jitter = a;
        "Jitter" === c && (1 <= a && 1E4 > a ? (this.jitterDesk.el.textContent = Math.floor(a), 1 <= a && 100 > a && (this.JitterResultMon.el.textContent = Math.floor(a)), 100 <= a && ((a / 1E3).toFixed(1), this.JitterResultMon.el.textContent = 1.1)) : 0 <= a && 1 > a && (this.jitterDesk.el.textContent = a, this.JitterResultMon.el.textContent = a))
    };
    r.prototype.LiveSpeed = function (a, c) {
        "countDown" === c ? (c = a.toFixed(0), this.oDoLiveSpeed.el.textContent = c) : "speedToZero" === c ? (c = a.toFixed(1), this.oDoLiveSpeed.el.textContent =
            c, this.oDoTopSpeed.el.textContent = "1000+", this.oDoTopSpeed.el.style.fontSize = 17, this.oDoTopSpeed.el.style.fill = "gray") : "Ping" === c ? 1 <= a && 1E4 > a ? this.oDoLiveSpeed.el.textContent = Math.floor(a) : 0 <= a && 1 > a && (this.oDoLiveSpeed.el.textContent = a) : (0 == a && (c = a.toFixed(1), this.oDoLiveSpeed.el.textContent = c), 1 >= a && 0 < a && (c = a.toFixed(3), this.oDoLiveSpeed.el.textContent = c), 1 < a && (c = a.toFixed(1), this.oDoLiveSpeed.el.textContent = c), 1E3 >= a && (this.oDoTopSpeed.el.textContent = "1000+", this.oDoTopSpeed.el.style.fontSize =
                16.9, this.oDoTopSpeed.el.style.fill = "gray"), 1010 <= a && (this.oDoTopSpeed.el.textContent = 1E3 * Math.floor(a / 1010) + "+", this.oDoTopSpeed.el.style.fill = "#434040", this.oDoTopSpeed.el.style.fontSize = "20px"))
    };
    r.prototype.GaugeProgresstoZero = function (a, c) {
        var f = this;
        if (0 <= a) var e = Date.now(),
            t = 0 - a,
            w = setInterval(function () {
                var m = (Date.now() - e) / 1E3;
                var p = m / 3;
                p--;
                p = t * (p * p * p * p * p + 1) + a;
                f.LiveSpeed(p, "speedToZero");
                f.mainGaugeProgress(p);
                if (3 <= m || 0 >= p) clearInterval(w), f.LiveSpeed(0, "speedToZero"), f.mainGaugeProgress(0),
                    n = c
            }, 16)
    };
    r.prototype.getNonlinearDegree = function (a) {
        var c = 0;
        if (0 == a || 0 >= a || isNaN(a)) return 0;
        for (; c < this.scale.length;)
            if (a > this.scale[c].value) c++;
            else return this.scale[c - 1].degree + (a - this.scale[c - 1].value) * (this.scale[c].degree - this.scale[c - 1].degree) / (this.scale[c].value - this.scale[c - 1].value);
        return this.scale[this.scale.length - 1].degree
    };
    var S = function () {
        this.OverAllTimeAvg = window.performance.now();
        this.SpeedSamples = [];
        this.FinalSpeed
    };
    S.prototype.reset = function () {
        this.OverAllTimeAvg = window.performance.now();
        this.SpeedSamples = [];
        this.FinalSpeed = 0
    };
    S.prototype.ArraySum = function (a) {
        return a ? a.reduce(function (c, f) {
            if ("number" === typeof c && "number" === typeof f) return c + f
        }, 0) : 0
    };
    S.prototype.AvgSpeed = function (a, c, f) {
        this.timeNow = (window.performance.now() - this.OverAllTimeAvg) / 1E3;
        this.FinalSpeed;
        this.timeNow >= f - c && (0 < a && this.SpeedSamples.push(a), this.FinalSpeed = this.ArraySum(this.SpeedSamples) / this.SpeedSamples.length);
        return this.FinalSpeed
    };
    S.prototype.uRandom = function (a, c) {
        for (var f = new Uint32Array(262144),
            e = [], t = Blob, w = 0; w < a; w++) {
            for (var m = w, p = f.length, z = 0; z < p; z++) f[z] = 4294967296 * Math.random();
            e[m] = f
        }
        return new t(e, {
            type: "application/octet-stream"
        }, Ia(c))
    };
    var ib = function () {
        function a() {
            1 <= X ? (--X, d.LiveSpeed(X, "countDown")) : 0 >= X && (clearInterval(cb), 17 == (L.toLowerCase() + Y).length && e())
        }

        function c() {
            d.ip()
        }

        function f() {
            "openspeedtest.com" === L.toLowerCase() + Y ? (e(), d.userInterface()) : 55 == Ka && (e(), d.userInterface())
        }

        function e() {
            function b() {
                pa = window.performance.now();
                4 === db && w()
            }
            "widget" !== openChannel &&
                "web" !== openChannel || qa(1);
            d.startButtonDesk.el.removeEventListener("click", f);
            // d.startButtonMob.el.removeEventListener("click", f);
            const f2BlurElement = document.querySelector("#f2 feGaussianBlur");
            console.log(f2BlurElement);
            var l = setInterval(function () {
                "Loaded" === n && (n = "busy", La());
                "Ping" === n && (n = "busy", d.showStatus("Milliseconds"));
                "Download" === n && (prepareGauge(), d.showStatus("Initializing.."), M.reset(), x = Z = 0, d.reset(), ra = window.performance.now(), t(), n = "initDown");
                if ("Downloading" === n) {
                    d.Symbol(0);
                    if (0 == T) {
                        T = 1;
                        d.showStatus("Testing download speed..");
                        var h = (window.performance.now() - ra) / 1E3;
                        Ma = h;
                        d.progress(1,
                            dlDuration + 2.5);
                        dlDuration += h
                    }
                    sa = (window.performance.now() - ra) / 1E3;
                    m("dl");
                    d.showStatus("Mbps download");
                    const blurAmount = Math.min(x ** (2/5), 15);
                    f2BlurElement.setStdDeviation(blurAmount, blurAmount);
                    d.mainGaugeProgress(x);
                    d.LiveSpeed(x);
                    d.Graph(x, 0);
                    N = M.AvgSpeed(x, ta, dlDuration);
                    sa >= dlDuration && "done" == Ha && (B ? (d.GaugeProgresstoZero(x, "SendR"), d.showStatus("All done"), d.Symbol(2)) : d.GaugeProgresstoZero(x, "Upload"), d.downloadResult(N), aa = O, G = 1, n = "busy", x = Z = 0, M.reset())
                }
                "Upload" == n && 1 === G && (f2BlurElement.setStdDeviation(0, 0), d.Symbol(1), n = "initup", d.showStatus("Initializing.."), ua = M.uRandom(ulDataSize, b), B && (T = 1));
                "Uploading" ===
                    n && (1 == T && (T = 2, d.showStatus("Testing upload speed.."), x = 0, M.reset(), d.reset(), Na = h = (window.performance.now() - pa) / 1E3, d.progress(!1, ulDuration + 2.5), ulDuration += h), d.showStatus("Mbps upload"), P = (window.performance.now() - pa) / 1E3, m("up"), d.mainGaugeProgress(x), d.LiveSpeed(x), d.Graph(x, 1), Q = M.AvgSpeed(x, va, ulDuration), P >= ulDuration && 1 == G && (ba = J, d.uploadResult(Q), d.GaugeProgresstoZero(x, "SendR"), ua = void 0, d.showStatus("All done"), d.Symbol(2), n = "busy", G = 0));
                if ("Error" === n) {
                    d.showStatus("Check your network connection status.");
                    d.ConnectionError();
                    n = "busy";
                    clearInterval(l);
                    h = document.createElement("div");
                    h.innerHTML = '<a xlink:href="https://openspeedtest.com/FAQ.php?ref=NetworkError" style="cursor: pointer" target="_blank"></a>';
                    var u = h.querySelector("a");
                    d.oDoLiveSpeed.el.textContent = "Network Error";
                    var A = document.getElementById("oDoLiveSpeed");
                    u.innerHTML = A.innerHTML;
                    A.innerHTML = h.innerHTML
                }
                "SendR" === n && (d.showStatus("Test again?"), h = document.createElement("div"), h.innerHTML = '<a xlink:href="https://netmesh.pregi.net/web/speedtest/list" style="cursor: pointer" target="_blank"></a>',
                    u = h.querySelector("a"), d.oDoLiveSpeed.el.textContent = "Finish", A = document.getElementById("oDoLiveSpeed"), u.innerHTML = A.innerHTML, A.innerHTML = h.innerHTML, location.hostname != L.toLowerCase() + Y ? (U = ".", U = encodeURI(U), h = document.getElementById("resultsData"), h.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", U), saveData && qa(5)) : qa(3), n = "busy", clearInterval(l), notify())
            }, 100)
        }

        async function prepareGauge() {
            var animations = document.getElementsByClassName("gauge-preparing");

            const sda = document.querySelector('animate.gauge-preparing[attributeName="stroke-dasharray"]');
            const ra = document.querySelector('animate.gauge-preparing[attributeName="r"]')
            console.log(ra);
            const r = parseFloat(ra.getAttribute('to'));

            sda.setAttribute('to', `${getArcLength(r * 2 * (1 - (52/180)))}, ${getArcLength(r * 2)}`);

            for (var anim of animations) {
                anim.beginElement();
            }

            return new Promise((resolve, reject) => {
                sda.addEventListener('endEvent', () => {
                    d.readyGauge();
                    resolve();
                });
            });
        }

        function notify() {
            try {
                window.flutter_inappwebview.callHandler('get-results', results);
            } catch { }
        }

        function t() {
            for (var b = 0; b < dlThreads; b++) setTimeout(function (l) {
                p(l)
            }, dlDelay * b, b)
        }

        function w() {
            for (var b = 0; b < ulThreads; b++) setTimeout(function (l) {
                z(l)
            }, ulDelay * b, b)
        }

        function m(b) {
            if ("dl" === b) {
                var l = 1E3 * sa;
                l > 1E3 * Ma + ta / 2 * 1E3 && 0 === Qa && (Qa = 1, ca *= .01, V *= .01, da = l + 1E4);
                l >= da && da < eb && (da += 1E4, ca *= .01, V *= .01);
                Ra = 0 >= O ? 0 : O - Sa;
                Sa = O;
                V += Ra;
                Ta = ya = l - ya;
                ya = l;
                ca += Ta;
                0 < V && (x = Z = V / ca / 125 * upAdjust)
            }
            "up" === b && (b = 1E3 * P, b > 1E3 * Na + va / 2 * 1E3 && 0 === Ua && (Ua = 1, ea *=
                .1, W *= .1, fa = b + 1E4), b >= fa && fa < fb && (fa += 1E4, ea *= .1, W *= .1), Va = 0 >= J ? 0 : J - Wa, Wa = J, W += Va, Xa = za = b - za, za = b, ea += Xa, 0 < W && (x = Z = W / ea / 125 * upAdjust))
        }

        function p(b) {
            var l = 0;
            y[b] = new XMLHttpRequest;
            y[b].open("GET", Aa.Download + "?n=" + Math.random(), !0);
            y[b].onprogress = function (h) {
                if (1 === G) return y[b].abort(), y[b] = null, y[b] = void 0, delete y[b], !1;
                "initDown" == n && (n = "Downloading");
                var u = 0 >= h.loaded ? 0 : h.loaded - l;
                if (isNaN(u) || !isFinite(u) || 0 > u) return !1;
                O += u;
                l = h.loaded
            };
            y[b].onload = async function (h) {
                0 === l && (O += h.total);
                "initDown" ==
                    n && (n = "Downloading");
                y[b] && (y[b].abort(), y[b] = null, y[b] = void 0, delete y[b]);
                0 === G && p(b)
            };
            y[b].onerror = function (h) {
                0 === G && p(b)
            };
            y[b].responseType = "arraybuffer";
            y[b].send()
        }

        function z(b) {
            var l = 0;
            v[b] = new XMLHttpRequest;
            v[b].open("POST", Aa.Upload + "?n=" + Math.random(), !0);
            v[b].upload.onprogress = function (h) {
                "initup" == n && void 0 === u && (n = "Uploading");
                if (P >= ulDuration) return v[b].abort(), v[b] = null, v[b] = void 0, delete v[b], !1;
                var u = 0 >= h.loaded ? 0 : h.loaded - l;
                if (isNaN(u) || !isFinite(u) || 0 > u) return !1;
                J += u;
                l = h.loaded
            };
            v[b].onload = function () {
                if (0 === l && (J += 1048576 * ulDataSize, P >= ulDuration)) return v[b].abort(), v[b] = null, v[b] = void 0, delete v[b], !1;
                if ("initup" == n && void 0 === h) {
                    var h;
                    n = "Uploading"
                }
                v[b] && (v[b].abort(), v[b] = null, v[b] = void 0, delete v[b]);
                1 === G && z(b)
            };
            v[b].onerror = function (h) {
                P <= ulDuration && z(b)
            };
            v[b].setRequestHeader("Content-Type", "application/octet-stream");
            0 < b && 17E3 >= J || v[b].send(ua)
        }

        function La() {
            n = "Ping";
            performance.clearResourceTimings();
            if (Ba < gb - 1) Ba++, "Stop" != ha && hb(openSpeedTestServerList[Ba], La);
            else if (1 <= ia.length) {
                var b = Math.min.apply(Math, Ca),
                    l = Ca.indexOf(b);
                Aa = ia[l];
                ja = b;
                Da = Ya[l];
                ha = "Busy";
                d.LiveSpeed(ja, "Ping");
                d.pingResults(ja, "Ping");
                d.jitterResult(Da, "Jitter");
                wa = ja;
                xa = Da;
                n = B ? B : "Download"
            } else ia.Download || (n = "Error")
        }

        function hb(b, l) {
            function h() {
                if (A < pingSamples) A++, "Stop" != ha && u();
                else {
                    if (1 < H.length) {
                        var I = Math.min.apply(Math, Za),
                            Ea = Math.min.apply(Math, H);
                        Ca.push(Ea);
                        ia.push(b);
                        Ya.push(I)
                    }
                    "function" === typeof l && l()
                }
            }

            function u() {
                var I = new XMLHttpRequest;
                "Stop" != ha && I.abort();
                I.open(pingMethod, b[pingFile] + "?n=" + Math.random(), !0);
                I.timeout = pingTimeOut;
                var Ea = window.performance.now();
                I.send();
                I.onload = function () {
                    if (200 === this.status && 4 === this.readyState) {
                        var K = Math.floor(window.performance.now() - Ea),
                            C = performance.getEntries();
                        C = C[C.length - 1];
                        C = "xmlhttprequest" === C.initiatorType ? parseFloat(C.duration.toFixed(1)) : K;
                        250 < A && (C = K);
                        0 >= C ? H.push(.1) : H.push(C);
                        1 < H.length && (K = Math.abs(H[H.length - 1] - H[H.length - 2]).toFixed(1), Za.push(K), d.LiveSpeed(C, "Ping"), d.pingResults(C, "Ping"),
                            d.jitterResult(K, "Jitter"));
                        h()
                    }
                    404 === this.status && 4 === this.readyState && (A++, h())
                };
                I.onerror = function (K) {
                    A++;
                    h()
                };
                I.ontimeout = function (K) {
                    A++;
                    h()
                }
            }
            var A = 0,
                H = [],
                Za = [];
            u()
        }
        var M = new S,
            d = new r;
        d.app();
        var ua, $a = location.hostname,
            ab, Fa, N, Q, wa, xa, ka, la, y = [],
            Z, O = 0,
            J = 0,
            x = 0,
            P, sa, ra, pa, U, G = 0;
        var Pa = window.navigator.userAgent ? window.navigator.userAgent : "Not Found";
        var va = .6 * ulDuration,
            ta = .6 * dlDuration;
        7 <= .6 * ulDuration && (va = 7);
        7 <= .6 * dlDuration && (ta = 7);
        var k = function (b) {
            var l = {},
                h = document.createElement("a");
            h.href = b;
            b = h.search.substring(1).split("&");
            for (h = 0; h < b.length; h++) {
                var u = b[h].split("=");
                l[u[0]] = decodeURIComponent(u[1])
            }
            return l
        }(window.location.href.toLowerCase());
        if (setPingSamples && ("string" === typeof k.ping || "string" === typeof k.p)) {
            if ("undefined" !== typeof k.ping) var D = k.ping;
            else "undefined" !== typeof k.p && (D = k.p);
            0 < D && (pingSamples = pingSamples = D)
        }
        if (setPingTimeout && ("string" === typeof k.out || "string" === typeof k.o)) {
            if ("undefined" !== typeof k.out) var R = k.out;
            else "undefined" !== typeof k.o && (R = k.o);
            1 < R && (pingTimeOut = pingTimeOut = R)
        }
        if (setHTTPReq && ("string" === typeof k.xhr || "string" === typeof k.x)) {
            if ("undefined" !== typeof k.xhr) var ma = k.xhr;
            else "undefined" !== typeof k.x && (ma = k.x);
            0 < ma && 32 >= ma && (ulThreads = dlThreads = ma)
        }
        if (selectServer && ("string" === typeof k.host || "string" === typeof k.h)) {
            if ("undefined" !== typeof k.host) var na = k.host;
            else "undefined" !== typeof k.h && (na = k.h);
            /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(na) && (openSpeedTestServerList = [{
                ServerName: "Home",
                Download: na +
                    "/downloading",
                Upload: na + "/upload",
                ServerIcon: "DefaultIcon"
            }])
        }
        D = parseInt(k.stress);
        R = parseInt(k.s);
        if ("string" === typeof k.stress) {
            var q = k.stress;
            var E = D
        } else "string" === typeof k.s && (q = k.s, E = R);
        if (q && stressTest) {
            if ("low" === q || "l" === q) ulDuration = dlDuration = 300;
            if ("medium" === q || "m" === q) ulDuration = dlDuration = 600;
            if ("high" === q || "h" === q) ulDuration = dlDuration = 900;
            if ("veryhigh" === q || "v" === q) ulDuration = dlDuration = 1800;
            if ("extreme" === q || "e" === q) ulDuration = dlDuration = 3600;
            if ("day" === q || "d" === q) ulDuration = dlDuration =
                86400;
            if ("year" === q || "y" === q) ulDuration = dlDuration = 31557600;
            if (12 < D || 12 < R) ulDuration = dlDuration = E
        }
        q = parseInt(k.clean);
        E = parseInt(k.c);
        D = 1;
        q ? D = q : E && (D = E);
        if (enableClean && ("string" === typeof k.clean || "string" === typeof k.c))
            if (1 <= q || 1 <= E) {
                if (5 > q || 5 > E) upAdjust = 1 + D / 100, dlAdjust = 1 + D / 100
            } else dlAdjust = upAdjust = 1;
        q = k.test;
        E = k.t;
        var B = !1;
        if (selectTest && ("string" === typeof q || "string" === typeof E)) {
            var F;
            q ? B = F = q : E && (B = F = E);
            if ("download" === F || "d" === F) {
                var ba = Q = 0;
                B = "Download";
                e();
                d.userInterface()
            } else if ("upload" ===
                F || "u" === F) {
                var aa = N = 0;
                B = "Upload";
                G = 1;
                e();
                d.userInterface()
            } else "ping" === F || "p" === F ? (e(), d.userInterface(), aa = N = ba = Q = 0, B = "SendR") : B = !1
        }
        F = parseInt(k.run);
        q = parseInt(k.r);
        var Ga;
        !enableRun || "string" !== typeof k.run && "string" !== typeof k.r || (Ga = 0 < F ? F : 0 < q ? q : 0);
        var T = 0;
        if ("undefined" !== typeof Ga && !1 === B) {
            d.userInterface();
            var X = Math.ceil(Math.abs(Ga));
            d.showStatus("Automatic Test Starts in ...");
            var cb = setInterval(a, 1E3)
        }
        // d.settingsMob.el.addEventListener("click", c);
        // d.settingsDesk.el.addEventListener("click",
        //     c);
        var L = "OpenSpeedTest",
            Y = ".com",
            Oa = "NetMesh" + "\u2122",
            Ka;
        d.startButtonDesk.el.addEventListener("click", f);
        // d.startButtonMob.el.addEventListener("click", f);
        var db = L.indexOf("S"),
            oa = 0;
        "web" === openChannel && (oa = webRe);
        "widget" === openChannel && (oa = widgetRe);
        "selfwidget" === openChannel && (oa = widgetRe, $a = Fa = domainx);
        "dev" === openChannel && (Ka = d.text.el.href.length + Oa.length);
        var Ra = 0,
            Sa = 0,
            V = 0,
            Ta = 0,
            ya = 0,
            ca = 0,
            Qa = 0,
            Ma, Na, Va = 0,
            Wa = 0,
            W = 0,
            Xa = 0,
            za = 0,
            ea = 0,
            Ua = 0,
            da, eb = 1E3 * dlDuration - 6E3,
            fa, fb = 1E3 * ulDuration - 6E3,
            v = [],
            Aa, ja, Da,
            ha, Ba = -1,
            Ca = [],
            ia = [],
            Ya = [],
            gb = openSpeedTestServerList.length,
            qa = function (b) {
                var l = new XMLHttpRequest,
                    h = "//openspeedtest.com/connect.php";
                1 == b && (h = webIP);
                5 == b && (h = saveDataURL);
                l.open("POST", h, !0);
                l.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                l.onreadystatechange = function () {
                    4 == l.readyState && 200 == l.status && (la = l.responseText.trim(), 2 == b && (ab = la), 1 == b && (Fa = la), 3 == b && setTimeout(function () {
                        location.href = oa + la
                    }, 1500))
                };
                2 == b && (ka = "r=n");
                3 == b && (ka = "r=l&d=" + N + "&u=" + Q + "&dd=" + aa / 1048576 +
                    "&ud=" + ba / 1048576 + "&p=" + wa + "&do=" + $a + "&S=" + ab + "&sip=" + Fa + "&jit=" + xa + "&ua=" + Pa);
                5 == b && (ka = U);
                l.send(ka)
            }
    };
    bb.Start = function () {
        new ib
    }

    function getArcLength(length) {
        console.log(length * Math.PI);
        return length * Math.PI;
    }
})(window.OpenSpeedTest = window.OpenSpeedTest || {});