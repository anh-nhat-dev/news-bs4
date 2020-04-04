$(document).ready(function () {
	hover_drop_header_bottom();
	click_search_header_bottom();
});


function hover_drop_header_bottom() {
    var hover = document.querySelectorAll('#wrapper #header .header-bottom .header-bottom-box .bottom-left ul li .drop-down .drop-down-box .menu-list .list');
    var content = document.querySelectorAll('#wrapper #header .header-bottom .header-bottom-box .bottom-left ul li .drop-down .drop-down-box .news-list-box .news-list');

    for (var i = 0; i < hover.length; i++) {
        hover[i].onmouseover = function () {
			if (this.classList[1] == "change-color") {


				this.classList.remove("change-color");

				var dropdown = this.getAttribute('data-drop');
				var showdropdown = document.getElementById(dropdown);

				showdropdown.classList.remove('show-news-list');
			}
			else {
				for (var k = 0; k < hover.length; k++) {
					hover[k].classList.remove('change-color');
				}

				this.classList.toggle('change-color');

				var dropdown = this.getAttribute('data-drop');
				var showdropdown = document.getElementById(dropdown);
				for (var i = 0; i < content.length; i++) {
					content[i].classList.remove('show-news-list');
				}

				showdropdown.classList.toggle('show-news-list');
			}
        }
    }

}

function click_search_header_bottom() {
	var btn_search = document.querySelector('#wrapper #header .header-bottom .header-bottom-box .bottom-right button');
	var search_form = document.querySelector('#wrapper #header .header-bottom .header-bottom-box .bottom-right .form-search-drop');
	var overlay = document.querySelector('#wrapper .overlay');
	btn_search.onclick = function () {
		btn_search.classList.toggle('change-color');
		search_form.classList.toggle('show-form-search');

		overlay.classList.add('show-news-list');
	}

	overlay.onclick = function () {
		btn_search.classList.remove('change-color');
		search_form.classList.remove('show-form-search');
		overlay.classList.remove('show-news-list');

    }
}

