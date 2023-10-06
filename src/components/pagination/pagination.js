import { DivComponent } from '../../common/div-component';
import './pagination.css';

export class Pagination extends DivComponent {
	constructor(appState, state) {
		super();
		this.appState = appState;
		this.state = state;
	}
	
	prevPage() {
		if (location.hash === '#favorites')
		{
			if (this.appState.offsetFavorites < this.appState.booksPerPage)
				return;
			else
				this.appState.offsetFavorites -= this.appState.booksPerPage;
				return;
		}
		else 
		{
			if (this.state.offset < this.appState.booksPerPage)
				return;
			else
				this.state.offset -= this.appState.booksPerPage;
				return;
		}	
	}

	nextPage() {

		console.log("next page called");

		console.log("location.hash ",location.hash);

		if (location.hash === '#favorites')
		{
			console.log("this.appState.offsetFavorites ", this.appState.offsetFavorites);
			this.appState.offsetFavorites += this.appState.booksPerPage;
			console.log("this.appState.offsetFavorites ", this.appState.offsetFavorites);

		}
		else 
		{
			this.state.offset += this.appState.booksPerPage;
		}	
	}

	render() {
		this.el.classList.add('pagination');
		this.el.innerHTML = `
			<div class="pagination">
				<span class="prev__link" href="#">Previous page</span>
				<span class="next__link" href="#">Next page</span>
			</div>
		`;

		this.el.getElementsByClassName("prev__link")[0].addEventListener('click', this.prevPage.bind(this));
		this.el.getElementsByClassName("next__link")[0].addEventListener('click', this.nextPage.bind(this));

		console.log("pagination rendered");

		return this.el;
	}
}
