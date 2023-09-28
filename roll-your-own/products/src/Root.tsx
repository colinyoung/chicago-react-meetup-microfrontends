import * as React from "react";
import { API_HOST } from "./constants";
import useFetch from "fetch-suspense";
import { Suspense } from "react";
import Product from "./components/Product";
import { ProductsExperienceProps } from "./types";
import { AuthContext } from "./support/AuthContext";
import styles from "./Root.module.css";

const Products = () => {
  const { jwt } = React.useContext(AuthContext);
  const response = useFetch(`${API_HOST}/bff`, {
    headers: { authorization: jwt },
  });
  try {
    return (response as Product[]).map((product, index) => (
      <Product key={index} product={product} />
    ));
  } catch (e) {
    return <div>error</div>;
  }
};

export const Root = ({ jwt }: ProductsExperienceProps) => {
  return (
    <div className={styles["root"]}>
      <Suspense fallback="Loading...">
        <AuthContext.Provider value={{ jwt }}>
          <Products />
        </AuthContext.Provider>
        {jwt ? (
          <div className={styles.hello}>
            <p>
              <em>Name extracted from JWT claims:</em>
            </p>
            <p>
              <strong>
                Hello again, {JSON.parse(atob(jwt.split(".")[1]) as any).name}
              </strong>
            </p>
          </div>
        ) : (
          <p className={styles.noSession}>No session yet.</p>
        )}
        <p className={styles.caption}>
          👆 If a JWT is stored, I'll render a message above. Clear Application
          Storage in case you missed it.
        </p>
        <p className={styles.caption}>
          🔐 Also - the JWT that's passed in from whatever hydrates this
          microfrontend is sent to the API query. It isn't authenticated, but
          you can see how it would be able to use it in the Network panel.
        </p>
      </Suspense>
    </div>
  );
};
