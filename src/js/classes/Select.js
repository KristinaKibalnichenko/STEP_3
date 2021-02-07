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
		opt.value = optionId;
		opt.textContent = optionId;
		// opt.classList.add(...this.classes);
		selectList.appendChild(opt);
	  });
	  this.selectList = selectList;
	  selectList.classList.add(...this.classes);
	  selectList.required = this.required;
	  return selectList;
	}
  }