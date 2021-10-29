import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  createStyles,
  Drawer,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  MenuItem,
  Select,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";

const reactions = {
  positive: "./positive.png",
  neutral: "./neutral.png",
  negative: "/negative.png",
};

const people = [
  {
    name: "Barbora Suchanová",
    icon: require("../../icons/parrot.svg").default,
  },
  {
    name: "Kristýna Krnáčová",
    icon: require("../../icons/sloth.svg").default,
  },
  {
    name: "Andrea Olejníčková",
    icon: require("../../icons/fox.svg").default,
  },
  {
    name: "Barbora Šimčíková",
    icon: require("../../icons/giraffe.svg").default,
  },
  {
    name: "Martina Vlková",
    icon: require("../../icons/penguin.svg").default,
  },
  {
    name: "Leona Kuchynková",
    icon: require("../../icons/zebra.svg").default,
  },
  {
    name: "Sabina Haasová",
    icon: require("../../icons/bear.svg").default,
  },
];

const shiftsInTime: any = {
  "2021-02-01": [
    {
      name: "Ranní HR",
      time: "7:30 - 16:00 (8h)",
      getColor: (opacity: number) => `rgba(132, 217, 82, ${opacity})`,
      date: "2021-02-01",
      user: "Sabina Haasová",
    },
    {
      name: "Ranní recepční",
      time: "8:00 - 15:00 (7h)",
      getColor: (opacity: number) => `rgba(217, 199, 82, ${opacity})`,
      date: "2021-02-01",
      user: "Leona Kuchynková",
    },
    {
      name: "Odpolední HR",
      time: "14:45 - 23:00 (7.75h)",
      getColor: (opacity: number) => `rgba(217, 82, 82, ${opacity})`,
      date: "2021-02-01",
      user: "Martina Vlková",
    },
    {
      name: "Odpolední recepční",
      time: "15:45 - 23:00 (7.75h)",
      getColor: (opacity: number) => `rgba(196, 110, 230, ${opacity})`,
      date: "2021-02-01",
      user: "Barbora Šimčíková",
    },
  ],
  "2021-02-02": [
    {
      name: "Ranní HR",
      time: "7:30 - 16:00 (8h)",
      getColor: (opacity: number) => `rgba(132, 217, 82, ${opacity})`,
      date: "2021-02-02",
      user: "Leona Kuchynková",
    },
    {
      name: "Ranní recepční",
      time: "8:00 - 15:00 (7h)",
      getColor: (opacity: number) => `rgba(217, 199, 82, ${opacity})`,
      date: "2021-02-02",
      user: "Kristýna Krnáčová",
    },
    {
      name: "Odpolední HR",
      time: "14:45 - 23:00 (7.75h)",
      getColor: (opacity: number) => `rgba(217, 82, 82, ${opacity})`,
      date: "2021-02-02",
      user: "Sabina Haasová",
    },
    {
      name: "Odpolední recepční",
      time: "15:45 - 23:00 (7.75h)",
      getColor: (opacity: number) => `rgba(196, 110, 230, ${opacity})`,
      date: "2021-02-02",
      user: "Barbora Šimčíková",
    },
  ],
  "2021-02-03": [
    {
      name: "Ranní HR",
      time: "7:30 - 16:00 (8h)",
      getColor: (opacity: number) => `rgba(132, 217, 82, ${opacity})`,
      date: "2021-02-03",
      user: "Andrea Olejníčková",
    },
    {
      name: "Ranní recepční",
      time: "8:00 - 15:00 (7h)",
      getColor: (opacity: number) => `rgba(217, 199, 82, ${opacity})`,
      date: "2021-02-03",
      user: "Kristýna Krnáčová",
    },
    {
      name: "Odpolední HR",
      time: "14:45 - 23:00 (7.75h)",
      getColor: (opacity: number) => `rgba(217, 82, 82, ${opacity})`,
      date: "2021-02-03",
      user: "Sabina Haasová",
    },
    {
      name: "Odpolední recepční",
      time: "15:45 - 23:00 (7.75h)",
      getColor: (opacity: number) => `rgba(196, 110, 230, ${opacity})`,
      date: "2021-02-03",
      user: "Barbora Šimčíková",
    },
  ],
  "2021-02-04": [
    {
      name: "Ranní HR",
      time: "7:30 - 16:00 (8h)",
      getColor: (opacity: number) => `rgba(132, 217, 82, ${opacity})`,
      date: "2021-02-04",
      user: "Sabina Haasová",
    },
    {
      name: "Ranní recepční",
      time: "8:00 - 15:00 (7h)",
      getColor: (opacity: number) => `rgba(217, 199, 82, ${opacity})`,
      date: "2021-02-04",
      user: "Barbora Šimčíková",
    },
    {
      name: "Odpolední HR",
      time: "14:45 - 23:00 (7.75h)",
      getColor: (opacity: number) => `rgba(217, 82, 82, ${opacity})`,
      date: "2021-02-04",
      user: "Martina Vlková",
    },
    {
      name: "Odpolední recepční",
      time: "15:45 - 23:00 (7.75h)",
      getColor: (opacity: number) => `rgba(196, 110, 230, ${opacity})`,
      date: "2021-02-04",
      user: "Leona Kuchynková",
    },
  ],
  "2021-02-05": [
    {
      name: "Ranní HR",
      time: "7:30 - 16:00 (8h)",
      getColor: (opacity: number) => `rgba(132, 217, 82, ${opacity})`,
      date: "2021-02-05",
      user: "Andrea Olejníčková",
    },
    {
      name: "Ranní recepční",
      time: "8:00 - 15:00 (7h)",
      getColor: (opacity: number) => `rgba(217, 199, 82, ${opacity})`,
      date: "2021-02-05",
      user: "Kristýna Krnáčová",
    },
    {
      name: "Odpolední HR",
      time: "14:45 - 23:00 (7.75h)",
      getColor: (opacity: number) => `rgba(217, 82, 82, ${opacity})`,
      date: "2021-02-05",
      user: "Martina Vlková",
    },
    {
      name: "Odpolední recepční",
      time: "15:45 - 23:00 (7.75h)",
      getColor: (opacity: number) => `rgba(196, 110, 230, ${opacity})`,
      date: "2021-02-05",
      user: "Barbora Suchanová",
    },
    {
      name: "Víkendová",
      time: "9:45 - 21:00 (10.5h)",
      getColor: (opacity: number) => `rgba(75, 189, 145, ${opacity})`,
      date: "2021-02-05",
      user: "Leona Kuchynková",
    },
  ],
  "2021-02-06": [
    {
      name: "Ranní HR",
      time: "7:30 - 16:00 (8h)",
      getColor: (opacity: number) => `rgba(132, 217, 82, ${opacity})`,
      date: "2021-02-06",
      user: "Barbora Suchanová",
    },
    {
      name: "Ranní recepční",
      time: "8:00 - 15:00 (7h)",
      getColor: (opacity: number) => `rgba(217, 199, 82, ${opacity})`,
      date: "2021-02-06",
      user: "Kristýna Krnáčová",
    },
    {
      name: "Odpolední HR",
      time: "14:45 - 23:00 (7.75h)",
      getColor: (opacity: number) => `rgba(217, 82, 82, ${opacity})`,
      date: "2021-02-06",
      user: "Martina Vlková",
    },
    {
      name: "Odpolední recepční",
      time: "15:45 - 23:00 (7.75h)",
      getColor: (opacity: number) => `rgba(196, 110, 230, ${opacity})`,
      date: "2021-02-06",
      user: "Andrea Olejníčková",
    },
    {
      name: "Víkendová",
      time: "9:45 - 21:00 (10.5h)",
      getColor: (opacity: number) => `rgba(75, 189, 145, ${opacity})`,
      date: "2021-02-06",
      user: "Leona Kuchynková",
    },
  ],
  "2021-02-07": [
    {
      name: "Ranní HR",
      time: "7:30 - 16:00 (8h)",
      getColor: (opacity: number) => `rgba(132, 217, 82, ${opacity})`,
      date: "2021-02-07",
      user: "Leona Kuchynková",
    },
    {
      name: "Ranní recepční",
      time: "8:00 - 15:00 (7h)",
      getColor: (opacity: number) => `rgba(217, 199, 82, ${opacity})`,
      date: "2021-02-07",
      user: "Sabina Haasová",
    },
    {
      name: "Odpolední HR",
      time: "14:45 - 23:00 (7.75h)",
      getColor: (opacity: number) => `rgba(217, 82, 82, ${opacity})`,
      date: "2021-02-07",
      user: "Martina Vlková",
    },
    {
      name: "Odpolední recepční",
      time: "15:45 - 23:00 (7.75h)",
      getColor: (opacity: number) => `rgba(196, 110, 230, ${opacity})`,
      date: "2021-02-07",
      user: "Barbora Suchanová",
    },
    {
      name: "Víkendová",
      time: "9:45 - 21:00 (10.5h)",
      getColor: (opacity: number) => `rgba(75, 189, 145, ${opacity})`,
      date: "2021-02-07",
      user: "Andrea Olejníčková",
    },
  ],
};

