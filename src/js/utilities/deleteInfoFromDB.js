// import getInfoFromDB from "./getInfoFromDB.js";

export default function deleteInfoFromDB() {
	let token = localStorage.getItem("token");
	return fetch('https://ajax.test-danit.com/api/cards/7917', {
		method: "DELETE",
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json;charset=utf-8'
		},
	}).then((response) => {
		response.text();
		console.log("Deleted!!! Promise passed");
	})
	.catch((err) => {
		console.log("message of Delete request: ", err.message);
	});
}
// deleteInfoFromDB()
// 	.then((data) => {
// 		console.log("Ответ об удалении: ", data);
// 		getInfoFromDB().then((data) => {
// 			console.log("data ", data);
// 		});
// 	})
// 	.catch((err) => {
// 		console.log(err.message);
// 	});