window.MathJax = {
  tex: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]],  // 支持 $...$ 语法
    displayMath: [["$$", "$$"], ["\\[", "\\]"]], // 支持 $$...$$ 语法
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => {
  if (window.MathJax?.typesetPromise) {
    MathJax.startup.output.clearCache();
    MathJax.typesetClear();
    MathJax.texReset();
    MathJax.typesetPromise();
  }
});