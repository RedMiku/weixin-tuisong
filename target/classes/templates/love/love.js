/*
  本项目基于Codepen项目The programmer's romantic二次升级创作，仅供学习交流使用
*/

; (function (win, doc) {
    var docEl = doc.documentElement,
        UA = navigator.userAgent,
        isMeitu = /meitu|meipai/gi.test(UA);
    var refreshRem = function () {
        // @see https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle firefox
        if (win.getComputedStyle(docEl) === null) {
            return;
        }
        // 设计稿 如果不是按照375的宽度，需要手动传 DESIGN_WIDTH
        var w = docEl.getBoundingClientRect().width || 320;
        var fontSize = w / 750 * 100;
        fontSize = fontSize > 80 ? 80 : fontSize
        docEl.style.fontSize = fontSize + 'px';
        var finalFontSize = parseFloat(win.getComputedStyle(docEl).getPropertyValue("font-size"));
        if (finalFontSize === fontSize || isMeitu) return;
        fontSize = fontSize + (fontSize - finalFontSize);
        docEl.style.fontSize = fontSize + 'px';
        win.fontSize = fontSize;
    }, refreshRemId;
    win.addEventListener('resize', function () {
        clearTimeout(refreshRemId);
        refreshRemId = setTimeout(refreshRem, 100);
    }, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(refreshRemId);
            refreshRemId = setTimeout(refreshRem, 100);
        }
    }, false);
    refreshRem();
})(window, document);



