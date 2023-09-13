import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("Updating the database");
  const jateDb = await OpenDb("jate", 1);
  const tx = db.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  const addTx = store.put({ id: 1, text: content });
  const confirm = await addTx;
  console.log("Added to the database", confirm);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("Getting the database");
  const jateDb = await OpenDb("jate", 1);
  const tx = db.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const getTx = store.getAll();

  const result = await getTx;
  console.log("result.value", result);
  return result;
};

initdb();
