Format = {

	applyFilter: function (event) {
		if (event.keyCode < 48 || event.keyCode > 57) {
			event.preventDefault();
			return
		}
	},

	applyMask: function(comp, event) {
		if (event.keyCode >= 37 && event.keyCode <= 40)
			return;

		var numbers = comp.value.replace(/[^0-9]/g, '');
		comp.value = this.mask(numbers, event.keyCode);

		comp.focus();
	},

	mask: function(numbers, keyCode) {
		if (numbers === '') {
			return '';
		}

		numbers = parseInt(numbers);

		inverseNumber = (numbers + '').split('').reverse().join('');

		var ret = '';

		if (numbers === 0) {
			if (keyCode === 8 || keyCode === 46)
				return '';

			return '0,00'
		} else if (numbers > 0 && inverseNumber.length === 1)
			return '0,0' + numbers;
		else if (numbers > 0 && inverseNumber.length === 2)
			return '0,' + numbers;
		else if (inverseNumber.length === 3 ||
				 inverseNumber.length === 4 ||
				 inverseNumber.length === 5)
			ret = inverseNumber.replace(/([0-9]{2})([0-9]{1,3})/, '$1,$2');
		else if (inverseNumber.length === 6 ||
				 inverseNumber.length === 7 ||
				 inverseNumber.length === 8)
			ret = inverseNumber.replace(/([0-9]{2})([0-9]{3})([0-9]{1,3})/, '$1,$2.$3');
		else if (inverseNumber.length === 9 ||
				 inverseNumber.length === 10 ||
				 inverseNumber.length === 11)
			ret = inverseNumber.replace(/([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{1,3})/, '$1,$2.$3.$4');

		return ret.split('').reverse().join('');
	}
};
