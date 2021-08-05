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
/* harmony export */   "displayTask": () => (/* binding */ displayTask),
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
  });
};

const drawTask = () => {
  const main = document.getElementById("main");
  const taskContainer = document.querySelector(".task-container");
  const section = document.createElement("section");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");
  const circleIcon = document.createElement("i");
  const crossIcon = document.createElement("i");
  const downArrow = document.createElement("i");
  const formTitle = document.getElementById("form-title").value;
  const formNote = document.getElementById("form-note").value;

  section.setAttribute("id", "task");
  section.setAttribute("data-attribute", `${_todo__WEBPACK_IMPORTED_MODULE_0__.displayToDos.length}`);
  h4.setAttribute("id", "task-title");
  p.setAttribute("id", "task-note");
  circleIcon.classList.add("far");
  circleIcon.classList.add("fa-circle");
  downArrow.classList.add("fas");
  downArrow.classList.add("fa-arrow-down");
  crossIcon.classList.add("fas");
  crossIcon.classList.add("fa-times");

  h4.textContent = formTitle;
  p.textContent = formNote;

  section.append(circleIcon, h4, p, downArrow, crossIcon);
  taskContainer.append(section);
};

const displayTask = () => {
  const addTaskBtn = document.getElementById("add-task-btn");
  const formWrapper = document.querySelector(".form-wrapper");

  addTaskBtn.addEventListener("click", (e) => {
    const formTitle = document.getElementById("form-title").value;
    const formNote = document.getElementById("form-note").value;
    const taskTitle = document.getElementById("task-title");
    const taskNote = document.getElementById("task-note");
    formWrapper.classList.remove("active");

    const newTask = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.toDoObj)(formTitle, formNote);

    _todo__WEBPACK_IMPORTED_MODULE_0__.displayToDos.push(newTask);
    drawTask();
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
/* harmony export */   "displayToDos": () => (/* binding */ displayToDos)
/* harmony export */ });
const displayToDos = [];

