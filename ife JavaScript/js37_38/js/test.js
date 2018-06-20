!function (t) {
  var e = {};

  function i(a) {
    if (e[a])return e[a].exports;
    var s = e[a] = {i: a, l: !1, exports: {}};
    return t[a].call(s.exports, s, s.exports, i), s.l = !0, s.exports
  }

  i.m = t, i.c = e, i.d = function (t, e, a) {
    i.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: a})
  }, i.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
  }, i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e)return t;
    if (4 & e && "object" == typeof t && t && t.__esModule)return t;
    var a = Object.create(null);
    if (i.r(a), Object.defineProperty(a, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)for (var s in t)i.d(a, s, function (e) {
      return t[e]
    }.bind(null, s));
    return a
  }, i.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return i.d(e, "a", e), e
  }, i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, i.p = "", i(i.s = 9)
}([function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0});
  var a = i(2), s = {
    init: function (t, e) {
      this.wrapper = document.getElementById(t), this.xAxisData = e.xAxis.data, this.series = e.series, this.yAxisDataLength = this.series[0].sale.length, this.svgW = this.wrapper.clientWidth, this.svgH = this.wrapper.clientHeight, this.svgPadding = 60, this.xAxisLength = this.svgW - 2 * this.svgPadding, this.yAxisLength = this.svgH - 2 * this.svgPadding, this.xAxisX1 = this.svgPadding, this.xAxisX2 = this.svgPadding + this.xAxisLength, this.xAxisY1 = this.svgH - this.svgPadding, this.yAxisX1 = this.svgPadding, this.yAxisY1 = this.svgPadding, this.yAxisY2 = this.svgH - this.svgPadding, this.axisColor = "#ccc", this.color = ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"], this.textColor = "black", this.splitNumber = 5, this.svg = (0, a.drawSVG)(this.svgW, this.svgH), this.wrapper.appendChild(this.svg), this.draw()
    }, draw: function () {
      this.maxData = Math.max.apply(null, this.series.map(function (t) {
        return Math.max.apply(null, t.sale)
      })), this.splitData = this.maxData / this.splitNumber, this.splitLength = this.yAxisLength * (this.splitData / this.maxData), this.w = this.xAxisLength / this.yAxisDataLength, this.barW = .6 * this.w, this.barGap = .4 * this.w, (0, a.drawLine)(this.svg, this.xAxisX1, this.xAxisY1, this.xAxisX2, this.xAxisY1, this.axisColor), (0, a.drawLine)(this.svg, this.yAxisX1, this.yAxisY1, this.yAxisX1, this.yAxisY2, this.axisColor);
      for (var t = 0; t < this.splitNumber; t++) {
        var e = this.yAxisY1 + this.splitLength * t;
        (0, a.drawLine)(this.svg, this.xAxisX1, e, this.xAxisX2, e, this.axisColor), (0, a.drawText)(this.svg, this.xAxisX1 - 20, e + 5, this.splitData * (this.splitNumber - t), this.textColor)
      }
      for (var i = 0, s = this.series.length; i < s; i++)for (var n = this.series[i].sale, r = this.barW / s, o = 0; o < this.yAxisDataLength; o++) {
        var l = n[o], h = this.yAxisLength * (l / this.maxData),
          c = this.xAxisX1 + (this.barW + this.barGap) * o + r * i, d = this.xAxisY1 - h;
        if ((0, a.drawRect)(this.svg, c, d, r, h, this.color[i]), 0 === i) {
          var u = this.xAxisX1 + (this.barW + this.barGap) * o;
          (0, a.drawText)(this.svg, u + this.barW / 2, this.xAxisY1 + 20, this.xAxisData[o])
        }
      }
    }, setData: function (t) {
      this.series = t, this.svg.innerHTML = "", this.draw()
    }
  };
  e.default = s
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0});
  var a = i(3), s = {
    init: function (t, e) {
      this.wrapper = document.getElementById(t), this.canvas = document.getElementById("canvas"), this.ctx = canvas.getContext("2d"), this.ratio = a.ratio, this.xAxisData = e.xAxis.data, this.series = e.series, this.yAxisDataLength = this.series[0].sale.length, this.canvasW = this.wrapper.clientWidth, this.canvasH = this.wrapper.clientHeight, this.canvasPadding = 60, this.xAxisLength = this.canvasW - 2 * this.canvasPadding, this.yAxisLength = this.canvasH - 2 * this.canvasPadding, this.xAxisX1 = this.canvasPadding, this.xAxisX2 = this.canvasPadding + this.xAxisLength, this.xAxisY1 = this.canvasH - this.canvasPadding, this.yAxisX1 = this.canvasPadding, this.yAxisY1 = this.canvasPadding, this.yAxisY2 = this.canvasH - this.canvasPadding, this.axisColor = "#ccc", this.color = ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"], this.textColor = "black", this.splitNumber = 5, this.draw()
    }, draw: function () {
      this.maxData = Math.max.apply(null, this.series.map(function (t) {
        return Math.max.apply(null, t.sale)
      })), this.splitData = this.maxData / this.splitNumber, this.splitLength = this.yAxisLength * (this.splitData / this.maxData), this.w = this.xAxisLength / this.yAxisDataLength, this.barW = .6 * this.w, this.barGap = .4 * this.w, this.canvas.setAttribute("width", this.canvasW * this.ratio), this.canvas.setAttribute("height", this.canvasH * this.ratio), this.canvas.style.width = this.canvasW + "px", this.canvas.style.height = this.canvasH + "px", this.ctx.scale(this.ratio, this.ratio), (0, a.drawLine)(this.ctx, this.xAxisX1, this.xAxisY1, this.xAxisX2, this.xAxisY1, this.axisColor), (0, a.drawLine)(this.ctx, this.yAxisX1, this.yAxisY1, this.yAxisX1, this.yAxisY2, this.axisColor);
      for (var t = 0; t < this.splitNumber; t++) {
        var e = this.yAxisY1 + this.splitLength * t;
        (0, a.drawLine)(this.ctx, this.xAxisX1, e, this.xAxisX2, e, this.axisColor), (0, a.drawText)(this.ctx, this.xAxisX1 - 20, e + 5, this.splitData * (this.splitNumber - t))
      }
      for (var i = 0, s = this.series.length; i < s; i++)for (var n = this.series[i].sale, r = void 0, o = void 0, l = 0; l < this.yAxisDataLength; l++) {
        var h = n[l], c = this.yAxisLength * (h / this.maxData), d = this.xAxisX1 + (this.barW + this.barGap) * l,
          u = (this.xAxisY1, d + this.barW / 2), x = this.xAxisY1 - c;
        0 !== l && (0, a.drawLine)(this.ctx, r, o, u, x, this.color[i]), (0, a.drawCircle)(this.ctx, u, x, 2), r = u, o = x, 0 === i && (0, a.drawText)(this.ctx, d + this.barW / 2, this.xAxisY1 + 20, this.xAxisData[l])
      }
    }, setData: function (t) {
      this.series = t, this.draw()
    }
  };
  e.default = s
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0});
  var a = function () {
    return function (t, e) {
      if (Array.isArray(t))return t;
      if (Symbol.iterator in Object(t))return function (t, e) {
        var i = [], a = !0, s = !1, n = void 0;
        try {
          for (var r, o = t[Symbol.iterator](); !(a = (r = o.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
        } catch (t) {
          s = !0, n = t
        } finally {
          try {
            !a && o.return && o.return()
          } finally {
            if (s)throw n
          }
        }
        return i
      }(t, e);
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
  }();

  function s(t, e) {
    var i = document.createElementNS("http://www.w3.org/2000/svg", t);
    if (e) {
      var s = !0, n = !1, r = void 0;
      try {
        for (var o, l = Object.entries(e)[Symbol.iterator](); !(s = (o = l.next()).done); s = !0) {
          var h = o.value, c = a(h, 2), d = c[0], u = c[1];
          i.setAttribute(d, u)
        }
      } catch (t) {
        n = !0, r = t
      } finally {
        try {
          !s && l.return && l.return()
        } finally {
          if (n)throw r
        }
      }
    }
    return i
  }

  e.drawSVG = function (t, e) {
    return s("svg", {width: t, height: e})
  }, e.drawLine = function (t, e, i, a, n, r) {
    t.appendChild(s("line", {x1: e, x2: a, y1: i, y2: n, stroke: r}))
  }, e.drawText = function (t, e, i, a, n) {
    var r = s("text", {x: e, y: i, fill: n, "text-anchor": "middle"});
    r.innerHTML = a, t.appendChild(r)
  }, e.drawRect = function (t, e, i, a, n, r) {
    var o = s("rect", {x: e, y: i, width: a, height: n, fill: r});
    t.appendChild(o)
  }
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0}), e.drawLine = function (t, e, i, a, s, n) {
    t.beginPath(), t.moveTo(e, i), t.lineTo(a, s), t.strokeStyle = n, t.stroke()
  }, e.drawText = function (t, e, i, a) {
    t.beginPath(), t.font = "14px monaco", t.textAlign = "center", t.fillText(a, e, i)
  }, e.drawCircle = function (t, e, i, a) {
    t.beginPath(), t.arc(e, i, a, 0, 2 * Math.PI, !0), t.fill()
  };
  var a = window.devicePixelRatio || 1, s = document.createElement("canvas").getContext("2d"),
    n = s.webkitBackingStorePixelRatio || s.mozBackingStorePixelRatio || s.msBackingStorePixelRatio || s.oBackingStorePixelRatio || s.backingStorePixelRatio || 1;
  e.ratio = a / n
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0}), e.updateDataByIndex = function (t, e, i) {
    n[t].sale[e] = i, localStorage.setItem("ifeData", JSON.stringify(n))
  };
  var a = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
  }, {product: "手机", region: "华北", sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
  }, {product: "笔记本", region: "华东", sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
  }, {product: "笔记本", region: "华南", sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
  }, {product: "智能音箱", region: "华北", sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
  }], s = localStorage.getItem("ifeData");
  s || localStorage.setItem("ifeData", JSON.stringify(a));
  var n = s ? JSON.parse(s) : a;
  e.sourceData = n
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0}), e.getData = y, e.renderTable = b;
  var a = i(4), s = r(i(1)), n = r(i(0));

  function r(t) {
    return t && t.__esModule ? t : {default: t}
  }

  var o = document.getElementById("table-wrapper"), l = null, h = null, c = null,
    d = {east: "华东", south: "华南", north: "华北"}, u = {cellphone: "手机", laptop: "笔记本", speaker: "智能音箱"};

  function x() {
    s.default.setData(y()), n.default.setData(y())
  }

  function p(t) {
    if (c && c === document.activeElement)switch (t.keyCode) {
      case 27:
        console.log("esc"), g();
        break;
      case 13:
        console.log("enter"), f()
    }
  }

  function v() {
    l && (l.classList.remove("editing"), l.classList.add("editable"), l.innerHTML = h, l = null, h = null, window.removeEventListener("keydown", p))
  }

  function g() {
    v()
  }

  function f() {
    var t = c.value.trim();
    if (!t || isNaN(parseFloat(t))) alert("请输入正确的数字!"); else {
      var e = l.parentNode.getAttribute("row-index"), i = l.getAttribute("data-index");
      (0, a.updateDataByIndex)(e, i, t), x(), b(), v()
    }
  }

  function y() {
    var t = container.querySelectorAll('input:not([value="all"]):checked'), e = [], i = !0, s = !1, n = void 0;
    try {
      for (var r, o = t[Symbol.iterator](); !(i = (r = o.next()).done); i = !0) {
        var l = r.value;
        d[l.value] ? e.push(d[l.value]) : u[l.value] && e.push(u[l.value])
      }
    } catch (t) {
      s = !0, n = t
    } finally {
      try {
        !i && o.return && o.return()
      } finally {
        if (s)throw n
      }
    }
    for (var h = [], c = 0, x = a.sourceData.length; c < x; c++) {
      var p = a.sourceData[c];
      e.includes(p.region) && e.includes(p.product) && (p.rowIndex = c, h.push(p))
    }
    return h
  }

  function b() {
    console.log("render table"), o.innerHTML = "";
    var t = document.createElement("table"), e = document.createElement("thead"), i = document.createElement("tbody"),
      a = container.querySelectorAll('#region-radio-wrapper input:not([value="all"]):checked'),
      s = container.querySelectorAll('#product-radio-wrapper input:not([value="all"]):checked'), n = a.length,
      r = s.length, l = y(), h = l.length, c = !1, d = Array.from({length: 12}, function (t, e) {
        return e + 1
      });
    1 === n && r > 1 ? (c = !0, d.unshift("商品"), d.unshift("地区")) : (d.unshift("地区"), d.unshift("商品"));
    for (var u = document.createElement("tr"), x = 0, p = d.length; x < p; x++) {
      var v = document.createElement("th");
      v.innerHTML = x < 2 ? d[x] : d[x] + "月", u.appendChild(v)
    }
    e.appendChild(u), t.appendChild(e);
    for (var g = 0; g < h; g++) {
      console.log(h);
      var f = document.createElement("tr");
      f.setAttribute("data-index", g);
      var b = l[g];
      f.setAttribute("row-index", b.rowIndex);
      var m = b.product, A = b.region, w = b.sale, L = document.createElement("td");
      L.innerHTML = A;
      var D = document.createElement("td");
      D.innerHTML = m, c ? (L.rowSpan = h, 0 === g && f.appendChild(L), f.appendChild(D)) : n > 1 ? (D.rowSpan = n, g % n == 0 && f.appendChild(D), f.appendChild(L)) : (f.appendChild(D), f.appendChild(L));
      for (var P = 0, k = w.length; P < k; P++) {
        var C = document.createElement("td");
        C.classList.add("editable"), C.setAttribute("data-index", P), C.innerHTML = w[P], f.appendChild(C)
      }
      i.appendChild(f)
    }
    t.appendChild(i), o.appendChild(t)
  }

  o.onmousemove = function (t) {
    var e = t.target;
    if ("TD" === e.tagName) {
      var i = e.parentNode.getAttribute("data-index"), a = y()[i];
      s.default.setData([a]), n.default.setData([a])
    }
  }, o.onmouseleave = function (t) {
    x()
  }, document.onclick = function (t) {
    v()
  }, o.onclick = function (t) {
    var e = t.target, i = !1;
    if (e.classList.contains("editable")) {
      var a = e.innerHTML;
      e.innerHTML = '<input type="text" placeholder="' + a + '"><button class="cancel">取消</button><button class="submit">确定</button>', e.classList.remove("editable"), e.classList.add("editing"), v(), l = e, h = a, i = !0, (c = e.querySelector("input")).focus(), window.addEventListener("keydown", p)
    } else e.classList.contains("cancel") ? (g(), i = !0) : e.classList.contains("submit") ? (f(), i = !0) : (e.classList.contains("editing") || e === c) && (i = !0);
    i && t.stopPropagation()
  }
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0}), e.createCheckBoxGroup = function (t, e) {
    var i = "", a = e.length, s = void 0;
    i += ['<input type="checkbox" value="', "all", '">', "<label>", "全选", "</label>"].join("");
    for (var n = 0; n < a; n++) {
      var r = e[n], o = r.value, l = r.text;
      i += ['<input type="checkbox" value="', o, '"', ">", "<label>", l, "</label>"].join("")
    }
    t.innerHTML = i, s = t.querySelector('input[value="all"]'), t.onclick = function (i) {
      var a = i.target;
      if ("checkbox" === a.type) {
        var n = a.value;
        if ("all" === n) a.checked ? function () {
          var e = t.querySelectorAll('input:not([value="all"])'), i = !0, a = !1, s = void 0;
          try {
            for (var n, r = e[Symbol.iterator](); !(i = (n = r.next()).done); i = !0) {
              var o = n.value;
              o.checked || (o.checked = !0)
            }
          } catch (t) {
            a = !0, s = t
          } finally {
            try {
              !i && r.return && r.return()
            } finally {
              if (a)throw s
            }
          }
        }() : (a.checked = !0, i.stopPropagation()); else {
          var r = t.querySelectorAll('input:not([value="all"]):checked');
          0 === r.length ? (a.checked = !0, i.stopPropagation()) : s.checked = r.length === e.length
        }
      }
    }, s.click()
  }
}, , function (t, e, i) {
}, function (t, e, i) {
  "use strict";
  i(8);
  var a = i(6), s = i(5), n = o(i(1)), r = o(i(0));

  function o(t) {
    return t && t.__esModule ? t : {default: t}
  }

  var l = document.getElementById("region-radio-wrapper"), h = document.getElementById("product-radio-wrapper"),
    c = document.getElementById("container");
  (0, a.createCheckBoxGroup)(l, [{value: "east", text: "华东"}, {value: "south", text: "华南"}, {
    value: "north",
    text: "华北"
  }]), (0, a.createCheckBoxGroup)(h, [{value: "cellphone", text: "手机"}, {
    value: "laptop",
    text: "笔记本"
  }, {value: "speaker", text: "智能音箱"}]), c.addEventListener("click", function (t) {
    if ("checkbox" === t.target.type) {
      (0, s.renderTable)();
      var e = (0, s.getData)();
      n.default.setData(e), r.default.setData(e)
    }
  }), (0, s.renderTable)();
  var d = (0, s.getData)(), u = (d[0].sale, Array.from({length: 12}, function (t, e) {
    return e + 1 + "月"
  }));
  r.default.init("bar-chart-wrapper", {
    xAxis: {data: u},
    series: d
  }), n.default.init("line-chart-wrapper", {xAxis: {data: u}, series: d})
}]);
