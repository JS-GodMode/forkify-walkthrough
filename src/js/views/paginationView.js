import icons from 'url:../../img/icons.svg'; //parcel 2
import View from './View';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.recipes.length / this._data.recipesPerPage
    );

    //Page 1, and there are other Pages
    if (curPage === 1 && numPages > 1) {
      return 'page 1 and other pages';
    }

    //Last Page
    if (curPage === numPages && numPages > 1) {
      return 'last page';
    }

    //Other Page
    if (curPage < numPages) {
      return 'other pages';
    }

    //Page 1, and there are no other pages
    return '';
  }
}

export default new PaginationView();
