(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{cXXz:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),l=n.n(t),c=n("dEAq"),d=n("ZpkN");a["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u6dfb\u52a0-git-add"},l.a.createElement(c["AnchorLink"],{to:"#\u6dfb\u52a0-git-add","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u6dfb\u52a0 git add"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"Add file contents to the index"),l.a.createElement("p",null,"\u5c06\u6587\u4ef6\u5185\u5bb9\u6dfb\u52a0\u5230\u7d22\u5f15")),l.a.createElement("p",null,l.a.createElement("code",null,"git add")," \u547d\u4ee4\u5c06\u6587\u4ef6\u5185\u5bb9\u6dfb\u52a0\u5230",l.a.createElement("strong",null,"\u7d22\u5f15\u5e93"),"\uff08\u5c06\u4fee\u6539\u8bb0\u5f55\u6dfb\u52a0\u5230\u6682\u5b58\u533a\uff09\u3002\u4e5f\u5c31\u662f\u5c06\u8981\u63d0\u4ea4\u7684\u6587\u4ef6\u7684\u4fe1\u606f\u6dfb\u52a0\u5230\u7d22\u5f15\u5e93\u4e2d\u3002"),l.a.createElement("h2",{id:"\u6dfb\u52a0\u4fee\u6539\u8bb0\u5f55\u81f3\u6682\u5b58\u533a"},l.a.createElement(c["AnchorLink"],{to:"#\u6dfb\u52a0\u4fee\u6539\u8bb0\u5f55\u81f3\u6682\u5b58\u533a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u6dfb\u52a0\u4fee\u6539\u8bb0\u5f55\u81f3\u6682\u5b58\u533a"),l.a.createElement(d["a"],{code:"# \u6587\u4ef6\ngit add <file1> <file2> <file3> ...\n\n# \u76ee\u5f55\ngit add <dir>\n\n# \u6240\u6709\u76ee\u5f55\u6587\u4ef6(\u5305\u62ec\u4fee\u8fc7\u8fc7\u7684\u6587\u4ef6\u3001\u65b0\u5efa\u7684\u6587\u4ef6\uff0c\u4f46\u4e0d\u5305\u62ec\u5220\u9664\u7684\u6587\u4ef6)\ngit add .\n",lang:"bash"}),l.a.createElement("p",null,"\ud83d\udccd ",l.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),l.a.createElement(d["a"],{code:"# \u63d0\u4ea4\u5355\u4e2a\u6587\u4ef6\ngit add index.html\n\n# \u63d0\u4ea4 markdown \u6587\u4ef6\ngit add *.md\n",lang:"bash"}),l.a.createElement("h2",{id:"\u5206\u6b21\u6dfb\u52a0\u4fee\u6539\u81f3\u6682\u5b58\u533a"},l.a.createElement(c["AnchorLink"],{to:"#\u5206\u6b21\u6dfb\u52a0\u4fee\u6539\u81f3\u6682\u5b58\u533a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u5206\u6b21\u6dfb\u52a0\u4fee\u6539\u81f3\u6682\u5b58\u533a"),l.a.createElement("p",null,"\u6dfb\u52a0\u6bcf\u4e2a\u53d8\u5316\u524d\uff0c\u90fd\u4f1a\u8981\u6c42\u786e\u8ba4\u3002\u5bf9\u4e8e\u540c\u4e00\u4e2a\u6587\u4ef6\u7684\u591a\u5904\u53d8\u5316\uff0c\u53ef\u4ee5\u5b9e\u73b0\u5206\u6b21\u63d0\u4ea4\u3002"),l.a.createElement("p",null,l.a.createElement("code",null,"-p")," \u53c2\u6570\u76f8\u5f53\u4e8e ",l.a.createElement("code",null,"--patch"),"\uff0c\u8868\u793a\u591a\u6b21\u63d0\u4ea4\u3002"),l.a.createElement(d["a"],{code:"git add -p\ngit add --patch\n",lang:"bash"}),l.a.createElement("p",null,"\ud83d\udccd ",l.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),l.a.createElement(d["a"],{code:"# \u5c06\u4ee5Controller\u7ed3\u5c3e\u7684\u6587\u4ef6\u7684\u6240\u6709\u4fee\u6539\u6dfb\u52a0\u5230\u6682\u5b58\u533a\ngit add *Controller\n\n# \u5c06\u6240\u6709\u4ee5Hello\u5f00\u5934\u7684\u6587\u4ef6\u7684\u4fee\u6539\u6dfb\u52a0\u5230\u6682\u5b58\u533a \u4f8b\u5982:HelloWorld.txt,Hello.java,HelloGit.txt ...\ngit add Hello*\n\n# \u5c06\u4ee5Hello\u5f00\u5934\u540e\u9762\u53ea\u6709\u4e00\u4f4d\u7684\u6587\u4ef6\u7684\u4fee\u6539\u63d0\u4ea4\u5230\u6682\u5b58\u533a \u4f8b\u5982:Hello1.txt,HelloA.java \u5982\u679c\u662fHelloGit.txt\u6216\u8005Hello.java\u662f\u4e0d\u4f1a\u88ab\u6dfb\u52a0\u7684git add [file1] [file2] ...\ngit add Hello?\n",lang:"bash"}),l.a.createElement("h2",{id:"\u6dfb\u52a0\u8ddf\u8e2a\u4fee\u6539\u81f3\u6682\u5b58\u533a"},l.a.createElement(c["AnchorLink"],{to:"#\u6dfb\u52a0\u8ddf\u8e2a\u4fee\u6539\u81f3\u6682\u5b58\u533a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u6dfb\u52a0\u8ddf\u8e2a\u4fee\u6539\u81f3\u6682\u5b58\u533a"),l.a.createElement("p",null,"\u6807\u8bb0\u672c\u5730\u6709\u6539\u52a8\uff08",l.a.createElement("strong",null,"\u5305\u62ec\u5220\u9664\u548c\u4fee\u6539\uff0c\u4f46\u4e0d\u5305\u62ec\u65b0\u5efa"),"\uff09\u7684",l.a.createElement("strong",null,"\u5df2\u7ecf\u8ffd\u8e2a"),"\u7684\u6587\u4ef6\uff0c\u5e76\u6dfb\u52a0\u81f3\u6682\u5b58\u5e93\u3002"),l.a.createElement("p",null,l.a.createElement("code",null,"-u")," \u5373 ",l.a.createElement("code",null,"--update")," \u8868\u793a\u66f4\u65b0\u7d22\u5f15\uff0c\u4f7f\u5176\u5177\u6709\u4e0e ",l.a.createElement("code",null,"<pathspec>")," \u5339\u914d\u7684\u6761\u76ee\u3002"),l.a.createElement("p",null,"\u7701\u7565 ",l.a.createElement("code",null,"<path>")," \u8868\u793a ",l.a.createElement("code",null,".")," \uff0c\u5373\u5f53\u524d\u76ee\u5f55\u3002"),l.a.createElement(d["a"],{code:"git add -u [<pathspec>]\ngit add --update [<pathspec>]\n",lang:"bash"}),l.a.createElement("h2",{id:"\u6dfb\u52a0\u4fee\u6539\u5230\u6682\u5b58\u533a"},l.a.createElement(c["AnchorLink"],{to:"#\u6dfb\u52a0\u4fee\u6539\u5230\u6682\u5b58\u533a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u6dfb\u52a0\u4fee\u6539\u5230\u6682\u5b58\u533a"),l.a.createElement("p",null,"\u6807\u8bb0\u672c\u5730\u6240\u6709\u6539\u52a8\u7684\u6587\u4ef6\uff08\u5305\u62ec\u5220\u9664\u3001\u4fee\u6539\u548c\u65b0\u5efa\uff09\uff0c\u5e76\u6dfb\u52a0\u81f3\u6682\u5b58\u5e93\u3002"),l.a.createElement("p",null,l.a.createElement("code",null,"-A")," \u5373 ",l.a.createElement("code",null,"--all")," \u6216 ",l.a.createElement("code",null,"--no-ignore-removal")," \u8868\u793a\u66f4\u65b0\u7d22\u5f15\uff0c\u4e0d\u4ec5\u5728\u5de5\u4f5c\u6811\u5177\u6709\u5339\u914d ",l.a.createElement("code",null,"<pathspec>")," \u7684\u6587\u4ef6\u7684\u4f4d\u7f6e\uff0c\u800c\u4e14\u7d22\u5f15\u5df2\u7ecf\u6709\u6761\u76ee\u7684\u4f4d\u7f6e\u3002"),l.a.createElement(d["a"],{code:"git add -A\ngit add --all\ngit add --no-ignore-removal\n",lang:"bash"}),l.a.createElement("p",null,l.a.createElement("code",null,"git add -A")," \u76f8\u5f53\u4e8e\u540c\u65f6\u6267\u884c ",l.a.createElement("code",null,"git add .")," \u548c ",l.a.createElement("code",null,"git add -u"),"\u3002")))}}}]);