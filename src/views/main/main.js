import { AbstractView } from '../../common/view.js';

export class MainView extends AbstractView{
	
	constructor() {
		super();
		this.setTitle('Book search');
	}

	render() {
		const main = document.createElement('div');
		main.innerHTML = 'Test!!!';
		this.app.innerHTML = '';
		this.app.append(main);
	}

}