export default class Select {
	constructor({ id, classes, options, required }) {
	  this.id = id;
	  this.classes = classes;
	  this.options = options;
	  this.required = required;
	}
	render() {
	  const selectList = document.createElement("select");
	  this.options.forEach((optionId) => {
		const opt = document.createElement("option");
		opt.textContent = optionId;
		opt.setAttribute("value", optionId);
		selectList.appendChild(opt);
	  });
	  
	  selectList.classList.add(...this.classes);
	  selectList.required = this.required;
	  this.selectList = selectList;
	  return selectList;
	}
  }