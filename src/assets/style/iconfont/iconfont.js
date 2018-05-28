(function(window){var svgSprite='<svg><symbol id="bbd-delete" viewBox="0 0 1024 1024"><path d="M512 557.223994l249.203712 249.203712c12.491499 12.491499 32.730449 12.489452 45.221948-0.002047s12.493545-32.730449 0.002047-45.221948L557.223994 512l249.203712-249.203712c12.491499-12.491499 12.489452-32.730449-0.002047-45.221948s-32.730449-12.493545-45.221948-0.002047L512 466.776006 262.796288 217.572294c-12.491499-12.491499-32.729425-12.490475-45.220924 0.001023-6.246261 6.246261-9.370415 14.429641-9.370415 22.610974s3.121084 16.365736 9.367345 22.610974L466.774983 512 217.572294 761.203712c-6.246261 6.246261-9.367345 14.428617-9.367345 22.610974s3.125177 16.365736 9.370415 22.610974c12.491499 12.491499 32.729425 12.493545 45.220924 0.002047L512 557.223994z"  ></path></symbol><symbol id="bbd-close" viewBox="0 0 1024 1024"><path d="M681.387219 297.351981l45.2544 45.2544-383.983584 383.983584-45.2544-45.2544 383.983584-383.983584ZM342.612781 297.351981l383.983584 383.983584-45.2544 45.2544-383.983584-383.983584 45.2544-45.2544Z"  ></path></symbol><symbol id="bbd-arrow" viewBox="0 0 1024 1024"><path d="M855.16288 682.99776 171.14112 682.99776l342.016-341.99552L855.16288 682.99776z"  ></path></symbol><symbol id="bbd-arrow-line" viewBox="0 0 1099 1024"><path d="M407.73788761 202.86426075c10.48576-8.28504494 18.51189728-8.41449876 31.06891852 4.27197628 0 0 259.03710815 251.52878617 268.87559901 261.36727705 7.50832197 7.50832197 12.55702124 13.20429037 12.55702123 21.87769678 0 9.70903703-5.04869925 16.57008987-12.55702123 23.43114272L438.15953698 776.73307653c-10.22685235 9.96794469-17.86462815 15.66391309-30.03328789 4.78979162-13.8515595-12.68647506-9.0617679-17.99408197 5.04869926-33.65799506l265.76870715-257.09530074L415.11675575 238.85242469C402.17137303 226.68376494 392.33288217 217.36308939 407.73788761 202.86426075z"  ></path></symbol><symbol id="bbd-edit" viewBox="0 0 1024 1024"><path d="M797.866667 460.8c-17.066667 0-34.133333 12.8-34.133333 34.133333l0 221.866667c0 29.866667-25.6 51.2-51.2 51.2L311.466667 768c-29.866667 0-51.2-25.6-51.2-51.2L260.266667 311.466667c0-29.866667 25.6-51.2 51.2-51.2l226.133333 0c17.066667 0 34.133333-12.8 34.133333-34.133333S554.666667 196.266667 537.6 196.266667L311.466667 196.266667c-64 0-119.466667 51.2-119.466667 119.466667l0 401.066667c0 64 51.2 119.466667 119.466667 119.466667l401.066667 0c64 0 119.466667-51.2 119.466667-119.466667l0-221.866667C827.733333 473.6 814.933333 460.8 797.866667 460.8z"  ></path><path d="M375.466667 640c4.266667 4.266667 12.8 8.533333 21.333333 8.533333s17.066667-4.266667 21.333333-8.533333l375.466667-375.466667c12.8-12.8 12.8-34.133333 0-46.933333s-34.133333-12.8-46.933333 0L375.466667 597.333333C366.933333 610.133333 366.933333 627.2 375.466667 640z"  ></path></symbol><symbol id="bbd-user" viewBox="0 0 1024 1024"><path d="M665.6 656.564706C771.011765 602.352941 843.294118 487.905882 843.294118 361.411765 843.294118 177.694118 695.717647 27.105882 512 27.105882S180.705882 174.682353 180.705882 358.4c0 126.494118 72.282353 243.952941 177.694118 298.164706C183.717647 707.764706 60.235294 852.329412 60.235294 1002.917647h60.235294c0-180.705882 174.682353-301.176471 391.529412-301.176471s391.529412 120.470588 391.529412 301.176471h60.235294c0-150.588235-123.482353-295.152941-298.164706-346.352941zM240.941176 358.4c0-150.588235 120.470588-271.058824 271.058824-271.058824s271.058824 120.470588 271.058824 271.058824-120.470588 271.058824-271.058824 271.058824-271.058824-123.482353-271.058824-271.058824z" fill="#2c2c2c" ></path></symbol><symbol id="bbd-plus" viewBox="0 0 1024 1024"><path d="M980.700543 468.454893H557.401933V45.156283a43.350032 43.350032 0 0 0-86.700063 0v423.29861H47.396035a43.350032 43.350032 0 0 0 0 86.700064h423.305835v423.31306a43.350032 43.350032 0 0 0 86.700063 0v-423.31306h423.29861a43.350032 43.350032 0 0 0 0-86.700064z" fill="#231815" ></path></symbol><symbol id="bbd-add" viewBox="0 0 1024 1024"><path d="M977.454545 474.763636h-432.872727V46.545455h-69.818182v428.218181H46.545455v69.818182h428.218181V977.454545h69.818182v-432.872727H977.454545z"  ></path></symbol><symbol id="bbd-pause" viewBox="0 0 1024 1024"><path d="M259.24364308 933.26059487a84.252119 84.252119 0 0 1-84.25211892-84.25211903v-674.01695168a84.252119 84.252119 0 0 1 168.50423791 0v674.01695168a84.252119 84.252119 0 0 1-84.25211899 84.25211903z m505.51271384 0a84.252119 84.252119 0 0 1-84.25211899-84.25211903v-674.01695168a84.252119 84.252119 0 0 1 168.50423791 0v674.01695168a84.252119 84.252119 0 0 1-84.25211892 84.25211903z"  ></path></symbol><symbol id="bbd-icon-play" viewBox="0 0 1024 1024"><path d="M852.7872 444.03674075L305.19751111 88.68598518c-32.03982222-17.47626667-69.90506667-8.73813333-69.90506666 46.60337779V837.25274075c0 58.25422222 40.77795555 66.99235555 69.90506666 46.60337777l547.58968889-358.26346667c32.03982222-17.47626667 32.03982222-61.16693333 0-81.5559111zM293.54666667 813.95105185V158.59105185L812.00924445 487.72740741 293.54666667 813.95105185z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)