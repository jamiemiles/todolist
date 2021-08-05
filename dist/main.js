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
/* harmony export */   "callDrawing": () => (/* binding */ callDrawing),
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

const drawTask = (newTask) => {
  const main = document.getElementById("main");
  const section = document.createElement("section");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");
  const circleIcon = document.createElement("i");
  const crossIcon = document.createElement("i");
  const downArrow = document.createElement("i");
  const taskTitle = document.getElementById("task-title");
  const taskDescription = document.querySelector(".description");

  taskTitle.textContent = newTask.title;
  taskDescription.textContent = newTsak.description;
  section.setAttribute("id", "task");
  section.classList.add("disabled");

  h4.setAttribute("id", "task-title");
  p.classList.add("description");
  circleIcon.classList.add("far");
  circleIcon.classList.add("fa-circle");
  downArrow.classList.add("fas");
  downArrow.classList.add("fa-arrow-down");

  crossIcon.classList.add("fas");
  crossIcon.classList.add("fa-times");

  section.append(circleIcon, h4, p, downArrow, crossIcon);
  main.append(section);
};

const callDrawing = () => {
  const addTaskBtn = document.getElementById("add-task-btn");
  const formWrapper = document.querySelector(".form-wrapper");
  const section = document.getElementById("task");
  addTaskBtn.addEventListener("click", (e) => {
    section.setAttribute("data-attribute", `${_todo__WEBPACK_IMPORTED_MODULE_0__.displayToDos.length}`);
    formWrapper.classList.remove("active");
    task.classList.remove("disabled");
    // e.preventDefault();
    const newTask = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.newToDo)();
    _todo__WEBPACK_IMPORTED_MODULE_0__.displayToDos.push(newTask);
    drawTask(newTask);
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
/* harmony export */   "newToDo": () => (/* binding */ newToDo),
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

const newToDo = () => {
  let title = document.getElementById("form-title").value;
  let description = document.getElementById("form-note").value;

  toDoObj(title, description);
  return { title, description };
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
(0,_draw_todo__WEBPACK_IMPORTED_MODULE_0__.callDrawing)();
(0,_draw_todo__WEBPACK_IMPORTED_MODULE_0__.drawTask)();
(0,_draw_todo__WEBPACK_IMPORTED_MODULE_0__.setFormActive)();
(0,_todo__WEBPACK_IMPORTED_MODULE_1__.toDoObj)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHNEQUFtQixDQUFDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBTztBQUMzQixJQUFJLG9EQUFpQjtBQUNyQjtBQUNBLEdBQUc7QUFDSDs7QUFFOEQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUY5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7O0FBRTBDOzs7Ozs7O1VDbEIxQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ053RDtBQUNqQjtBQUNLO0FBQ1g7O0FBRWpDLHdEQUFZO0FBQ1osdURBQVc7QUFDWCxvREFBUTtBQUNSLHlEQUFhO0FBQ2IsOENBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kcmF3X3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5ld1RvRG8sIGRpc3BsYXlUb0RvcyB9IGZyb20gXCIuL3RvZG9cIjtcblxuY29uc3QgZHJhd1RvRG9Gb3JtID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBjb25zdCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgZm9ybURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBmb3JtRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGZvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXdyYXBwZXJcIik7XG4gIGZvcm1UaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm0tdGl0bGVcIik7XG4gIGZvcm1EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm0tbm90ZVwiKTtcbiAgZm9ybUR1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtLWRhdGVcIik7XG4gIGFkZFRhc2tCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFzay1idG5cIik7XG4gIGRlbGV0ZVRhc2tCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZWxldGUtdGFzay1idG5cIik7XG5cbiAgZm9ybVRpdGxlLnBsYWNlaG9sZGVyID0gXCJUaXRsZVwiO1xuICBmb3JtRGVzY3JpcHRpb24ucGxhY2Vob2xkZXIgPSBcIlF1aWNrIE5vdGU6XCI7XG4gIGZvcm1EdWVEYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gIGRlbGV0ZVRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuXG4gIGZvcm1XcmFwcGVyLmFwcGVuZChcbiAgICBmb3JtVGl0bGUsXG4gICAgZm9ybUR1ZURhdGUsXG4gICAgZm9ybURlc2NyaXB0aW9uLFxuICAgIGFkZFRhc2tCdG4sXG4gICAgZGVsZXRlVGFza0J0blxuICApO1xuICBtYWluLmFwcGVuZChmb3JtV3JhcHBlcik7XG5cbiAgcmV0dXJuIG1haW47XG59O1xuXG5jb25zdCBzZXRGb3JtQWN0aXZlID0gKCkgPT4ge1xuICBjb25zdCBhZGRUYXNrSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGx1cy1pY29uXCIpO1xuICBjb25zdCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS13cmFwcGVyXCIpO1xuXG4gIGFkZFRhc2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZm9ybVdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgfSk7XG59O1xuXG5jb25zdCBkcmF3VGFzayA9IChuZXdUYXNrKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgY2lyY2xlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBjb25zdCBjcm9zc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgY29uc3QgZG93bkFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZVwiKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKTtcblxuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBuZXdUYXNrLnRpdGxlO1xuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBuZXdUc2FrLmRlc2NyaXB0aW9uO1xuICBzZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza1wiKTtcbiAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG5cbiAgaDQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXRpdGxlXCIpO1xuICBwLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgY2lyY2xlSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFyXCIpO1xuICBjaXJjbGVJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1jaXJjbGVcIik7XG4gIGRvd25BcnJvdy5jbGFzc0xpc3QuYWRkKFwiZmFzXCIpO1xuICBkb3duQXJyb3cuY2xhc3NMaXN0LmFkZChcImZhLWFycm93LWRvd25cIik7XG5cbiAgY3Jvc3NJY29uLmNsYXNzTGlzdC5hZGQoXCJmYXNcIik7XG4gIGNyb3NzSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtdGltZXNcIik7XG5cbiAgc2VjdGlvbi5hcHBlbmQoY2lyY2xlSWNvbiwgaDQsIHAsIGRvd25BcnJvdywgY3Jvc3NJY29uKTtcbiAgbWFpbi5hcHBlbmQoc2VjdGlvbik7XG59O1xuXG5jb25zdCBjYWxsRHJhd2luZyA9ICgpID0+IHtcbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stYnRuXCIpO1xuICBjb25zdCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS13cmFwcGVyXCIpO1xuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrXCIpO1xuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHNlY3Rpb24uc2V0QXR0cmlidXRlKFwiZGF0YS1hdHRyaWJ1dGVcIiwgYCR7ZGlzcGxheVRvRG9zLmxlbmd0aH1gKTtcbiAgICBmb3JtV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHRhc2suY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3VG9EbygpO1xuICAgIGRpc3BsYXlUb0Rvcy5wdXNoKG5ld1Rhc2spO1xuICAgIGRyYXdUYXNrKG5ld1Rhc2spO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGRyYXdUb0RvRm9ybSwgc2V0Rm9ybUFjdGl2ZSwgY2FsbERyYXdpbmcsIGRyYXdUYXNrIH07XG4iLCJjb25zdCBkaXNwbGF5VG9Eb3MgPSBbXTtcblxuZnVuY3Rpb24gdG9Eb09iaih0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICB9O1xufVxuXG5jb25zdCBuZXdUb0RvID0gKCkgPT4ge1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGl0bGVcIikudmFsdWU7XG4gIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1ub3RlXCIpLnZhbHVlO1xuXG4gIHRvRG9PYmoodGl0bGUsIGRlc2NyaXB0aW9uKTtcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uIH07XG59O1xuXG5leHBvcnQgeyB0b0RvT2JqLCBuZXdUb0RvLCBkaXNwbGF5VG9Eb3MgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY2FsbERyYXdpbmcsIGRyYXdUb0RvRm9ybSB9IGZyb20gXCIuL2RyYXdfdG9kb1wiO1xuaW1wb3J0IHsgZHJhd1Rhc2sgfSBmcm9tIFwiLi9kcmF3X3RvZG9cIjtcbmltcG9ydCB7IHNldEZvcm1BY3RpdmUgfSBmcm9tIFwiLi9kcmF3X3RvZG9cIjtcbmltcG9ydCB7IHRvRG9PYmogfSBmcm9tIFwiLi90b2RvXCI7XG5cbmRyYXdUb0RvRm9ybSgpO1xuY2FsbERyYXdpbmcoKTtcbmRyYXdUYXNrKCk7XG5zZXRGb3JtQWN0aXZlKCk7XG50b0RvT2JqKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=