// ==UserScript==
// @name        NexusPHP Hightlight
// @name:zh-CN  NexusPHP 高亮脚本
// @version     0.0.4
// @description A script for highlighting free and 2xfree items in NexusPHP based PT sites
// @description:zh-CN 适用于基于 NexusPHP 的 PT 站的高亮脚本，包括free、2xfree高亮和鼠标悬停高亮
// @author      LostInsight
// @updateURL   https://github.com/LostInsight/pt-snippet/raw/master/userscripts/NexusPHP_Hightlight.user.js
// @note        大量站点未测，特别是CHD，U2，HDChina
// @note        网址和入口参考PT-Plugin-Plus内置地址
// @note        部分识别接口参考Juszoe的flexget-nexusphp但具体未测
// @note        特别适配MT和TTG
// @match       *://*.52pt.site/*
// @match       *://*.byr.cn/*
// @match       *://*.chdbits.co/*
// @match       *://*.discfan.net/*
// @match       *://*.et8.org/*
// @match       *://*.hdcity.city/*
// @match       *://*.hddolby.com/*
// @match       *://*.hdhome.org/*
// @match       *://*.pthome.net/*
// @match       *://*.btschool.club/*
// @match       *://*.beitai.pt/*
// @match       *://*.hdsky.me/*
// @match       *://*.hdstreet.club/*
// @match       *://*.hdtime.org/*
// @match       *://*.hdzone.me/*
// @match       *://*.hdupt.com/*
// @match       *://*.leaguehd.com/*
// @match       *://*.joyhd.net/*
// @match       *://*.moecat.best/*
// @match       *://*.nanyangpt.com/*
// @match       *://*.nicept.net/*
// @match       *://*.npupt.com/*
// @match       *://*.open.cd/*
// @match       *://*.ourbits.club/*
// @match       *://*.eastgame.org/*
// @match       *://*.hd4fans.org/*
// @match       *://*.hdbd.us/*
// @match       *://*.hdupt.com/*
// @match       *://*.j99.info/*
// @match       *://*.keepfrds.com/*
// @match       *://*.m-team.cc/*
// @match       *://*.msg.vg/*
// @match       *://*.soulvoice.club/*
// @match       *://*.pterclub.com/*
// @match       *://*.ptsbao.club/*
// @match       *://*.springsunday.net/*
// @match       *://*.tjupt.org/*
// @match       *://*.totheglory.im/*
// @match       *://*.sjtu.edu.cn/*
// @match       *://u2.dmhy.org/*
// @match       *://*.uhdbits.org/*
// @match       *://*.hdarea.co/*
// @match       *://*.yingk.com/*

// ==/UserScript==

(function() {
    switch (location.pathname) {
        case '/adult.php':
        case '/browse.php':
        case '/live.php':
        case '/movie.php':
        case '/music.php':
        case '/torrentsasia.php':
        case '/torrents.php': {
            try {
                var cnt=$("form_torrent");
                if (!(cnt===null)){
                    cnt.replaceWith(...cnt.childNodes);
                }
            }catch(err) {}
            var styleElement = document.createElement('style');
            styleElement.innerHTML = '.torrents tr:hover{background-color:#009966;}';
            document.head.append(styleElement);

            const freenames = ['.pro_free', '.pro_free2up','.free','.twoupfree','.span_frees','.span_twoupfreels','img[alt=free]'];
            for (const freename of freenames) {
                var $free=document.querySelectorAll(freename);
                for (const free of $free) {
                    free.parentElement.parentElement.setAttribute('style','background:#c6dc11');
                }
            }
        }
            break;
    }
})();
