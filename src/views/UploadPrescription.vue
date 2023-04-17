<template>
  <section>
    <div>
      <form @submit.prevent="uploadImage">
        <input
          class="form-control"
          lang="en"
          type="file"
          placeholder="sqs"
          accept=".jpg,.png"
          @change="previewImage"
        />
        <button type="submit" class="btn btn-success">Upload Prescription</button>
      </form>
    </div>
  </section>
</template>

<script>
import "../Firebase";
import {
  addDoc,
  collection,
  query,
  getFirestore,
  // onSnapshot,
  // getDocs,
  // updateDoc,
  // doc,
  // deleteDoc,
} from "firebase/firestore";
import {
  getStorage,
  // where,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
// Create a root reference
const storage = getStorage();
const db = getFirestore();
const q = query(collection(db, "prescriptions"));
export default {
  name: "UploadPrescription",
  data() {
    return {
      prescription: {
        image: "",
        uid: localStorage.getItem("uidUser"),
      },
    };
  },
  methods: {
    previewImage(event) {
            this.imageData = event.target.files[0];
    },
    uploadImage() {
      this.ProgressShow = true;
      this.uploadValue = 0;
      this.picture = null;
      this.imageName = this.imageData.name;
      const storageRef = ref(storage, "prescriptions/" + this.imageName);
      const uploadTask = uploadBytesResumable(storageRef, this.imageData);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },

        () => {
          this.uploadValue = 100;
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            this.prescription.image = downloadURL;

            //adddoc {USED FOR DATABSE STORAGE}
            addDoc(
              q, this.prescription
            ).then(()=> {
              //todo
            })
            
          });
        }
      );
    },
  },
}
</script>

<style></style>
