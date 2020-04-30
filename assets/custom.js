/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...
var freeGift = freeGift || {};

/*
View Free Gift 
*/

freeGift.view = {
	div: () => document.querySelector('#free-gift'),
	closeButton: () => document.querySelector('#free-gift-close-button'),
	checkboxes: () => document.querySelectorAll('input[type=checkbox]'),
}

freeGift.view.hidden = function() {
	freeGift.view.div().classList.add('hidden');
}

freeGift.view.render = function() {
	if ( freeGift.controller.show() ) {
		const div = freeGift.view.div();
		const closeButton = freeGift.view.closeButton();
		div.classList.remove('hidden');
		freeGift.view.selectOneGiftOnly();
		closeButton.addEventListener('click', freeGift.view.hidden );
	}
}

// limit to one gift selection
freeGift.view.selectOneGiftOnly = function() {
	let checkboxes = freeGift.view.checkboxes();
	checkboxes.forEach(checkbox => {
		checkbox.addEventListener('change', ()=> {
			if ( checkbox.checked ) {
				checkboxes.forEach(box => {
					if (box !== checkbox) {
						box.checked = false;
					}
				})
			}
		})
	})
	
}



/*
End View Free Gift
*/




/*
Controller Free Gift 
*/
freeGift.controller = {
	init: function() {
		freeGift.view.render();
	},
	hasBeenNotified: false, // document.cookie

};
// // Controller Gift selection 
freeGift.controller.selectGift = {

};


// Controller Show
freeGift.controller.show = function() {
	// return true;
	// TODO should gift be shown, return true or false
	// is their more than $50 in the cart
	return ( freeGift.shopifyData.cart.total_price >= 5000 && !freeGift.controller.hasBeenNotified )
	freeGift.controller.hasBeenNotified = true;
	// has user been notifyed?
	// is user on the cart page - what page am I
	// has gift been selected
}

// freeGiftController.selectGift.prototype.giftItems = function() {
// 	// [] with list of gift items to select from
// }

// freeGiftController.selectGift.prototype.submit = function() {
// 	// has gift been selected
// 	// gift selection ID
// 	// route to continue shopping or cart
// }


// // Controller Gift Notice
// freeGiftController.notice() = {};

// freeGiftController.notice.prototype.show = function() {
// 	// should notice be shown = True?False
// }

// freeGiftController.notice.prototype.value = function() {
// 	// value left be for gift
// }

// // Controller Gift product 
// freeGiftController.product() = {};

// freeGiftController.product.prototype.isGiftProduct = function() {
// 	// return True/False is product gift item
// };

// /*
//  END freeGift Controller 
// */



// /*
// Model FreeGift state
// */
// const freeGiftModel = freeGiftModel || {}

// freeGiftModel.state = function() {
// 	this.cart = freeGiftShopifyData.cart,
// 	this.products = freeGiftShopifyData.products,
// 	// TODO this.whatPageAmI = freeGiftShopifyData.whatPageAmI,
// 	this.giftHasBeenSelected = false,
// 	this.giftSelectionID = false

// }

// freeGiftModel.state.prototype.submit = function() {
// 	// Submit to shopify cart with AJAX API
// 	// Discount = 100%
// }

// /*
// End Model freeGift state
// */



freeGift.controller.init();
