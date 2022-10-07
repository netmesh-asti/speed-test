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
window.onload = async function () {
    await OpenSpeedTest.Start();
    ostOnload();
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
    const results = Object.seal({
        download: null,
        upload: null,
        ping: null,
        jitter: null,
    });
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
            // this.text = g("text");

            this.pingProgressBarElement = document.getElementById('pingProgressBar');
            this.gaugeContainer = document.getElementById('gauge-container');
            this.f2BlurElement = document.querySelector("#f2 feGaussianBlur");
            this.gaugeCircleElement = document.getElementById('gauge-circle');
            this.gaugeScaleElement = g('gauge-meter-scale');
            this.speedNeedle = g('speed-needle');

            this.uploadTestProgressBarElement = document.getElementById('uploadTestProgressBar');
            this.downloadTestProgressBarElement = document.getElementById('downloadTestProgressBar');
            this.networkErrorModal = document.getElementById("network-error-modal");
            this.isAutoStart = false;

            this.kalahatingBuka = 52;
            this.gaugeRadius = 120;
            this.scaleRadius = 108;
            this.getScaleArcLength = function (scaleNumber, scaleCount) {
                return (3.1416 * this.gaugeRadius * 2 * (1 - (this.kalahatingBuka / 180))) * (1 - (scaleNumber / scaleCount))
            }
            this.scaleValues = [0, 5, 15, 30, 50, 100, 300, 500, 1000];
            this.scaleElements = [];
            this.scaleTopSpeed = this.scaleValues[this.scaleValues.length - 1];
            this.scale = [];
            this.polygon = this.chart = this.element = "";
            this.width = Math.max(dlEstimatedMeasurementCount, ulEstimatedMeasurementCount);
            this.height = 50;
            this.maxValue = 0;
            this.values = [];
            this.d = [];
            this.vSteps = 5;
            this.measurements = [];
            this.d = []
        };
    r.prototype.reset = function () {
        this.polygon = this.chart = this.element = "";
        this.width = Math.max(dlEstimatedMeasurementCount, ulEstimatedMeasurementCount);
        this.height = 50;
        this.maxValue = 0;
        this.values = [];
        this.d = [];
        this.vSteps = 5;
        this.measurements = [];
        this.d = []
    };
    r.prototype.ip = function () {
        "block" ===
            this.ipDesk.el.style.display ? (this.ipDesk.el.style.display = "none", this.ipMob.el.style.display = "none") : (this.ipDesk.el.style.display = "block", this.ipMob.el.style.display = "block")
    };
    r.prototype.prePing = function () {
        // this.loader.fade("out", 500);
        this.OpenSpeedtest.fade("in", 1E3)
    };
    r.prototype.app = function () {
        const gaugeSize = 316;
        const gaugeScaleCount = this.scaleValues.length - 1;
        const baseGaugeScaleDegree = 90 - this.kalahatingBuka - (360 - this.kalahatingBuka * 2);
        const gaugeScaleDegreeGap = (360 - this.kalahatingBuka * 2) / gaugeScaleCount;
        // let scaleNodes = [];

        this.gaugeScaleElement.el.innerHTML = '';
        this.scale = [];
        this.scaleValues.forEach((scaleValue, index) => {
            const scaleDegree = baseGaugeScaleDegree + gaugeScaleDegreeGap * index;
            this.scale.push({
                degree: this.getScaleArcLength(index, gaugeScaleCount),
                degreePosition: scaleDegree,
                value: scaleValue
            });

            const scaleNode = document.createElementNS("http://www.w3.org/2000/svg", 'text');
            scaleNode.setAttribute('dominant-baseline', scaleDegree <= -180 || scaleDegree >= 0 ? 'middle' : 'hanging');
            scaleNode.setAttribute('text-anchor', scaleDegree < -90 ? 'start' : scaleDegree > -90 ? 'end' : 'middle');

            if (index === gaugeScaleCount) {
                scaleNode.id = 'oDoTopSpeed';
                scaleNode.classList.add('oDoTop-Speed');
                scaleNode.innerHTML = `${scaleValue}+`;
            } else {
                scaleNode.id = `gauge-speed-${index}`;
                scaleNode.innerHTML = scaleValue;
            }

            // scaleNodes.push(scaleNode);

            this.gaugeScaleElement.el.appendChild(scaleNode);

            const x = this.scaleRadius + this.scaleRadius * Math.round(Math.cos(scaleDegree * Math.PI / 180) * 1e6) / 1e6 + (gaugeSize - this.scaleRadius * 2) / 2;
            const y = this.scaleRadius + this.scaleRadius * Math.round(Math.sin(scaleDegree * Math.PI / 180) * 1e6) / 1e6 + (gaugeSize - this.scaleRadius * 2) / 2;

            scaleNode.setAttribute('transform', `translate(${x} ${y})`);

            this.scaleElements.push(scaleNode);
            this.oDoTopSpeed = g('oDoTopSpeed');
        });

        // console.log("scale", this.scale);
        // console.log("gaugeScaleElement", this.gaugeScaleElement.el);
        // this.loader.fade("out", 500, this.ShowAppIntro())
    };
    r.prototype.ShowAppIntro = function () {
        // document.getElementById('empty-background').style.display = 'none';
        this.OpenSpeedtest.el.style.display = 'block';
        // this.UI_Desk.fade("in", 1E3);
    };
    r.prototype.userInterface = async function () {
        // ANIM 1. user pressed start
        // console.log("start");

        try {
            window.flutter_inappwebview.callHandler('setSpeedTestData')
                .then(function (data) {
                    // data = {
                    //     testServerName,
                    //     networkConnectionName
                    // }
                    document.querySelectorAll('.test-server-title').forEach(element => {
                        element.textContent = data.testServerName;
                    });
                    document.querySelectorAll('.network-connection-title').forEach(element => {
                        element.textContent = data.networkConnectionName;
                    });
                    const htmlElement = document.querySelector('html');
                    htmlElement.className = `${data.theme ?? 'light'}-theme`;
                })
        } catch {

        }
    
        const networkConnectionPanel = document.getElementById('networkConnectionPanel');
        const testServerPanel = document.getElementById('testServerPanel');

        if (this.isAutoStart) {
            networkConnectionPanel.style.visibility = 'hidden';
            testServerPanel.style.visibility = 'hidden';
        } else {
            networkConnectionPanel.classList.add('zoom-out-slightly-down');
            testServerPanel.classList.add('zoom-out-slightly-up');
        }

        const measuringScreenPanel = document.getElementById('measuringScreenPanel');

        var animations = document.getElementsByClassName("gauge-connecting");

        const sda = document.querySelector('animate.gauge-connecting[attributeName="stroke-dasharray"]');
        const ra = document.querySelector('animate.gauge-connecting[attributeName="r"]');
        const r = parseFloat(ra.getAttribute('to'));
        sda.setAttribute('to', `${getArcLength(r * 2 * (1 - (52 / 180)))}, ${getArcLength(r * 2)}`);

        document.querySelector('#start-button-gradient>stop:nth-child(1)>animate.gauge-connecting[attributeName="stop-color"]')
            .setAttribute('to', getComputedStyle(document.documentElement).getPropertyValue('--connecting-color'));
        document.querySelector('#start-button-gradient>stop:nth-child(2)>animate.gauge-connecting[attributeName="stop-color"]')
            .setAttribute('to', getComputedStyle(document.documentElement).getPropertyValue('--connecting-color') + "00");

        document.querySelector('#start-button-gradient>stop:nth-child(1)>animate.gauge-preparing[attributeName="stop-color"]')
            .setAttribute('to', getComputedStyle(document.documentElement).getPropertyValue('--gauge-background-color'));
        document.querySelector('#start-button-gradient>stop:nth-child(2)>animate.gauge-preparing[attributeName="stop-color"]')
            .setAttribute('to', getComputedStyle(document.documentElement).getPropertyValue('--gauge-background-color'));

        for (var anim of animations) {
            anim.beginElement();
        }

        const downloadSpeedGraph = this.graphc1.el;
        downloadSpeedGraph.setAttribute('viewBox', `0,0,${dlEstimatedMeasurementCount}, 50`);

        const uploadSpeedGraph = this.graphc2.el;
        uploadSpeedGraph.setAttribute('viewBox', `0,0,${ulEstimatedMeasurementCount}, 50`);

        return new Promise((resolve) => {
            setTimeout(() => {
                measuringScreenPanel.style.visibility = 'visible';
                measuringScreenPanel.classList.add('fade-in');

                n = "Loaded";

                resolve(true);
            }, 300);
        })

        // this.intro_Desk.fade("out", 1E3);
        // this.intro_Mob.fade("out",
        //     1E3, this.ShowUI())
    };
    r.prototype.readyGauge = function () {
        // this.UI_Desk.fade("in", 500);
        // this.UI_Mob.fade("in", 500, function (a) {
        // });

        // console.log("Developed by Vishnu. Email --\x3e me@vishnu.pro")
    }
    r.prototype.ShowUI = async function () {
        const mainGauge = document.getElementById('button-to-gauge');
        const totalGaugeRadius = parseFloat(mainGauge.getAttribute('cx'));
        const gaugeStrokeWidth = parseFloat(mainGauge.getAttribute('stroke-width'));
        const actualGaugeRadius = totalGaugeRadius + gaugeStrokeWidth / 2;

        var animations = document.getElementsByClassName("gauge-starting");
        for (var anim of animations) {
            if (anim.id == "gauge-starting-rotate-anim") {
                const w = window.getComputedStyle(mainGauge, null);
                const t = w.getPropertyValue("transform");

                var values = t.split("(")[1];
                values = values.split(")")[0];
                values = values.split(",");
                var a = values[0];
                var b = values[1];
                var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
                // console.log("angle", angle);
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
        return new Promise((resolve) => {
            document.getElementById('gauge-starting-rotate-anim').addEventListener('endEvent', () => {
                resolve();
            });
        });
    };
    r.prototype.Symbol = function (a) {
        // 0 == a && (this.downSymbolMob.el.style.display = "block", this.downSymbolDesk.el.style.display = "block", this.upSymbolMob.el.style.display = "none", this.upSymbolDesk.el.style.display = "none");
        // 1 == a && (this.downSymbolMob.el.style.display = "none", this.downSymbolDesk.el.style.display = "none", this.upSymbolMob.el.style.display =
        //     "block", this.upSymbolDesk.el.style.display = "block");
        // 2 == a && (this.downSymbolMob.el.style.display = "none", this.downSymbolDesk.el.style.display = "none", this.upSymbolMob.el.style.display = "none", this.upSymbolDesk.el.style.display = "none")
    };
    r.prototype.Graph = function (a, c) {
        function f(p, z) {
            for (m = e.maxValue = 0; m < e.values.length; m++) e.values[m] > e.maxValue && (e.maxValue = e.values[m]);
            e.maxValue = Math.ceil(e.maxValue);
            chartHeight = (dlDuration + 2.5) * 10 + 2;
            if (1 < e.values.length) {
                p = "M 0," + e.height + " ";
                prev_x = null;
                prev_y = null;
                for (m = 0; m < e.values.length; m++) {
                    // if (!(m % 5 == 0)) {
                    //     continue;
                    // }
                    z = e.values[m] / e.maxValue;

                    // curr_x = (130 / (e.values.length - 1) * m)
                    curr_x = m
                    curr_y = (e.height - e.height * z)

                    if (m > 0) {
                        mid_x = (prev_x + curr_x) / 2;
                        mid_y = (prev_y + curr_y) / 2;
                    }

                    z = (m == 0 ? "Q " : "") + (m > 0 ? mid_x + "," + mid_y + " " : "") + curr_x + "," + curr_y + " ";
                    // z = "M " + curr_x + "," + chartHeight + " " + "L " + curr_x + ", " + curr_y + " ";
                    p += z;

                    prev_x = curr_x;
                    prev_y = curr_y;
                }
                // p += "130," + e.height;
                e.d = p + prev_x + "," + e.height;
                // if ( e.measurements.length / e.vSteps < 20) {
                //     console.log(e.d);
                // }
            }
            for (m = 0; m < e.vSteps; m++) e.measurements.push(Math.ceil(e.maxValue / e.vSteps * (m + 1)));
            e.measurements.reverse();
            // console.log("measurement-length", e.measurements.length / e.vSteps);
            // console.log("length: ", e.measurements.length / e.vSteps)
            for (p = document.getElementsByClassName(w); 0 < p.length;) p[0].remove();
            e.polygon = document.createElementNS("http://www.w3.org/2000/svg", "path");
            e.polygon.setAttribute("d", e.d);
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
            // this.graphMob2.el.style.display = "none";
            // this.graphMob1.el.style.display = "block"
        } else t = this.graphc2.el,
            w = "line2";
            // this.graphMob1.el.style.display = "none",
            // this.graphMob2.el.style.display = "block";

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
                // console.log("time: ", p)
                a ? (// f.progressStatus_Desk.el.style.strokeDashoffset = m,
                    // f.progressStatus_Mob.el.style.strokeDashoffset = m,
                    f.downloadTestProgressBarElement.style.display = 'block',
                    f.downloadTestProgressBarElement.style.width = `${(m - 400) / 400 * 100}%`,
                    f.uploadTestProgressBarElement.style.display = 'none'
                )
                    : (// f.progressStatus_Desk.el.style.strokeDashoffset = p,
                        // f.progressStatus_Mob.el.style.strokeDashoffset = p,
                        f.uploadTestProgressBarElement.style.display = 'block',
                        f.uploadTestProgressBarElement.style.width = `${(400 - p) / 400 * 100}%`,
                        f.downloadTestProgressBarElement.style.display = 'none'
                    )
                w >= c && (clearInterval(t), Ha = "done",
                    // f.progressStatus_Desk.el.style.strokeDashoffset = 800,
                    // f.progressStatus_Mob.el.style.strokeDashoffset = 800,
                    f.uploadTestProgressBarElement.style.width = 0,
                    f.downloadTestProgressBarElement.style.width = 0
                )
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
        var linearDegree = this.getLinearDegree(c);
        this.speedNeedle?.el?.setAttribute('transform', `rotate(${linearDegree}, 158, 158)`);

        var adjustedMaxDegree = this.getScaleArcLength(0, 6) - 0.0001;
        if (a > 0) {
            this.mainGaugeBlue_Desk.el.style.strokeOpacity = 1;
            this.mainGaugeWhite_Desk.el.style.strokeOpacity = 1;

            // this.mainGaugeBlue_Mob.el.style.strokeOpacity = 1;
            // this.mainGaugeWhite_Mob.el.style.strokeOpacity = 1;

            this.mainGaugeBlue_Desk.el.style.strokeDashoffset = f;
            this.mainGaugeWhite_Desk.el.style.strokeDashoffset = 0 == f ? 1 : f + 1;

            // this.mainGaugeBlue_Mob.el.style.strokeDashoffset = f;
            // this.mainGaugeWhite_Mob.el.style.strokeDashoffset = 0 == f ? 1 : f + 1;
        }
        if (f == 0 && c > 1000) {
            // this.mainGaugeBlue_Mob.el.style.strokeDashoffset = adjustedMaxDegree <= f ? adjustedMaxDegree : f;
            // this.mainGaugeWhite_Mob.el.style.strokeDashoffset = 0 == f ? 1 : f + 1;

            this.mainGaugeWhite_Desk.el.style.strokeDashoffset = 0 == f ? 1 : f + 1;
            this.mainGaugeBlue_Desk.el.style.strokeDashoffset = adjustedMaxDegree <= f ? adjustedMaxDegree : f;
        } else if (f == 0 && c <= 0) {
            // this.mainGaugeBlue_Mob.el.style.strokeDashoffset = adjustedMaxDegree + 0.1;
            // this.mainGaugeWhite_Mob.el.style.strokeDashoffset = .1;

            this.mainGaugeWhite_Desk.el.style.strokeDashoffset = .1;
            this.mainGaugeBlue_Desk.el.style.strokeDashoffset = adjustedMaxDegree + 0.1;
        }
    };
    r.prototype.showStatus = function (a) {
        this.oDoLiveStatus.el.textContent = a
    };
    r.prototype.ConnectionError = function () {
        // this.ConnectErrorMob.el.style.display =
        //     "block";
        // this.ConnectErrorDesk.el.style.display = "block";
        this.networkErrorModal.style.display = 'block';
    };
    r.prototype.uploadResult = function (a) {
        results.upload = a;
        1 > a && (this.upRestxt.el.textContent = a.toFixed(3));
        1 <= a && 9999 > a && (this.upRestxt.el.textContent = a.toFixed(1));
        1E4 <= a && 99999 > a && (this.upRestxt.el.textContent = a.toFixed(1), this.upRestxt.el.style.fontSize = "16px");
        1E5 <= a && (this.upRestxt.el.textContent = a.toFixed(1), this.upRestxt.el.style.fontSize = "14px")
    };
    r.prototype.pingResults = function (a, c) {
        results.ping = a;
        // console.log("results.ping", a);
        "Ping" === c && (
            1 <= a && 1E4 > a ? (
                this.pingResult.el.textContent = Math.floor(a)
                // this.pingMobres.el.textContent = Math.floor(a)
            ) : 0 <= a && 1 > a && (
                this.pingResult.el.textContent = a
                // this.pingMobres.el.textContent = a
            )
        );
        "Error" === c && (this.oDoLiveSpeed.el.textContent = a)
    };
    r.prototype.downloadResult = function (a) {
        results.download = a;
        1 > a && (this.downResult.el.textContent = a.toFixed(3));
        1 <= a && 9999 > a && (this.downResult.el.textContent = a.toFixed(1));
        1E4 <= a && 99999 > a && (this.downResult.el.textContent = a.toFixed(1), this.downResult.el.style.fontSize = "16px");
        1E5 <= a && (this.downResult.el.textContent = a.toFixed(1), this.downResult.el.style.fontSize = "14px")
    };
    r.prototype.jitterResult = function (a, c) {
        results.jitter = a;
        "Jitter" === c && (
            1 <= a && 1E4 > a ? (
                this.jitterDesk.el.textContent = Math.floor(a)
                // 1 <= a && 100 > a && (
                //     this.JitterResultMon.el.textContent = Math.floor(a)
                // ), 
                // 100 <= a && (
                //     (a / 1E3).toFixed(1),
                //     this.JitterResultMon.el.textContent = 1.1
                // )
            ) : 0 <= a && 1 > a && (
                this.jitterDesk.el.textContent = a
                // this.JitterResultMon.el.textContent = a
            )
        )
    };
    r.prototype.LiveSpeed = function (a, c, speedType) {
        // "countDown" === c ? (c = a.toFixed(0), this.oDoLiveSpeed.el.textContent = c) : "speedToZero" === c ? (c = a.toFixed(1), this.oDoLiveSpeed.el.textContent =
        //     c, this.oDoTopSpeed.el.textContent = "1000+", this.oDoTopSpeed.el.style.fontSize = 16, this.oDoTopSpeed.el.style.fill = "var(--speed-number-off-color)") : "Ping" === c ? 1 <= a && 1E4 > a ? this.oDoLiveSpeed.el.textContent = Math.floor(a) : 0 <= a && 1 > a && (this.oDoLiveSpeed.el.textContent = a) : (0 == a && (c = a.toFixed(1), this.oDoLiveSpeed.el.textContent = c), 1 >= a && 0 < a && (c = a.toFixed(3), this.oDoLiveSpeed.el.textContent = c), 1 < a && (c = a.toFixed(1), this.oDoLiveSpeed.el.textContent = c), 1E3 >= a && (this.oDoTopSpeed.el.textContent = "1000+", this.oDoTopSpeed.el.style.fontSize =
        //         14, this.oDoTopSpeed.el.style.fill = 'var(--speed-number-off-color)'), 1010 <= a && (this.oDoTopSpeed.el.textContent = 1E3 * Math.floor(a / 1010) + "+", this.oDoTopSpeed.el.style.fill = "#434040", this.oDoTopSpeed.el.style.fontSize = "16px"))
        // "countDown" === c ? (
        //     c = a.toFixed(0), this.oDoLiveSpeed.el.textContent = c
        // )
        // : "speedToZero" === c ? (
        //     c = a.toFixed(1), this.oDoLiveSpeed.el.textContent = c, this.oDoTopSpeed.el.textContent = "1000+", this.oDoTopSpeed.el.style.fontSize = 16, this.oDoTopSpeed.el.style.fill = "var(--speed-number-off-color)"
        // )
        // : "Ping" === c ? 
        //     1 <= a && 1E4 > a ? this.oDoLiveSpeed.el.textContent = Math.floor(a)
        //     : 0 <= a && 1 > a &&
        //         (this.oDoLiveSpeed.el.textContent = a)
        // : (
        //     0 == a && (c = a.toFixed(1), this.oDoLiveSpeed.el.textContent = c),
        //     1 >= a && 0 < a && (c = a.toFixed(3), this.oDoLiveSpeed.el.textContent = c),
        //     1 < a && (c = a.toFixed(1), this.oDoLiveSpeed.el.textContent = c),
        //     1E3 >= a && (this.oDoTopSpeed.el.textContent = "1000+", this.oDoTopSpeed.el.style.fontSize = 14, this.oDoTopSpeed.el.style.fill = 'var(--speed-number-off-color)'),
        //     1010 <= a && (this.oDoTopSpeed.el.textContent = 1E3 * Math.floor(a / 1010) + "+", this.oDoTopSpeed.el.style.fill = "#434040", this.oDoTopSpeed.el.style.fontSize = "16px")
        // )
        // console.log("live-speed", c, a);
        const topSpeed = this.scaleTopSpeed;
        let topSpeedPlus = Math.max(topSpeed, 10 ** Math.floor(Math.log10(a)) * (Math.floor(a / 10 ** Math.floor(Math.log10(a)))));

        if (c === undefined || c === "speedToZero") {
            this.scale.forEach((s, i) => {
                if (s.value == topSpeed) return;

                const reachTheScaleSpeed = a > s.value;
                if (reachTheScaleSpeed) {
                    this.scaleElements[i].setAttribute('fill', speedType == "upload" ? 'var(--upload-speed-color)' : 'var(--download-speed-color)');
                } else {
                    this.scaleElements[i].setAttribute('fill', 'var(--speed-number-off-color)');
                }
            });
        }

        switch (c) {
            case "countdown":
                c = a.toFixed(0);
                this.oDoLiveSpeed.el.textContent = c;
                break;
            case "speedToZero":
                c = Math.floor(a).toFixed(0);
                this.oDoLiveSpeed.el.textContent = c > 0 ? c : "";
                this.oDoTopSpeed.el.textContent = a < topSpeed ? `${topSpeed}+` : topSpeedPlus + "+";
                this.oDoTopSpeed.el.style.fontSize = 15;
                this.oDoTopSpeed.el.style.fill = "var(--speed-number-off-color)";
                break;
            case "Ping":
                this.oDoLiveSpeed.el.textContent = "";
                // if (1 <= a && 1E4 > a) {
                //     this.oDoLiveSpeed.el.textContent = Math.floor(a);
                // } else if (0 <= a && 1 > a) {
                //     this.oDoLiveSpeed.el.textContent = a;
                // }
                break;
            default:
                if (0 == a) {
                    c = a.toFixed(0);
                    this.oDoLiveSpeed.el.textContent = c;
                }
                if (1 >= a && 0 < a) {
                    c = a.toFixed(2);
                    this.oDoLiveSpeed.el.textContent = c;
                }
                if (1 < a) {
                    c = a.toFixed(2);
                    this.oDoLiveSpeed.el.textContent = c;
                }
                if (10 < a) {
                    c = a.toFixed(1);
                    this.oDoLiveSpeed.el.textContent = c;
                }
                if (100 < a) {
                    c = a.toFixed(0);
                    this.oDoLiveSpeed.el.textContent = c;
                }
                if (topSpeed >= a) {
                    this.oDoTopSpeed.el.textContent = `${topSpeed}+`;
                    this.oDoTopSpeed.el.style.fontSize = 15;
                    this.oDoTopSpeed.el.style.fill = "var(--speed-number-off-color)"
                }
                if (topSpeed < a) {
                    this.oDoTopSpeed.el.textContent = topSpeedPlus + "+";
                    this.oDoTopSpeed.el.style.fill = "var(--max-speed-color)";
                    this.oDoTopSpeed.el.style.fontSize = 16.5;
                }
        }
    };
    r.prototype.SetGaugeColor = function (testType) {
        if (testType == "upload") {
            this.gaugeCircleElement.setAttribute('stroke', 'url(#upload-speed-gradient)');
        } else {
            this.gaugeCircleElement.setAttribute('stroke', 'url(#download-speed-gradient)');
        }
    }
    r.prototype.SetGaugeBlur = function (speed) {
        const blurAmount = speed <= 0 ? 0 : Math.min(2 ** Math.log10(speed / this.scaleTopSpeed * 1000) * 1.5 * ((speed / this.scaleTopSpeed * 1000) / 1000) ** (1 / 3), 12);
        this.f2BlurElement.setStdDeviation(blurAmount, blurAmount);
    }
    r.prototype.GaugeProgresstoZero = function (a, c) {
        var f = this;
        if (0 <= a) var e = Date.now(),
            t = 0 - a,
            w = setInterval(function () {
                var m = (Date.now() - e) / 1E3;
                var p = m / 3;
                p--;
                p = t * (p * p * p * p * p + 1) + a;
                f.LiveSpeed(p, "speedToZero", c == "SendR" ? "upload" : "download");
                f.mainGaugeProgress(p);
                f.SetGaugeBlur(p);
                if (3 <= m || 0 >= p) clearInterval(w), f.LiveSpeed(0, "speedToZero"), f.mainGaugeProgress(0), f.SetGaugeBlur(0), n = c
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
    r.prototype.getLinearDegree = function (a) {
        var c = 0;
        if (0 == a || 0 >= a || isNaN(a)) return 0;
        for (; c < this.scale.length;)
            if (a > this.scale[c].value) c++;
            else return this.scale[c - 1].degreePosition + (a - this.scale[c - 1].value) * (this.scale[c].degreePosition - this.scale[c - 1].degreePosition) / (this.scale[c].value - this.scale[c - 1].value);
        return this.scale[this.scale.length - 1].degreePosition
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
        this.timeNow = (window.performance.now() - this.OverAllTimeAvg) / 1e3;
        this.FinalSpeed;
        this.timeNow >= f - c && (0 < a && this.SpeedSamples.push(a), (this.FinalSpeed = this.ArraySum(this.SpeedSamples) / this.SpeedSamples.length));
        // console.log("speedSamples", this.SpeedSamples);
        return this.FinalSpeed;
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
        async function setClientConnection() {
            const clientIPRes = await fetch('https://api.ipify.org?format=json');
            const clientIPJson = await clientIPRes.json();
            const clientIP = clientIPJson.ip;

            const clientIPElements = document.getElementsByClassName('client-ip');
            Array.from(clientIPElements).forEach(function (element) {
                element.textContent = clientIP;
            });

            const networkConnectionTitleElements = document.getElementsByClassName('network-connection-title');
            const ipApiRes = await fetch(`http://ip-api.com/json/${clientIP}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,asname,reverse,mobile,proxy,query`);
            const ipApiJson = await ipApiRes.json();
            // console.log(ipApiJson);
            const clientIspName = ipApiJson.as.split(' ').slice(1).join(' ');
            Array.from(networkConnectionTitleElements).forEach(element => {
                element.textContent = clientIspName;
                element.setAttribute('title', clientIspName);
            });
        }

        async function setTestServerConnection() {
            let serverList = [];
            try {
                const res = await fetch('http://202.90.159.48/api/server/');
                serverList = Array.from(await res.json());
            } catch (ex) {
                console.log(ex);
            }

            const localServer = {
                id: 0,
                nickname: "Local test server kooooooooooo :D",
                url: 'http://127.0.0.1:1100',
                ip_address: '127.0.0.1',
                city: "Kwatro Singko Sais City"
            };
            serverList.push(localServer);
            // console.log(serverList);

            const testServersSelect = document.getElementById('test-servers-select');
            const testServersSelectChildren = [];
            for (const server of serverList) {
                const serverOption = document.createElement('option');
                serverOption.text = server.nickname;
                serverOption.value = server.url;
                testServersSelectChildren.push(serverOption);
            }
            testServersSelect.replaceChildren(...testServersSelectChildren);

            try {
                let promises = [];
                for (let server of serverList) {
                    let p = new Promise((resolve, reject) => {
                        let wdt = true;

                        // add a setTimeout delay if you want
                        let tempsocket = io(server.url + '/pingpong');
                        console.log("pingpong", server.url + '/pingpong');

                        let start = (new Date).getTime();

                        tempsocket.on('pong', (ev) => {
                            wdt = false;
                            latency = (new Date).getTime() - start;
                            tempsocket.disconnect();
                            console.log({ s: server, l: latency });
                            resolve({ s: server, l: latency });  // or resolve(ev);
                        });

                        setTimeout(() => {
                            if (wdt == true) {
                                tempsocket.disconnect();
                                resolve(Number.MAX_VALUE); // a very large dummy value
                            }
                        }, 5000);
                    });

                    promises.push(p);
                }

                Promise.all(promises)
                    .then(values => {
                        console.table(values);

                        // process values here
                        min = Number.MAX_VALUE;  // initialize to an arbitrarily large number
                        nearest_server = null;

                        for (let item of values) {
                            if (item.l <= min) {
                                nearest_server = item.s;
                                min = item.l;
                            }
                        }

                        setTimeout(() => {
                            setTestServer(nearest_server);
                        }, 1000);
                    })
                    .catch(error => { // <- optional
                        console.error(error.message);
                    });
            } catch (ex) {
                console.error(ex);
            }

            function setTestServer(testServer) {
                // if (testServer) {
                //   startButton.style.display = 'block';
                //   buttonToGaugeGroup.classList.add('button-to-gauge-remove-filter');
                //   setTimeout(function () {
                //     buttonToGaugeGroup.classList.remove(...buttonToGaugeGroup.classList)
                //   }, 500)
                // }

                const testServerTitleElements = document.getElementsByClassName('test-server-title');
                Array.from(testServerTitleElements).forEach((element) => {
                    const testServerName = testServer ? testServer.nickname : "(no servers found)"
                    element.textContent = testServerName;
                    element.setAttribute('title', testServerName);
                });

                const testServerSubtitleElements = document.getElementsByClassName('test-server-subtitle');
                Array.from(testServerSubtitleElements).forEach((element) => {
                    element.textContent = testServer ? testServer.city : "(no servers found)";
                });
            }
        }

        function a() {
            1 <= X ? (--X, d.LiveSpeed(X, "countDown")) : 0 >= X && (clearInterval(cb), 17 == (L.toLowerCase() + Y).length && e())
        }

        function c() {
            d.ip()
        }

        async function f() {
            "openspeedtest.com" === L.toLowerCase() + Y ? (
                e(), setClientConnection(), await d.userInterface()
            ) : 55 == Ka && (
                e(), setClientConnection(), await d.userInterface()
            )
        }

        let measurementFunction;
        let measurementFunctionInterval;
        function e() {
            function b() {
                pa = window.performance.now();
                4 === db && w()
            }
            "widget" !== openChannel &&
                "web" !== openChannel || qa(1);

            d.startButtonDesk.el.removeEventListener("click", f);
            d.startButtonDesk.el.blur();
            // d.startButtonMob.el.removeEventListener("click", f);

            let displaySpeed;

            measurementFunction = function () {
                "Loaded" === n && (
                    n = "busy",
                    La()
                );
                "Ping" === n && (
                    n = "busy",
                    d.showStatus("")
                );
                "Download" === n && (
                    d.showStatus(""),
                    d.SetGaugeColor("download"),
                    M.reset(),
                    x = Z = 0,
                    d.reset(),
                    ra = window.performance.now(),
                    t(),
                    n = "initDown",
                    clearInterval(measurementFunctionInterval)
                );
                if ("Downloading" === n) {
                    d.Symbol(0);
                    if (0 == T) {
                        T = 1;
                        console.log('Testing download speed');
                        d.showStatus("Testing download speed..");
                        var h = (window.performance.now() - ra) / 1E3;
                        Ma = h;
                        d.progress(1, dlDuration + 2.5);
                        dlDuration += h;
                    }
                    sa = (window.performance.now() - ra) / 1E3;
                    m("dl");
                    N = M.AvgSpeed(x, ta, dlDuration);
                    // displaySpeed = this.timeNow >= dlDuration - ta ? N : x
                    displaySpeed = x;
                    d.showStatus("Mbps");
                    d.mainGaugeProgress(displaySpeed);
                    d.SetGaugeBlur(displaySpeed);
                    d.LiveSpeed(displaySpeed, undefined, "download");
                    d.Graph(x, 0);
                    sa >= dlDuration && "done" == Ha && (
                        B ? (
                            d.GaugeProgresstoZero(displaySpeed, "SendR"),
                            d.showStatus("Finishing up..."),
                            d.Symbol(2)
                        ) : d.GaugeProgresstoZero(displaySpeed, "Upload"),
                            d.showStatus(""),
                            d.downloadResult(displaySpeed),
                            aa = O,
                            G = 1,
                            n = "busy",
                            x = Z = 0,
                            M.reset()
                    )
                }
                "Upload" == n && 1 === G && (
                    d.Symbol(1),
                    n = "initup",
                    d.showStatus(""),
                    d.SetGaugeColor("upload"),
                    ua = M.uRandom(ulDataSize, b),
                    B && (T = 1)
                );
                "Uploading" === n && (
                    1 == T && (
                        T = 2,
                        d.showStatus("Testing upload speed.."),
                        x = 0,
                        M.reset(),
                        d.reset(),
                        Na = h = (window.performance.now() - pa) / 1E3,
                        d.progress(!1, ulDuration + 2.5),
                        ulDuration += h
                    ),
                    d.showStatus("Mbps"),
                    P = (window.performance.now() - pa) / 1E3,
                    m("up"),
                    Q = M.AvgSpeed(x, va, ulDuration),
                    // displaySpeed = this.timeNow >= ulDuration - va ? Q : x,
                    displaySpeed = x,
                    d.mainGaugeProgress(displaySpeed),
                    d.SetGaugeBlur(displaySpeed),
                    d.LiveSpeed(displaySpeed, undefined, "upload"),
                    d.Graph(x, 1),
                    P >= ulDuration && 1 == G && (
                        ba = J,
                        d.uploadResult(displaySpeed),
                        d.GaugeProgresstoZero(displaySpeed, "SendR"),
                        ua = void 0,
                        d.showStatus("Finishing up..."),
                        d.Symbol(2),
                        n = "busy",
                        G = 0
                    )
                );
                if ("Error" === n) {
                    d.showStatus("Check your network connection status.");
                    d.ConnectionError();
                    n = "busy";
                    clearInterval(measurementFunctionInterval);
                    h = document.createElement("div");
                    h.innerHTML = '<a xlink:href="https://openspeedtest.com/FAQ.php?ref=NetworkError" style="cursor: pointer" target="_blank"></a>';
                    var u = h.querySelector("a");
                    d.oDoLiveSpeed.el.textContent = "Network Error";
                    var A = document.getElementById("oDoLiveSpeed");
                    u.innerHTML = A.innerHTML;
                    A.innerHTML = h.innerHTML;
                }
                "SendR" === n && (
                    d.showStatus(""),
                    finishGauge(),
                    h = document.createElement("div"),
                    h.innerHTML = '<a xlink:href="https://netmesh.pregi.net/web/speedtest/list" style="cursor: pointer" target="_blank"></a>',
                    u = h.querySelector("a"),
                    d.oDoLiveSpeed.el.textContent = "",
                    A = document.getElementById("oDoLiveSpeed"),
                    u.innerHTML = A.innerHTML,
                    A.innerHTML = h.innerHTML,
                    location.hostname != L.toLowerCase() + Y ? (U = ".", U = encodeURI(U),
                        // h = document.getElementById("resultsData"),
                        // h.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", U),
                        saveData && qa(5)) : qa(3),
                    n = "busy",
    
                    notify(),
                    clearInterval(measurementFunctionInterval)
                )
            };

            measurementFunctionInterval = setInterval(measurementFunction, 100);
        }

        async function prepareGauge() {
            var animations = document.getElementsByClassName("gauge-preparing");

            const sda = document.querySelector('animate.gauge-preparing[attributeName="stroke-dasharray"]');
            const ra = document.querySelector('animate.gauge-preparing[attributeName="r"]');
            const r = parseFloat(ra.getAttribute('to'));

            sda.setAttribute('to', `${getArcLength(r * 2 * (1 - (52 / 180)))}, ${getArcLength(r * 2)}`);

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

        function finishGauge() {
            // console.log("wala na finish na");

            const progressBarPanel = document.getElementById('progressBarPanel');
            progressBarPanel.classList.add('fade-out');

            const speedResultsPanel = document.getElementById('speedResultsPanel');
            speedResultsPanel.classList.add('move-results');

            const otherResultsPanel = document.getElementById('otherResultsPanel');
            otherResultsPanel.classList.add('move-results');
            speedResultsPanel.onanimationend = function () {
                otherResultsPanel.style.visibility = 'visible';
                otherResultsPanel.classList.add('fade-in');
                
            }

            const homePanel = document.getElementById('homePanel');
            homePanel.classList.add('fade-out');

            const animations = document.getElementsByClassName("gauge-done");

            const ra = document.querySelector('animate.gauge-done[attributeName="r"]');
            const r = parseFloat(ra.getAttribute('to'));

            const sda = document.querySelector('animate.gauge-done[attributeName="stroke-dasharray"]');
            sda.setAttribute('to', `${getArcLength(r * 2 * (1 - (52 / 180)))}, ${getArcLength(r * 2)}`);

            for (const anim of animations) {
                anim.beginElement();
            }
        }

        function notify() {
            try {
                window.flutter_inappwebview.callHandler('get-results', results);
            } catch { }
        }

        async function t() {
            await d.ShowUI();
            await prepareGauge();

            for (var b = 0; b < dlThreads; b++) setTimeout(function (l) {
                p(l)
            }, dlDelay * b, b)
            
            measurementFunctionInterval = setInterval(measurementFunction, 100);
        }

        function w() {
            for (var b = 0; b < ulThreads; b++) setTimeout(function (l) {
                z(l)
            }, ulDelay * b, b)
        }

        function m(b) {
            if ("dl" === b) {
                var l = 1e3 * sa;
                l > 1e3 * Ma + (ta / 2) * 1e3 && 0 === Qa && ((Qa = 1), (ca *= 0.01), (V *= 0.01), (da = l + 1e4));
                l >= da && da < eb && ((da += 1e4), (ca *= 0.01), (V *= 0.01));
                Ra = 0 >= O ? 0 : O - Sa;
                Sa = O;
                V += Ra;
                Ta = ya = l - ya;
                ya = l;
                ca += Ta;
                0 < V && (x = Z = (V / ca / 125) * upAdjust);
            }
            "up" === b &&
                ((b = 1e3 * P),
                b > 1e3 * Na + (va / 2) * 1e3 && 0 === Ua && ((Ua = 1), (ea *= 0.1), (W *= 0.1), (fa = b + 1e4)),
                b >= fa && fa < fb && ((fa += 1e4), (ea *= 0.1), (W *= 0.1)),
                (Va = 0 >= J ? 0 : J - Wa),
                (Wa = J),
                (W += Va),
                (Xa = za = b - za),
                (za = b),
                (ea += Xa),
                0 < W && (x = Z = (W / ea / 125) * upAdjust));
        }        

        function p(b) {
            var l = 0;
            y[b] = new XMLHttpRequest;
            console.log("ano download", Aa.Download + "?n=" + Math.random());
            y[b].open("GET", Aa.Download + "?n=" + Math.random(), !0);
            y[b].onload = function (h) {
                0 === l && (O += h.total);
                "initDown" ==
                    n && (n = "Downloading");
                y[b] && (y[b].abort(), y[b] = null, y[b] = void 0, delete y[b]);
                0 === G && p(b);
            };
            y[b].onerror = function (h) {
                0 === G && p(b)
            };
            y[b].onprogress = function (h) {
                if (1 === G) return y[b].abort(), y[b] = null, y[b] = void 0, delete y[b], !1;
                "initDown" == n && (n = "Downloading");
                var u = 0 >= h.loaded ? 0 : h.loaded - l;
                if (isNaN(u) || !isFinite(u) || 0 > u) return !1;
                O += u;
                l = h.loaded;
            };
            y[b].responseType = "arraybuffer";
            y[b].send()
        }

        function z(b) {
            var l = 0;
            v[b] = new XMLHttpRequest;
            console.log("ano upload", Aa.Upload + "?n=" + Math.random());
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
                if (0 === l && ((J += 1048576 * ulDataSize), P >= ulDuration)) return v[b].abort(), (v[b] = null), (v[b] = void 0), delete v[b], !1;
                if ("initup" == n && void 0 === h) {
                    var h;
                    n = "Uploading";
                }
                v[b] && (v[b].abort(), (v[b] = null), (v[b] = void 0), delete v[b]);
                1 === G && z(b);
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

                d.pingProgressBarElement.style.width = `${H.length / pingSamples * 100}%`;

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
                    console.log(K);
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
            // Automatic start test
            d.isAutoStart = true;

            d.OpenSpeedtest.fade("in", 200);
            d.userInterface();

            var X = Math.ceil(Math.abs(Ga));
            d.showStatus("");
            var cb = setInterval(a, 1E3)
        }
        else {
            // non-auto start

            this.isAutoStart = false;

            setClientConnection();
            setTestServerConnection();

            d.ShowAppIntro();
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
        "dev" === openChannel && (Ka = "http://openspeedtest.com?ref=OfflineTool".length + Oa.length);
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
        new ib;
    }

    document.getElementById('btnTestAgain').onclick = function () {
        window.top.location = '?r';
    }
    document.getElementById('btnBackToHome').onclick = function () {
        window.top.location = '/';
    }

    function getArcLength(length) {
        return length * Math.PI;
    }

})(window.OpenSpeedTest = window.OpenSpeedTest || {});