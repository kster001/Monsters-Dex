import { firebaseApp } from "./firebase";
import { getFirestore, doc, getDoc, updateDoc, arrayUnion, QueryDocumentSnapshot} from "firebase/firestore"; 
import { Monster } from '../utils/types.utils';

const db = getFirestore(firebaseApp);

export const getDataFromDB = async ():Promise<void | Monster[]> => {
    const docRef = doc(db, "monster-collection", "aB6WDVaOHZSTiK2Hy9ne");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data().monsters as Monster[];
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }

}

export const insertDataToDB = async (data: Monster) => {
    try {
        const docRef = doc(db, "monster-collection", "aB6WDVaOHZSTiK2Hy9ne");
        // Atomically add a new region to the "regions" array field.
        await updateDoc(docRef, {
            monsters: arrayUnion(data)
        });
      
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
      
}