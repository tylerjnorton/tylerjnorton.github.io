// ── Shared cookbook sync (Firebase) ──────────────────────────────────────
// Until this is filled in, the cookbook still works — edits, photos and
// deletions just save per-browser instead of for everyone.
//
// One-time setup (about 5 minutes):
//   1. Go to https://console.firebase.google.com and "Add project"
//      (any name, Analytics off is fine).
//   2. In the left sidebar: Build → Firestore Database → "Create database"
//      → Production mode → pick a US region → Create.
//   3. On the Firestore "Rules" tab, replace the rules with:
//
//        rules_version = '2';
//        service cloud.firestore {
//          match /databases/{database}/documents {
//            match /overrides/{doc} {
//              allow read, write: if true;
//            }
//          }
//        }
//
//      then click Publish.
//   4. Project settings (gear icon) → General → "Your apps" → click the
//      web icon </> → register the app (no hosting needed) → copy the
//      firebaseConfig object it shows you.
//   5. Paste it below, replacing `null`, like:
//
//        window.CB_FIREBASE_CONFIG = {
//          apiKey: "AIza...",
//          authDomain: "your-project.firebaseapp.com",
//          projectId: "your-project",
//          storageBucket: "your-project.appspot.com",
//          messagingSenderId: "...",
//          appId: "..."
//        };
//
// These config values are safe to publish — they identify the project but
// don't grant any special access. Writes are gated by the family passcode.

window.CB_FIREBASE_CONFIG = {
  apiKey: "AIzaSyAaw4WfcbAOOt8uYLYp16s4Fo8oigpppE0",
  authDomain: "cookbook-76fef.firebaseapp.com",
  projectId: "cookbook-76fef",
  storageBucket: "cookbook-76fef.firebasestorage.app",
  messagingSenderId: "680150159566",
  appId: "1:680150159566:web:bd3adca619ccc992d0c09f"
};
