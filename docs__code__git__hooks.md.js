(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"e/z7":function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l);t("B2uJ"),t("+su7"),t("qOys"),t("5Yjd");a["default"]=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"\u94a9\u5b50"},n.a.createElement("a",{"aria-hidden":"true",href:"#\u94a9\u5b50"},n.a.createElement("span",{className:"icon icon-link"})),"\u94a9\u5b50"),n.a.createElement("p",null,"Git \u94a9\u5b50\uff08hooks\uff09\u662f\u5728 Git \u4ed3\u5e93\u4e2d\u7279\u5b9a\u4e8b\u4ef6\uff08certain points\uff09\u89e6\u53d1\u540e\u88ab\u8c03\u7528\u7684\u811a\u672c\u3002\u901a\u8fc7\u94a9\u5b50\u53ef\u4ee5\u81ea\u5b9a\u4e49 Git \u5185\u90e8\u7684\u76f8\u5173\uff08\u5982 git push\uff09\u884c\u4e3a\uff0c\u5728\u5f00\u53d1\u5468\u671f\u4e2d\u7684\u5173\u952e\u70b9\u89e6\u53d1\u81ea\u5b9a\u4e49\u7684\u884c\u4e3a\u3002Git \u542b\u6709\u4e24\u79cd\u7c7b\u578b\u7684\u94a9\u5b50\uff1a\u5ba2\u6237\u7aef\u7684\u548c\u670d\u52a1\u5668\u7aef\u7684\u3002\u5ba2\u6237\u7aef\u94a9\u5b50\u7531\u8bf8\u5982\u63d0\u4ea4\u548c\u5408\u5e76\u8fd9\u6837\u7684\u64cd\u4f5c\u6240\u8c03\u7528\uff0c\u800c\u670d\u52a1\u5668\u7aef\u94a9\u5b50\u4f5c\u7528\u4e8e\u8bf8\u5982\u63a5\u6536\u88ab\u63a8\u9001\u7684\u63d0\u4ea4\u8fd9\u6837\u7684\u8054\u7f51\u64cd\u4f5c\u3002"),n.a.createElement("p",null,"Git \u94a9\u5b50\u6700\u5e38\u89c1\u7684\u4f7f\u7528\u573a\u666f\u5305\u62ec\u6839\u636e\u4ed3\u5e93\u72b6\u6001\u6539\u53d8\u9879\u76ee\u73af\u5883\u3001\u63a5\u5165\u6301\u7eed\u96c6\u6210\u5de5\u4f5c\u6d41\u7b49\u3002\u7531\u4e8e\u811a\u672c\u662f\u53ef\u4ee5\u5b8c\u5168\u5b9a\u5236\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u7528 Git \u94a9\u5b50\u6765\u81ea\u52a8\u5316\u6216\u8005\u4f18\u5316\u4f60\u5f00\u53d1\u5de5\u4f5c\u6d41\u4e2d\u4efb\u610f\u90e8\u5206\u3002"),n.a.createElement("h2",{id:"\u4f5c\u7528\u57df"},n.a.createElement("a",{"aria-hidden":"true",href:"#\u4f5c\u7528\u57df"},n.a.createElement("span",{className:"icon icon-link"})),"\u4f5c\u7528\u57df"),n.a.createElement("p",null,"Git \u94a9\u5b50\u662f\u5bf9\u672c\u5730\u4ed3\u5e93\u76f8\u5173\u64cd\u4f5c\u5f71\u54cd\uff0c\u5bf9\u4e8e\u4efb\u4f55 Git \u4ed3\u5e93\u6765\u8bf4\u94a9\u5b50\u90fd\u662f\u672c\u5730\u7684\uff0c\u521d\u59cb\u7684\u94a9\u5b50\u90fd\u662f\u4ece Git \u9ed8\u8ba4\u6a21\u677f\u76ee\u5f55\u4e2d\u81ea\u52a8\u5b89\u88c5\u3002"),n.a.createElement("p",null,"\u5728\u5f00\u53d1\u56e2\u961f\u4e2d\u4e3a\u4e86\u4fdd\u6301\u56e2\u961f\u6240\u4f7f\u7528\u94a9\u5b50\u4e00\u81f4\uff0c\u7ef4\u62a4\u8d77\u6765\u7b97\u662f\u6bd4\u8f83\u590d\u6742\u7684\uff0c\u56e0\u4e3a ",n.a.createElement("code",null,".git/hooks")," \u76ee\u5f55\u4e0d\u968f\u4f60\u7684\u9879\u76ee\u4e00\u8d77\u62f7\u8d1d\uff0c\u4e5f\u4e0d\u53d7\u7248\u672c\u63a7\u5236\u5f71\u54cd\u3002"),n.a.createElement("h2",{id:"\u5ba2\u6237\u7aef\u94a9\u5b50"},n.a.createElement("a",{"aria-hidden":"true",href:"#\u5ba2\u6237\u7aef\u94a9\u5b50"},n.a.createElement("span",{className:"icon icon-link"})),"\u5ba2\u6237\u7aef\u94a9\u5b50"),n.a.createElement("p",null,"\u5ba2\u6237\u7aef\u94a9\u5b50\u5206\u4e3a\u5f88\u591a\u79cd\u3002 \u4e0b\u9762\u628a\u5b83\u4eec\u5206\u4e3a\uff1a\u63d0\u4ea4\u5de5\u4f5c\u6d41\u94a9\u5b50\u3001\u7535\u5b50\u90ae\u4ef6\u5de5\u4f5c\u6d41\u94a9\u5b50\u548c\u5176\u5b83\u94a9\u5b50\u3002"),n.a.createElement("blockquote",null,n.a.createElement("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u514b\u9686\u67d0\u4e2a\u7248\u672c\u5e93\u65f6\uff0c\u5b83\u7684\u5ba2\u6237\u7aef\u94a9\u5b50 ",n.a.createElement("strong",null,"\u5e76\u4e0d")," \u968f\u540c\u590d\u5236\u3002 \u5982\u679c\u9700\u8981\u9760\u8fd9\u4e9b\u811a\u672c\u6765\u5f3a\u5236\u7ef4\u6301\u67d0\u79cd\u7b56\u7565\uff0c\u5efa\u8bae\u4f60\u5728\u670d\u52a1\u5668\u7aef\u5b9e\u73b0\u8fd9\u4e00\u529f\u80fd\u3002")),n.a.createElement("h3",{id:"\u63d0\u4ea4\u5de5\u4f5c\u6d41\u94a9\u5b50"},n.a.createElement("a",{"aria-hidden":"true",href:"#\u63d0\u4ea4\u5de5\u4f5c\u6d41\u94a9\u5b50"},n.a.createElement("span",{className:"icon icon-link"})),"\u63d0\u4ea4\u5de5\u4f5c\u6d41\u94a9\u5b50"),n.a.createElement("p",null,"\u524d\u56db\u4e2a\u94a9\u5b50\u6d89\u53ca\u63d0\u4ea4\u7684\u8fc7\u7a0b\u3002"),n.a.createElement("h4",{id:"pre-commit"},n.a.createElement("a",{"aria-hidden":"true",href:"#pre-commit"},n.a.createElement("span",{className:"icon icon-link"})),"pre-commit"),n.a.createElement("p",null,n.a.createElement("code",null,"pre-commit")," \u94a9\u5b50\u5728\u6267\u884c ",n.a.createElement("code",null,"git commit")," \u547d\u4ee4\u65f6\uff0c\u952e\u5165\u63d0\u4ea4\u4fe1\u606f\u524d\u8fd0\u884c\u3002 \u5b83\u7528\u4e8e\u68c0\u67e5\u5373\u5c06\u63d0\u4ea4 commit \u7684\u5feb\u7167\uff0c\u4f8b\u5982\uff0c\u68c0\u67e5\u662f\u5426\u6709\u6240\u9057\u6f0f\uff0c\u786e\u4fdd\u6d4b\u8bd5\u8fd0\u884c\uff0c\u4ee5\u53ca\u6838\u67e5\u4ee3\u7801\u3002 \u5982\u679c\u8be5\u94a9\u5b50\u4ee5\u975e\u96f6\u503c\u9000\u51fa\uff0cGit \u5c06\u653e\u5f03\u6b64\u6b21\u63d0\u4ea4\uff0c\u4e0d\u8fc7\u4f60\u53ef\u4ee5\u7528 ",n.a.createElement("code",null,"git commit --no-verify")," \u6765\u7ed5\u8fc7\u8fd9\u4e2a\u73af\u8282\u3002 \u4f60\u53ef\u4ee5\u5229\u7528\u8be5\u94a9\u5b50\uff0c\u6765\u68c0\u67e5\u4ee3\u7801\u98ce\u683c\u662f\u5426\u4e00\u81f4\uff08\u8fd0\u884c\u7c7b\u4f3c ",n.a.createElement("code",null,"lint")," \u7684\u7a0b\u5e8f\uff09\u3001\u5c3e\u968f\u7a7a\u767d\u5b57\u7b26\u662f\u5426\u5b58\u5728\uff08\u81ea\u5e26\u7684\u94a9\u5b50\u5c31\u662f\u8fd9\u4e48\u505a\u7684\uff09\uff0c\u6216\u65b0\u65b9\u6cd5\u7684\u6587\u6863\u662f\u5426\u9002\u5f53\u3002"),n.a.createElement("h4",{id:"prepare-commit-msg"},n.a.createElement("a",{"aria-hidden":"true",href:"#prepare-commit-msg"},n.a.createElement("span",{className:"icon icon-link"})),"prepare-commit-msg"),n.a.createElement("p",null,n.a.createElement("code",null,"prepare-commit-msg")," \u94a9\u5b50\u5728\u542f\u52a8\u63d0\u4ea4\u4fe1\u606f\u7f16\u8f91\u5668\u4e4b\u524d\uff0c\u9ed8\u8ba4\u4fe1\u606f\u88ab\u521b\u5efa\u4e4b\u540e\u8fd0\u884c\u3002 \u5b83\u5141\u8bb8\u4f60\u7f16\u8f91\u63d0\u4ea4\u8005\u6240\u770b\u5230\u7684\u9ed8\u8ba4\u4fe1\u606f\u3002 \u8be5\u94a9\u5b50\u63a5\u6536\u4e00\u4e9b\u9009\u9879\uff1a\u5b58\u6709\u5f53\u524d\u63d0\u4ea4\u4fe1\u606f\u7684\u6587\u4ef6\u7684\u8def\u5f84\u3001\u63d0\u4ea4\u7c7b\u578b\u548c\u4fee\u8865\u63d0\u4ea4\u7684\u63d0\u4ea4\u7684 SHA-1 \u6821\u9a8c\u3002 \u5b83\u5bf9\u4e00\u822c\u7684\u63d0\u4ea4\u6765\u8bf4\u5e76\u6ca1\u6709\u4ec0\u4e48\u7528\uff1b\u7136\u800c\u5bf9\u90a3\u4e9b\u4f1a\u81ea\u52a8\u4ea7\u751f\u9ed8\u8ba4\u4fe1\u606f\u7684\u63d0\u4ea4\uff0c\u5982\u63d0\u4ea4\u4fe1\u606f\u6a21\u677f\u3001\u5408\u5e76\u63d0\u4ea4\u3001\u538b\u7f29\u63d0\u4ea4\u548c\u4fee\u8ba2\u63d0\u4ea4\u7b49\u975e\u5e38\u5b9e\u7528\u3002 \u4f60\u53ef\u4ee5\u7ed3\u5408\u63d0\u4ea4\u6a21\u677f\u6765\u4f7f\u7528\u5b83\uff0c\u52a8\u6001\u5730\u63d2\u5165\u4fe1\u606f\u3002"),n.a.createElement("h4",{id:"commit-msg"},n.a.createElement("a",{"aria-hidden":"true",href:"#commit-msg"},n.a.createElement("span",{className:"icon icon-link"})),"commit-msg"),n.a.createElement("p",null,n.a.createElement("code",null,"commit-msg")," \u94a9\u5b50\u63a5\u6536\u4e00\u4e2a\u53c2\u6570\uff0c\u6b64\u53c2\u6570\u5373\u4e0a\u6587\u63d0\u5230\u7684\uff0c\u5b58\u6709\u5f53\u524d\u63d0\u4ea4\u4fe1\u606f\u7684\u4e34\u65f6\u6587\u4ef6\u7684\u8def\u5f84\u3002 \u5982\u679c\u8be5\u94a9\u5b50\u811a\u672c\u4ee5\u975e\u96f6\u503c\u9000\u51fa\uff0cGit \u5c06\u653e\u5f03\u63d0\u4ea4\uff0c\u56e0\u6b64\uff0c\u53ef\u4ee5\u7528\u6765\u5728\u63d0\u4ea4\u901a\u8fc7\u524d\u9a8c\u8bc1\u9879\u76ee\u72b6\u6001\u6216\u63d0\u4ea4\u4fe1\u606f\u3002\u5e38\u7528\u4e8e\u6821\u9a8c\u63d0\u4ea4\u8bf4\u660e\u662f\u5426\u6807\u51c6\u3002"),n.a.createElement("h4",{id:"post-commit"},n.a.createElement("a",{"aria-hidden":"true",href:"#post-commit"},n.a.createElement("span",{className:"icon icon-link"})),"post-commit"),n.a.createElement("p",null,n.a.createElement("code",null,"post-commit")," \u94a9\u5b50\u5728\u6574\u4e2a\u63d0\u4ea4\u8fc7\u7a0b\u5b8c\u6210\u540e\u8fd0\u884c\u3002 \u5b83\u4e0d\u63a5\u6536\u4efb\u4f55\u53c2\u6570\uff0c\u4f46\u4f60\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u901a\u8fc7\u8fd0\u884c ",n.a.createElement("code",null,"git log -1 HEAD")," \u6765\u83b7\u5f97\u6700\u540e\u4e00\u6b21\u7684\u63d0\u4ea4\u4fe1\u606f\u3002 \u8be5\u94a9\u5b50\u4e00\u822c\u7528\u4e8e\u90ae\u4ef6\u901a\u77e5\u3001\u63d0\u9192\u4e4b\u7c7b\u7684\u4e8b\u60c5\u3002"),n.a.createElement("h3",{id:"\u7535\u5b50\u90ae\u4ef6\u5de5\u4f5c\u6d41\u94a9\u5b50"},n.a.createElement("a",{"aria-hidden":"true",href:"#\u7535\u5b50\u90ae\u4ef6\u5de5\u4f5c\u6d41\u94a9\u5b50"},n.a.createElement("span",{className:"icon icon-link"})),"\u7535\u5b50\u90ae\u4ef6\u5de5\u4f5c\u6d41\u94a9\u5b50"),n.a.createElement("p",null,"\u4f60\u53ef\u4ee5\u7ed9\u7535\u5b50\u90ae\u4ef6\u5de5\u4f5c\u6d41\u8bbe\u7f6e\u4e09\u4e2a\u5ba2\u6237\u7aef\u94a9\u5b50\u3002 \u5b83\u4eec\u90fd\u662f\u7531 ",n.a.createElement("code",null,"git am")," \u547d\u4ee4\u8c03\u7528\u7684\uff0c\u56e0\u6b64\u5982\u679c\u4f60\u6ca1\u6709\u5728\u4f60\u7684\u5de5\u4f5c\u6d41\u4e2d\u7528\u5230\u8fd9\u4e2a\u547d\u4ee4\uff0c\u53ef\u4ee5\u8df3\u5230\u4e0b\u4e00\u8282\u3002 \u5982\u679c\u4f60\u9700\u8981\u901a\u8fc7\u7535\u5b50\u90ae\u4ef6\u63a5\u6536\u7531 ",n.a.createElement("code",null,"git format-patch")," \u4ea7\u751f\u7684\u8865\u4e01\uff0c\u8fd9\u4e9b\u94a9\u5b50\u4e5f\u8bb8\u7528\u5f97\u4e0a\u3002"),n.a.createElement("h4",{id:"pplypatch-msg"},n.a.createElement("a",{"aria-hidden":"true",href:"#pplypatch-msg"},n.a.createElement("span",{className:"icon icon-link"})),"pplypatch-msg"),n.a.createElement("p",null,"\u7b2c\u4e00\u4e2a\u8fd0\u884c\u7684\u94a9\u5b50\u662f ",n.a.createElement("code",null,"applypatch-msg")," \u3002 \u5b83\u63a5\u6536\u5355\u4e2a\u53c2\u6570\uff1a\u5305\u542b\u8bf7\u6c42\u5408\u5e76\u4fe1\u606f\u7684\u4e34\u65f6\u6587\u4ef6\u7684\u540d\u5b57\u3002 \u5982\u679c\u811a\u672c\u8fd4\u56de\u975e\u96f6\u503c\uff0cGit \u5c06\u653e\u5f03\u8be5\u8865\u4e01\u3002 \u4f60\u53ef\u4ee5\u7528\u8be5\u811a\u672c\u6765\u786e\u4fdd\u63d0\u4ea4\u4fe1\u606f\u7b26\u5408\u683c\u5f0f\uff0c\u6216\u76f4\u63a5\u7528\u811a\u672c\u4fee\u6b63\u683c\u5f0f\u9519\u8bef\u3002"),n.a.createElement("p",null,"\u4e0b\u4e00\u4e2a\u5728 ",n.a.createElement("code",null,"git am")," \u8fd0\u884c\u671f\u95f4\u88ab\u8c03\u7528\u7684\u662f ",n.a.createElement("code",null,"pre-applypatch")," \u3002 \u6709\u4e9b\u96be\u4ee5\u7406\u89e3\u7684\u662f\uff0c\u5b83\u6b63\u597d\u8fd0\u884c\u4e8e\u5e94\u7528\u8865\u4e01 \u4e4b\u540e\uff0c\u4ea7\u751f\u63d0\u4ea4\u4e4b\u524d\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u7528\u5b83\u5728\u63d0\u4ea4\u524d\u68c0\u67e5\u5feb\u7167\u3002 \u4f60\u53ef\u4ee5\u7528\u8fd9\u4e2a\u811a\u672c\u8fd0\u884c\u6d4b\u8bd5\u6216\u68c0\u67e5\u5de5\u4f5c\u533a\u3002 \u5982\u679c\u6709\u4ec0\u4e48\u9057\u6f0f\uff0c\u6216\u6d4b\u8bd5\u672a\u80fd\u901a\u8fc7\uff0c\u811a\u672c\u4f1a\u4ee5\u975e\u96f6\u503c\u9000\u51fa\uff0c\u4e2d\u65ad git am \u7684\u8fd0\u884c\uff0c\u8fd9\u6837\u8865\u4e01\u5c31\u4e0d\u4f1a\u88ab\u63d0\u4ea4\u3002"),n.a.createElement("h4",{id:"post-applypatch"},n.a.createElement("a",{"aria-hidden":"true",href:"#post-applypatch"},n.a.createElement("span",{className:"icon icon-link"})),"post-applypatch"),n.a.createElement("p",null,n.a.createElement("code",null,"post-applypatch")," \u8fd0\u884c\u4e8e\u63d0\u4ea4\u4ea7\u751f\u4e4b\u540e\uff0c\u662f\u5728 ",n.a.createElement("code",null,"git am")," \u8fd0\u884c\u671f\u95f4\u6700\u540e\u88ab\u8c03\u7528\u7684\u94a9\u5b50\u3002 \u4f60\u53ef\u4ee5\u7528\u5b83\u628a\u7ed3\u679c\u901a\u77e5\u7ed9\u4e00\u4e2a\u5c0f\u7ec4\u6216\u6240\u62c9\u53d6\u7684\u8865\u4e01\u7684\u4f5c\u8005\u3002 \u4f46\u4f60\u6ca1\u529e\u6cd5\u7528\u5b83\u505c\u6b62\u6253\u8865\u4e01\u7684\u8fc7\u7a0b\u3002"),n.a.createElement("h3",{id:"\u5176\u4ed6\u5ba2\u6237\u7aef\u94a9\u5b50"},n.a.createElement("a",{"aria-hidden":"true",href:"#\u5176\u4ed6\u5ba2\u6237\u7aef\u94a9\u5b50"},n.a.createElement("span",{className:"icon icon-link"})),"\u5176\u4ed6\u5ba2\u6237\u7aef\u94a9\u5b50"),n.a.createElement("h2",{id:"\u670d\u52a1\u7aef\u94a9\u5b50"},n.a.createElement("a",{"aria-hidden":"true",href:"#\u670d\u52a1\u7aef\u94a9\u5b50"},n.a.createElement("span",{className:"icon icon-link"})),"\u670d\u52a1\u7aef\u94a9\u5b50"),n.a.createElement("p",null,"\u9664\u4e86\u5ba2\u6237\u7aef\u94a9\u5b50\uff0c\u4f5c\u4e3a\u7cfb\u7edf\u7ba1\u7406\u5458\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u82e5\u5e72\u670d\u52a1\u5668\u7aef\u7684\u94a9\u5b50\u5bf9\u9879\u76ee\u5f3a\u5236\u6267\u884c\u5404\u79cd\u7c7b\u578b\u7684\u7b56\u7565\u3002 \u8fd9\u4e9b\u94a9\u5b50\u811a\u672c\u5728\u63a8\u9001\u5230\u670d\u52a1\u5668\u4e4b\u524d\u548c\u4e4b\u540e\u8fd0\u884c\u3002 \u63a8\u9001\u5230\u670d\u52a1\u5668\u524d\u8fd0\u884c\u7684\u94a9\u5b50\u53ef\u4ee5\u5728\u4efb\u4f55\u65f6\u5019\u4ee5\u975e\u96f6\u503c\u9000\u51fa\uff0c\u62d2\u7edd\u63a8\u9001\u5e76\u7ed9\u5ba2\u6237\u7aef\u8fd4\u56de\u9519\u8bef\u6d88\u606f\uff0c\u8fd8\u53ef\u4ee5\u4f9d\u4f60\u6240\u60f3\u8bbe\u7f6e\u8db3\u591f\u590d\u6742\u7684\u63a8\u9001\u7b56\u7565\u3002"),n.a.createElement("h4",{id:"pre-receive"},n.a.createElement("a",{"aria-hidden":"true",href:"#pre-receive"},n.a.createElement("span",{className:"icon icon-link"})),"pre-receive"),n.a.createElement("p",null,"\u5904\u7406\u6765\u81ea\u5ba2\u6237\u7aef\u7684\u63a8\u9001\u64cd\u4f5c\u65f6\uff0c\u6700\u5148\u88ab\u8c03\u7528\u7684\u811a\u672c\u662f ",n.a.createElement("code",null,"pre-receive"),"\u3002 \u5b83\u4ece\u6807\u51c6\u8f93\u5165\u83b7\u53d6\u4e00\u7cfb\u5217\u88ab\u63a8\u9001\u7684\u5f15\u7528\u3002\u5982\u679c\u5b83\u4ee5\u975e\u96f6\u503c\u9000\u51fa\uff0c\u6240\u6709\u7684\u63a8\u9001\u5185\u5bb9\u90fd\u4e0d\u4f1a\u88ab\u63a5\u53d7\u3002 \u4f60\u53ef\u4ee5\u7528\u8fd9\u4e2a\u94a9\u5b50\u963b\u6b62\u5bf9\u5f15\u7528\u8fdb\u884c\u975e\u5feb\u8fdb\uff08non-fast-forward\uff09\u7684\u66f4\u65b0\uff0c\u6216\u8005\u5bf9\u8be5\u63a8\u9001\u6240\u4fee\u6539\u7684\u6240\u6709\u5f15\u7528\u548c\u6587\u4ef6\u8fdb\u884c\u8bbf\u95ee\u63a7\u5236\u3002"),n.a.createElement("h4",{id:"update"},n.a.createElement("a",{"aria-hidden":"true",href:"#update"},n.a.createElement("span",{className:"icon icon-link"})),"update"),n.a.createElement("p",null,n.a.createElement("code",null,"update")," \u811a\u672c\u548c ",n.a.createElement("code",null,"pre-receive")," \u811a\u672c\u5341\u5206\u7c7b\u4f3c\uff0c\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u5b83\u4f1a\u4e3a\u6bcf\u4e00\u4e2a\u51c6\u5907\u66f4\u65b0\u7684\u5206\u652f\u5404\u8fd0\u884c\u4e00\u6b21\u3002 \u5047\u5982\u63a8\u9001\u8005\u540c\u65f6\u5411\u591a\u4e2a\u5206\u652f\u63a8\u9001\u5185\u5bb9\uff0c",n.a.createElement("code",null,"pre-receive")," \u53ea\u8fd0\u884c\u4e00\u6b21\uff0c\u76f8\u6bd4\u4e4b\u4e0b ",n.a.createElement("code",null,"update")," \u5219\u4f1a\u4e3a\u6bcf\u4e00\u4e2a\u88ab\u63a8\u9001\u7684\u5206\u652f\u5404\u8fd0\u884c\u4e00\u6b21\u3002 \u5b83\u4e0d\u4f1a\u4ece\u6807\u51c6\u8f93\u5165\u8bfb\u53d6\u5185\u5bb9\uff0c\u800c\u662f\u63a5\u53d7\u4e09\u4e2a\u53c2\u6570\uff1a\u5f15\u7528\u7684\u540d\u5b57\uff08\u5206\u652f\uff09\uff0c\u63a8\u9001\u524d\u7684\u5f15\u7528\u6307\u5411\u7684\u5185\u5bb9\u7684 ",n.a.createElement("code",null,"SHA-1")," \u503c\uff0c\u4ee5\u53ca\u7528\u6237\u51c6\u5907\u63a8\u9001\u7684\u5185\u5bb9\u7684 ",n.a.createElement("code",null,"SHA-1")," \u503c\u3002 \u5982\u679c ",n.a.createElement("code",null,"update")," \u811a\u672c\u4ee5\u975e\u96f6\u503c\u9000\u51fa\uff0c\u53ea\u6709\u76f8\u5e94\u7684\u90a3\u4e00\u4e2a\u5f15\u7528\u4f1a\u88ab\u62d2\u7edd\uff1b\u5176\u4f59\u7684\u4f9d\u7136\u4f1a\u88ab\u66f4\u65b0\u3002"),n.a.createElement("h4",{id:"post-receive"},n.a.createElement("a",{"aria-hidden":"true",href:"#post-receive"},n.a.createElement("span",{className:"icon icon-link"})),"post-receive"),n.a.createElement("p",null,n.a.createElement("code",null,"post-receive")," \u6302\u94a9\u5728\u6574\u4e2a\u8fc7\u7a0b\u5b8c\u7ed3\u4ee5\u540e\u8fd0\u884c\uff0c\u53ef\u4ee5\u7528\u6765\u66f4\u65b0\u5176\u4ed6\u7cfb\u7edf\u670d\u52a1\u6216\u8005\u901a\u77e5\u7528\u6237\u3002 \u5b83\u63a5\u53d7\u4e0e ",n.a.createElement("code",null,"pre-receive")," \u76f8\u540c\u7684\u6807\u51c6\u8f93\u5165\u6570\u636e\u3002 \u5b83\u7684\u7528\u9014\u5305\u62ec\u7ed9\u67d0\u4e2a\u90ae\u4ef6\u5217\u8868\u53d1\u4fe1\uff0c\u901a\u77e5\u6301\u7eed\u96c6\u6210\uff08continous integration\uff09\u7684\u670d\u52a1\u5668\uff0c \u6216\u8005\u66f4\u65b0\u95ee\u9898\u8ffd\u8e2a\u7cfb\u7edf\uff08ticket-tracking system\uff09 \u2014\u2014 \u751a\u81f3\u53ef\u4ee5\u901a\u8fc7\u5206\u6790\u63d0\u4ea4\u4fe1\u606f\u6765\u51b3\u5b9a\u67d0\u4e2a\u95ee\u9898\uff08ticket\uff09\u662f\u5426\u5e94\u8be5\u88ab\u5f00\u542f\uff0c\u4fee\u6539\u6216\u8005\u5173\u95ed\u3002 \u8be5\u811a\u672c\u65e0\u6cd5\u7ec8\u6b62\u63a8\u9001\u8fdb\u7a0b\uff0c\u4e0d\u8fc7\u5ba2\u6237\u7aef\u5728\u5b83\u7ed3\u675f\u8fd0\u884c\u4e4b\u524d\u5c06\u4fdd\u6301\u8fde\u63a5\u72b6\u6001\uff0c \u6240\u4ee5\u5982\u679c\u4f60\u60f3\u505a\u5176\u4ed6\u64cd\u4f5c\u9700\u8c28\u614e\u4f7f\u7528\u5b83\uff0c\u56e0\u4e3a\u5b83\u5c06\u8017\u8d39\u4f60\u5f88\u957f\u7684\u4e00\u6bb5\u65f6\u95f4\u3002"),n.a.createElement("hr",null),n.a.createElement("p",null,n.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcd6 \u81ea\u5b9a\u4e49 Git - Git \u94a9\u5b50",n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},n.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),n.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://aotu.io/notes/2017/04/10/githooks/index.html",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd \u7528 Git \u94a9\u5b50\u8fdb\u884c\u7b80\u5355\u81ea\u52a8\u90e8\u7f72",n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},n.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),n.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://juejin.im/post/6844904046038351886",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd Git Pre-Commit \u94a9\u5b50\u7684\u4f7f\u7528",n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},n.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),n.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))))))}}}]);