function toDoObj(title, description) {
  return {
    title,
    description,
    completed: false,
  };
}




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
(0,_todo__WEBPACK_IMPORTED_MODULE_1__.toDoObj)();
(0,_draw_todo__WEBPACK_IMPORTED_MODULE_0__.displayTask)();
(0,_draw_todo__WEBPACK_IMPORTED_MODULE_0__.setFormActive)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMsc0RBQW1CLENBQUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw4Q0FBTzs7QUFFM0IsSUFBSSxvREFBaUI7QUFDckI7QUFDQSxHQUFHO0FBQ0g7O0FBRThEOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0Y5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaUM7Ozs7Ozs7VUNWakM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOdUU7QUFDdEM7O0FBRWpDLHdEQUFZO0FBQ1osOENBQU87QUFDUCx1REFBVztBQUNYLHlEQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZHJhd190b2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkaXNwbGF5VG9Eb3MsIHRvRG9PYmogfSBmcm9tIFwiLi90b2RvXCI7XG5cbmNvbnN0IGRyYXdUb0RvRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGZvcm1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgZm9ybUR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBmb3JtV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiZm9ybS13cmFwcGVyXCIpO1xuICBmb3JtVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtLXRpdGxlXCIpO1xuICBmb3JtRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtLW5vdGVcIik7XG4gIGZvcm1EdWVEYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybS1kYXRlXCIpO1xuICBhZGRUYXNrQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRhc2stYnRuXCIpO1xuICBkZWxldGVUYXNrQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlLXRhc2stYnRuXCIpO1xuXG4gIGZvcm1UaXRsZS5wbGFjZWhvbGRlciA9IFwiVGl0bGVcIjtcbiAgZm9ybURlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJRdWljayBOb3RlOlwiO1xuICBmb3JtRHVlRGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICBkZWxldGVUYXNrQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuICBmb3JtV3JhcHBlci5hcHBlbmQoXG4gICAgZm9ybVRpdGxlLFxuICAgIGZvcm1EdWVEYXRlLFxuICAgIGZvcm1EZXNjcmlwdGlvbixcbiAgICBhZGRUYXNrQnRuLFxuICAgIGRlbGV0ZVRhc2tCdG5cbiAgKTtcbiAgbWFpbi5hcHBlbmQoZm9ybVdyYXBwZXIpO1xuXG4gIHJldHVybiBtYWluO1xufTtcblxuY29uc3Qgc2V0Rm9ybUFjdGl2ZSA9ICgpID0+IHtcbiAgY29uc3QgYWRkVGFza0ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsdXMtaWNvblwiKTtcbiAgY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0td3JhcHBlclwiKTtcblxuICBhZGRUYXNrSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGZvcm1XcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIH0pO1xufTtcblxuY29uc3QgZHJhd1Rhc2sgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpO1xuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGNpcmNsZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgY29uc3QgY3Jvc3NJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGNvbnN0IGRvd25BcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGl0bGVcIikudmFsdWU7XG4gIGNvbnN0IGZvcm1Ob3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLW5vdGVcIikudmFsdWU7XG5cbiAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tcIik7XG4gIHNlY3Rpb24uc2V0QXR0cmlidXRlKFwiZGF0YS1hdHRyaWJ1dGVcIiwgYCR7ZGlzcGxheVRvRG9zLmxlbmd0aH1gKTtcbiAgaDQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXRpdGxlXCIpO1xuICBwLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1ub3RlXCIpO1xuICBjaXJjbGVJY29uLmNsYXNzTGlzdC5hZGQoXCJmYXJcIik7XG4gIGNpcmNsZUljb24uY2xhc3NMaXN0LmFkZChcImZhLWNpcmNsZVwiKTtcbiAgZG93bkFycm93LmNsYXNzTGlzdC5hZGQoXCJmYXNcIik7XG4gIGRvd25BcnJvdy5jbGFzc0xpc3QuYWRkKFwiZmEtYXJyb3ctZG93blwiKTtcbiAgY3Jvc3NJY29uLmNsYXNzTGlzdC5hZGQoXCJmYXNcIik7XG4gIGNyb3NzSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtdGltZXNcIik7XG5cbiAgaDQudGV4dENvbnRlbnQgPSBmb3JtVGl0bGU7XG4gIHAudGV4dENvbnRlbnQgPSBmb3JtTm90ZTtcblxuICBzZWN0aW9uLmFwcGVuZChjaXJjbGVJY29uLCBoNCwgcCwgZG93bkFycm93LCBjcm9zc0ljb24pO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZChzZWN0aW9uKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlUYXNrID0gKCkgPT4ge1xuICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1idG5cIik7XG4gIGNvbnN0IGZvcm1XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXdyYXBwZXJcIik7XG5cbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgZm9ybU5vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tbm90ZVwiKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGl0bGVcIik7XG4gICAgY29uc3QgdGFza05vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbm90ZVwiKTtcbiAgICBmb3JtV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXG4gICAgY29uc3QgbmV3VGFzayA9IHRvRG9PYmooZm9ybVRpdGxlLCBmb3JtTm90ZSk7XG5cbiAgICBkaXNwbGF5VG9Eb3MucHVzaChuZXdUYXNrKTtcbiAgICBkcmF3VGFzaygpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGRyYXdUb0RvRm9ybSwgc2V0Rm9ybUFjdGl2ZSwgZGlzcGxheVRhc2ssIGRyYXdUYXNrIH07XG4iLCJjb25zdCBkaXNwbGF5VG9Eb3MgPSBbXTtcblxuZnVuY3Rpb24gdG9Eb09iaih0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgeyB0b0RvT2JqLCBkaXNwbGF5VG9Eb3MgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZGlzcGxheVRhc2ssIGRyYXdUb0RvRm9ybSwgc2V0Rm9ybUFjdGl2ZSB9IGZyb20gXCIuL2RyYXdfdG9kb1wiO1xuaW1wb3J0IHsgdG9Eb09iaiB9IGZyb20gXCIuL3RvZG9cIjtcblxuZHJhd1RvRG9Gb3JtKCk7XG50b0RvT2JqKCk7XG5kaXNwbGF5VGFzaygpO1xuc2V0Rm9ybUFjdGl2ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9