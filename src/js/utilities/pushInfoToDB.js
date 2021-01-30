// import getInfoFromDB from "./getInfoFromDB.js";

export default function pushInfoToDB() {
	let token = localStorage.getItem("token");
	return fetch('https://ajax.test-danit.com/api/cards', {
		method: "POST",
		body: JSON.stringify(content),
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json;charset=utf-8'
		},
	}).then((response) => response.text())
	.catch((err) => {
		console.log("message of Post request: ", err.message);
	});
}
// pushInfoToDB()
// 	.then((data) => {
// 		console.log(data);
// 		getInfoFromDB().then((data) => {
// 			console.log("data ", data);
// 		})
// 		.catch((err) => {
// 			console.log(err.message);
// 		});
// 	})
// 	.catch((err) => {
// 		console.log(err.message);
// 	});

const content = {
	doctor: "Dentist",
	title: "Визит к стоматологу",
	description: "Ургентный визит",
	priority: "High",
	age: 23,
	fullName: "Сергеева Наталья Петровна"
};