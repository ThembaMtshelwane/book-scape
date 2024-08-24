import { ClipLoader } from "react-spinners";

type Props = { loading: boolean };
const override = {
  display: "block",
  margin: "auto",
};
const Spinner = ({ loading }: Props) => {
  return (
    <ClipLoader
      color="var(--accent-colour)"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};
export default Spinner;
