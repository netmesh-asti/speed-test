'use strict';
/**
 * @return {undefined}
 */
window.onload = function() {
  OpenSpeedTest.Start();
  ostOnload();
};
(function(result) {
  /**
   * @param {string} selector
   * @return {?}
   */
  function $(selector) {
    if (!(this instanceof $)) {
      return new $(selector);
    }
    /** @type {(Element|null)} */
    this.el = document.getElementById(selector);
  }
  var name;
  var modelIndex;
  /**
   * @param {!Function} callback
   * @return {undefined}
   */
  var filter = function(callback) {
    if (callback && "function" === typeof callback) {
      callback();
    }
  };
  /**
   * @param {string} type
   * @param {number} callback
   * @param {!Function} frame
   * @return {undefined}
   */
  $.prototype.fade = function(type, callback, frame) {
    /** @type {boolean} */
    var equals = "in" === type;
    /** @type {number} */
    var Ymain = equals ? 0 : 1;
    /** @type {number} */
    var Yxlabel = 14 / callback;
    var prev_entry = this;
    if (equals) {
      /** @type {string} */
      prev_entry.el.style.display = "block";
      prev_entry.el.style.opacity = Ymain;
    }
    var slideshowtimer = window.setInterval(function() {
      Ymain = equals ? Ymain + Yxlabel : Ymain - Yxlabel;
      prev_entry.el.style.opacity = Ymain;
      if (0 >= Ymain) {
        /** @type {string} */
        prev_entry.el.style.display = "none";
      }
      if (0 >= Ymain || 1 <= Ymain) {
        window.clearInterval(slideshowtimer, filter(frame));
      }
    }, 14);
  };
  /**
   * @param {number} t
   * @param {number} i
   * @param {number} n
   * @param {number} d
   * @return {?}
   */
  var fn = function(t, i, n, d) {
    /** @type {number} */
    t = t / d;
    t--;
    return n * (t * t * t + 1) + i;
  };
  /**
   * @return {undefined}
   */
  var render = function() {
    this.YourIP = $("YourIP");
    this.ipDesk = $("ipDesk");
    this.ipMob = $("ipMob");
    this.downSymbolDesk = $("downSymbolDesk");
    this.upSymbolDesk = $("upSymbolDesk");
    this.upSymbolMob = $("upSymbolMob");
    this.downSymbolMob = $("downSymbolMob");
    this.settingsMob = $("settingsMob");
    this.settingsDesk = $("settingsDesk");
    this.oDoLiveStatus = $("oDoLiveStatus");
    this.ConnectErrorMob = $("ConnectErrorMob");
    this.ConnectErrorDesk = $("ConnectErrorDesk");
    this.downResult = $("downResult");
    this.upRestxt = $("upRestxt");
    this.pingResult = $("pingResult");
    this.jitterDesk = $("jitterDesk");
    this.pingMobres = $("pingMobres");
    this.JitterResultMon = $("JitterResultMon");
    this.JitterResultms = $("JitterResultms");
    this.UI_Desk = $("UI-Desk");
    this.UI_Mob = $("UI-Mob");
    this.oDoTopSpeed = $("oDoTopSpeed");
    this.startButtonMob = $("startButtonMob");
    this.startButtonDesk = $("startButtonDesk");
    this.intro_Desk = $("intro-Desk");
    this.intro_Mob = $("intro-Mob");
    this.loader = $("loading_app");
    this.OpenSpeedtest = $("OpenSpeedtest");
    this.mainGaugebg_Desk = $("mainGaugebg-Desk");
    this.mainGaugeBlue_Desk = $("mainGaugeBlue-Desk");
    this.mainGaugeWhite_Desk = $("mainGaugeWhite-Desk");
    this.mainGaugebg_Mob = $("mainGaugebg-Mob");
    this.mainGaugeBlue_Mob = $("mainGaugeBlue-Mob");
    this.mainGaugeWhite_Mob = $("mainGaugeWhite-Mob");
    this.oDoLiveSpeed = $("oDoLiveSpeed");
    this.progressStatus_Mob = $("progressStatus-Mob");
    this.progressStatus_Desk = $("progressStatus-Desk");
    this.graphc1 = $("graphc1");
    this.graphc2 = $("graphc2");
    this.graphMob2 = $("graphMob2");
    this.graphMob1 = $("graphMob1");
    this.text = $("text");
    /** @type {!Array} */
    this.scale = [{
      degree : 680,
      value : 0
    }, {
      degree : 570,
      value : 0.5
    }, {
      degree : 460,
      value : 1
    }, {
      degree : 337,
      value : 10
    }, {
      degree : 220,
      value : 100
    }, {
      degree : 115,
      value : 500
    }, {
      degree : 0,
      value : 1000
    }];
    /** @type {string} */
    this.polygon = this.chart = this.element = "";
    /** @type {number} */
    this.width = 200;
    /** @type {number} */
    this.height = 50;
    /** @type {number} */
    this.maxValue = 0;
    /** @type {!Array} */
    this.values = [];
    /** @type {!Array} */
    this.points = [];
    /** @type {number} */
    this.vSteps = 5;
    /** @type {!Array} */
    this.measurements = [];
    /** @type {!Array} */
    this.points = [];
  };
  /**
   * @return {undefined}
   */
  render.prototype.reset = function() {
    /** @type {string} */
    this.polygon = this.chart = this.element = "";
    /** @type {number} */
    this.width = 200;
    /** @type {number} */
    this.height = 50;
    /** @type {number} */
    this.maxValue = 0;
    /** @type {!Array} */
    this.values = [];
    /** @type {!Array} */
    this.points = [];
    /** @type {number} */
    this.vSteps = 5;
    /** @type {!Array} */
    this.measurements = [];
    /** @type {!Array} */
    this.points = [];
  };
  /**
   * @return {undefined}
   */
  render.prototype.ip = function() {
    if ("block" === this.ipDesk.el.style.display) {
      /** @type {string} */
      this.ipDesk.el.style.display = "none";
      /** @type {string} */
      this.ipMob.el.style.display = "none";
    } else {
      /** @type {string} */
      this.ipDesk.el.style.display = "block";
      /** @type {string} */
      this.ipMob.el.style.display = "block";
    }
  };
  /**
   * @return {undefined}
   */
  render.prototype.prePing = function() {
    this.loader.fade("out", 500);
    this.OpenSpeedtest.fade("in", 1E3);
  };
  /**
   * @return {undefined}
   */
  render.prototype.app = function() {
    this.loader.fade("out", 500, this.ShowAppIntro());
  };
  /**
   * @return {undefined}
   */
  render.prototype.ShowAppIntro = function() {
    this.OpenSpeedtest.fade("in", 1E3);
  };
  /**
   * @return {undefined}
   */
  render.prototype.userInterface = function() {
    this.intro_Desk.fade("out", 1E3);
    this.intro_Mob.fade("out", 1E3, this.ShowUI());
  };
  /**
   * @return {undefined}
   */
  render.prototype.ShowUI = function() {
    this.UI_Desk.fade("in", 1E3);
    this.UI_Mob.fade("in", 1E3, function(a) {
      /** @type {string} */
      name = "Loaded";
      console.log("Developed by Vishnu. Email --\x3e me@vishnu.pro");
    });
  };
  /**
   * @param {number} data
   * @return {undefined}
   */
  render.prototype.Symbol = function(data) {
    if (0 == data) {
      /** @type {string} */
      this.downSymbolMob.el.style.display = "block";
      /** @type {string} */
      this.downSymbolDesk.el.style.display = "block";
      /** @type {string} */
      this.upSymbolMob.el.style.display = "none";
      /** @type {string} */
      this.upSymbolDesk.el.style.display = "none";
    }
    if (1 == data) {
      /** @type {string} */
      this.downSymbolMob.el.style.display = "none";
      /** @type {string} */
      this.downSymbolDesk.el.style.display = "none";
      /** @type {string} */
      this.upSymbolMob.el.style.display = "block";
      /** @type {string} */
      this.upSymbolDesk.el.style.display = "block";
    }
    if (2 == data) {
      /** @type {string} */
      this.downSymbolMob.el.style.display = "none";
      /** @type {string} */
      this.downSymbolDesk.el.style.display = "none";
      /** @type {string} */
      this.upSymbolMob.el.style.display = "none";
      /** @type {string} */
      this.upSymbolDesk.el.style.display = "none";
    }
  };
  /**
   * @param {number} value
   * @param {number} mutable
   * @return {undefined}
   */
  render.prototype.Graph = function(value, mutable) {
    /**
     * @param {?} data
     * @param {?} r
     * @return {undefined}
     */
    function render(data, r) {
      /** @type {number} */
      i = options.maxValue = 0;
      for (; i < options.values.length; i++) {
        if (options.values[i] > options.maxValue) {
          options.maxValue = options.values[i];
        }
      }
      /** @type {number} */
      options.maxValue = Math.ceil(options.maxValue);
      if (1 < options.values.length) {
        /** @type {string} */
        data = "0," + options.height + " ";
        /** @type {number} */
        i = 0;
        for (; i < options.values.length; i++) {
          /** @type {number} */
          r = options.values[i] / options.maxValue;
          /** @type {string} */
          r = (130 / (options.values.length - 1) * i).toFixed(2) + "," + (options.height - options.height * r).toFixed(2) + " ";
          /** @type {string} */
          data = data + r;
        }
        /** @type {string} */
        data = data + ("130," + options.height);
        /** @type {string} */
        options.points = data;
      }
      /** @type {number} */
      i = 0;
      for (; i < options.vSteps; i++) {
        options.measurements.push(Math.ceil(options.maxValue / options.vSteps * (i + 1)));
      }
      options.measurements.reverse();
      /** @type {!NodeList<Element>} */
      data = document.getElementsByClassName(value);
      for (; 0 < data.length;) {
        data[0].remove();
      }
      /** @type {!Element} */
      options.polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
      options.polygon.setAttribute("points", options.points);
      options.polygon.setAttribute("class", value);
      if (1 < options.values.length) {
        content.appendChild(options.polygon);
      }
    }
    if (!("remove" in Element.prototype)) {
      /**
       * @return {undefined}
       */
      Element.prototype.remove = function() {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      };
    }
    var options = this;
    if (0 === mutable) {
      var content = this.graphc1.el;
      /** @type {string} */
      var value = "line";
      /** @type {string} */
      this.graphMob2.el.style.display = "none";
      /** @type {string} */
      this.graphMob1.el.style.display = "block";
    } else {
      content = this.graphc2.el;
      /** @type {string} */
      value = "line2";
      /** @type {string} */
      this.graphMob1.el.style.display = "none";
      /** @type {string} */
      this.graphMob2.el.style.display = "block";
    }
    if (isNaN(value)) {
      this.values.push("");
    } else {
      this.values.push(value);
    }
    var i;
    if (0 < value) {
      render(content, value);
    }
  };
  /**
   * @param {number} table
   * @param {number} val
   * @return {undefined}
   */
  render.prototype.progress = function(table, val) {
    var oldVNode = this;
    /** @type {number} */
    var e = Date.now();
    /** @type {number} */
    var chat_retry = setInterval(function() {
      /** @type {number} */
      var data = (Date.now() - e) / 1E3;
      var message = fn(data, 400, 400, val);
      var ret = fn(data, 400, -400, val);
      if (table) {
        oldVNode.progressStatus_Desk.el.style.strokeDashoffset = message;
        oldVNode.progressStatus_Mob.el.style.strokeDashoffset = message;
      } else {
        oldVNode.progressStatus_Desk.el.style.strokeDashoffset = ret;
        oldVNode.progressStatus_Mob.el.style.strokeDashoffset = ret;
      }
      if (data >= val) {
        clearInterval(chat_retry);
        /** @type {string} */
        modelIndex = "done";
        /** @type {number} */
        oldVNode.progressStatus_Desk.el.style.strokeDashoffset = 800;
        /** @type {number} */
        oldVNode.progressStatus_Mob.el.style.strokeDashoffset = 800;
      }
    }, 14);
  };
  /**
   * @param {number} a
   * @return {undefined}
   */
  render.prototype.mainGaugeProgress = function(a) {
    /** @type {number} */
    var json = a;
    if (0 > json) {
      /** @type {number} */
      json = 0;
    }
    var length = this.getNonlinearDegree(json);
    if (0 < a) {
      /** @type {number} */
      this.mainGaugeBlue_Desk.el.style.strokeOpacity = 1;
      /** @type {number} */
      this.mainGaugeWhite_Desk.el.style.strokeOpacity = 1;
      /** @type {number} */
      this.mainGaugeBlue_Mob.el.style.strokeOpacity = 1;
      /** @type {number} */
      this.mainGaugeWhite_Mob.el.style.strokeOpacity = 1;
      this.mainGaugeBlue_Desk.el.style.strokeDashoffset = length;
      this.mainGaugeWhite_Desk.el.style.strokeDashoffset = 0 == length ? 1 : length + 1;
      this.mainGaugeBlue_Mob.el.style.strokeDashoffset = length;
      this.mainGaugeWhite_Mob.el.style.strokeDashoffset = 0 == length ? 1 : length + 1;
    }
    if (0 == length && 1E3 < json) {
      this.mainGaugeBlue_Mob.el.style.strokeDashoffset = 681 <= length ? 681 : length;
      this.mainGaugeWhite_Mob.el.style.strokeDashoffset = 0 == length ? 1 : length + 1;
      this.mainGaugeWhite_Desk.el.style.strokeDashoffset = 0 == length ? 1 : length + 1;
      this.mainGaugeBlue_Desk.el.style.strokeDashoffset = 681 <= length ? 681 : length;
    } else {
      if (0 == length && 0 >= json) {
        /** @type {number} */
        this.mainGaugeBlue_Mob.el.style.strokeDashoffset = 681.1;
        /** @type {number} */
        this.mainGaugeWhite_Mob.el.style.strokeDashoffset = .1;
        /** @type {number} */
        this.mainGaugeWhite_Desk.el.style.strokeDashoffset = .1;
        /** @type {number} */
        this.mainGaugeBlue_Desk.el.style.strokeDashoffset = 681.1;
      }
    }
  };
  /**
   * @param {string} name
   * @return {undefined}
   */
  render.prototype.showStatus = function(name) {
    /** @type {string} */
    this.oDoLiveStatus.el.textContent = name;
  };
  /**
   * @return {undefined}
   */
  render.prototype.ConnectionError = function() {
    /** @type {string} */
    this.ConnectErrorMob.el.style.display = "block";
    /** @type {string} */
    this.ConnectErrorDesk.el.style.display = "block";
  };
  /**
   * @param {number} num
   * @return {undefined}
   */
  render.prototype.uploadResult = function(num) {
    if (1 > num) {
      this.upRestxt.el.textContent = num.toFixed(3);
    }
    if (1 <= num && 9999 > num) {
      this.upRestxt.el.textContent = num.toFixed(1);
    }
    if (1E4 <= num && 99999 > num) {
      this.upRestxt.el.textContent = num.toFixed(1);
      /** @type {string} */
      this.upRestxt.el.style.fontSize = "20px";
    }
    if (1E5 <= num) {
      this.upRestxt.el.textContent = num.toFixed(1);
      /** @type {string} */
      this.upRestxt.el.style.fontSize = "18px";
    }
  };
  /**
   * @param {number} value
   * @param {string} title
   * @return {undefined}
   */
  render.prototype.pingResults = function(value, title) {
    if ("Ping" === title) {
      if (1 <= value && 1E4 > value) {
        /** @type {number} */
        this.pingResult.el.textContent = Math.floor(value);
        /** @type {number} */
        this.pingMobres.el.textContent = Math.floor(value);
      } else {
        if (0 <= value && 1 > value) {
          /** @type {number} */
          this.pingResult.el.textContent = value;
          /** @type {number} */
          this.pingMobres.el.textContent = value;
        }
      }
    }
    if ("Error" === title) {
      /** @type {number} */
      this.oDoLiveSpeed.el.textContent = value;
    }
  };
  /**
   * @param {number} std
   * @return {undefined}
   */
  render.prototype.downloadResult = function(std) {
    if (1 > std) {
      this.downResult.el.textContent = std.toFixed(3);
    }
    if (1 <= std && 9999 > std) {
      this.downResult.el.textContent = std.toFixed(1);
    }
    if (1E4 <= std && 99999 > std) {
      this.downResult.el.textContent = std.toFixed(1);
      /** @type {string} */
      this.downResult.el.style.fontSize = "20px";
    }
    if (1E5 <= std) {
      this.downResult.el.textContent = std.toFixed(1);
      /** @type {string} */
      this.downResult.el.style.fontSize = "18px";
    }
  };
  /**
   * @param {number} num
   * @param {string} maxLastComments
   * @return {undefined}
   */
  render.prototype.jitterResult = function(num, maxLastComments) {
    if ("Jitter" === maxLastComments) {
      if (1 <= num && 1E4 > num) {
        /** @type {number} */
        this.jitterDesk.el.textContent = Math.floor(num);
        if (1 <= num && 100 > num) {
          /** @type {number} */
          this.JitterResultMon.el.textContent = Math.floor(num);
        }
        if (100 <= num) {
          (num / 1E3).toFixed(1);
          /** @type {number} */
          this.JitterResultMon.el.textContent = 1.1;
        }
      } else {
        if (0 <= num && 1 > num) {
          /** @type {number} */
          this.jitterDesk.el.textContent = num;
          /** @type {number} */
          this.JitterResultMon.el.textContent = num;
        }
      }
    }
  };
  /**
   * @param {number} x
   * @param {string} i
   * @return {undefined}
   */
  render.prototype.LiveSpeed = function(x, i) {
    if ("countDown" === i) {
      i = x.toFixed(0);
      /** @type {string} */
      this.oDoLiveSpeed.el.textContent = i;
    } else {
      if ("speedToZero" === i) {
        i = x.toFixed(1);
        /** @type {string} */
        this.oDoLiveSpeed.el.textContent = i;
        /** @type {string} */
        this.oDoTopSpeed.el.textContent = "1000+";
        /** @type {number} */
        this.oDoTopSpeed.el.style.fontSize = 16.9;
        /** @type {string} */
        this.oDoTopSpeed.el.style.fill = "gray";
      } else {
        if ("Ping" === i) {
          if (1 <= x && 1E4 > x) {
            /** @type {number} */
            this.oDoLiveSpeed.el.textContent = Math.floor(x);
          } else {
            if (0 <= x && 1 > x) {
              /** @type {number} */
              this.oDoLiveSpeed.el.textContent = x;
            }
          }
        } else {
          if (0 == x) {
            i = x.toFixed(1);
            /** @type {string} */
            this.oDoLiveSpeed.el.textContent = i;
          }
          if (1 >= x && 0 < x) {
            i = x.toFixed(3);
            /** @type {string} */
            this.oDoLiveSpeed.el.textContent = i;
          }
          if (1 < x) {
            i = x.toFixed(1);
            /** @type {string} */
            this.oDoLiveSpeed.el.textContent = i;
          }
          if (1E3 >= x) {
            /** @type {string} */
            this.oDoTopSpeed.el.textContent = "1000+";
            /** @type {number} */
            this.oDoTopSpeed.el.style.fontSize = 16.9;
            /** @type {string} */
            this.oDoTopSpeed.el.style.fill = "gray";
          }
          if (1010 <= x) {
            /** @type {string} */
            this.oDoTopSpeed.el.textContent = 1E3 * Math.floor(x / 1010) + "+";
            /** @type {string} */
            this.oDoTopSpeed.el.style.fill = "#434040";
            /** @type {string} */
            this.oDoTopSpeed.el.style.fontSize = "20px";
          }
        }
      }
    }
  };
  /**
   * @param {number} start
   * @param {string} text
   * @return {undefined}
   */
  render.prototype.GaugeProgresstoZero = function(start, text) {
    var t_chksum = this;
    if (0 <= start) {
      /** @type {number} */
      var e = Date.now();
      /** @type {number} */
      var progress = 0 - start;
      /** @type {number} */
      var chat_retry = setInterval(function() {
        /** @type {number} */
        var new_width = (Date.now() - e) / 1E3;
        /** @type {number} */
        var r = new_width / 3;
        r--;
        r = progress * (r * r * r * r * r + 1) + start;
        t_chksum.LiveSpeed(r, "speedToZero");
        t_chksum.mainGaugeProgress(r);
        if (3 <= new_width || 0 >= r) {
          clearInterval(chat_retry);
          t_chksum.LiveSpeed(0, "speedToZero");
          t_chksum.mainGaugeProgress(0);
          /** @type {string} */
          name = text;
        }
      }, 16);
    }
  };
  /**
   * @param {number} value
   * @return {?}
   */
  render.prototype.getNonlinearDegree = function(value) {
    /** @type {number} */
    var i = 0;
    if (0 == value || 0 >= value || isNaN(value)) {
      return 0;
    }
    for (; i < this.scale.length;) {
      if (value > this.scale[i].value) {
        i++;
      } else {
        return this.scale[i - 1].degree + (value - this.scale[i - 1].value) * (this.scale[i].degree - this.scale[i - 1].degree) / (this.scale[i].value - this.scale[i - 1].value);
      }
    }
    return this.scale[this.scale.length - 1].degree;
  };
  /**
   * @return {undefined}
   */
  var Element = function() {
    /** @type {number} */
    this.OverAllTimeAvg = window.performance.now();
    /** @type {!Array} */
    this.SpeedSamples = [];
    this.FinalSpeed;
  };
  /**
   * @return {undefined}
   */
  Element.prototype.reset = function() {
    /** @type {number} */
    this.OverAllTimeAvg = window.performance.now();
    /** @type {!Array} */
    this.SpeedSamples = [];
    /** @type {number} */
    this.FinalSpeed = 0;
  };
  /**
   * @param {!Array} metapakModulesSequence
   * @return {?}
   */
  Element.prototype.ArraySum = function(metapakModulesSequence) {
    return metapakModulesSequence ? metapakModulesSequence.reduce(function(maxKeyAge, oldCount) {
      if ("number" === typeof maxKeyAge && "number" === typeof oldCount) {
        return maxKeyAge + oldCount;
      }
    }, 0) : 0;
  };
  /**
   * @param {number} domain
   * @param {number} v
   * @param {string} newValue
   * @return {?}
   */
  Element.prototype.AvgSpeed = function(domain, v, newValue) {
    /** @type {number} */
    this.timeNow = (window.performance.now() - this.OverAllTimeAvg) / 1E3;
    this.FinalSpeed;
    if (this.timeNow >= newValue - v) {
      if (0 < domain) {
        this.SpeedSamples.push(domain);
      }
      /** @type {number} */
      this.FinalSpeed = this.ArraySum(this.SpeedSamples) / this.SpeedSamples.length;
    }
    return this.FinalSpeed;
  };
  /**
   * @param {number} i
   * @param {!Function} name
   * @return {?}
   */
  Element.prototype.uRandom = function(i, name) {
    /** @type {!Uint32Array} */
    var value = new Uint32Array(262144);
    /** @type {!Array} */
    var options = [];
    /** @type {function(new:Blob, (Array<(ArrayBuffer|ArrayBufferView|Blob|null|string)>|null)=, (BlobPropertyBag|null)=): ?} */
    var Chart = Blob;
    /** @type {number} */
    var dep = 0;
    for (; dep < i; dep++) {
      /** @type {number} */
      var name = dep;
      /** @type {number} */
      var valueLength = value.length;
      /** @type {number} */
      var j = 0;
      for (; j < valueLength; j++) {
        /** @type {number} */
        value[j] = 4294967296 * Math.random();
      }
      /** @type {!Uint32Array} */
      options[name] = value;
    }
    return new Chart(options, {
      type : "application/octet-stream"
    }, filter(name));
  };
  /**
   * @return {undefined}
   */
  var init = function() {
    /**
     * @return {undefined}
     */
    function a() {
      if (1 <= numberOfRepetitions) {
        --numberOfRepetitions;
        self.LiveSpeed(numberOfRepetitions, "countDown");
      } else {
        if (0 >= numberOfRepetitions) {
          clearInterval(chat_retry);
          if (17 == (_.toLowerCase() + curid).length) {
            init();
          }
        }
      }
    }
    /**
     * @return {undefined}
     */
    function disablemouse() {
      self.ip();
    }
    /**
     * @return {undefined}
     */
    function f() {
      if ("openspeedtest.com" === _.toLowerCase() + curid) {
        init();
        self.userInterface();
      } else {
        if (55 == Ka) {
          init();
          self.userInterface();
        }
      }
    }
    /**
     * @return {undefined}
     */
    function init() {
      /**
       * @return {undefined}
       */
      function move() {
        /** @type {number} */
        pa = window.performance.now();
        if (4 === S) {
          upload();
        }
      }
      if (!("widget" !== openChannel && "web" !== openChannel)) {
        post(1);
      }
      self.startButtonDesk.el.removeEventListener("click", f);
      self.startButtonMob.el.removeEventListener("click", f);
      /** @type {number} */
      var chat_retry = setInterval(function() {
        if ("Loaded" === name) {
          /** @type {string} */
          name = "busy";
          callback();
        }
        if ("Ping" === name) {
          /** @type {string} */
          name = "busy";
          self.showStatus("Milliseconds");
        }
        if ("Download" === name) {
          self.showStatus("Initializing..");
          target.reset();
          /** @type {number} */
          base = extra = 0;
          self.reset();
          /** @type {number} */
          ra = window.performance.now();
          onClick();
          /** @type {string} */
          name = "initDown";
        }
        if ("Downloading" === name) {
          self.Symbol(0);
          if (0 == T) {
            /** @type {number} */
            T = 1;
            self.showStatus("Testing download speed..");
            /** @type {number} */
            var n = (window.performance.now() - ra) / 1E3;
            /** @type {number} */
            closedN = n;
            self.progress(1, dlDuration + 2.5);
            dlDuration = dlDuration + n;
          }
          /** @type {number} */
          i = (window.performance.now() - ra) / 1E3;
          remove("dl");
          self.showStatus("Mbps download");
          self.mainGaugeProgress(base);
          self.LiveSpeed(base);
          self.Graph(base, 0);
          b = target.AvgSpeed(base, replacement, dlDuration);
          if (i >= dlDuration && "done" == modelIndex) {
            if (type) {
              self.GaugeProgresstoZero(base, "SendR");
              self.showStatus("All done");
              self.Symbol(2);
            } else {
              self.GaugeProgresstoZero(base, "Upload");
            }
            self.downloadResult(b);
            a = p;
            /** @type {number} */
            maxFleetBonus = 1;
            /** @type {string} */
            name = "busy";
            /** @type {number} */
            base = extra = 0;
            target.reset();
          }
        }
        if ("Upload" == name && 1 === maxFleetBonus) {
          self.Symbol(1);
          /** @type {string} */
          name = "initup";
          self.showStatus("Initializing..");
          node = target.uRandom(ulDataSize, move);
          if (type) {
            /** @type {number} */
            T = 1;
          }
        }
        if ("Uploading" === name) {
          if (1 == T) {
            /** @type {number} */
            T = 2;
            self.showStatus("Testing upload speed..");
            /** @type {number} */
            base = 0;
            target.reset();
            self.reset();
            /** @type {number} */
            c = n = (window.performance.now() - pa) / 1E3;
            self.progress(false, ulDuration + 2.5);
            ulDuration = ulDuration + n;
          }
          self.showStatus("Mbps upload");
          /** @type {number} */
          g_accuracy = (window.performance.now() - pa) / 1E3;
          remove("up");
          self.mainGaugeProgress(base);
          self.LiveSpeed(base);
          self.Graph(base, 1);
          ret = target.AvgSpeed(base, ev, ulDuration);
          if (g_accuracy >= ulDuration && 1 == maxFleetBonus) {
            bytes = bt;
            self.uploadResult(ret);
            self.GaugeProgresstoZero(base, "SendR");
            node = void 0;
            self.showStatus("All done");
            self.Symbol(2);
            /** @type {string} */
            name = "busy";
            /** @type {number} */
            maxFleetBonus = 0;
          }
        }
        if ("Error" === name) {
          self.showStatus("Check your network connection status.");
          self.ConnectionError();
          /** @type {string} */
          name = "busy";
          clearInterval(chat_retry);
          /** @type {!Element} */
          n = document.createElement("div");
          /** @type {string} */
          n.innerHTML = '<a xlink:href="https://openspeedtest.com/FAQ.php?ref=NetworkError" style="cursor: pointer" target="_blank"></a>';
          /** @type {(Element|null)} */
          var d = n.querySelector("a");
          /** @type {string} */
          self.oDoLiveSpeed.el.textContent = "Network Error";
          /** @type {(Element|null)} */
          var t = document.getElementById("oDoLiveSpeed");
          /** @type {string} */
          d.innerHTML = t.innerHTML;
          /** @type {string} */
          t.innerHTML = n.innerHTML;
        }
        if ("SendR" === name) {
          self.showStatus("All done");
          /** @type {!Element} */
          n = document.createElement("div");
          /** @type {string} */
          n.innerHTML = '<a xlink:href="https://openspeedtest.com?ref=Offline-Outro&run=5" style="cursor: pointer" target="_blank"></a>';
          /** @type {(Element|null)} */
          d = n.querySelector("a");
          /** @type {string} */
          self.oDoLiveSpeed.el.textContent = word;
          /** @type {(Element|null)} */
          t = document.getElementById("oDoLiveSpeed");
          /** @type {string} */
          d.innerHTML = t.innerHTML;
          /** @type {string} */
          t.innerHTML = n.innerHTML;
          if (location.hostname != _.toLowerCase() + curid) {
            /** @type {string} */
            name = "https://" + _.toLowerCase() + curid + "/results/show.php?&d=" + b.toFixed(3) + "&u=" + ret.toFixed(3) + "&p=" + validationVM + "&j=" + pingPongTimeout + "&dd=" + (a / 1048576).toFixed(3) + "&ud=" + (bytes / 1048576).toFixed(3) + "&ua=" + suffix;
            /** @type {string} */
            name = encodeURI(name);
            /** @type {(Element|null)} */
            n = document.getElementById("resultsData");
            n.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", name);
            n.setAttribute("target", "_blank");
            if (saveData) {
              post(5);
            }
          } else {
            post(3);
          }
          /** @type {string} */
          name = "busy";
          clearInterval(chat_retry);
        }
      }, 100);
    }
    /**
     * @return {undefined}
     */
    function onClick() {
      /** @type {number} */
      var i = 0;
      for (; i < dlThreads; i++) {
        setTimeout(function(LEGACY_INDEX_ID) {
          get(LEGACY_INDEX_ID);
        }, dlDelay * i, i);
      }
    }
    /**
     * @return {undefined}
     */
    function upload() {
      /** @type {number} */
      var i = 0;
      for (; i < ulThreads; i++) {
        setTimeout(function(id) {
          uploadNextChunk(id);
        }, ulDelay * i, i);
      }
    }
    /**
     * @param {!Object} name
     * @return {undefined}
     */
    function remove(name) {
      if ("dl" === name) {
        /** @type {number} */
        var b = 1E3 * i;
        if (b > 1E3 * closedN + replacement / 2 * 1E3 && 0 === confirmPass) {
          /** @type {number} */
          confirmPass = 1;
          /** @type {number} */
          sum = sum * .01;
          /** @type {number} */
          C = C * .01;
          /** @type {number} */
          t = b + 1E4;
        }
        if (b >= t && t < numTarget) {
          /** @type {number} */
          t = t + 1E4;
          /** @type {number} */
          sum = sum * .01;
          /** @type {number} */
          C = C * .01;
        }
        /** @type {number} */
        rept = 0 >= p ? 0 : p - n;
        n = p;
        C = C + rept;
        /** @type {number} */
        j = r = b - r;
        /** @type {number} */
        r = b;
        sum = sum + j;
        if (0 < C) {
          /** @type {number} */
          base = extra = C / sum / 125 * upAdjust;
        }
      }
      if ("up" === name) {
        /** @type {number} */
        name = 1E3 * g_accuracy;
        if (name > 1E3 * c + ev / 2 * 1E3 && 0 === Ua) {
          /** @type {number} */
          Ua = 1;
          /** @type {number} */
          waitBeforeReconnect = waitBeforeReconnect * .1;
          /** @type {number} */
          min = min * .1;
          /** @type {number} */
          nextIndexToProcess = name + 1E4;
        }
        if (name >= nextIndexToProcess && nextIndexToProcess < taskQueueLength) {
          /** @type {number} */
          nextIndexToProcess = nextIndexToProcess + 1E4;
          /** @type {number} */
          waitBeforeReconnect = waitBeforeReconnect * .1;
          /** @type {number} */
          min = min * .1;
        }
        /** @type {number} */
        abs = 0 >= bt ? 0 : bt - lastBt;
        lastBt = bt;
        min = min + abs;
        /** @type {number} */
        reconnectTimeIncrease = activeActivity = name - activeActivity;
        /** @type {!Object} */
        activeActivity = name;
        waitBeforeReconnect = waitBeforeReconnect + reconnectTimeIncrease;
        if (0 < min) {
          /** @type {number} */
          base = extra = min / waitBeforeReconnect / 125 * upAdjust;
        }
      }
    }
    /**
     * @param {number} id
     * @return {undefined}
     */
    function get(id) {
      /** @type {number} */
      var firstLoadStatus = 0;
      /** @type {!XMLHttpRequest} */
      requests[id] = new XMLHttpRequest;
      requests[id].open("GET", nBuf.Download + "?n=" + Math.random(), true);
      /**
       * @param {!ProgressEvent} evt
       * @return {?}
       */
      requests[id].onprogress = function(evt) {
        if (1 === maxFleetBonus) {
          return requests[id].abort(), requests[id] = null, requests[id] = void 0, delete requests[id], false;
        }
        if ("initDown" == name) {
          /** @type {string} */
          name = "Downloading";
        }
        /** @type {number} */
        var dx = 0 >= evt.loaded ? 0 : evt.loaded - firstLoadStatus;
        if (isNaN(dx) || !isFinite(dx) || 0 > dx) {
          return false;
        }
        p = p + dx;
        firstLoadStatus = evt.loaded;
      };
      /**
       * @param {!ProgressEvent} r
       * @return {undefined}
       */
      requests[id].onload = function(r) {
        if (0 === firstLoadStatus) {
          p = p + r.total;
        }
        if ("initDown" == name) {
          /** @type {string} */
          name = "Downloading";
        }
        if (requests[id]) {
          requests[id].abort();
          /** @type {null} */
          requests[id] = null;
          requests[id] = void 0;
          delete requests[id];
        }
        if (0 === maxFleetBonus) {
          get(id);
        }
      };
      /**
       * @param {?} event
       * @return {undefined}
       */
      requests[id].onerror = function(event) {
        if (0 === maxFleetBonus) {
          get(id);
        }
      };
      /** @type {string} */
      requests[id].responseType = "arraybuffer";
      requests[id].send();
    }
    /**
     * @param {number} id
     * @return {undefined}
     */
    function uploadNextChunk(id) {
      /** @type {number} */
      var firstLoadStatus = 0;
      /** @type {!XMLHttpRequest} */
      obj[id] = new XMLHttpRequest;
      obj[id].open("POST", nBuf.Upload + "?n=" + Math.random(), true);
      /**
       * @param {!ProgressEvent} evt
       * @return {?}
       */
      obj[id].upload.onprogress = function(evt) {
        if ("initup" == name && void 0 === y) {
          /** @type {string} */
          name = "Uploading";
        }
        if (g_accuracy >= ulDuration) {
          return obj[id].abort(), obj[id] = null, obj[id] = void 0, delete obj[id], false;
        }
        /** @type {number} */
        var y = 0 >= evt.loaded ? 0 : evt.loaded - firstLoadStatus;
        if (isNaN(y) || !isFinite(y) || 0 > y) {
          return false;
        }
        bt = bt + y;
        firstLoadStatus = evt.loaded;
      };
      /**
       * @return {?}
       */
      obj[id].onload = function() {
        if (0 === firstLoadStatus && (bt = bt + 1048576 * ulDataSize, g_accuracy >= ulDuration)) {
          return obj[id].abort(), obj[id] = null, obj[id] = void 0, delete obj[id], false;
        }
        if ("initup" == name && void 0 === i) {
          var i;
          /** @type {string} */
          name = "Uploading";
        }
        if (obj[id]) {
          obj[id].abort();
          /** @type {null} */
          obj[id] = null;
          obj[id] = void 0;
          delete obj[id];
        }
        if (1 === maxFleetBonus) {
          uploadNextChunk(id);
        }
      };
      /**
       * @param {?} event
       * @return {undefined}
       */
      obj[id].onerror = function(event) {
        if (g_accuracy <= ulDuration) {
          uploadNextChunk(id);
        }
      };
      obj[id].setRequestHeader("Content-Type", "application/octet-stream");
      if (!(0 < id && 17E3 >= bt)) {
        obj[id].send(node);
      }
    }
    /**
     * @return {undefined}
     */
    function callback() {
      /** @type {string} */
      name = "Ping";
      performance.clearResourceTimings();
      if (_widgetLevelNo < _widgetLevelsLength - 1) {
        _widgetLevelNo++;
        if ("Stop" != title) {
          create(openSpeedTestServerList[_widgetLevelNo], callback);
        }
      } else {
        if (1 <= ia.length) {
          /** @type {number} */
          var b = Math.min.apply(Math, blocks);
          /** @type {number} */
          var i = blocks.indexOf(b);
          nBuf = ia[i];
          /** @type {number} */
          v = b;
          timeout = ref[i];
          /** @type {string} */
          title = "Busy";
          self.LiveSpeed(v, "Ping");
          self.pingResults(v, "Ping");
          self.jitterResult(timeout, "Jitter");
          /** @type {number} */
          validationVM = v;
          pingPongTimeout = timeout;
          name = type ? type : "Download";
        } else {
          if (!ia.Download) {
            /** @type {string} */
            name = "Error";
          }
        }
      }
    }
    /**
     * @param {?} index
     * @param {!Function} callback
     * @return {undefined}
     */
    function create(index, callback) {
      /**
       * @return {undefined}
       */
      function run() {
        if (A < pingSamples) {
          A++;
          if ("Stop" != title) {
            start();
          }
        } else {
          if (1 < t.length) {
            /** @type {number} */
            var b = Math.min.apply(Math, x);
            /** @type {number} */
            var m = Math.min.apply(Math, t);
            blocks.push(m);
            ia.push(index);
            ref.push(b);
          }
          if ("function" === typeof callback) {
            callback();
          }
        }
      }
      /**
       * @return {undefined}
       */
      function start() {
        /** @type {!XMLHttpRequest} */
        var xhr = new XMLHttpRequest;
        if ("Stop" != title) {
          xhr.abort();
        }
        xhr.open(pingMethod, index[pingFile] + "?n=" + Math.random(), true);
        xhr.timeout = pingTimeOut;
        /** @type {number} */
        var lastKeyWidth = window.performance.now();
        xhr.send();
        /**
         * @return {undefined}
         */
        xhr.onload = function() {
          if (200 === this.status && 4 === this.readyState) {
            /** @type {number} */
            var d = Math.floor(window.performance.now() - lastKeyWidth);
            /** @type {!Array<PerformanceEntry>} */
            var c = performance.getEntries();
            /** @type {!PerformanceEntry} */
            c = c[c.length - 1];
            /** @type {number} */
            c = "xmlhttprequest" === c.initiatorType ? parseFloat(c.duration.toFixed(1)) : d;
            if (250 < A) {
              /** @type {number} */
              c = d;
            }
            if (0 >= c) {
              t.push(.1);
            } else {
              t.push(c);
            }
            if (1 < t.length) {
              /** @type {string} */
              d = Math.abs(t[t.length - 1] - t[t.length - 2]).toFixed(1);
              x.push(d);
              self.LiveSpeed(c, "Ping");
              self.pingResults(c, "Ping");
              self.jitterResult(d, "Jitter");
            }
            run();
          }
          if (404 === this.status && 4 === this.readyState) {
            A++;
            run();
          }
        };
        /**
         * @param {?} event
         * @return {undefined}
         */
        xhr.onerror = function(event) {
          A++;
          run();
        };
        /**
         * @param {?} event
         * @return {undefined}
         */
        xhr.ontimeout = function(event) {
          A++;
          run();
        };
      }
      /** @type {number} */
      var A = 0;
      /** @type {!Array} */
      var t = [];
      /** @type {!Array} */
      var x = [];
      start();
    }
    var target = new Element;
    var self = new render;
    self.app();
    var node;
    /** @type {string} */
    var locationName = location.hostname;
    var loadNavlistLink;
    var linkToUse;
    var b;
    var ret;
    var validationVM;
    var pingPongTimeout;
    var chunk;
    var link;
    /** @type {!Array} */
    var requests = [];
    var extra;
    /** @type {number} */
    var p = 0;
    /** @type {number} */
    var bt = 0;
    /** @type {number} */
    var base = 0;
    var g_accuracy;
    var i;
    var ra;
    var pa;
    var name;
    /** @type {number} */
    var maxFleetBonus = 0;
    /** @type {string} */
    var suffix = window.navigator.userAgent ? window.navigator.userAgent : "Not Found";
    /** @type {number} */
    var ev = .6 * ulDuration;
    /** @type {number} */
    var replacement = .6 * dlDuration;
    if (7 <= .6 * ulDuration) {
      /** @type {number} */
      ev = 7;
    }
    if (7 <= .6 * dlDuration) {
      /** @type {number} */
      replacement = 7;
    }
    var options = function(url) {
      var b = {};
      /** @type {!Element} */
      var i = document.createElement("a");
      /** @type {string} */
      i.href = url;
      url = i.search.substring(1).split("&");
      /** @type {number} */
      i = 0;
      for (; i < url.length; i++) {
        var aKeys = url[i].split("=");
        /** @type {string} */
        b[aKeys[0]] = decodeURIComponent(aKeys[1]);
      }
      return b;
    }(window.location.href.toLowerCase());
    if (setPingSamples && ("string" === typeof options.ping || "string" === typeof options.p)) {
      if ("undefined" !== typeof options.ping) {
        var color = options.ping;
      } else {
        if ("undefined" !== typeof options.p) {
          color = options.p;
        }
      }
      if (0 < color) {
        pingSamples = pingSamples = color;
      }
    }
    if (setPingTimeout && ("string" === typeof options.out || "string" === typeof options.o)) {
      if ("undefined" !== typeof options.out) {
        var out = options.out;
      } else {
        if ("undefined" !== typeof options.o) {
          out = options.o;
        }
      }
      if (1 < out) {
        pingTimeOut = pingTimeOut = out;
      }
    }
    if (setHTTPReq && ("string" === typeof options.xhr || "string" === typeof options.x)) {
      if ("undefined" !== typeof options.xhr) {
        var target = options.xhr;
      } else {
        if ("undefined" !== typeof options.x) {
          target = options.x;
        }
      }
      if (0 < target && 32 >= target) {
        ulThreads = dlThreads = target;
      }
    }
    if (selectServer && ("string" === typeof options.host || "string" === typeof options.h)) {
      if ("undefined" !== typeof options.host) {
        var url = options.host;
      } else {
        if ("undefined" !== typeof options.h) {
          url = options.h;
        }
      }
      if (/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(url)) {
        /** @type {!Array} */
        openSpeedTestServerList = [{
          ServerName : "Home",
          Download : url + "/downloading",
          Upload : url + "/upload",
          ServerIcon : "DefaultIcon"
        }];
      }
    }
    /** @type {number} */
    color = parseInt(options.stress);
    /** @type {number} */
    out = parseInt(options.s);
    if ("string" === typeof options.stress) {
      /** @type {string} */
      var undefined = options.stress;
      /** @type {number} */
      var str = color;
    } else {
      if ("string" === typeof options.s) {
        /** @type {string} */
        undefined = options.s;
        /** @type {number} */
        str = out;
      }
    }
    if (undefined && stressTest) {
      if ("low" === undefined || "l" === undefined) {
        /** @type {number} */
        ulDuration = dlDuration = 300;
      }
      if ("medium" === undefined || "m" === undefined) {
        /** @type {number} */
        ulDuration = dlDuration = 600;
      }
      if ("high" === undefined || "h" === undefined) {
        /** @type {number} */
        ulDuration = dlDuration = 900;
      }
      if ("veryhigh" === undefined || "v" === undefined) {
        /** @type {number} */
        ulDuration = dlDuration = 1800;
      }
      if ("extreme" === undefined || "e" === undefined) {
        /** @type {number} */
        ulDuration = dlDuration = 3600;
      }
      if ("day" === undefined || "d" === undefined) {
        /** @type {number} */
        ulDuration = dlDuration = 86400;
      }
      if ("year" === undefined || "y" === undefined) {
        /** @type {number} */
        ulDuration = dlDuration = 31557600;
      }
      if (12 < color || 12 < out) {
        /** @type {(number|undefined)} */
        ulDuration = dlDuration = str;
      }
    }
    /** @type {number} */
    undefined = parseInt(options.clean);
    /** @type {number} */
    str = parseInt(options.c);
    /** @type {number} */
    color = 1;
    if (undefined) {
      /** @type {number} */
      color = undefined;
    } else {
      if (str) {
        /** @type {number} */
        color = str;
      }
    }
    if (enableClean && ("string" === typeof options.clean || "string" === typeof options.c)) {
      if (1 <= undefined || 1 <= str) {
        if (5 > undefined || 5 > str) {
          /** @type {number} */
          upAdjust = 1 + color / 100;
          /** @type {number} */
          dlAdjust = 1 + color / 100;
        }
      } else {
        /** @type {number} */
        dlAdjust = upAdjust = 1;
      }
    }
    undefined = options.test;
    str = options.t;
    /** @type {boolean} */
    var type = false;
    if (selectTest && ("string" === typeof undefined || "string" === typeof str)) {
      var data;
      if (undefined) {
        type = data = undefined;
      } else {
        if (str) {
          type = data = str;
        }
      }
      if ("download" === data || "d" === data) {
        /** @type {number} */
        var bytes = ret = 0;
        /** @type {string} */
        type = "Download";
        init();
        self.userInterface();
      } else {
        if ("upload" === data || "u" === data) {
          /** @type {number} */
          var a = b = 0;
          /** @type {string} */
          type = "Upload";
          /** @type {number} */
          maxFleetBonus = 1;
          init();
          self.userInterface();
        } else {
          if ("ping" === data || "p" === data) {
            init();
            self.userInterface();
            /** @type {number} */
            a = b = bytes = ret = 0;
            /** @type {string} */
            type = "SendR";
          } else {
            /** @type {boolean} */
            type = false;
          }
        }
      }
    }
    /** @type {number} */
    data = parseInt(options.run);
    /** @type {number} */
    undefined = parseInt(options.r);
    var value;
    if (!(!enableRun || "string" !== typeof options.run && "string" !== typeof options.r)) {
      /** @type {number} */
      value = 0 < data ? data : 0 < undefined ? undefined : 0;
    }
    /** @type {number} */
    var T = 0;
    if ("undefined" !== typeof value && false === type) {
      self.userInterface();
      /** @type {number} */
      var numberOfRepetitions = Math.ceil(Math.abs(value));
      self.showStatus("Automatic Test Starts in ...");
      /** @type {number} */
      var chat_retry = setInterval(a, 1E3);
    }
    self.settingsMob.el.addEventListener("click", disablemouse);
    self.settingsDesk.el.addEventListener("click", disablemouse);
    /** @type {string} */
    var _ = "OpenSpeedTest";
    /** @type {string} */
    var curid = ".com";
    /** @type {string} */
    var word = _ + "\u2122";
    var Ka;
    self.startButtonDesk.el.addEventListener("click", f);
    self.startButtonMob.el.addEventListener("click", f);
    /** @type {number} */
    var S = _.indexOf("S");
    /** @type {number} */
    var documentURL = 0;
    if ("web" === openChannel) {
      documentURL = webRe;
    }
    if ("widget" === openChannel) {
      documentURL = widgetRe;
    }
    if ("selfwidget" === openChannel) {
      documentURL = widgetRe;
      locationName = linkToUse = domainx;
    }
    if ("dev" === openChannel) {
      Ka = self.text.el.href.length + word.length;
    }
    /** @type {number} */
    var rept = 0;
    /** @type {number} */
    var n = 0;
    /** @type {number} */
    var C = 0;
    /** @type {number} */
    var j = 0;
    /** @type {number} */
    var r = 0;
    /** @type {number} */
    var sum = 0;
    /** @type {number} */
    var confirmPass = 0;
    var closedN;
    var c;
    /** @type {number} */
    var abs = 0;
    /** @type {number} */
    var lastBt = 0;
    /** @type {number} */
    var min = 0;
    /** @type {number} */
    var reconnectTimeIncrease = 0;
    /** @type {number} */
    var activeActivity = 0;
    /** @type {number} */
    var waitBeforeReconnect = 0;
    /** @type {number} */
    var Ua = 0;
    var t;
    /** @type {number} */
    var numTarget = 1E3 * dlDuration - 6E3;
    var nextIndexToProcess;
    /** @type {number} */
    var taskQueueLength = 1E3 * ulDuration - 6E3;
    /** @type {!Array} */
    var obj = [];
    var nBuf;
    var v;
    var timeout;
    var title;
    /** @type {number} */
    var _widgetLevelNo = -1;
    /** @type {!Array} */
    var blocks = [];
    /** @type {!Array} */
    var ia = [];
    /** @type {!Array} */
    var ref = [];
    /** @type {number} */
    var _widgetLevelsLength = openSpeedTestServerList.length;
    /**
     * @param {number} data
     * @return {undefined}
     */
    var post = function(data) {
      /** @type {!XMLHttpRequest} */
      var xhr = new XMLHttpRequest;
      /** @type {string} */
      var GROUPS_END_POINT = "//openspeedtest.com/connect.php";
      if (1 == data) {
        GROUPS_END_POINT = webIP;
      }
      if (5 == data) {
        GROUPS_END_POINT = saveDataURL;
      }
      xhr.open("POST", GROUPS_END_POINT, true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      /**
       * @return {undefined}
       */
      xhr.onreadystatechange = function() {
        if (4 == xhr.readyState && 200 == xhr.status) {
          /** @type {string} */
          link = xhr.responseText.trim();
          if (2 == data) {
            /** @type {string} */
            loadNavlistLink = link;
          }
          if (1 == data) {
            /** @type {string} */
            linkToUse = link;
          }
          if (3 == data) {
            setTimeout(function() {
              location.href = documentURL + link;
            }, 1500);
          }
        }
      };
      if (2 == data) {
        /** @type {string} */
        chunk = "r=n";
      }
      if (3 == data) {
        /** @type {string} */
        chunk = "r=l&d=" + b + "&u=" + ret + "&dd=" + a / 1048576 + "&ud=" + bytes / 1048576 + "&p=" + validationVM + "&do=" + locationName + "&S=" + loadNavlistLink + "&sip=" + linkToUse + "&jit=" + pingPongTimeout + "&ua=" + suffix;
      }
      if (5 == data) {
        chunk = name;
      }
      xhr.send(chunk);
    };
  };
  /**
   * @return {undefined}
   */
  result.Start = function() {
    new init;
  };
})(window.OpenSpeedTest = window.OpenSpeedTest || {});
