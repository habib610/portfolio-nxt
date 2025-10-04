import { db } from "@/config/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export const getAllProjects = async () => {
    try {
        const q = query(
            collection(db, "projects"),
            orderBy("createdAt", "desc")
        );
        const querySnapshot = await getDocs(q);

        return querySnapshot.docs.map((doc) => {
            const data = doc.data();

            return {
                id: doc.id,
                ...data,
                createdAt: data.createdAt?.toMillis
                    ? data.createdAt.toMillis()
                    : data.createdAt ?? null,
                timestamp: data.timestamp?.seconds
                    ? data.timestamp.seconds * 1000
                    : null,
            };
        });
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
};

export const getAllBlogs = async () => {
    try {
        const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        return querySnapshot.docs.map((doc) => {
            const data = doc.data();

            return {
                id: doc.id,
                ...data,
                createdAt: data.createdAt?.toMillis
                    ? data.createdAt.toMillis()
                    : data.createdAt ?? null,
                timestamp: data.timestamp?.seconds
                    ? data.timestamp.seconds * 1000
                    : null,
            };
        });
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
};
