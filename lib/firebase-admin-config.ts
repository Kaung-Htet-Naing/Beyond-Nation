import { initializeApp, getApps, cert } from "firebase-admin/app";

const firebaseAdminConfig = {
	credential: process.env.FIREBASE_SECRET_KEY
		? cert(process.env.FIREBASE_SECRET_KEY as string)
		: undefined,
};

export function customInitApp() {
	if (getApps().length <= 0) {
		initializeApp(firebaseAdminConfig);
	}
}
