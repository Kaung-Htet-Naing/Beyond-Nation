"use client";
import { useContext, createContext, useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@lib/firebase-config";

interface AuthContextType {
	user: User | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface Props {
	children: React.ReactNode;
}

export const AuthContextProvider = ({ children }: Props) => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => unsubscribe();
	}, [user]);

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};

export const UserAuth = ():AuthContextType => {
  const authContext = useContext(AuthContext);
	if (!authContext) {
		throw new Error("useAuth must be used within an AuthContextProvider");
	}
	return authContext;
};
