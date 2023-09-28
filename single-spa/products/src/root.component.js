import _ from "lodash";

import styles from "./root.module.css";

export default function Root(props) {
  return (
    <>
      {/* TODO: Include actual Products components */}
      <p className={styles.message}>
        Hello Chicago React meetup, from <code>{props.name}</code>
      </p>
      <caption className={styles.caption}>
        ℹ️ You'll notice - <code>lodash</code> is loaded from the network, not
        this microfrontend's bundle.
      </caption>
    </>
  );
}
