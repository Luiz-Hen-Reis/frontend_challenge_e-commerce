import styles from "./page.module.css";
import { FilterArea } from "@/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterArea />
    </main>
  );
}
