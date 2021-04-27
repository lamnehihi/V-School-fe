import {
	required,
	email,
	minLength,
  sameAs,
  alpha
} from "vuelidate/lib/validators";

const nircNumber = /^[0-9]*$/;

const validNric = (val) => {
	const test = nircNumber.test(val);
	
	if (!test) return false;
	
	if (val.length !== 12) return false;

	return true;
}

const minAge = (val) => {
	const age = val.slice(0, 2);
	if (age < 21) return false;

	return true;
}

const phoneNumber = (val) => {
	// if (val.slice(0, 3) !== '+60') return false;
	// const phoneRegex = /^[0-9]*$/;
	// const phoneWithoutCode = val.replace('+60', '');
	// const test = phoneRegex.test(phoneWithoutCode);
	// if (!test) return false;
	if (val.length > 16 || val.length < 10) return false;
	return true;
}

export const adminVerification = {
	password: {
		required,
		password: minLength(8),
  },
};

export const addNewFlag = {
	deliveryNoteNo: {
		required,
    deliveryNoteNo: minLength(10),
  },
};
