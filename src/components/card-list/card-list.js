import { DivComponent } from '../../common/div-component';
import { Card } from '../card/card';
import { Pagination } from '../pagination/pagination';
import './card-list.css';

export class CardList extends DivComponent {
	constructor(appState, parentState) {
		super();
		this.appState = appState;
		this.parentState = parentState;
	}

	render() {
		if (this.parentState.loading) {
			this.el.innerHTML=`<div class="card_list__loader">Loading...</div>`;
			return this.el;
		}

		const cardGrid = document.createElement('div');
		cardGrid.classList.add('card_grid');
		this.el.append(cardGrid);

		// for (const card of this.parentState.list){
		// 	cardGrid.append(new Card(this.appState, card).render());
		// }

		console.log("location.hash = ", location.hash);
		console.log("this.parentstate", this.parentState);
		console.log("this.parentstate.list", this.parentState.list);
		console.log("this.parentstate.list[0]", this.parentState.list[0]);
		console.log("this.appState.favorites.length", this.appState.favorites.length)		
		
		const booksPerPage = this.appState.booksPerPage;
		const favLength = this.appState.favorites.length;
		let offset = this.parentState.offset;
		let numberToShow = this.parentState.list.length < booksPerPage ? this.parentState.list.length : booksPerPage;

		if (location.hash === '#favorites'){
			offset = this.appState.offsetFavorites;
//			numberToShow = favLength < booksPerPage ? favLength : favLength % booksPerPage;
			numberToShow = favLength < booksPerPage ? favLength : booksPerPage;
		}

		console.log("booksPerPage", booksPerPage);
		console.log("offset", offset);
		console.log("number to show", numberToShow);


		for (let c = offset; c < (offset + numberToShow); c++){

				console.log("appending new Card");

			if (this.parentState.list.length !== 0){

				cardGrid.append(new Card(this.appState, this.parentState.list[c]).render());
			}
		}
		cardGrid.append(new Pagination(this.appState, this.parentState).render());

		return this.el;
	}
}
