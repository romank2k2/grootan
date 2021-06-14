const api_url =
	"https://harish.free.beeceptor.com/kumar";
async function getapi(url) {
	const response = await fetch(url);
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}

getapi(api_url);


function hideloader() {
	document.getElementById('loading').style.display = 'none';
}

function show(data) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>dob</th>
		<th>age</th>
		<th>firstname</th>
		<th>lastname</th>
		</tr>`;
	
	
	for (var i=0; i<data.length; i++) {
		tab += `<tr>
	<td>${data[i].name} </td>
	<td>${data[i].dob}</td>
	<td>${data[i].age}</td>
	<td>${data[i].firstName}</td>	
	<td>${data[i].lastName}</td>	
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}
f