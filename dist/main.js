/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/draw_todo.js":
/*!**************************!*\
  !*** ./src/draw_todo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawToDoForm": () => (/* binding */ drawToDoForm),
/* harmony export */   "setFormActive": () => (/* binding */ setFormActive),
/* harmony export */   "drawTask": () => (/* binding */ drawTask)
/* harmony export */ });
const drawToDoForm = () => {
  const main = document.getElementById("main");
  const formWrapper = document.createElement("div");
  const taskTitle = document.createElement("input");
  const taskDescription = document.createElement("input");
  const taskDueDate = document.createElement("input");
  const addTaskBtn = document.createElement("button");
  const deleteTaskBtn = document.createElement("button");

  formWrapper.classList.add("form-wrapper");
  taskTitle.setAttribute("id", "task-title");
  taskDescription.setAttribute("id", "task-note");
  taskDueDate.setAttribute("id", "task-date");
  addTaskBtn.setAttribute("id", "add-task-btn");
  deleteTaskBtn.setAttribute("id", "delete-task-btn");

  taskTitle.placeholder = "Title";
  taskDescription.placeholder = "Quick Note:";
  taskDueDate.type = "date";
  addTaskBtn.textContent = "Add";
  deleteTaskBtn.textContent = "Delete";

  formWrapper.append(
    taskTitle,
    taskDueDate,
    taskDescription,
    addTaskBtn,
    deleteTaskBtn
  );
  main.append(formWrapper);

  drawTask(taskTitle.textContent, taskDescription.textContent);

  return main;
};

const setFormActive = () => {
  const addTaskIcon = document.getElementById("plus-icon");
  addTaskIcon.addEventListener("click", () => {
    document.querySelector(".form-wrapper").classList.toggle("active");
  });
};

const drawTask = () => {
  document.getElementById("add-task-btn").addEventListener("click", () => {
    document.querySelector(".form-wrapper").classList.remove("active");
  });
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _draw_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw_todo */ "./src/draw_todo.js");




(0,_draw_todo__WEBPACK_IMPORTED_MODULE_0__.drawToDoForm)();
(0,_draw_todo__WEBPACK_IMPORTED_MODULE_0__.setFormActive)();
(0,_draw_todo__WEBPACK_IMPORTED_MODULE_0__.drawTask)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVpRDs7Ozs7OztVQ2pEakQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04yQztBQUNDO0FBQ0w7O0FBRXZDLHdEQUFZO0FBQ1oseURBQWE7QUFDYixvREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RyYXdfdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRyYXdUb0RvRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBmb3JtV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiZm9ybS13cmFwcGVyXCIpO1xuICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXRpdGxlXCIpO1xuICB0YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLW5vdGVcIik7XG4gIHRhc2tEdWVEYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1kYXRlXCIpO1xuICBhZGRUYXNrQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRhc2stYnRuXCIpO1xuICBkZWxldGVUYXNrQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlLXRhc2stYnRuXCIpO1xuXG4gIHRhc2tUaXRsZS5wbGFjZWhvbGRlciA9IFwiVGl0bGVcIjtcbiAgdGFza0Rlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJRdWljayBOb3RlOlwiO1xuICB0YXNrRHVlRGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICBkZWxldGVUYXNrQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuICBmb3JtV3JhcHBlci5hcHBlbmQoXG4gICAgdGFza1RpdGxlLFxuICAgIHRhc2tEdWVEYXRlLFxuICAgIHRhc2tEZXNjcmlwdGlvbixcbiAgICBhZGRUYXNrQnRuLFxuICAgIGRlbGV0ZVRhc2tCdG5cbiAgKTtcbiAgbWFpbi5hcHBlbmQoZm9ybVdyYXBwZXIpO1xuXG4gIGRyYXdUYXNrKHRhc2tUaXRsZS50ZXh0Q29udGVudCwgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50KTtcblxuICByZXR1cm4gbWFpbjtcbn07XG5cbmNvbnN0IHNldEZvcm1BY3RpdmUgPSAoKSA9PiB7XG4gIGNvbnN0IGFkZFRhc2tJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbHVzLWljb25cIik7XG4gIGFkZFRhc2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXdyYXBwZXJcIikuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgfSk7XG59O1xuXG5jb25zdCBkcmF3VGFzayA9ICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0td3JhcHBlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGRyYXdUb0RvRm9ybSwgc2V0Rm9ybUFjdGl2ZSwgZHJhd1Rhc2sgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZHJhd1RvRG9Gb3JtIH0gZnJvbSBcIi4vZHJhd190b2RvXCI7XG5pbXBvcnQgeyBzZXRGb3JtQWN0aXZlIH0gZnJvbSBcIi4vZHJhd190b2RvXCI7XG5pbXBvcnQgeyBkcmF3VGFzayB9IGZyb20gXCIuL2RyYXdfdG9kb1wiO1xuXG5kcmF3VG9Eb0Zvcm0oKTtcbnNldEZvcm1BY3RpdmUoKTtcbmRyYXdUYXNrKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=