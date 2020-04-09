$(document).ready(function () {
	hover_drop_header_bottom();
	click_search_header_bottom();
	open_mobile_nav_bar();
	open_moblie_search_bar();
	back_to_top();
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

function open_mobile_nav_bar() {
	var open_side_mb = document.querySelector('#wrapper #header .header-mobbile .sider-bar button');
	var menu_side_mb = document.querySelector('#wrapper #header .header-mobbile .sider-bar .list-sider-bar-box');
	var close_side_mb = document.querySelector('#wrapper #header .header-mobbile .sider-bar .list-sider-bar-box .overlay-list-sider-bar .close button');
	open_side_mb.onclick = function () {
		menu_side_mb.classList.add('show-mb-bar');
    }

	close_side_mb.onclick = function () {
		menu_side_mb.classList.remove('show-mb-bar');
    }
}

function open_moblie_search_bar() {
	var open_mb_search = document.querySelector('#wrapper #header .header-mobbile .search-bar button');
	var menu_search_bar = document.querySelector('#wrapper #header .header-mobbile .search-bar .list-sider-bar-box');
	var close_search_mb = document.querySelector('#wrapper #header .header-mobbile .search-bar .list-sider-bar-box .overlay-list-sider-bar .close button');

	open_mb_search.onclick = function () {
		menu_search_bar.classList.add('show-mb-bar');
    }

	close_search_mb.onclick = function () {
		menu_search_bar.classList.remove('show-mb-bar');
    }
}

function back_to_top() {
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');
	//hide or show the "back to top" link
	$(window).scroll(function () {
		($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if ($(this).scrollTop() > offset_opacity) {
			$back_to_top.addClass('cd-fade-out');
		}
	});
	//smooth scroll to top
	$back_to_top.on('click', function (event) {
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0,
		}, scroll_top_duration
		);
	});
}