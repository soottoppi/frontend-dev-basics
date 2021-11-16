<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="${pageContext.request.contextPath  }/jquery/jquery-3.6.0.js"></script>
<script>
// DOM Load Event
// 1. load : 모두 다(DOM, CSSOM, Image) 로딩
// 2. DOMContentLoaded : DOM만 로딩(CSSOM, Image X)
window.addEventListener("DOMContentLoaded", function(){
	/* console.log("!!!!"); */
	document
		.getElementsByTagName("button")[0]
		.addEventListener('click', function(){
			console.log("click");
			var xhr = null;
			if(window.ActiveXObject) { // <= IE8 
				xhr = new ActiveXObject('Microsoft.xmlHTTP')
			} else if(window.XMLHttpRequest) {	// other Standard Browser 
				xhr = new XMLHttpRequest();
			} else {
				console.log("Ajax 기능을 사용할 수 없습니다.");
				return;
			}
			/* console.log(xhr); */
			
			xhr.addEventListener('readystatechange', function(){
				if(this.readyState == XMLHttpRequest.UNSENT){	// readyState : 0
					// request 초기화 되기 전
					console.log("State:UNSET");
				} else if (this.readyState == XMLHttpRequest.OPENED){	// readyState : 1
					// 서버와 연결이 성공
					console.log("State:OPENED");					
				} else if (this.readyState == XMLHttpRequest.HEADERS_RECEIVED){ // readyState : 2
					// 서버가 request를 받음
					console.log("State:HEADER_RECEIVED");
				} else if (this.readyState == XMLHttpRequest.LOADING){ // readyState : 3
					// response 처리중
					console.log("State:LOADING");
				} else if (this.readyState == XMLHttpRequest.DONE){ // readyState : 4
					// response 처리가 끝남
					console.log("State:DONE");
				
					// 잘못된 url
					if(this.status != 200){
						console.error(this.state);
						return;
					}
					
					// console.log(this.responseText, typeof(this.reponseText));	// 결과값은 string type
					var response = JSON.parse(this.responseText)
					// console.log(response, typeof(response));						// 결과값은 string type
					
					var html = "";
					html += ("<h2>" + response.data.no + "</h2>");
					html += ("<h3>" + response.data.name + "</h3>");
					html += ("<h4>" + response.data.message + "</h4>");
					
					document
						.getElementById("data")
						.innerHTML = html;
				}
			});
			
			xhr.open('get', '${pageContext.request.contextPath}/api/json', true);	// 세 번째 arg : 동기냐 비동기냐
			xhr.send();
		});
});
</script>
</head>
<body>
	<h1>AJAX Test - JSON Format Format</h1>
	
	<button>데이터 가져오기</button>
	<div id="data"></div>
</body>
</html>