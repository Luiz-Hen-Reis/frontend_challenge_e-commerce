import styles from "./page.module.css";
import { FilterArea, ProductList } from "@/components";

export default async function Home() {
  return (
    <main className={styles.main}>
      <FilterArea />
      <ProductList />
    </main>
  );
}
