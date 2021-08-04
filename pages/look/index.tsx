import { makeStyles, Typography } from "@material-ui/core";
import { NextPage } from "next";
import { CreateHead } from "../../plugins/createHead";
import { Theme } from "../../styles/theme";
import { LookList } from "../../components/Pages/Look/lookList";

const useStyles = makeStyles((theme) => {
  return {
    pagetitle: {
      textAlign: "center",
    },
  };
});

const LookIndex: NextPage = () => {
  const classes = useStyles(Theme);
  return (
    <>
      <CreateHead title="Look" />
      <main>
        <Typography variant="h2" className={classes.pagetitle}>
          Look
        </Typography>
        <section>
          <LookList />
        </section>
      </main>
    </>
  );
};

export default LookIndex;
