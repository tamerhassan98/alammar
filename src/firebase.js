import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// إعدادات Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAOouPP4-59iRvqeO4tmBgkLR4WijtHXxU",
  authDomain: "alammar-1b729.firebaseapp.com",
  projectId: "alammar-1b729",
  storageBucket: "alammar-1b729.firebasestorage.app",
  messagingSenderId: "241024092139",
  appId: "1:241024092139:web:8ccfbac193cd9b48b3bbae",
  measurementId: "G-WGF3LYTLSY"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);

// الحصول على Firestore و Auth و Storage
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// تصدير المتغيرات
export { db, auth, storage };
