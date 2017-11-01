/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var links = [];\n  var index = 0;\n  var photo_id;\n  var thumbnail_url;\n  var photo_url;\n\n  $.ajax({\n    url: \"https://jsonplaceholder.typicode.com/photos\",\n    method: \"GET\"\n  }).done(function (data) {\n    links = data;\n    console.log(links);\n    renderLinks(index);\n  });\n\n  $('body').on('click', '.link', function () {\n    photo_id = $(this).attr('href').slice(1);\n    thumbnail_url = links[photo_id].thumbnailUrl;\n    $('#thumbnail').html('<img src=\"' + thumbnail_url + '\">');\n  });\n\n  $('body').on('mouseenter', '#thumbnail', function () {\n    photo_url = links[photo_id].url;\n    $('#thumbnail').html('<img src=\"' + photo_url + '\">');\n    $('#thumbnail').css('position', 'relative');\n    $('#thumbnail').find('img').css({\n      'position': 'absolute',\n      'width': 'auto',\n      'height': 'auto',\n      'border-radius': '0',\n      'top': '0',\n      'left': '15px'\n    });\n  });\n\n  $('body').on('mouseleave', '#thumbnail', function () {\n    photo_url = links[photo_id].thumbnailUrl;\n    $('#thumbnail').html('<img src=\"' + photo_url + '\">');\n    $('#thumbnail').css('', '');\n    $('#thumbnail').find('img').css('', '');\n  });\n\n  function renderLinks(index) {\n    for (var i = 0; i < 12; i++, index++) {\n      document.getElementById('display').innerHTML += '<div class=\"links\">' + links[index].id + '<a class=\"link\" href=\"#' + links[index].id + '\">' + links[index].title + '</a> </div> </br>';\n    }\n  }\n\n  $('#nextpage').on('click', function () {\n    document.getElementById('display').innerHTML = \"\";\n    index += 12;\n    if (index >= links.length) {\n      index = 0;\n    }\n    renderLinks(index);\n  });\n  $('#prevpage').on('click', function () {\n    document.getElementById('display').innerHTML = \"\";\n    index -= 12;\n    if (index < 0) index = links.length - 12;\n    renderLinks(index);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsaW5rcyIsImluZGV4IiwicGhvdG9faWQiLCJ0aHVtYm5haWxfdXJsIiwicGhvdG9fdXJsIiwiJCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkb25lIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJMaW5rcyIsIm9uIiwiYXR0ciIsInNsaWNlIiwidGh1bWJuYWlsVXJsIiwiaHRtbCIsImNzcyIsImZpbmQiLCJpIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJpZCIsInRpdGxlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBVztBQUN2RCxNQUFJQyxRQUFRLEVBQVo7QUFDQSxNQUFJQyxRQUFNLENBQVY7QUFDQSxNQUFJQyxRQUFKO0FBQ0EsTUFBSUMsYUFBSjtBQUNFLE1BQUlDLFNBQUo7O0FBR0ZDLElBQUVDLElBQUYsQ0FBTztBQUNMQyxTQUFLLDZDQURBO0FBRUxDLFlBQVE7QUFGSCxHQUFQLEVBR0dDLElBSEgsQ0FHUSxVQUFTQyxJQUFULEVBQWU7QUFDckJWLFlBQVFVLElBQVI7QUFDQUMsWUFBUUMsR0FBUixDQUFZWixLQUFaO0FBQ0FhLGdCQUFZWixLQUFaO0FBQ0EsR0FQRjs7QUFTQUksSUFBRSxNQUFGLEVBQVVTLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLE9BQXRCLEVBQStCLFlBQVU7QUFDdkNaLGVBQVdHLEVBQUUsSUFBRixFQUFRVSxJQUFSLENBQWEsTUFBYixFQUFxQkMsS0FBckIsQ0FBMkIsQ0FBM0IsQ0FBWDtBQUNBYixvQkFBZ0JILE1BQU1FLFFBQU4sRUFBZ0JlLFlBQWhDO0FBQ0FaLE1BQUUsWUFBRixFQUFnQmEsSUFBaEIsQ0FBcUIsZUFBZWYsYUFBZixHQUErQixJQUFwRDtBQUNELEdBSkQ7O0FBTUVFLElBQUUsTUFBRixFQUFVUyxFQUFWLENBQWEsWUFBYixFQUEyQixZQUEzQixFQUF5QyxZQUFVO0FBQy9DVixnQkFBWUosTUFBTUUsUUFBTixFQUFnQkssR0FBNUI7QUFDQUYsTUFBRSxZQUFGLEVBQWdCYSxJQUFoQixDQUFxQixlQUFlZCxTQUFmLEdBQTJCLElBQWhEO0FBQ0FDLE1BQUUsWUFBRixFQUFnQmMsR0FBaEIsQ0FBb0IsVUFBcEIsRUFBZ0MsVUFBaEM7QUFDQWQsTUFBRSxZQUFGLEVBQWdCZSxJQUFoQixDQUFxQixLQUFyQixFQUE0QkQsR0FBNUIsQ0FBZ0M7QUFDNUIsa0JBQWEsVUFEZTtBQUU1QixlQUFVLE1BRmtCO0FBRzVCLGdCQUFXLE1BSGlCO0FBSTVCLHVCQUFrQixHQUpVO0FBSzVCLGFBQVEsR0FMb0I7QUFNNUIsY0FBUztBQU5tQixLQUFoQztBQVFILEdBWkQ7O0FBY0FkLElBQUUsTUFBRixFQUFVUyxFQUFWLENBQWEsWUFBYixFQUEyQixZQUEzQixFQUF5QyxZQUFVO0FBQy9DVixnQkFBWUosTUFBTUUsUUFBTixFQUFnQmUsWUFBNUI7QUFDQVosTUFBRSxZQUFGLEVBQWdCYSxJQUFoQixDQUFxQixlQUFlZCxTQUFmLEdBQTJCLElBQWhEO0FBQ0FDLE1BQUUsWUFBRixFQUFnQmMsR0FBaEIsQ0FBb0IsRUFBcEIsRUFBdUIsRUFBdkI7QUFDQWQsTUFBRSxZQUFGLEVBQWdCZSxJQUFoQixDQUFxQixLQUFyQixFQUE0QkQsR0FBNUIsQ0FBZ0MsRUFBaEMsRUFBbUMsRUFBbkM7QUFDSCxHQUxEOztBQU9GLFdBQVNOLFdBQVQsQ0FBcUJaLEtBQXJCLEVBQTJCO0FBQ3pCLFNBQUksSUFBSW9CLElBQUUsQ0FBVixFQUFhQSxJQUFFLEVBQWYsRUFBbUJBLEtBQUtwQixPQUF4QixFQUFnQztBQUM5QkgsZUFBU3dCLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNDLFNBQW5DLElBQWdELHdCQUF3QnZCLE1BQU1DLEtBQU4sRUFBYXVCLEVBQXJDLEdBQTBDLHlCQUExQyxHQUFzRXhCLE1BQU1DLEtBQU4sRUFBYXVCLEVBQW5GLEdBQXdGLElBQXhGLEdBQStGeEIsTUFBTUMsS0FBTixFQUFhd0IsS0FBNUcsR0FBb0gsbUJBQXBLO0FBQ0Q7QUFDRjs7QUFFRHBCLElBQUUsV0FBRixFQUFlUyxFQUFmLENBQWtCLE9BQWxCLEVBQTBCLFlBQVU7QUFDbENoQixhQUFTd0IsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0MsU0FBbkMsR0FBK0MsRUFBL0M7QUFDQXRCLGFBQVEsRUFBUjtBQUNBLFFBQUdBLFNBQVNELE1BQU0wQixNQUFsQixFQUEwQjtBQUN4QnpCLGNBQVEsQ0FBUjtBQUNEO0FBQ0RZLGdCQUFZWixLQUFaO0FBQ0QsR0FQRDtBQVFBSSxJQUFFLFdBQUYsRUFBZVMsRUFBZixDQUFrQixPQUFsQixFQUEwQixZQUFVO0FBQ2xDaEIsYUFBU3dCLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNDLFNBQW5DLEdBQStDLEVBQS9DO0FBQ0F0QixhQUFPLEVBQVA7QUFDQSxRQUFHQSxRQUFNLENBQVQsRUFBWUEsUUFBTUQsTUFBTTBCLE1BQU4sR0FBYSxFQUFuQjtBQUNaYixnQkFBWVosS0FBWjtBQUNELEdBTEQ7QUFtQkQsQ0E3RUQiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICB2YXIgbGlua3MgPSBbXTtcclxuICB2YXIgaW5kZXg9MDtcclxuICB2YXIgcGhvdG9faWQ7XHJcbiAgdmFyIHRodW1ibmFpbF91cmw7XHJcbiAgICB2YXIgcGhvdG9fdXJsO1xyXG5cclxuXHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcGhvdG9zXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCJcclxuICB9KS5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIGxpbmtzID0gZGF0YTtcclxuICAgIGNvbnNvbGUubG9nKGxpbmtzKTtcclxuICAgIHJlbmRlckxpbmtzKGluZGV4KTtcclxuICAgfSk7XHJcblxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmxpbmsnLCBmdW5jdGlvbigpe1xyXG4gICAgcGhvdG9faWQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKS5zbGljZSgxKTtcclxuICAgIHRodW1ibmFpbF91cmwgPSBsaW5rc1twaG90b19pZF0udGh1bWJuYWlsVXJsO1xyXG4gICAgJCgnI3RodW1ibmFpbCcpLmh0bWwoJzxpbWcgc3JjPVwiJyArIHRodW1ibmFpbF91cmwgKyAnXCI+JyApO1xyXG4gIH0pO1xyXG5cclxuICAgICQoJ2JvZHknKS5vbignbW91c2VlbnRlcicsICcjdGh1bWJuYWlsJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBwaG90b191cmwgPSBsaW5rc1twaG90b19pZF0udXJsO1xyXG4gICAgICAgICQoJyN0aHVtYm5haWwnKS5odG1sKCc8aW1nIHNyYz1cIicgKyBwaG90b191cmwgKyAnXCI+JyApO1xyXG4gICAgICAgICQoJyN0aHVtYm5haWwnKS5jc3MoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XHJcbiAgICAgICAgJCgnI3RodW1ibmFpbCcpLmZpbmQoJ2ltZycpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbicgOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAnd2lkdGgnIDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JyA6ICdhdXRvJyxcclxuICAgICAgICAgICAgJ2JvcmRlci1yYWRpdXMnIDogJzAnLFxyXG4gICAgICAgICAgICAndG9wJyA6ICcwJyxcclxuICAgICAgICAgICAgJ2xlZnQnIDogJzE1cHgnXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdtb3VzZWxlYXZlJywgJyN0aHVtYm5haWwnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHBob3RvX3VybCA9IGxpbmtzW3Bob3RvX2lkXS50aHVtYm5haWxVcmw7XHJcbiAgICAgICAgJCgnI3RodW1ibmFpbCcpLmh0bWwoJzxpbWcgc3JjPVwiJyArIHBob3RvX3VybCArICdcIj4nICk7XHJcbiAgICAgICAgJCgnI3RodW1ibmFpbCcpLmNzcygnJywnJyk7XHJcbiAgICAgICAgJCgnI3RodW1ibmFpbCcpLmZpbmQoJ2ltZycpLmNzcygnJywnJyk7XHJcbiAgICB9KVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXJMaW5rcyhpbmRleCl7XHJcbiAgICBmb3IodmFyIGk9MDsgaTwxMjsgaSsrLCBpbmRleCsrKXtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXknKS5pbm5lckhUTUwgKz0gJzxkaXYgY2xhc3M9XCJsaW5rc1wiPicgKyBsaW5rc1tpbmRleF0uaWQgKyAnPGEgY2xhc3M9XCJsaW5rXCIgaHJlZj1cIiMnICsgbGlua3NbaW5kZXhdLmlkICsgJ1wiPicgKyBsaW5rc1tpbmRleF0udGl0bGUgKyAnPC9hPiA8L2Rpdj4gPC9icj4nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJCgnI25leHRwYWdlJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXknKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgaW5kZXgrPSAxMjtcclxuICAgIGlmKGluZGV4ID49IGxpbmtzLmxlbmd0aCkge1xyXG4gICAgICBpbmRleCA9IDA7XHJcbiAgICB9XHJcbiAgICByZW5kZXJMaW5rcyhpbmRleCk7XHJcbiAgfSlcclxuICAkKCcjcHJldnBhZ2UnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBpbmRleC09MTI7XHJcbiAgICBpZihpbmRleDwwKSBpbmRleD1saW5rcy5sZW5ndGgtMTI7XHJcbiAgICByZW5kZXJMaW5rcyhpbmRleCk7XHJcbiAgfSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);