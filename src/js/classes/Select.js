export default class Select {
	constructor({ id, classes, options }) {
	  this.id = id;
	  this.classes = classes;
	  this.options = options;
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
	  return selectList;
	}
  }