var _0x1a8d = [
    'apply',
    'return\x20(function()\x20',
    'console',
    'log',
    'warn',
    'debug',
    'info',
    'exception',
    'trace',
    'error',
    'table',
    'requestAnimationFrame',
    'webkitRequestAnimationFrame',
    'msRequestAnimationFrame',
    'edit',
    '180,184,240',
    '226,225,142',
    '226,225,224',
    'getElementById',
    'universe',
    '亲爱的',
    '你知道吗',
    '是这一生',
    '浩瀚星辰',
    '永远陪伴你',
    '情人节快乐',
    'undefined',
    'hidden',
    'visibilitychange',
    'mozHidden',
    'mozvisibilitychange',
    'webkitHidden',
    'webkitvisibilitychange',
    'addEventListener',
    '浏览器不支持\x20Page\x20Visibility\x20API',
    'random',
    'href',
    'search',
    'substr',
    'split',
    'goHomePage',
    'clearRect',
    'length',
    'move',
    'fadeIn',
    'draw',
    'giant',
    'comet',
    'fadingIn',
    'opacity',
    'opacityTresh',
    'fadingOut',
    'reset',
    'fillStyle',
    'rgba(',
    'arc',
    'rect',
    'fill',
    'closePath',
    'rgba(226,225,142,\x20',
    'rgb(255,\x20255,\x20255)',
    'textBaseline',
    'middle',
    'px\x20\x27Avenir\x27,\x20\x27Helvetica\x20Neue\x27,\x20\x27Arial\x27,\x20\x27sans-serif\x27',
    'fillText',
    'measureText',
    'width',
    'inText',
    'data',
    'push',
    'sqrt',
    'atan2',
    'cos',
    'sin',
    'delta',
    'size',
    'origSize',
    'fadeOut',
    'height',
    'innerHeight',
    'style',
    'left',
    'top',
    '0px',
    'bottom',
    'right',
    'marginTop',
    'getContext',
    'event',
    'floor',
    'velocityY',
    'init',
    'canvas',
    '.js-footer',
    'addClass',
    'fadeInUp',
    'origin',
    'pathname',
    '?name=',
    '史上最浪漫的情人节表白',
    '#js-GuidMask',
    'show',
    'click',
    'removeClass',
    '#js-EndDialog',
    'view',
    '#js-end-share',
    'html',
    '马上表白',
    '#js-end-show',
    '#js-info-tip',
    'off',
    '#InfoDialog',
    '#js-input-express',
    'input',
    'val',
    '名称不宜过长哦~',
    '#js-generate-express',
    '要输入名称哦~',
    'innerWidth',
    'setAttribute',
    'body',
    'focusout',
    '#js-home-icon',
    'location.href',
    'Hello\x20world',
    'WeixinJSBridgeReady',
    'play\x20music',
    'js-mp3',
    'stop',
    'pause',
    'visible',
    'play'
];
var _0x5c7e = function (_0x1a8d2f, _0x5c7e30) {
    _0x1a8d2f = _0x1a8d2f - 0x0;
    var _0x2d85a1 = _0x1a8d[_0x1a8d2f];
    return _0x2d85a1;
};
var _0x1e55cc = function () {
    var _0x242422 = !![];
    return function (_0x38f754, _0x23184a) {
        var _0x40afd8 = _0x242422 ? function () {
            if (_0x23184a) {
                var _0x4cd7f2 = _0x23184a[_0x5c7e('0x0')](_0x38f754, arguments);
                _0x23184a = null;
                return _0x4cd7f2;
            }
        } : function () {
        };
        _0x242422 = ![];
        return _0x40afd8;
    };
}();
var _0x5cc753 = _0x1e55cc(this, function () {
    var _0x4fed67 = function () {
    };
    var _0x3b4792 = function () {
        var _0xc69252;
        try {
            _0xc69252 = Function(_0x5c7e('0x1') + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
        } catch (_0x11bc1c) {
            _0xc69252 = window;
        }
        return _0xc69252;
    };
    var _0xb882eb = _0x3b4792();
    if (!_0xb882eb[_0x5c7e('0x2')]) {
        _0xb882eb[_0x5c7e('0x2')] = function (_0x1ba6de) {
            var _0x38863c = {};
            _0x38863c[_0x5c7e('0x3')] = _0x1ba6de;
            _0x38863c[_0x5c7e('0x4')] = _0x1ba6de;
            _0x38863c[_0x5c7e('0x5')] = _0x1ba6de;
            _0x38863c[_0x5c7e('0x6')] = _0x1ba6de;
            _0x38863c['error'] = _0x1ba6de;
            _0x38863c[_0x5c7e('0x7')] = _0x1ba6de;
            _0x38863c['table'] = _0x1ba6de;
            _0x38863c[_0x5c7e('0x8')] = _0x1ba6de;
            return _0x38863c;
        }(_0x4fed67);
    } else {
        _0xb882eb[_0x5c7e('0x2')][_0x5c7e('0x3')] = _0x4fed67;
        _0xb882eb[_0x5c7e('0x2')][_0x5c7e('0x4')] = _0x4fed67;
        _0xb882eb[_0x5c7e('0x2')][_0x5c7e('0x5')] = _0x4fed67;
        _0xb882eb[_0x5c7e('0x2')][_0x5c7e('0x6')] = _0x4fed67;
        _0xb882eb[_0x5c7e('0x2')][_0x5c7e('0x9')] = _0x4fed67;
        _0xb882eb[_0x5c7e('0x2')][_0x5c7e('0x7')] = _0x4fed67;
        _0xb882eb[_0x5c7e('0x2')][_0x5c7e('0xa')] = _0x4fed67;
        _0xb882eb[_0x5c7e('0x2')][_0x5c7e('0x8')] = _0x4fed67;
    }
});
_0x5cc753();
window[_0x5c7e('0xb')] = window[_0x5c7e('0xb')] || window['mozRequestAnimationFrame'] || window[_0x5c7e('0xc')] || window[_0x5c7e('0xd')];
var STAR_DENSITY = 0.216;
var SPEED_COEFF = 0.05;
var EXPRESS_TIME_FADE_OUT_TIME = 0x1194;
var expressTextIndex = 0x0;
var imgData;
var pageMode = _0x5c7e('0xe');
var width;
var height;
var screenWidth;
var screenHeight;
var starCount;
var circleRadius;
var circleCenter;
var first = !![];
var giantColor = _0x5c7e('0xf');
var starColor = _0x5c7e('0x10');
var cometColor = _0x5c7e('0x11');
var universeCanvasDom = document[_0x5c7e('0x12')](_0x5c7e('0x13'));
var stars = [];
var universeContext;
var whisperText = [
    _0x5c7e('0x14'),
    _0x5c7e('0x15'),
    '茫茫人海',
    '遇见你',
    _0x5c7e('0x16'),
    '最大的幸运',
    _0x5c7e('0x17'),
    '有一颗星',
    _0x5c7e('0x18'),
    _0x5c7e('0x19'),
    '❤'
];
var loverName = '';
function pageVisibilityChange(_0xc181d3) {
    var _0x572029, _0x56831c;
    if (typeof document['hidden'] !== _0x5c7e('0x1a')) {
        _0x572029 = _0x5c7e('0x1b');
        _0x56831c = _0x5c7e('0x1c');
    } else if (typeof document[_0x5c7e('0x1d')] !== 'undefined') {
        _0x572029 = _0x5c7e('0x1d');
        _0x56831c = _0x5c7e('0x1e');
    } else if (typeof document[_0x5c7e('0x1f')] !== _0x5c7e('0x1a')) {
        _0x572029 = 'webkitHidden';
        _0x56831c = _0x5c7e('0x20');
    }
    if (typeof document[_0x5c7e('0x21')] === _0x5c7e('0x1a') || typeof document[_0x572029] === _0x5c7e('0x1a')) {
        console[_0x5c7e('0x3')](_0x5c7e('0x22'));
    } else {
        document['addEventListener'](_0x56831c, function () {
            _0xc181d3(document['visibilityState']);
        }, ![]);
    }
}
function getProbability(_0x1eb041) {
    return Math['floor'](Math[_0x5c7e('0x23')]() * 0x3e8) + 0x1 < _0x1eb041 * 0xa;
}
function getRandInterval(_0x59e9b3, _0x152dd3) {
    return Math['random']() * (_0x152dd3 - _0x59e9b3) + _0x59e9b3;
}
function getQuery(_0x526b66) {
    const _0xe8de9d = decodeURIComponent(location[_0x5c7e('0x24')]);
    const _0x4070fb = location[_0x5c7e('0x25')]['substr'](0x1) || _0xe8de9d['split']('?')[0x1] || '';
    const _0x4f310b = location['hash'][_0x5c7e('0x26')](0x1) || _0xe8de9d[_0x5c7e('0x27')]('?')[0x1] || '';
    const _0x573292 = Object['assign'](parseQuery(_0x4070fb), parseQuery(_0x4f310b));
    const _0x623b10 = _0x573292[_0x526b66];
    return _0x623b10 ? _0x623b10 : null;
}
function goHomePage() {
    var _0x29a86b = '/home/pages/index';
    console['log'](_0x5c7e('0x28'), _0x29a86b);
}
function parseQuery(_0x30d175) {
    const _0x1e073a = decodeURIComponent(_0x30d175);
    let _0x15ef94 = {}, _0x45d23 = '', _0x35746f = [];
    if (_0x1e073a)
        _0x35746f = _0x1e073a[_0x5c7e('0x27')]('&');
    for (let _0x3ee491 = 0x0; _0x3ee491 < _0x35746f['length']; _0x3ee491++) {
        _0x45d23 = _0x35746f[_0x3ee491]['split']('=');
        _0x45d23[0x0] ? _0x15ef94[_0x45d23[0x0]] = _0x45d23[0x1] === undefined ? null : _0x45d23[0x1] : '';
    }
    return _0x15ef94;
}
function draw() {
    universeContext[_0x5c7e('0x29')](0x0, 0x0, width, height);
    var _0xc75abd = stars[_0x5c7e('0x2a')];
    var _0x2fc0e0 = [];
    for (var _0xdfec77 = 0x0; _0xdfec77 < _0xc75abd; _0xdfec77++) {
        _0x2fc0e0 = stars[_0xdfec77];
        _0x2fc0e0[_0x5c7e('0x2b')]();
        _0x2fc0e0[_0x5c7e('0x2c')]();
        _0x2fc0e0['fadeOut']();
        _0x2fc0e0[_0x5c7e('0x2d')]();
    }
    window['requestAnimationFrame'](draw);
}
function Star() {
    this['reset'] = function () {
        this[_0x5c7e('0x2e')] = getProbability(0x3);
        this['comet'] = this[_0x5c7e('0x2e')] || first ? ![] : getProbability(0xa);
        this['x'] = getRandInterval(0x0, width - 0xa);
        this['y'] = getRandInterval(0x0, height);
        this['r'] = getRandInterval(1.1, 2.6);
        this['dx'] = getRandInterval(SPEED_COEFF, 0x6 * SPEED_COEFF) + (this[_0x5c7e('0x2f')] + 0x1 - 0x1) * SPEED_COEFF * getRandInterval(0x32, 0x78) + SPEED_COEFF * 0x2;
        this['dy'] = -getRandInterval(SPEED_COEFF, 0x6 * SPEED_COEFF) - (this[_0x5c7e('0x2f')] + 0x1 - 0x1) * SPEED_COEFF * getRandInterval(0x32, 0x78);
        this['fadingOut'] = null;
        this[_0x5c7e('0x30')] = !![];
        this[_0x5c7e('0x31')] = 0x0;
        this[_0x5c7e('0x32')] = getRandInterval(0.2, 0x1 - (this[_0x5c7e('0x2f')] + 0x1 - 0x1) * 0.4);
        this['do'] = getRandInterval(0.0005, 0.002) + (this['comet'] + 0x1 - 0x1) * 0.001;
    };
    this['fadeIn'] = function () {
        if (this[_0x5c7e('0x30')]) {
            this[_0x5c7e('0x30')] = this['opacity'] > this[_0x5c7e('0x32')] ? ![] : !![];
            this[_0x5c7e('0x31')] += this['do'];
        }
    };
    this['fadeOut'] = function () {
        if (this[_0x5c7e('0x33')]) {
            this['fadingOut'] = this[_0x5c7e('0x31')] < 0x0 ? ![] : !![];
            this[_0x5c7e('0x31')] -= this['do'] / 0x2;
            if (this['x'] > width || this['y'] < 0x0) {
                this['fadingOut'] = ![];
                this[_0x5c7e('0x34')]();
            }
        }
    };
    this[_0x5c7e('0x2d')] = function () {
        universeContext['beginPath']();
        if (this[_0x5c7e('0x2e')]) {
            universeContext[_0x5c7e('0x35')] = _0x5c7e('0x36') + giantColor + ',' + this[_0x5c7e('0x31')] + ')';
            universeContext[_0x5c7e('0x37')](this['x'], this['y'], 0x2, 0x0, 0x2 * Math['PI'], ![]);
        } else if (this[_0x5c7e('0x2f')]) {
            universeContext['fillStyle'] = _0x5c7e('0x36') + cometColor + ',' + this['opacity'] + ')';
            universeContext[_0x5c7e('0x37')](this['x'], this['y'], 1.5, 0x0, 0x2 * Math['PI'], ![]);
            for (var _0x375852 = 0x0; _0x375852 < 0x1e; _0x375852++) {
                universeContext[_0x5c7e('0x35')] = _0x5c7e('0x36') + cometColor + ',' + (this[_0x5c7e('0x31')] - this['opacity'] / 0x14 * _0x375852) + ')';
                universeContext[_0x5c7e('0x38')](this['x'] - this['dx'] / 0x4 * _0x375852, this['y'] - this['dy'] / 0x4 * _0x375852 - 0x2, 0x2, 0x2);
                universeContext[_0x5c7e('0x39')]();
            }
        } else {
            universeContext[_0x5c7e('0x35')] = 'rgba(' + starColor + ',' + this['opacity'] + ')';
            universeContext[_0x5c7e('0x38')](this['x'], this['y'], this['r'], this['r']);
        }
        universeContext[_0x5c7e('0x3a')]();
        universeContext['fill']();
    };
    this[_0x5c7e('0x2b')] = function () {
        this['x'] += this['dx'];
        this['y'] += this['dy'];
        if (this[_0x5c7e('0x33')] === ![]) {
            this[_0x5c7e('0x34')]();
        }
        if (this['x'] > width - width / 0x4 || this['y'] < 0x0) {
            this[_0x5c7e('0x33')] = !![];
        }
    };
    (function () {
        setTimeout(function () {
            first = ![];
        }, 0x32);
    }());
}
var Clock = function () {
    var _0x5ee04c, _0x1e9c74, _0x5961aa = !![], _0x2da3d3, _0x272e3e = 0x190, _0x20170d = {
        'up': ![],
        'shift': ![]
    }, _0x13e0df = [], _0x378dd0 = {
        'x': 0x0,
        'y': 0x0
    }, _0x4dc4d2 = ![], _0x18ea27 = !![], _0x49cd32 = whisperText, _0x15ab14 = _0x49cd32[0x0], _0x157bdf = 0x41, _0x1b925d = ![], _0x1e3128 = 0x64, _0x58feb7 = !![], _0x4458f3 = 0x1a4;
    var _0x3511ad = 0x3c, _0x248075 = 0x0, _0x2d0500 = 0x0, _0x36aa81 = 0x4b0, _0x3504b2 = Math['PI'] * 0x2;
    var _0x104fcd = function () {
    };
    var _0x2f265a = function (_0x1e916c) {
        _0x1e9c74[_0x5c7e('0x35')] = _0x5c7e('0x3b') + _0x1e916c[_0x5c7e('0x31')] + ')';
        _0x1e9c74['beginPath']();
        _0x1e9c74['arc'](_0x1e916c['x'], _0x1e916c['y'], _0x1e916c['size'], 0x0, _0x3504b2, !![]);
        _0x1e9c74[_0x5c7e('0x3a')]();
        _0x1e9c74[_0x5c7e('0x39')]();
    };
    var _0xb0324c = [];
    var _0xa4f667 = function () {
        _0x1e9c74[_0x5c7e('0x29')](0x0, 0x0, _0x4458f3, _0x272e3e);
        _0x1e9c74[_0x5c7e('0x35')] = _0x5c7e('0x3c');
        _0x1e9c74[_0x5c7e('0x3d')] = _0x5c7e('0x3e');
        if (screenWidth === 0x140) {
            _0x157bdf = 0x3c;
        }
        _0x1e9c74['font'] = _0x157bdf + _0x5c7e('0x3f');
        var _0x2179c1 = 14.7;
        var _0x14b293 = screenWidth / 0x140 > 0x140 ? 0xf : 0x28;
        _0x1e9c74[_0x5c7e('0x40')](_0x15ab14, (_0x4458f3 - _0x1e9c74[_0x5c7e('0x41')](_0x15ab14)[_0x5c7e('0x42')]) * 0.5, _0x272e3e * 0.5);
        imgData = _0x1e9c74['getImageData'](0x0, 0x0, _0x4458f3, _0x272e3e);
        _0x1e9c74[_0x5c7e('0x29')](0x0, 0x0, _0x4458f3, _0x272e3e);
        for (var _0x28a364 = 0x0, _0x54dab2 = _0x13e0df['length']; _0x28a364 < _0x54dab2; _0x28a364++) {
            var _0x5244e2 = _0x13e0df[_0x28a364];
            _0x5244e2[_0x5c7e('0x43')] = ![];
        }
        _0x3daeaa(imgData);
    };
    var _0x3daeaa = function (_0x41d81b) {
        var _0x5bec88 = [];
        for (var _0x5f0529 = _0x4458f3; _0x5f0529 > 0x0; _0x5f0529 -= 0x3) {
            for (var _0x538f24 = 0x0; _0x538f24 < _0x4458f3; _0x538f24 += 0x3) {
                var _0x432c01 = (_0x5f0529 + _0x538f24 * _0x4458f3) * 0x4;
                if (_0x41d81b[_0x5c7e('0x44')][_0x432c01] > 0x1) {
                    _0x5bec88[_0x5c7e('0x45')]([
                        _0x5f0529,
                        _0x538f24
                    ]);
                }
            }
        }
        var _0x95f1 = _0x5bec88['length'];
        var _0xcbc42a = parseInt((_0x13e0df[_0x5c7e('0x2a')] - _0x5bec88['length']) / 0x2, 0xa);
        if (_0xcbc42a < 0x0) {
            _0xcbc42a = 0x0;
        }
        for (var _0x1c2392 = 0x0; _0x1c2392 < _0x5bec88[_0x5c7e('0x2a')] && _0xcbc42a < _0x13e0df[_0x5c7e('0x2a')]; _0x1c2392++, _0xcbc42a++) {
            try {
                var _0x46b823 = _0x13e0df[_0xcbc42a], _0x494701, _0x542ec2;
                if (_0x18ea27) {
                    _0x563613 = _0x5bec88[_0x95f1 - 0x1][0x0] - (_0x46b823['px'] + Math[_0x5c7e('0x23')]() * 0x5);
                    _0x542ec2 = _0x5bec88[_0x95f1 - 0x1][0x1] - (_0x46b823['py'] + Math[_0x5c7e('0x23')]() * 0x5);
                } else {
                    _0x563613 = _0x5bec88[_0x95f1 - 0x1][0x0] - _0x46b823['px'];
                    _0x542ec2 = _0x5bec88[_0x95f1 - 0x1][0x1] - _0x46b823['py'];
                }
                var _0x962ca = Math[_0x5c7e('0x46')](_0x563613 * _0x563613 + _0x542ec2 * _0x542ec2);
                var _0x9b8c66 = Math[_0x5c7e('0x47')](_0x542ec2, _0x563613);
                var _0x185ef9 = Math[_0x5c7e('0x48')](_0x9b8c66);
                var _0x3cb064 = Math[_0x5c7e('0x49')](_0x9b8c66);
                _0x46b823['x'] = _0x46b823['px'] + _0x185ef9 * _0x962ca * _0x46b823[_0x5c7e('0x4a')];
                _0x46b823['y'] = _0x46b823['py'] + _0x3cb064 * _0x962ca * _0x46b823[_0x5c7e('0x4a')];
                _0x46b823['px'] = _0x46b823['x'];
                _0x46b823['py'] = _0x46b823['y'];
                _0x46b823[_0x5c7e('0x43')] = !![];
                _0x46b823['fadeIn']();
                _0x2f265a(_0x46b823);
                if (_0x20170d['up'] === !![]) {
                    _0x46b823[_0x5c7e('0x4b')] += 0.3;
                } else {
                    var _0x73797c = _0x46b823[_0x5c7e('0x4b')] - 0.5;
                    if (_0x73797c > _0x46b823[_0x5c7e('0x4c')] && _0x73797c > 0x0) {
                        _0x46b823[_0x5c7e('0x4b')] = _0x73797c;
                    } else {
                        _0x46b823['size'] = m[_0x5c7e('0x4c')];
                    }
                }
            } catch (_0x2fb790) {
            }
            _0x95f1--;
        }
        for (var _0x1c2392 = 0x0; _0x1c2392 < _0x13e0df[_0x5c7e('0x2a')]; _0x1c2392++) {
            var _0x46b823 = _0x13e0df[_0x1c2392];
            if (!_0x46b823['inText']) {
                _0x46b823[_0x5c7e('0x4d')]();
                var _0x563613 = _0x46b823['mx'] - _0x46b823['px'];
                _0x542ec2 = _0x46b823['my'] - _0x46b823['py'];
                var _0x962ca = Math['sqrt'](_0x563613 * _0x563613 + _0x542ec2 * _0x542ec2);
                var _0x9b8c66 = Math[_0x5c7e('0x47')](_0x542ec2, _0x563613);
                var _0x185ef9 = Math[_0x5c7e('0x48')](_0x9b8c66);
                var _0x3cb064 = Math['sin'](_0x9b8c66);
                _0x46b823['x'] = _0x46b823['px'] + _0x185ef9 * _0x962ca * _0x46b823[_0x5c7e('0x4a')] / 0x2;
                _0x46b823['y'] = _0x46b823['py'] + _0x3cb064 * _0x962ca * _0x46b823[_0x5c7e('0x4a')] / 0x2;
                _0x46b823['px'] = _0x46b823['x'];
                _0x46b823['py'] = _0x46b823['y'];
                _0x2f265a(_0x46b823);
            }
        }
    };
    var _0x24231f = function () {
        _0x5ee04c['width'] = window['innerWidth'] >= 0x1a4 ? 0x1a4 : _0x4458f3;
        _0x5ee04c[_0x5c7e('0x4e')] = window[_0x5c7e('0x4f')] >= 0x96 ? 0x96 : _0x272e3e;
        _0x4458f3 = _0x5ee04c[_0x5c7e('0x42')];
        _0x272e3e = _0x5ee04c[_0x5c7e('0x4e')];
        _0x5ee04c[_0x5c7e('0x50')]['position'] = 'absolute';
        _0x5ee04c[_0x5c7e('0x50')][_0x5c7e('0x51')] = '0px';
        _0x5ee04c['style'][_0x5c7e('0x52')] = _0x5c7e('0x53');
        _0x5ee04c['style'][_0x5c7e('0x54')] = _0x5c7e('0x53');
        _0x5ee04c['style'][_0x5c7e('0x55')] = '0px';
        _0x5ee04c[_0x5c7e('0x50')][_0x5c7e('0x56')] = window[_0x5c7e('0x4f')] * 0.2 + 'px';
    };
    return {
        'init': function (_0xbd154a) {
            _0x5ee04c = document['getElementById'](_0xbd154a);
            if (_0x5ee04c === null || !_0x5ee04c[_0x5c7e('0x57')]) {
                return;
            }
            _0x1e9c74 = _0x5ee04c[_0x5c7e('0x57')]('2d');
            _0x24231f();
            this[_0x5c7e('0x58')]();
            for (var _0x2680d6 = 0x0; _0x2680d6 < _0x36aa81; _0x2680d6++) {
                _0x13e0df[_0x2680d6] = new Particle(_0x5ee04c);
            }
            setInterval(_0xa4f667, _0x3511ad);
        },
        'event': function () {
            var _0x3f5bcb = ![];
            if (expressTextIndex >= _0x49cd32[_0x5c7e('0x2a')]) {
                _0x3f5bcb = !![];
                showEndDialog();
                return;
            } else {
                _0x15ab14 = _0x49cd32[expressTextIndex];
                var _0x3dfd7b = this;
                setTimeout(() => {
                    expressTextIndex++;
                    _0x3dfd7b[_0x5c7e('0x58')]();
                }, EXPRESS_TIME_FADE_OUT_TIME);
            }
        }
    };
}();
var Particle = function (_0x5f03c5) {
    var _0x59266f = Math['random']() * 0xb4 / Math['PI'], _0x5ba068 = _0x5f03c5[_0x5c7e('0x4e')] / 0x4, _0x208e1d = Math[_0x5c7e('0x23')]() * 1.2;
    this['delta'] = 0.15;
    this['x'] = 0x0;
    this['y'] = 0x0;
    this['px'] = _0x5f03c5[_0x5c7e('0x42')] / 0x2 + (Math[_0x5c7e('0x23')]() - 0.5) * _0x5f03c5[_0x5c7e('0x42')];
    this['py'] = _0x5f03c5[_0x5c7e('0x4e')] * 0.5 + (Math['random']() - 0.5) * _0x5ba068;
    this['mx'] = this['px'];
    this['my'] = this['py'];
    this['velocityX'] = Math[_0x5c7e('0x59')](Math['random']() * 0xa) - 0x5;
    this[_0x5c7e('0x5a')] = Math[_0x5c7e('0x59')](Math[_0x5c7e('0x23')]() * 0xa) - 0x5;
    this[_0x5c7e('0x4b')] = _0x208e1d;
    this[_0x5c7e('0x4c')] = _0x208e1d;
    this[_0x5c7e('0x43')] = ![];
    this[_0x5c7e('0x31')] = 0x0;
    this['do'] = 0.02;
    this[_0x5c7e('0x32')] = 0.98;
    this['fadingOut'] = !![];
    this[_0x5c7e('0x30')] = !![];
    this[_0x5c7e('0x2c')] = function () {
        this[_0x5c7e('0x30')] = this[_0x5c7e('0x31')] > this[_0x5c7e('0x32')] ? ![] : !![];
        if (this[_0x5c7e('0x30')]) {
            this['opacity'] += this['do'];
        } else {
            this[_0x5c7e('0x31')] = 0x1;
        }
    };
    this[_0x5c7e('0x4d')] = function () {
        this[_0x5c7e('0x33')] = this[_0x5c7e('0x31')] < 0x0 ? ![] : !![];
        if (this['fadingOut']) {
            this[_0x5c7e('0x31')] -= 0.06;
            if (this[_0x5c7e('0x31')] < 0x0) {
                this[_0x5c7e('0x31')] = 0x0;
            }
        } else {
            this[_0x5c7e('0x31')] = 0x0;
        }
    };
};
function getLoverName() {
    return getQuery('name');
}
function startExpress() {
    Clock[_0x5c7e('0x5b')](_0x5c7e('0x5c'));
}
function showPeopleShadow() {
    $(_0x5c7e('0x5d'))[_0x5c7e('0x5e')](_0x5c7e('0x5f'));
}
function hiddenPeopleShadow() {
    $(_0x5c7e('0x5d'))['removeClass'](_0x5c7e('0x5f'));
}
function changeUrl(_0x32cdf2) {
    var _0x34fef4 = '' + location[_0x5c7e('0x60')] + location[_0x5c7e('0x61')] + _0x5c7e('0x62') + encodeURIComponent(_0x32cdf2);
    console['log'](_0x34fef4, _0x34fef4);
    history['replaceState'](null, _0x5c7e('0x63'), _0x34fef4);
}
function resetShow() {
    hiddenPeopleShadow();
    setTimeout(function () {
        showPeopleShadow();
        setTimeout(function () {
            expressTextIndex = 0x0;
            startExpress();
        }, 0xbb8);
    }, 0x3e8);
}
function showMask() {
    var _0x3ed31a = $(_0x5c7e('0x64'));
    _0x3ed31a[_0x5c7e('0x5e')](_0x5c7e('0x65'));
    _0x3ed31a['on'](_0x5c7e('0x66'), function () {
        hiddenMask();
    });
}
function hiddenMask() {
    $(_0x5c7e('0x64'))[_0x5c7e('0x67')](_0x5c7e('0x65'));
}
function showEndDialog() {
    $(_0x5c7e('0x68'))['addClass'](_0x5c7e('0x65'));
    if (pageMode === _0x5c7e('0x69')) {
        $(_0x5c7e('0x6a'))[_0x5c7e('0x6b')]('返回首页');
    } else {
        $(_0x5c7e('0x6a'))[_0x5c7e('0x6b')](_0x5c7e('0x6c'));
    }
    $(_0x5c7e('0x6d'))['on'](_0x5c7e('0x66'), function () {
        hiddenEndDialog();
        resetShow();
    });
    $(_0x5c7e('0x6a'))['on'](_0x5c7e('0x66'), function () {
        if (pageMode === _0x5c7e('0x69')) {
            goHomePage();
        } else {
            showMask();
        }
    });
}
function showTip(_0x5af7c8) {
    var _0x73c32f = $('#js-info-tip');
    _0x73c32f[_0x5c7e('0x5e')](_0x5c7e('0x65'));
    _0x73c32f[_0x5c7e('0x6b')](_0x5af7c8);
}
function hiddenTip() {
    var _0x54701d = $(_0x5c7e('0x6e'));
    _0x54701d['removeClass'](_0x5c7e('0x65'));
}
function hiddenEndDialog() {
    $(_0x5c7e('0x68'))[_0x5c7e('0x67')]('show');
    $(_0x5c7e('0x6d'))[_0x5c7e('0x6f')]('click');
    $(_0x5c7e('0x6a'))[_0x5c7e('0x6f')](_0x5c7e('0x66'));
}
function showInfoDialog() {
    $(_0x5c7e('0x70'))[_0x5c7e('0x5e')](_0x5c7e('0x65'));
    var _0x547a59 = $(_0x5c7e('0x71'));
    _0x547a59['on'](_0x5c7e('0x72'), function () {
        if (_0x547a59[_0x5c7e('0x73')]()['length'] > 0x5) {
            showTip(_0x5c7e('0x74'));
        } else {
            hiddenTip();
        }
    });
    $(_0x5c7e('0x75'))['on']('click', function () {
        var _0x26b30c = $(_0x5c7e('0x71'))[_0x5c7e('0x73')]();
        if (_0x26b30c) {
            $('#InfoDialog')[_0x5c7e('0x67')](_0x5c7e('0x65'));
            whisperText[0x0] = _0x26b30c;
            showPeopleShadow();
            changeUrl(_0x26b30c);
            setTimeout(function () {
                startExpress();
            }, 0xbb8);
        } else {
            showTip(_0x5c7e('0x76'));
        }
    });
}
function showUniverse() {
    universeContext = universeCanvasDom[_0x5c7e('0x57')]('2d');
    width = window[_0x5c7e('0x77')];
    screenWidth = window['innerWidth'];
    height = window['innerHeight'];
    screenHeight = window[_0x5c7e('0x4f')];
    starCount = width * STAR_DENSITY;
    for (var _0x3c41c4 = 0x0; _0x3c41c4 < starCount; _0x3c41c4++) {
        stars[_0x3c41c4] = new Star();
        stars[_0x3c41c4][_0x5c7e('0x34')]();
    }
    circleRadius = width > height ? height / 0x2 : width / 0x2;
    circleCenter = {
        'x': width / 0x2,
        'y': height / 0x2
    };
    universeCanvasDom[_0x5c7e('0x78')]('width', width);
    universeCanvasDom[_0x5c7e('0x78')]('height', height);
    draw();
}
function bindKeyboard() {
    document['body'][_0x5c7e('0x21')]('focusin', () => {
        console[_0x5c7e('0x3')]('focusin');
    });
    document[_0x5c7e('0x79')]['addEventListener'](_0x5c7e('0x7a'), () => {
        console[_0x5c7e('0x3')]('focusout');
        window['scroll'](0x0, 0x0);
    });
}
function bindHomeIcon() {
    $(_0x5c7e('0x7b'))['on'](_0x5c7e('0x66'), function () {
        goHomePage();
    });
}
function bindEvents() {
    bindKeyboard();
    bindHomeIcon();
}
function initParam() {
    loverName = getLoverName('name');
    console[_0x5c7e('0x3')](_0x5c7e('0x7c'), location['href']);
    console[_0x5c7e('0x3')]('loverName', loverName);
    if (loverName) {
        pageMode = 'view';
        whisperText[0x0] = loverName;
    } else {
        pageMode = _0x5c7e('0xe');
    }
}
function test() {
    var _0x4603d0 = new VConsole();
    console[_0x5c7e('0x3')](_0x5c7e('0x7d'));
}
function playMusic() {
    document[_0x5c7e('0x21')](_0x5c7e('0x7e'), function () {
        console[_0x5c7e('0x3')](_0x5c7e('0x7f'));
        document[_0x5c7e('0x12')](_0x5c7e('0x80'))['play']();
    });
}
function stopMusic() {
    document[_0x5c7e('0x12')]('js-mp3')[_0x5c7e('0x81')]();
}
function musicControl() {
    var _0x5b6bd1 = document[_0x5c7e('0x12')](_0x5c7e('0x80'));
    pageVisibilityChange(function (_0x136dc1) {
        if (_0x136dc1 == _0x5c7e('0x1b')) {
            _0x5b6bd1[_0x5c7e('0x82')]();
        } else if (_0x136dc1 == _0x5c7e('0x83')) {
            _0x5b6bd1[_0x5c7e('0x84')]();
        }
    });
}
$(function () {
    playMusic();
    musicControl();
    bindEvents();
    initParam();
    showUniverse();
    if (pageMode === _0x5c7e('0xe')) {
        showInfoDialog();
    } else {
        showPeopleShadow();
        setTimeout(function () {
            startExpress();
        }, 0x9c4);
    }
});