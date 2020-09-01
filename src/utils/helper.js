export const contProduct = (products = []) => {
	const arrContProduct = products.map(el => {
		const contObject = {};
		let cont = 0;

		for (let j = 0; j < products.length; j++) {
			if (el.id === products[j].id) {
				cont++;
				contObject.id = el.id;
				contObject.cont = cont;
			}
		}

		return contObject;
	});

	const removeRepeatsContProduct = arrContProduct.reduce((acum, el) => (acum[el.id]=el,acum),{});

	return removeRepeatsContProduct;
}

export const addOrRemoveproducts = (products = []) => {
	const removeRepeats = products.reduce((acum, el) => (acum[el.id] = el, acum), {});

	return removeRepeats;
}