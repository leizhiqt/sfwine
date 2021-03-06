<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ include file="/jsp/incl/static.inc"%>
<fmt:bundle basename="MessageBundle">
<html>
<head>
<title><fmt:message key="Account"/></title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<link id="skinCss" href="jsp/public/ISCSSobjects_style5.css" type="text/css" rel="stylesheet">   
<script type="text/javascript" src="jsp/public/skin.js"></script>
<script type="text/javascript" src="jsp/js/calendar.js"></script>
<script type="text/javascript" src="jsp/js/pop-lookup.js"></script>
<script type="text/javascript" src="jsp/js/util.js"></script>
</head>

<body>
<form method="post">
<div id="gtop">
	<jsp:include page="../incl/action.jsp">
		<jsp:param name="type" value="save"/>
		<jsp:param name="key" value="Edit"/>
		<jsp:param name="action" value="WineTaster.do"/>
		<jsp:param name="method" value="processAdd"/>
	</jsp:include>
	<jsp:include page="../incl/action.jsp">
		<jsp:param name="type" value="cancel"/>
		<jsp:param name="key" value="Cancel"/>
		<jsp:param name="action" value="WineTaster.do"/>
		<jsp:param name="method" value="list"/>
	</jsp:include>
</div>

<div id="container">
<%@ include file="../incl/b_message.jsp" %>

<div>
<table  class="twrap">

<tr>
<td>
<table class="modify">
<caption><fmt:message key="Add"/> <fmt:message key="WineTaster"/></caption>

<tbody>
<tr>
<td class="tl"><fmt:message key="Category"/></td>
<td>
<select name="wineTaster.tasterCategory">
	<c:forEach var="items" items="${categorys}" varStatus="s">
		<option value="${items}"

		<c:if test="${items==wineTaster.tasterCategory}">
			selected="selected"
		</c:if>
			>
		 <fmt:message key="${items}"/>
		</option>
	--</c:forEach>
</select>
<font class="fm">*</font>
</td>
</tr>

<tr>
<td class="tl"><fmt:message key="TasterName"/></td>
<td><input type="text" name="wineTaster.tasterName" size="6"/><font class="fm">*</font></td>
</tr>

<tr>
<td class="tl"><fmt:message key="TasterLicense"/></td>
<td><input type="text" name="wineTaster.tasterLicense" size="30"/><font class="fm">*</font></td>
</tr>
</tbody>

</table>
</td>
</tr>

</table>
</div>

<jsp:include page="../incl/g_footer.jsp" />
</div>

</form>
</body>
</html>
</fmt:bundle>