'use client';

import React from "react";
import { realtimeDb } from "@/lib/firebase/realtimeDb";
import { onValue, push, ref } from "firebase/database";

export function useRealtime() {
  const [items, setItems] = React.useState<any[]>();
  
  function postItem(userId:string, product: any) {
    const productRef = ref(realtimeDb, `posts/`)
    push(productRef, { ...product, ownerId: userId })
    setItems(product)
  }

  function observeChangesOn(reference:string) {
    const itemsRef = ref(realtimeDb, reference);

    onValue(itemsRef, snapshot => {
      const items = getValuesFromSnapshot(snapshot.val())
      setItems(items);
    })
  }

  function getValuesFromSnapshot(snapshotValue: object) {
    return Object.values(snapshotValue)
  }

  return { observeChangesOn , postItem, items}
}


