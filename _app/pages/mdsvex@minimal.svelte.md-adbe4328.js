import{S as Ut,i as zt,s as Ft,e as r,w as A,c as o,a as l,x as I,d as t,b as ke,g as a,N as n,y as O,q as N,o as L,B as P,v as vn,_ as ve,E as Gt,$ as bn,k as _,t as c,af as On,m as b,h as f,a0 as gn}from"../chunks/index-52fd3622.js";import{a as En,C as Sn}from"../chunks/CodeEditor-326ad4e4.js";import{B as Nn}from"../chunks/Button-67dd7a3a.js";import{m as Ln}from"../chunks/prism-8a6bf816.js";import"../chunks/preload-helper-e4860ae8.js";import"../chunks/index-0d752253.js";import"../chunks/_commonjsHelpers-850449cf.js";function Pn(i){let p,u,d,E;return d=new Nn({props:{icon:i[2],iconColor:"var(--color-gray-500)",lozenge:!0,transparent:!0}}),d.$on("click",i[3]),{c(){p=r("div"),u=r("div"),A(d.$$.fragment),this.h()},l(g){p=o(g,"DIV",{});var m=l(p);u=o(m,"DIV",{class:!0});var S=l(u);I(d.$$.fragment,S),S.forEach(t),m.forEach(t),this.h()},h(){ke(u,"class","button svelte-11bnmlh")},m(g,m){a(g,p,m),n(p,u),O(d,u,null),i[4](u),i[5](p),E=!0},p(g,[m]){const S={};m&4&&(S.icon=g[2]),d.$set(S)},i(g){E||(N(d.$$.fragment,g),E=!0)},o(g){L(d.$$.fragment,g),E=!1},d(g){g&&t(p),P(d),i[4](null),i[5](null)}}}function Rn(i,p,u){let d,E,g,m="content_copy";function S(){u(2,m="done"),navigator.clipboard.writeText(g.textContent),Ln.push({type:"info",title:"Text Copied!",message:"Text copied to clipboard",timeout:3}),setTimeout(()=>{u(2,m="content_copy")},3e3)}vn(()=>{var K,x;let h,v=d;for(;v&&((K=v.nextElementSibling)==null?void 0:K.nodeName)!=="PRE";)v=v.nextElementSibling;((x=v.nextElementSibling)==null?void 0:x.nodeName)==="PRE"&&(h=v.nextElementSibling,g=h.getElementsByTagName("code")[0],E.parentElement.nodeName!=="PRE"&&(h.style.position="relative",h.insertBefore(E,h.firstChild)))});function ie(h){ve[h?"unshift":"push"](()=>{E=h,u(1,E)})}function le(h){ve[h?"unshift":"push"](()=>{d=h,u(0,d)})}return[d,E,m,S,ie,le]}class hn extends Ut{constructor(p){super(),zt(this,p,Rn,Pn,Ft,{})}}function Dn(i){let p;return{c(){p=r("div")},l(u){p=o(u,"DIV",{}),l(p).forEach(t)},m(u,d){a(u,p,d),i[2](p)},p:Gt,i:Gt,o:Gt,d(u){u&&t(p),i[2](null)}}}function xn(i,p,u){let d,{global:E=!1}=p;vn(()=>{var S;E&&document.body.classList.add("line-numbers");let m=d;for(;m&&((S=m.nextElementSibling)==null?void 0:S.nodeName)!=="PRE";)m=m.nextElementSibling;m.nextElementSibling.classList.add("line-numbers"),typeof Prism!="undefined"&&Prism.highlightAll()});function g(m){ve[m?"unshift":"push"](()=>{d=m,u(0,d)})}return i.$$set=m=>{"global"in m&&u(1,E=m.global)},[d,E,g]}class kn extends Ut{constructor(p){super(),zt(this,p,xn,Dn,Ft,{global:1})}}(function(i){var p="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",u={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},d={bash:u,environment:{pattern:RegExp("\\$"+p),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+p),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};i.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+p),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:d},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:u}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:d},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:d.entity}}],environment:{pattern:RegExp("\\$?"+p),alias:"constant"},variable:d.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},u.inside=i.languages.bash;for(var E=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],g=d.variable[1].inside,m=0;m<E.length;m++)g[E[m]]=i.languages.bash[E[m]];i.languages.shell=i.languages.bash})(Prism);Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;(function(i){var p=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,u=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return p.source});i.languages.cpp=i.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return p.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:p,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),i.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return u})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),i.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:i.languages.cpp}}}}),i.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),i.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:i.languages.extend("cpp",{})}}),i.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},i.languages.cpp["base-clause"])})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;function Cn(i){let p,u,d,E,g,m,S,ie,le,h,v,K,x,V,tt,ye,Y,nt,we,R,pe,st,at,J,rt,C,ue,ot,it,Z,lt,H,de,pt,ut,ce,dt,$e,Te,Ae,W,ct,Ie,D,fe,ft,mt,Q,_t,B,me,bt,gt,_e,Et,Oe,ee,St,Ne,te,ht,Le,M,Pe,G,Re,U,yn=`<code class="language-c"><span class="token class-name">uint8_t</span> test <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span>main<span class="token punctuation">)</span>
<span class="token punctuation">&#123;</span>
    test<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,De,k,kt,be,vt,yt,ge,wt,$t,Ee,Tt,At,Se,It,Ot,xe,z,Ce,F,He,X,wn=`<code class="language-bash"><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">"test"</span></code>`,Be,ne,Nt,Me,se,Lt,Ge,w,Pt,Ue,ae,Rt,ze,$,Dt,Fe,re,xt,Xe,q,qe,oe,Ct,je,j,Ke,Ve,Ye;M=new kn({}),G=new hn({}),z=new kn({}),F=new hn({});function $n(e){i[2](e)}let Xt={lineNumbers:!0,language:"js"};i[0]!==void 0&&(Xt.code=i[0]),w=new En({props:Xt}),ve.push(()=>bn(w,"code",$n));function Tn(e){i[3](e)}let qt={lineNumbers:!0,language:"json"};return i[1]!==void 0&&(qt.code=i[1]),$=new En({props:qt}),ve.push(()=>bn($,"code",Tn)),q=new Sn({props:{geometry:"https://cdn.bojit.org/files/glb/BOJIT_V3.glb"}}),j=new Sn({props:{geometry:"https://cdn.bojit.org/files/glb/kinectIP.glb"}}),{c(){p=_(),u=r("h1"),d=c("Title of Article"),E=_(),g=r("p"),m=c("This is a basic demo of using "),S=r("code"),ie=c("Svelte"),le=c(" components in markdown. Links look like "),h=r("a"),v=c("this"),K=c(":"),x=_(),V=r("h2"),tt=c("Standard Markdown stuff"),ye=_(),Y=r("h4"),nt=c("Heading 4"),we=_(),R=r("ul"),pe=r("li"),st=c("Ordered List"),at=_(),J=r("li"),rt=c("Test"),C=r("ol"),ue=r("li"),ot=c("Nested"),it=_(),Z=r("li"),lt=c("List"),H=r("ol"),de=r("li"),pt=c("Test"),ut=_(),ce=r("li"),dt=c("TEST"),$e=_(),Te=r("hr"),Ae=_(),W=r("h5"),ct=c("Heading 5"),Ie=_(),D=r("ol"),fe=r("li"),ft=c("Ordered"),mt=_(),Q=r("li"),_t=c("List"),B=r("ul"),me=r("li"),bt=c("Nested"),gt=_(),_e=r("li"),Et=c("Unordered"),Oe=_(),ee=r("h2"),St=c("Syntax highlighting"),Ne=_(),te=r("p"),ht=c("Standard github-style syntax highlighing works: there are a couple of modifier components that are used to add line numbers and a copy button:"),Le=_(),A(M.$$.fragment),Pe=_(),A(G.$$.fragment),Re=_(),U=r("pre"),De=_(),k=r("p"),kt=c("This uses "),be=r("code"),vt=c("PrismJS"),yt=c(" under the hood. All language components except "),ge=r("code"),wt=c("html"),$t=c(", "),Ee=r("code"),Tt=c("css"),At=c(" and "),Se=r("code"),It=c("js"),Ot=c(" have to be included manually."),xe=_(),A(z.$$.fragment),Ce=_(),A(F.$$.fragment),He=_(),X=r("pre"),Be=_(),ne=r("h2"),Nt=c("Special blocks"),Me=_(),se=r("p"),Lt=c("Below is an interactive JS Editor:"),Ge=_(),A(w.$$.fragment),Ue=_(),ae=r("p"),Rt=c("Other languages are supported too!"),ze=_(),A($.$$.fragment),Fe=_(),re=r("p"),xt=c("Here is an embedded CAD model."),Xe=_(),A(q.$$.fragment),qe=_(),oe=r("p"),Ct=c("And another:"),je=_(),A(j.$$.fragment),Ke=_(),Ve=r("hr"),this.h()},l(e){On('[data-svelte="svelte-8t5c85"]',document.head).forEach(t),p=b(e),u=o(e,"H1",{});var he=l(u);d=f(he,"Title of Article"),he.forEach(t),E=b(e),g=o(e,"P",{});var T=l(g);m=f(T,"This is a basic demo of using "),S=o(T,"CODE",{});var jt=l(S);ie=f(jt,"Svelte"),jt.forEach(t),le=f(T," components in markdown. Links look like "),h=o(T,"A",{href:!0,rel:!0});var Kt=l(h);v=f(Kt,"this"),Kt.forEach(t),K=f(T,":"),T.forEach(t),x=b(e),V=o(e,"H2",{});var Vt=l(V);tt=f(Vt,"Standard Markdown stuff"),Vt.forEach(t),ye=b(e),Y=o(e,"H4",{});var Yt=l(Y);nt=f(Yt,"Heading 4"),Yt.forEach(t),we=b(e),R=o(e,"UL",{});var Je=l(R);pe=o(Je,"LI",{});var Jt=l(pe);st=f(Jt,"Ordered List"),Jt.forEach(t),at=b(Je),J=o(Je,"LI",{});var Ht=l(J);rt=f(Ht,"Test"),C=o(Ht,"OL",{});var Ze=l(C);ue=o(Ze,"LI",{});var Zt=l(ue);ot=f(Zt,"Nested"),Zt.forEach(t),it=b(Ze),Z=o(Ze,"LI",{});var Bt=l(Z);lt=f(Bt,"List"),H=o(Bt,"OL",{});var We=l(H);de=o(We,"LI",{});var Wt=l(de);pt=f(Wt,"Test"),Wt.forEach(t),ut=b(We),ce=o(We,"LI",{});var Qt=l(ce);dt=f(Qt,"TEST"),Qt.forEach(t),We.forEach(t),Bt.forEach(t),Ze.forEach(t),Ht.forEach(t),Je.forEach(t),$e=b(e),Te=o(e,"HR",{}),Ae=b(e),W=o(e,"H5",{});var en=l(W);ct=f(en,"Heading 5"),en.forEach(t),Ie=b(e),D=o(e,"OL",{});var Qe=l(D);fe=o(Qe,"LI",{});var tn=l(fe);ft=f(tn,"Ordered"),tn.forEach(t),mt=b(Qe),Q=o(Qe,"LI",{});var Mt=l(Q);_t=f(Mt,"List"),B=o(Mt,"UL",{});var et=l(B);me=o(et,"LI",{});var nn=l(me);bt=f(nn,"Nested"),nn.forEach(t),gt=b(et),_e=o(et,"LI",{});var sn=l(_e);Et=f(sn,"Unordered"),sn.forEach(t),et.forEach(t),Mt.forEach(t),Qe.forEach(t),Oe=b(e),ee=o(e,"H2",{});var an=l(ee);St=f(an,"Syntax highlighting"),an.forEach(t),Ne=b(e),te=o(e,"P",{});var rn=l(te);ht=f(rn,"Standard github-style syntax highlighing works: there are a couple of modifier components that are used to add line numbers and a copy button:"),rn.forEach(t),Le=b(e),I(M.$$.fragment,e),Pe=b(e),I(G.$$.fragment,e),Re=b(e),U=o(e,"PRE",{class:!0});var An=l(U);An.forEach(t),De=b(e),k=o(e,"P",{});var y=l(k);kt=f(y,"This uses "),be=o(y,"CODE",{});var on=l(be);vt=f(on,"PrismJS"),on.forEach(t),yt=f(y," under the hood. All language components except "),ge=o(y,"CODE",{});var ln=l(ge);wt=f(ln,"html"),ln.forEach(t),$t=f(y,", "),Ee=o(y,"CODE",{});var pn=l(Ee);Tt=f(pn,"css"),pn.forEach(t),At=f(y," and "),Se=o(y,"CODE",{});var un=l(Se);It=f(un,"js"),un.forEach(t),Ot=f(y," have to be included manually."),y.forEach(t),xe=b(e),I(z.$$.fragment,e),Ce=b(e),I(F.$$.fragment,e),He=b(e),X=o(e,"PRE",{class:!0});var In=l(X);In.forEach(t),Be=b(e),ne=o(e,"H2",{});var dn=l(ne);Nt=f(dn,"Special blocks"),dn.forEach(t),Me=b(e),se=o(e,"P",{});var cn=l(se);Lt=f(cn,"Below is an interactive JS Editor:"),cn.forEach(t),Ge=b(e),I(w.$$.fragment,e),Ue=b(e),ae=o(e,"P",{});var fn=l(ae);Rt=f(fn,"Other languages are supported too!"),fn.forEach(t),ze=b(e),I($.$$.fragment,e),Fe=b(e),re=o(e,"P",{});var mn=l(re);xt=f(mn,"Here is an embedded CAD model."),mn.forEach(t),Xe=b(e),I(q.$$.fragment,e),qe=b(e),oe=o(e,"P",{});var _n=l(oe);Ct=f(_n,"And another:"),_n.forEach(t),je=b(e),I(j.$$.fragment,e),Ke=b(e),Ve=o(e,"HR",{}),this.h()},h(){document.title="MDSVex Demo",ke(h,"href","https://github.com"),ke(h,"rel","nofollow"),ke(U,"class","language-c"),ke(X,"class","language-bash")},m(e,s){a(e,p,s),a(e,u,s),n(u,d),a(e,E,s),a(e,g,s),n(g,m),n(g,S),n(S,ie),n(g,le),n(g,h),n(h,v),n(g,K),a(e,x,s),a(e,V,s),n(V,tt),a(e,ye,s),a(e,Y,s),n(Y,nt),a(e,we,s),a(e,R,s),n(R,pe),n(pe,st),n(R,at),n(R,J),n(J,rt),n(J,C),n(C,ue),n(ue,ot),n(C,it),n(C,Z),n(Z,lt),n(Z,H),n(H,de),n(de,pt),n(H,ut),n(H,ce),n(ce,dt),a(e,$e,s),a(e,Te,s),a(e,Ae,s),a(e,W,s),n(W,ct),a(e,Ie,s),a(e,D,s),n(D,fe),n(fe,ft),n(D,mt),n(D,Q),n(Q,_t),n(Q,B),n(B,me),n(me,bt),n(B,gt),n(B,_e),n(_e,Et),a(e,Oe,s),a(e,ee,s),n(ee,St),a(e,Ne,s),a(e,te,s),n(te,ht),a(e,Le,s),O(M,e,s),a(e,Pe,s),O(G,e,s),a(e,Re,s),a(e,U,s),U.innerHTML=yn,a(e,De,s),a(e,k,s),n(k,kt),n(k,be),n(be,vt),n(k,yt),n(k,ge),n(ge,wt),n(k,$t),n(k,Ee),n(Ee,Tt),n(k,At),n(k,Se),n(Se,It),n(k,Ot),a(e,xe,s),O(z,e,s),a(e,Ce,s),O(F,e,s),a(e,He,s),a(e,X,s),X.innerHTML=wn,a(e,Be,s),a(e,ne,s),n(ne,Nt),a(e,Me,s),a(e,se,s),n(se,Lt),a(e,Ge,s),O(w,e,s),a(e,Ue,s),a(e,ae,s),n(ae,Rt),a(e,ze,s),O($,e,s),a(e,Fe,s),a(e,re,s),n(re,xt),a(e,Xe,s),O(q,e,s),a(e,qe,s),a(e,oe,s),n(oe,Ct),a(e,je,s),O(j,e,s),a(e,Ke,s),a(e,Ve,s),Ye=!0},p(e,[s]){const he={};!Pt&&s&1&&(Pt=!0,he.code=e[0],gn(()=>Pt=!1)),w.$set(he);const T={};!Dt&&s&2&&(Dt=!0,T.code=e[1],gn(()=>Dt=!1)),$.$set(T)},i(e){Ye||(N(M.$$.fragment,e),N(G.$$.fragment,e),N(z.$$.fragment,e),N(F.$$.fragment,e),N(w.$$.fragment,e),N($.$$.fragment,e),N(q.$$.fragment,e),N(j.$$.fragment,e),Ye=!0)},o(e){L(M.$$.fragment,e),L(G.$$.fragment,e),L(z.$$.fragment,e),L(F.$$.fragment,e),L(w.$$.fragment,e),L($.$$.fragment,e),L(q.$$.fragment,e),L(j.$$.fragment,e),Ye=!1},d(e){e&&t(p),e&&t(u),e&&t(E),e&&t(g),e&&t(x),e&&t(V),e&&t(ye),e&&t(Y),e&&t(we),e&&t(R),e&&t($e),e&&t(Te),e&&t(Ae),e&&t(W),e&&t(Ie),e&&t(D),e&&t(Oe),e&&t(ee),e&&t(Ne),e&&t(te),e&&t(Le),P(M,e),e&&t(Pe),P(G,e),e&&t(Re),e&&t(U),e&&t(De),e&&t(k),e&&t(xe),P(z,e),e&&t(Ce),P(F,e),e&&t(He),e&&t(X),e&&t(Be),e&&t(ne),e&&t(Me),e&&t(se),e&&t(Ge),P(w,e),e&&t(Ue),e&&t(ae),e&&t(ze),P($,e),e&&t(Fe),e&&t(re),e&&t(Xe),P(q,e),e&&t(qe),e&&t(oe),e&&t(je),P(j,e),e&&t(Ke),e&&t(Ve)}}}function Hn(i,p,u){let d=`let x = {
	
}`,E=`{
	
}`;function g(S){d=S,u(0,d)}function m(S){E=S,u(1,E)}return[d,E,g,m]}class qn extends Ut{constructor(p){super(),zt(this,p,Hn,Cn,Ft,{})}}export{qn as default};
