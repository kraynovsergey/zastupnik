(function() {
	'use strict';

	/* Lazy Load */
	const lazyLoadInstance = new LazyLoad();

	/* Fancybox */
	Fancybox.bind("[data-fancybox]", {});

	/* History Swiper */
	const swiper_history = document.querySelector('[data-swiper-history]');
	if ( swiper_history ) {
		new Swiper(swiper_history, {
			slidesPerView: 5,
			spaceBetween: '4%',
			centeredSlides: true,
			loop: true,
			loopedSlides: 2,
			speed: 1000,
			navigation: {
				nextEl: swiper_history.querySelector('[data-swiper-next]'),
				prevEl: swiper_history.querySelector('[data-swiper-prev]')
			},
			pagination: {
				el: swiper_history.querySelector('[data-swiper-progress]'),
				type: 'progressbar',
			},
			breakpoints: {
				0: {
					slidesPerView: 2.3,
					spaceBetween: '20',
					centeredSlides: false
				},
				575: {
					slidesPerView: 3.3,
					spaceBetween: '20',
					centeredSlides: false
				},
				767: {
					slidesPerView: 5,
					spaceBetween: '4%',
					centeredSlides: true,
				}
			},
			on: {
				init: function () {
					let swiper_title_target = swiper_history.querySelector('[data-swiper-title-target]'),
						swiper_title = swiper_history.querySelector('.swiper-slide-active [data-swiper-title]').innerHTML;
					if ( swiper_title_target ) {
						swiper_title_target.innerHTML = swiper_title;
					}
				},
				realIndexChange: function (swiper) {
					let swiper_title_target = swiper_history.querySelector('[data-swiper-title-target]'),
						swiper_title = swiper_history.querySelector('[data-swiper-slide-index="'+swiper.realIndex+'"] [data-swiper-title]').innerHTML;
					if ( swiper_title_target ) {
						swiper_title_target.innerHTML = swiper_title;
					}
				},
			},
		});
	}

	/* Mission Swiper */
	const swiper_mission = document.querySelector('[data-swiper-mission]');
	if ( swiper_mission ) {
		new Swiper(swiper_mission, {
			slidesPerView: 4,
			spaceBetween: '5%',
			speed: 1000,
			navigation: {
				nextEl: document.querySelector('[data-swiper-mission-next]'),
				prevEl: document.querySelector('[data-swiper-mission-prev]')
			},
			pagination: {
				el: swiper_mission.querySelector('[data-swiper-progress]'),
				type: 'progressbar'
			},
			breakpoints: {
				0: {
					slidesPerView: 1.2,
					spaceBetween: 50
				},
				575: {
					slidesPerView: 2.3,
					spaceBetween: 50
				},
				767: {
					slidesPerView: 3,
					spaceBetween: '3%'
				},
				1199: {
					slidesPerView: 4,
					spaceBetween: '5%'
				}
			}
		});
	}

	/* Work Swiper */
	const swiper_work = document.querySelector('[data-swiper-work]');
	if ( swiper_work ) {
		new Swiper(swiper_work, {
			slidesPerView: 4,
			spaceBetween: 12,
			speed: 1000,
			pagination: {
				el: swiper_work.querySelector('[data-swiper-progress]'),
				type: 'progressbar'
			},
			breakpoints: {
				0: {
					slidesPerView: 1.1,
					spaceBetween: 20
				},
				575: {
					slidesPerView: 2.3,
					spaceBetween: 20
				},
				767: {
					slidesPerView: 4,
					spaceBetween: 12
				}
			}
		});
	}

	/* Press Swiper */
	const swiper_press = document.querySelector('[data-swiper-press]');
	if ( swiper_press ) {
		new Swiper(swiper_press, {
			slidesPerView: 3,
			spaceBetween: 40,
			speed: 1000,
			pagination: {
				el: swiper_press.querySelector('[data-swiper-progress]'),
				type: 'progressbar'
			},
			breakpoints: {
				0: {
					slidesPerView: 1.1,
					spaceBetween: 20
				},
				575: {
					slidesPerView: 2.3,
					spaceBetween: 20
				},
				870: {
					slidesPerView: 3,
					spaceBetween: 20
				},
				1280: {
					slidesPerView: 3,
					spaceBetween: 40
				}
			}
		});
	}

	/* Use Swiper */
	const swiper_use = document.querySelector('[data-swiper-use]');
	if ( swiper_use ) {
		new Swiper(swiper_use, {
			slidesPerView: 3,
			spaceBetween: '4%',
			speed: 1000,
			pagination: {
				el: swiper_use.querySelector('[data-swiper-progress]'),
				type: 'progressbar'
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: '10%',
				},
				575: {
					slidesPerView: 2,
					spaceBetween: '10%',
				},
				767: {
					slidesPerView: 3,
					spaceBetween: '4%',
				}
			}
		});
	}

	/* Mask Phone */
	window.addEventListener("DOMContentLoaded", () => {
		[].forEach.call( document.querySelectorAll('[data-tel]'), (input) => {
			let keyCode;

			function mask(event) {
				event.keyCode && (keyCode = event.keyCode);
				let pos = this.selectionStart;
				if (pos < 3) event.preventDefault();
				let matrix = "+7 (___) ___-__-__",
					i = 0,
					def = matrix.replace(/\D/g, ""),
					val = this.value.replace(/\D/g, ""),
					new_value = matrix.replace(/[_\d]/g, function(a) {
						return i < val.length ? val.charAt(i++) || def.charAt(i) : a
					});
				i = new_value.indexOf("_");
				if (i !== -1) {
					i < 5 && (i = 3);
					new_value = new_value.slice(0, i)
				}
				let reg = matrix.substr(0, this.value.length).replace(/_+/g,
					function(a) {
						return "\\d{1," + a.length + "}"
					}).replace(/[+()]/g, "\\$&");
				reg = new RegExp("^" + reg + "$");
				if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
				if (event.type === "blur" && this.value.length < 5)  this.value = ""
			}

			input.addEventListener("input", mask, false);
			input.addEventListener("focus", mask, false);
			input.addEventListener("blur", mask, false);
			input.addEventListener("keydown", mask, false);
		});
	});
})();