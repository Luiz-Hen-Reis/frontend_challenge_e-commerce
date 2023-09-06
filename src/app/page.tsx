import styles from "./page.module.css";
import { FilterArea, ProductList } from "@/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterArea />
      <ProductList />
    </main>
  );
}
