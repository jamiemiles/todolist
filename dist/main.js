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
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


const drawToDoForm = () => {
  const main = document.getElementById("main");
  const formWrapper = document.createElement("div");
  const formTitle = document.createElement("input");
  const formDescription = document.createElement("input");
  const formDueDate = document.createElement("input");
  const addTaskBtn = document.createElement("button");
  const deleteTaskBtn = document.createElement("button");

  formWrapper.classList.add("form-wrapper");
  formTitle.setAttribute("id", "form-title");
  formDescription.setAttribute("id", "form-note");
  formDueDate.setAttribute("id", "form-date");
  addTaskBtn.setAttribute("id", "add-task-btn");
  deleteTaskBtn.setAttribute("id", "delete-task-btn");

  formTitle.placeholder = "Title";
  formDescription.placeholder = "Quick Note:";
  formDueDate.type = "date";
  addTaskBtn.textContent = "Add";
  deleteTaskBtn.textContent = "Delete";

  formWrapper.append(
    formTitle,
    formDueDate,
    formDescription,
    addTaskBtn,
    deleteTaskBtn
  );
  main.append(formWrapper);

  return main;
};

const setFormActive = () => {
  const addTaskIcon = document.getElementById("plus-icon");
  const formWrapper = document.querySelector(".form-wrapper");

  addTaskIcon.addEventListener("click", () => {
    formWrapper.classList.toggle("active");
    // hides tasks already created.
  });
};

const drawTask = () => {
  const addTaskBtn = document.getElementById("add-task-btn");
  const formWrapper = document.querySelector(".form-wrapper");
  const task = document.getElementById("task");
  addTaskBtn.addEventListener("click", () => {
    formWrapper.classList.remove("active");
    // not sure how this works?
    task.classList.remove("disabled");
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.newToDo)();
  });
};




/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoObj": () => (/* binding */ toDoObj),
/* harmony export */   "newToDo": () => (/* binding */ newToDo)
/* harmony export */ });
/* harmony import */ var _draw_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw_todo */ "./src/draw_todo.js");


function toDoObj(title, description) {
  return {
    title,
    description,
  };
}

const newToDo = () => {
  let title = document.getElementById("form-title").value;
  let description = document.getElementById("form-note").value;
  const taskTitle = document.getElementById("task-title");
  taskTitle.textContent = title;

  toDoObj(title, description);
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
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");





(0,_draw_todo__WEBPACK_IMPORTED_MODULE_0__.drawToDoForm)();
(0,_draw_todo__WEBPACK_IMPORTED_MODULE_0__.drawTask)();
(0,_draw_todo__WEBPACK_IMPORTED_MODULE_0__.setFormActive)();
(0,_todo__WEBPACK_IMPORTED_MODULE_1__.toDoObj)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4Q0FBTztBQUNYLEdBQUc7QUFDSDs7QUFFaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUROOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUU0Qjs7Ozs7OztVQ2xCNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDSjtBQUNLO0FBQ1g7O0FBRWpDLHdEQUFZO0FBQ1osb0RBQVE7QUFDUix5REFBYTtBQUNiLDhDQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZHJhd190b2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBuZXdUb0RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5jb25zdCBkcmF3VG9Eb0Zvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGNvbnN0IGZvcm1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBmb3JtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGZvcm1EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgZm9ybVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImZvcm0td3JhcHBlclwiKTtcbiAgZm9ybVRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybS10aXRsZVwiKTtcbiAgZm9ybURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybS1ub3RlXCIpO1xuICBmb3JtRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm0tZGF0ZVwiKTtcbiAgYWRkVGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrLWJ0blwiKTtcbiAgZGVsZXRlVGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZS10YXNrLWJ0blwiKTtcblxuICBmb3JtVGl0bGUucGxhY2Vob2xkZXIgPSBcIlRpdGxlXCI7XG4gIGZvcm1EZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiUXVpY2sgTm90ZTpcIjtcbiAgZm9ybUR1ZURhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgZGVsZXRlVGFza0J0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cbiAgZm9ybVdyYXBwZXIuYXBwZW5kKFxuICAgIGZvcm1UaXRsZSxcbiAgICBmb3JtRHVlRGF0ZSxcbiAgICBmb3JtRGVzY3JpcHRpb24sXG4gICAgYWRkVGFza0J0bixcbiAgICBkZWxldGVUYXNrQnRuXG4gICk7XG4gIG1haW4uYXBwZW5kKGZvcm1XcmFwcGVyKTtcblxuICByZXR1cm4gbWFpbjtcbn07XG5cbmNvbnN0IHNldEZvcm1BY3RpdmUgPSAoKSA9PiB7XG4gIGNvbnN0IGFkZFRhc2tJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbHVzLWljb25cIik7XG4gIGNvbnN0IGZvcm1XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXdyYXBwZXJcIik7XG5cbiAgYWRkVGFza0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBmb3JtV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIC8vIGhpZGVzIHRhc2tzIGFscmVhZHkgY3JlYXRlZC5cbiAgfSk7XG59O1xuXG5jb25zdCBkcmF3VGFzayA9ICgpID0+IHtcbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stYnRuXCIpO1xuICBjb25zdCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS13cmFwcGVyXCIpO1xuICBjb25zdCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrXCIpO1xuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZm9ybVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAvLyBub3Qgc3VyZSBob3cgdGhpcyB3b3Jrcz9cbiAgICB0YXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcbiAgICBuZXdUb0RvKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgZHJhd1RvRG9Gb3JtLCBzZXRGb3JtQWN0aXZlLCBkcmF3VGFzayB9O1xuIiwiaW1wb3J0IHsgZHJhd1RvRG9Gb3JtIH0gZnJvbSBcIi4vZHJhd190b2RvXCI7XG5cbmZ1bmN0aW9uIHRvRG9PYmoodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gIH07XG59XG5cbmNvbnN0IG5ld1RvRG8gPSAoKSA9PiB7XG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10aXRsZVwiKS52YWx1ZTtcbiAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLW5vdGVcIikudmFsdWU7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZVwiKTtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgdG9Eb09iaih0aXRsZSwgZGVzY3JpcHRpb24pO1xufTtcblxuZXhwb3J0IHsgdG9Eb09iaiwgbmV3VG9EbyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBkcmF3VG9Eb0Zvcm0gfSBmcm9tIFwiLi9kcmF3X3RvZG9cIjtcbmltcG9ydCB7IGRyYXdUYXNrIH0gZnJvbSBcIi4vZHJhd190b2RvXCI7XG5pbXBvcnQgeyBzZXRGb3JtQWN0aXZlIH0gZnJvbSBcIi4vZHJhd190b2RvXCI7XG5pbXBvcnQgeyB0b0RvT2JqIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5kcmF3VG9Eb0Zvcm0oKTtcbmRyYXdUYXNrKCk7XG5zZXRGb3JtQWN0aXZlKCk7XG50b0RvT2JqKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=