/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/welcome.js":
/*!*********************************!*\
  !*** ./resources/js/welcome.js ***!
  \*********************************/
/***/ (() => {

eval("var navbar = document.querySelector(\".navbar\");\nvar welcome = document.querySelector(\".welcome\");\nvar navbarToggle = document.querySelector(\"#navbarSupportedContent\");\nvar resizeBakgroundImg = function resizeBakgroundImg() {\n  var height = window.innerHeight - navbar.clientHeight;\n  welcome.style.height = \"\".concat(height, \"px\");\n};\nnavbarToggle.ontransitionend = resizeBakgroundImg;\nnavbarToggle.ontransitionstart = resizeBakgroundImg;\nwindow.onresize = resizeBakgroundImg;\nwindow.onload = resizeBakgroundImg;\ndocument.querySelector('main').classList.remove('py-4');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvd2VsY29tZS5qcy5qcyIsIm5hbWVzIjpbIm5hdmJhciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndlbGNvbWUiLCJuYXZiYXJUb2dnbGUiLCJyZXNpemVCYWtncm91bmRJbWciLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsInN0eWxlIiwib250cmFuc2l0aW9uZW5kIiwib250cmFuc2l0aW9uc3RhcnQiLCJvbnJlc2l6ZSIsIm9ubG9hZCIsImNsYXNzTGlzdCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3dlbGNvbWUuanM/MjZkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKTtcbmNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlbGNvbWVcIik7XG5jb25zdCBuYXZiYXJUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIik7XG5cbmNvbnN0IHJlc2l6ZUJha2dyb3VuZEltZyA9ICgpID0+IHtcbiAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gbmF2YmFyLmNsaWVudEhlaWdodDtcbiAgd2VsY29tZS5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xufTtcblxuXG5uYXZiYXJUb2dnbGUub250cmFuc2l0aW9uZW5kID0gcmVzaXplQmFrZ3JvdW5kSW1nO1xubmF2YmFyVG9nZ2xlLm9udHJhbnNpdGlvbnN0YXJ0ID0gcmVzaXplQmFrZ3JvdW5kSW1nO1xud2luZG93Lm9ucmVzaXplID0gcmVzaXplQmFrZ3JvdW5kSW1nO1xud2luZG93Lm9ubG9hZCA9IHJlc2l6ZUJha2dyb3VuZEltZztcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5jbGFzc0xpc3QucmVtb3ZlKCdweS00Jyk7XG4iXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0FBQ2hELElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO0FBQ2xELElBQU1FLFlBQVksR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMseUJBQXlCLENBQUM7QUFFdEUsSUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQixHQUFTO0VBQy9CLElBQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxXQUFXLEdBQUdSLE1BQU0sQ0FBQ1MsWUFBWTtFQUN2RE4sT0FBTyxDQUFDTyxLQUFLLENBQUNKLE1BQU0sYUFBTUEsTUFBTSxPQUFJO0FBQ3RDLENBQUM7QUFHREYsWUFBWSxDQUFDTyxlQUFlLEdBQUdOLGtCQUFrQjtBQUNqREQsWUFBWSxDQUFDUSxpQkFBaUIsR0FBR1Asa0JBQWtCO0FBQ25ERSxNQUFNLENBQUNNLFFBQVEsR0FBR1Isa0JBQWtCO0FBQ3BDRSxNQUFNLENBQUNPLE1BQU0sR0FBR1Qsa0JBQWtCO0FBQ2xDSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ2EsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDIn0=\n//# sourceURL=webpack-internal:///./resources/js/welcome.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/welcome.js"]();
/******/ 	
/******/ })()
;