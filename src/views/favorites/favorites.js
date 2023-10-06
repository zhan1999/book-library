import onChange from 'on-change';
import { AbstractView } from '../../common/view.js';
import { Header } from '../../components/header/header.js';
import { CardList } from '../../components/card-list/card-list.js';

export class FavoritesView extends AbstractView{

	// state = {
	// 	offsetFavorites: 0
	// };

	constructor(appState) {
		super();
		this.appState = appState;
		this.appState = onChange(this.appState, this.appStateHook.bind(this));
		this.setTitle('My Books');
	}

	destroy(){
		onChange.unsubscribe(this.appState);
	}


	appStateHook(path) {
		if (path === 'favorites' || path === 'offsetFavorites') {
			console.log("favorites appState changed, pagination?");
			this.render();
		}
	}


	render() {

		const main = document.createElement('div');

		main.innerHTML = `
			<h1>Favorites </h1>
		`;

		main.append(new CardList(this.appState, { 
			list: this.appState.favorites,
			offsetFavorites: this.appState.offsetFavorites,
			booksPerPage: this.appState.booksPerPage
		}).render());

		this.app.innerHTML = '';
		this.app.append(main);
		this.renderHeader();

		console.log("rendering favorites view...");

	}

	renderHeader() {
		const header = new Header(this.appState).render();
		this.app.prepend(header);
	}


}