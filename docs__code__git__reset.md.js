(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{xeE2:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),c=(n("B2uJ"),n("+su7"),n("qOys")),r=n.n(c);n("5Yjd");t["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u64a4\u9500-git-reset"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u64a4\u9500-git-reset"},l.a.createElement("span",{className:"icon icon-link"})),"\u64a4\u9500 git reset"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"Reset current HEAD to the specified state"),l.a.createElement("p",null,"\u7528\u4e8e\u5c06\u5f53\u524d ",l.a.createElement("code",null,"HEAD")," \u590d\u4f4d\u5230\u6307\u5b9a\u72b6\u6001\uff08\u4e00\u822c\u7528\u4e8e\u64a4\u6d88\u4e4b\u524d\u7684\u4e00\u4e9b\u64cd\u4f5c\uff09")),l.a.createElement("h2",{id:"\u64a4\u9500\u6682\u5b58"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u64a4\u9500\u6682\u5b58"},l.a.createElement("span",{className:"icon icon-link"})),"\u64a4\u9500\u6682\u5b58"),l.a.createElement("p",null,"\u76f8\u5f53\u4e8e\u5bf9 ",l.a.createElement("code",null,"git add")," \u547d\u4ee4\u7684\u53cd\u5411\u64cd\u4f5c\u3002"),l.a.createElement("p",null,"\u548c ",l.a.createElement("code",null,"revert")," \u7684\u533a\u522b\uff1a",l.a.createElement("code",null,"reset")," \u547d\u4ee4\u4f1a\u62b9\u53bb\u67d0\u4e2a\u63d0\u4ea4\u8bb0\u5f55 ",l.a.createElement("code",null,"commit id")," \u4e4b\u540e\u7684\u6240\u6709\u63d0\u4ea4 ",l.a.createElement("code",null,"commit"),"\u3002"),l.a.createElement(r.a,{code:"# \u64a4\u9500\u6682\u5b58\u533a\u7684\u4fee\u6539\uff0c\u91cd\u65b0\u653e\u56de\u5de5\u4f5c\u533a\ngit reset <file-name>\n\n# \u56de\u9000 add \u5230\u6682\u5b58\u533a\u91cc\u7684\u6587\u4ef6\uff0c\u8fd8\u539f\u4e3a\uff08HEAD commit \u91cc\u9762\u8be5\u6587\u4ef6\u7684\u72b6\u6001\uff09\n# \u4f1a\u64a4\u9500\u4ece\u4e0a\u6b21\u63d0\u4ea4\u4e4b\u540e\u7684\u4e00\u4e9b\u64cd\u4f5c\ngit reset HEAD\n\ngit reset HEAD -- <file-name>\n\n# \u56de\u6eda\u5f53\u524d\u5206\u652f\u7684\u6307\u9488\u5230\u6307\u5b9a\u63d0\u4ea4\u7248\u672c\uff0c\u540c\u65f6\u91cd\u7f6e\u6682\u5b58\u533a\uff0c\u4f46\u5de5\u4f5c\u533a\u4e0d\u53d8\uff08\u9ed8\u8ba4\u5c31\u662f-mixed\u53c2\u6570\uff09\ngit reset <commit-id>\n",lang:"bash"}),l.a.createElement("h3",{id:"\u5df2\u63d0\u4ea4\u672c\u5730\u9700\u64a4\u56de"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u5df2\u63d0\u4ea4\u672c\u5730\u9700\u64a4\u56de"},l.a.createElement("span",{className:"icon icon-link"})),"\u5df2\u63d0\u4ea4\u672c\u5730\u9700\u64a4\u56de"),l.a.createElement("p",null,"\u5df2\u7ecf\u5c06\u66f4\u6539\u63d0\u4ea4 commit \u5230\u672c\u5730\uff0c\u9700\u8981\u64a4\u56de\u63d0\u4ea4\u3002"),l.a.createElement(r.a,{code:"# \u8bed\u6cd5\ngit reset --soft <commit-id>\n\ngit reset --soft <HEAD~n>\n\n# \u793a\u4f8b\n# \u56de\u9000\u4e0a\u6b21\u63d0\u4ea4 coomit \u7684\u4fee\u6539\u8bb0\u5f55\u653e\u56de\u6682\u5b58\u533a\uff08\u4e5f\u5c31\u662f add \u4e4b\u540e\u5b58\u653e\u533a\u57df\uff09\ngit reset --soft HEAD~1\n\n# \u56de\u9000\u81f3\u4e09\u4e2a\u7248\u672c\u4e4b\u524d\uff0c\u53ea\u56de\u9000\u4e86\u63d0\u4ea4\u7684\u4fe1\u606f\uff0c\u6682\u5b58\u533a\u548c\u5de5\u4f5c\u533a\u4e0e\u56de\u9000\u4e4b\u524d\u4fdd\u6301\u4e00\u81f4\n# \u5982\u679c\u8fd8\u8981\u63d0\u4ea4\uff0c\u76f4\u63a5 commit \u5373\u53ef\ngit reset --soft HEAD~3\n",lang:"bash"}),l.a.createElement("p",null,"\u56de\u9000\u81f3\u6307\u5b9a\u7248\u672c"),l.a.createElement(r.a,{code:"# \u56de\u9000\u81f3\u6307\u5b9a\u63d0\u4ea4\u7248\u672c\n# \u5148\u67e5\u770b\u63d0\u4ea4\u65e5\u5fd7\ngit log\n> commit 2xx\n> commit 1xx\n# \u56de\u9000\u5230 1xx\ngit reset 1xx\n",lang:"bash"}),l.a.createElement("h3",{id:"\u7528\u65b0\u66f4\u6539\u66ff\u6362\u64a4\u56de\u7684\u66f4\u6539"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7528\u65b0\u66f4\u6539\u66ff\u6362\u64a4\u56de\u7684\u66f4\u6539"},l.a.createElement("span",{className:"icon icon-link"})),"\u7528\u65b0\u66f4\u6539\u66ff\u6362\u64a4\u56de\u7684\u66f4\u6539"),l.a.createElement(r.a,{code:"# \u56de\u6eda\u81f3\u4e0a\u4e2a\u7248\u672c\uff0c\u5b83\u5c06\u91cd\u7f6e HEAD \u5230\u53e6\u5916\u4e00\u4e2a\u63d0\u4ea4\u8bb0\u5f55\uff0c\u5e76\u4e14\u91cd\u7f6e\u6682\u5b58\u533a\u4ee5\u4fbf\u548c HEAD \u76f8\u5339\u914d\uff0c\u4f46\u662f\u4e5f\u5230\u6b64\u4e3a\u6b62\u3002\u5de5\u4f5c\u533a\u4e0d\u4f1a\u88ab\u66f4\u6539\u3002\ngit reset --mixed HEAD^\n\n# \u56de\u9000\u5230\u6307\u5b9a\u63d0\u4ea4\u7248\u672c\uff0c\u4f46\u4fdd\u6301\u6682\u5b58\u533a\u548c\u5de5\u4f5c\u533a\u4e0d\u53d8\ngit reset --keep <commit-id>\n",lang:"bash"}),l.a.createElement("p",null,"\u5df2\u53d8\u66f4\u7684\u6587\u4ef6\u90fd\u672a\u6dfb\u52a0\u5230\u6682\u5b58\u533a\uff0c\u64a4\u9500\u4e86 commit \u548c add \u7684\u64cd\u4f5c\u3002"),l.a.createElement("h3",{id:"\u672c\u5730\u63d0\u4ea4\u9519\u8bef\u6587\u4ef6"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u672c\u5730\u63d0\u4ea4\u9519\u8bef\u6587\u4ef6"},l.a.createElement("span",{className:"icon icon-link"})),"\u672c\u5730\u63d0\u4ea4\u9519\u8bef\u6587\u4ef6"),l.a.createElement("p",null,"\u56de\u5230\u67d0\u6b21\u63d0\u4ea4\u7684\u72b6\u6001\uff0c\u4fee\u6539\u90fd\u4f1a\u62b9\u6389\uff0c\u6240\u4ee5\u8c28\u614e\u4f7f\u7528\u3002"),l.a.createElement(r.a,{code:"# \u91cd\u7f6e\u6682\u5b58\u533a\u4e0e\u5de5\u4f5c\u533a\uff0c\u4e0e\u4e0a\u4e00\u6b21\u63d0\u4ea4\u4fdd\u6301\u4e00\u81f4\ngit reset --hard\n\n# \u56de\u9000\u5230\u6307\u5b9a\u7684\u63d0\u4ea4\u7248\u672c\uff0c\u6682\u5b58\u533a\u548c\u5de5\u4f5c\u533a\u4e5f\u4f1a\u4e0e\u53d8\u4e3a\u6307\u5b9a\u63d0\u4ea4\u7248\u672c\u4e00\u81f4\ngit reset --hard <commit-id>\n",lang:"bash"}),l.a.createElement("p",null,"\u5df2\u8ffd\u8e2a\u6587\u4ef6\u7684\u53d8\u66f4\u5185\u5bb9\u90fd\u6d88\u5931\u4e86\uff0c\u64a4\u9500\u4e86 ",l.a.createElement("code",null,"commit")," \u548c ",l.a.createElement("code",null,"add")," \u7684\u64cd\u4f5c\uff0c\u540c\u65f6\u64a4\u9500\u4e86\u672c\u5730\u5df2\u8ffd\u8e2a\u5185\u5bb9\u7684\u4fee\u6539\uff1b\u672a\u8ffd\u8e2a\u7684\u5185\u5bb9\u4e0d\u4f1a\u88ab\u6539\u53d8\u3002\u4ece\u4e0a\u9762\u7684\u6548\u679c\u53ef\u4ee5\u770b\u5230\uff0c\u6587\u4ef6\u7684\u4fee\u6539\u90fd\u4f1a\u88ab\u64a4\u9500\u3002-hard \u53c2\u6570\u9700\u8981\u8c28\u614e\u4f7f\u7528\u3002"),l.a.createElement("h2",{id:"\u4e2d\u65ad\u5de5\u4f5c\u6d41\u7a0b\u5904\u7406"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u4e2d\u65ad\u5de5\u4f5c\u6d41\u7a0b\u5904\u7406"},l.a.createElement("span",{className:"icon icon-link"})),"\u4e2d\u65ad\u5de5\u4f5c\u6d41\u7a0b\u5904\u7406"),l.a.createElement("p",null,"\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\u7ecf\u5e38\u51fa\u73b0\u8fd9\u6837\u7684\u60c5\u5f62\uff1a\u4f60\u6b63\u5728\u5f00\u53d1\u4e00\u4e2a\u5927\u7684\u65b0\u529f\u80fd\uff08\u5de5\u4f5c\u5728\u5206\u652f\uff1a",l.a.createElement("code",null,"feature"),"\xa0 \u4e2d\uff09\uff0c\u6b64\u65f6\u6765\u4e86\u4e00\u4e2a\u7d27\u6025\u7684 BUG \u9700\u8981\u4fee\u590d\uff0c\u4f46\u662f\u76ee\u524d\u5728\u5de5\u4f5c\u533a\u4e2d\u7684\u5185\u5bb9\u8fd8\u6ca1\u6709\u6210\u578b\uff0c\u8fd8\u4e0d\u8db3\u4ee5\u63d0\u4ea4\uff0c\u4f46\u662f\u53c8\u5fc5\u987b\u5207\u6362\u7684\u53e6\u5916\u7684\u5206\u652f\u53bb\u4fee\u6539 BUG\u3002"),l.a.createElement("p",null,"\ud83d\udccd ",l.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),l.a.createElement(r.a,{code:"# you were working in 'feature' branch\ngit checkout feature\n\n# develop new feature\ngit commit -a -m \"snapshot WIP\"                         # (1)\ngit checkout master\n\n# fix bug\ngit commit              # commit with real log\n\ngit checkout feature\ngit reset --soft HEAD^  # go back to WIP state      # (2)\ngit reset                                               # (3)\n",lang:"bash"}),l.a.createElement("ol",null,l.a.createElement("li",null,"\u8fd9\u6b21\u5c5e\u4e8e\u4e34\u65f6\u63d0\u4ea4\uff0c\u56e0\u6b64\u968f\u4fbf\u6dfb\u52a0\u4e00\u4e2a\u4e34\u65f6\u6ce8\u91ca\u5373\u53ef"),l.a.createElement("li",null,"\u8fd9\u6b21 ",l.a.createElement("code",null,"reset")," \u5220\u9664\u4e86 ",l.a.createElement("code",null,"WIP commit"),"\uff0c\u5e76\u4e14\u628a\u5de5\u4f5c\u533a\u8bbe\u7f6e\u6210\u63d0\u4ea4 WIP \u5feb\u7167\u4e4b\u524d\u7684\u72b6\u6001\u3002"),l.a.createElement("li",null,"\u6b64\u65f6\uff0c\u5728\u7d22\u5f15\u4e2d\u4f9d\u7136\u9057\u7559\u7740\u201csnapshot WIP\u201d\u63d0\u4ea4\u65f6\u6240\u505a\u7684\u672a\u63d0\u4ea4\u53d8\u5316\uff0c",l.a.createElement("code",null,"git reset")," \u5c06\u4f1a\u6e05\u7406\u7d22\u5f15\u6210\u4e3a\u5c1a\u672a\u63d0\u4ea4\u201d",l.a.createElement("em",null,"snapshot WIP"),"\u201c\u65f6\u7684\u72b6\u6001\u4fbf\u4e8e\u63a5\u4e0b\u6765\u7ee7\u7eed\u5de5\u4f5c\u3002"))))}}}]);