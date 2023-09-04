import {app} from ".";
import { getDatabase } from "firebase/database";

export const realtimeDb = getDatabase(app);