const weekdays = ["Po", "Út", "St", "Čt", "Pá", "So", "Ne"];
const view: "month" | "week" = "week";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 8,
    },
    calendar: {
      flex: 1,
      display: "grid",
      gap: 8,
      gridTemplateRows: `repeat(${view === "week" ? 1 : 4}, 1fr)`,
      gridTemplateColumns: `repeat(${weekdays.length}, 1fr)`,
    },
    day: {
      padding: 4,
    },
    date: {
      textAlign: "center",
      fontWeight: "bold",
    },
    drawer: {
      width: 320,
    },
    drawerTab: {
      textTransform: "none",
    },
    personListItem: {
      borderRadius: 8,
      margin: "8px 0",
      padding: 4,
      border: "1px solid rgba(120, 120, 120, 0.5)",
      display: "flex",
      background: "#424242",
      cursor: "pointer",
    },
  })
);

const Calendar = () => {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <Box>
          <Drawer open={drawer} onClose={() => setDrawer(false)}>
            <Box className={classes.drawer}>
              <Tabs indicatorColor="primary" variant="fullWidth" value={0}>
                <Tab
                  className={classes.drawerTab}
                  icon={<Icon>person</Icon>}
                  label="Uživatelé"
                />
                <Tab
                  className={classes.drawerTab}
                  icon={<Icon>people</Icon>}
                  label="Týmy"
                />
              </Tabs>
              <List>
                {people.map(({ name, icon }) => (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src={icon} />
                    </ListItemAvatar>
                    <ListItemText primary={name} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
          <IconButton onClick={() => setDrawer(true)}>
            <Icon>menu</Icon>
          </IconButton>
          <Select
            style={{ marginLeft: 8, marginRight: 16 }}
            variant="outlined"
            margin="dense"
            value="2021-02"
          >
            <MenuItem value="2021-01">Leden 2021</MenuItem>
            <MenuItem value="2021-02">Únor 2021</MenuItem>
            <MenuItem value="2021-03">Březen 2021</MenuItem>
          </Select>
        </Box>
        <Button variant="outlined" startIcon={<Icon>done</Icon>}>
          Dokončit rozpis
        </Button>
      </Box>
      <Box display="flex">
        {weekdays.map((weekday) => (
          <Typography style={{ flex: 1, textAlign: "center" }}>
            {weekday}
          </Typography>
        ))}
      </Box>
      <Box className={classes.calendar}>
        {Object.keys(shiftsInTime).map((day) => (
          <Box className={classes.day}>
            <Typography className={classes.date}>{day.substr(9, 1)}</Typography>
            {shiftsInTime[day].map((shift: any) => (
              <Card variant="outlined" style={{ margin: "8px 0" }}>
                <CardHeader
                  action={
                    <IconButton size="small">
                      <Icon>more_horiz</Icon>
                    </IconButton>
                  }
                  title={shift.name}
                  titleTypographyProps={{ style: { fontSize: 13 } }}
                  subheader={shift.time}
                  subheaderTypographyProps={{ style: { fontSize: 13 } }}
                  style={{
                    padding: "8px 8px 4px 8px",
                    background: shift.getColor(0.5),
                  }}
                />
                <List
                  dense
                  disablePadding
                  style={{ padding: 4, background: shift.getColor(0.3) }}
                >
                  {people
                    .filter((x) => x.name === shift.user)
                    .map(({ name, icon }) => (
                      <ListItem
                        className={classes.personListItem}
                        ContainerProps={{ onClick: () => {} }}
                      >
                        <Avatar
                          style={{ width: 32, height: 32, marginRight: 8 }}
                          src={icon}
                        />
                        <ListItemText
                          primary={name}
                          style={{ flex: 1 }}
                          primaryTypographyProps={{ style: { fontSize: 14 } }}
                        />
                        <Avatar
                          style={{ width: 20, height: 20, marginLeft: 8 }}
                          src={
                            Math.random() < 1 / 3
                              ? reactions.positive
                              : Math.random() <= 0.3
                              ? reactions.negative
                              : reactions.neutral
                          }
                        />
                      </ListItem>
                    ))}
                </List>
              </Card>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Calendar;
