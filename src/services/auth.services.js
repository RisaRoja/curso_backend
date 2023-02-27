import * as UserServices from "./user.services.js";
import bcrypt from "bcrypt";

export async function login(email, password) {
	try {
		const user = await UserServices.getUser(email);
		if (!user) {
			return false;
		} else {
			const isValid = bcrypt.compareSync(password, user.password);
			if (isValid) {
				return true;
			} else {
				return false;
			}
		}
	} catch (error) {
		throw new Error(error.message);
	}
}