import React, { useEffect } from 'react';
import {
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  TableSortLabel,
  Paper,
  Avatar,
  Tooltip,
  useMediaQuery,
  useTheme,
  IconButton,
  Chip,
  Collapse,
  Box,
  Container,
} from '@material-ui/core';
import axios from '../utils/axios';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { ExpandMore, KeyboardArrowDownRounded, KeyboardArrowUpOutlined } from '@material-ui/icons';
import { useRouter } from 'next/router';
import Button from '../components/Form/Button';
import styles from '../styles/Dashboard.module.scss';
import useAuth from 'src/hooks/useAuth';
import withAuth from 'src/HOC/withAuth';
import Layout from 'src/components/DashboardLayout/Layout';
import Pagination from '@material-ui/lab/Pagination';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    border: 'none !important',
  },
  table: {
    minWidth: 650,
  },
  tableRow: {
    // height: 60
    // padding: 10
  },
  containerRoot: {
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  customTooltip: {
    backgroundColor: 'black',
    padding: 10,
  },
  customArrow: {
    color: 'black',
  },
}));

const Dashboard = () => {
  const [data, setData] = React.useState([]);
  const [jotformId, setjtfId] = React.useState('220860020542139');
  const [showLoadMoreTaskBtn, showLoadMoreTaskBtnn] = React.useState('true');
  const [showLoader, setShowLoader] = React.useState('true');
  const [userName, setuserName] = React.useState('');
  const [order, setOrder] = React.useState(null);
  const [orderBy, setOrderBy] = React.useState(null);
  const [isClickUp, setIsClickUp] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.only('xs'));
  const router = useRouter();
  const { user, refreshToken } = useAuth();
  const status = {
    OPEN: 1,
    'IN PROGRESS': 2,
    COMPLETE: 7,
    'DRAFT DONE': 3,
    'UNDER REVISION': 4,
    APPROVED: 5,
    INVOICED: 6,
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  const getClickupListTasks = async (id) => {
    // const clickId ='186154924';
    const url = `${`${process.env.NEXT_PUBLIC_CLICKUP}clickup/list?id=${id}&showcompleted=`}${true}`;

    await axios
      .get(url)
      .then((response) => {
        const tasks = JSON.parse(JSON.stringify(response.data.tasks));

        let taskData = tasks.map((item) => ({
          status: item.status?.status?.toUpperCase() == 'INVOICED' ? 'COMPLETE' : item.status?.status?.toUpperCase(),
          statusId: status[item.status?.status?.toUpperCase()],
          color: item.status?.color,
          name: item.name?.toLowerCase(),
          assignees: item.assignees,
          date_created: item.date_created,
          due_date: item.due_date,
          reviewLink: item.custom_fields.find(({ id }) => id === 'bd69ab8d-0a84-4973-841d-6009d5d42393'),
          footage1: item.custom_fields.find(({ id }) => id === '31f06655-0525-41d6-ab61-f5ad334c0a57'),
          hoursTracked: item.custom_fields.find(({ id }) => id === '40e5ee3c-75c3-4b2c-bef3-fc812eeb4bd1'),
          transferFee: item.custom_fields.find(({ id }) => id === '8a59f028-4eb8-41dc-b446-a7d037b2cabc'),
          clientInstructions: item.custom_fields.find(({ id }) => id === 'df87844e-0190-4eba-9dd2-e6a9f060b87d')?.value,
        }));

        console.log(taskData);
        setData(taskData);

        setShowLoader(false);
      })
      .catch(() => {
        setShowLoader(false);
      });
  };

  useEffect(() => {
    if (!refreshToken) {
      return;
    }
    if (!user.clickupids) setIsClickUp(false);
    else setIsClickUp(true);
    setuserName(localStorage.getItem(user.firstname));
    getClickupListTasks(user.clickupids);
    setjtfId(user.jotformlink);
  }, [user]);

  function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const classes = useStyles();
  return (
    <Container maxWidth="lg" style={{ paddingBottom: 80 }} className={classes.containerRoot}>
      <div className={styles.dashboardComponent}>
        <div className={styles.dashboardUpper}>
          <h1>
            Welcome back, <span className={styles.textOrangeHeader}>{user.firstname}</span>
          </h1>

          <p>
            Hope you are having a great day! Contact us at <a href="mailto:support@vimerse.com">support@vimerse.com</a>{' '}
            for any help.
          </p>
        </div>

        <div className={styles.dashContent}>
          {isClickUp && (
            <Grid
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              container
              spacing={3}
              className={styles.columnHorizontal}
            >
              <Grid item>
                <h5 className={styles.textOrange}>Start a new project</h5>
              </Grid>
              <Grid item>
                <a
                  className={styles.lnkStart}
                  href={`javascript:void( window.open( 'https://form.jotform.com/${
                    jotformId ? jotformId : '220860020542139'
                  }?whatIs=${user.email}&name410=${
                    user.firstname
                  }', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=900' ) ) `}
                >
                  <Button
                    className={styles.startBtn}
                    // onClick={location.href = `javascript:void( window.open( 'https://form.jotform.com/${jotformId}', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=900' ) )`}
                    size="medium"
                    variant="outlined"
                    color="primary"
                  >
                    Start Now
                  </Button>
                </a>
              </Grid>
            </Grid>
          )}

          {!isClickUp && (
            <div className={styles.columnHorizontalNoclickups}>
              <div>
                <h5 className={`${styles.textOrange} ${styles.txtFreeTrail}`}>Start your free trial</h5>
              </div>
              <div>
                <a
                  className={styles.lnkStart}
                  href={`javascript:void( window.open( 'https://form.jotform.com/${
                    jotformId ? jotformId : '220860020542139'
                  }?whatIs=${user.email}&name410=${
                    user.firstname
                  }', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=900' ) ) `}
                >
                  <Button className={styles.startBtn} size="medium" variant="outlined" color="primary">
                    Start creating
                  </Button>
                </a>
              </div>
            </div>
          )}

          {isClickUp && (
            <div className={styles.columnContent}>
              <center>
                <h5 className={`${styles.textOrange} ${styles.mgb10}`}>Project Status</h5>
              </center>

              {showLoader && (
                <div className={styles.loader}>
                  <h1>Loading...</h1>
                </div>
              )}

              {data?.length > 0 && !isXSmall && (
                <DataTableBig
                  setOrder={setOrder}
                  setOrderBy={setOrderBy}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rows={paginate(stableSort(data, getComparator(order, orderBy)), 10, currentPage)}
                  showLoadMoreTaskBtn={showLoadMoreTaskBtn}
                />
              )}
              {data?.length > 0 && isXSmall && (
                <DataTableSmall rows={paginate(data, 10, currentPage)} showLoadMoreTaskBtn={showLoadMoreTaskBtn} />
              )}
            </div>
          )}
        </div>
        {data?.length ? (
          <Box style={{ width: '100%' }} display={'flex'} justifyContent={'center'}>
            {' '}
            <Pagination
              page={currentPage}
              onChange={(e, p) => setCurrentPage(p)}
              count={data?.length % 10 ? parseInt(data?.length / 10) + 1 : parseInt(data?.length / 10)}
              variant="outlined"
              color="primary"
              style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            />
          </Box>
        ) : null}
      </div>
    </Container>
  );
};

const DataTableBig = (props) => {
  const classes = useStyles();
  let { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableContainer elevation={0} component={Paper} className={styles.tblConatiner}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <TableSortLabel
                style={{ fontSize: 12, fontWeight: 500, lineHeight: 1.8 }}
                active={orderBy === 'statusId'}
                direction={orderBy === 'statusId' ? order : 'asc'}
                onClick={createSortHandler('statusId')}
              >
                STATUS
              </TableSortLabel>
            </TableCell>
            <TableCell align="center" sortDirection={'desc'}>
              <TableSortLabel
                style={{ fontSize: 12, fontWeight: 500, lineHeight: 1.8 }}
                active={orderBy === 'name'}
                direction={orderBy === 'name' ? order : 'asc'}
                onClick={createSortHandler('name')}
              >
                {' '}
                PROJECT NAME{' '}
              </TableSortLabel>
            </TableCell>
            <TableCell align="center">
              <TableSortLabel
                style={{ fontSize: 12, fontWeight: 500, lineHeight: 1.8 }}
                active={orderBy === 'date_created'}
                direction={orderBy === 'date_created' ? order : 'asc'}
                onClick={createSortHandler('date_created')}
              >
                SUBMISSION <br /> DATE{' '}
              </TableSortLabel>
            </TableCell>
            <TableCell align="center" style={{ fontSize: 12, fontWeight: 500, lineHeight: 1.8 }}>
              {' '}
              EDITOR{' '}
            </TableCell>
            <TableCell align="center" style={{ fontSize: 12, fontWeight: 500, lineHeight: 1.8 }}>
              {' '}
              DELIVERY{' '}
            </TableCell>
            <TableCell align="center" style={{ fontSize: 12, fontWeight: 500, lineHeight: 1.8 }}>
              {' '}
              REVIEW{' '}
            </TableCell>
            <TableCell align="center" style={{ fontSize: 12, fontWeight: 500, lineHeight: 1.8 }}>
              {' '}
              <div style={{ diplay: 'flex', alignItems: 'center', flexDirection: 'row', flexGrow: 1 }}>
                <div>FOOTAGE</div>
                <div>
                  <a
                    href="https://vimerse.portal.massive.app/"
                    class="footagetooltip"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#000' }}
                  >
                    <Tooltip
                      classes={{
                        tooltip: classes.customTooltip,
                        arrow: classes.customArrow,
                      }}
                      title="If you need to submit additional footage, please use https://vimerse.portal.massive.app/"
                      placement="right"
                      arrow
                    >
                      <InfoIcon />
                    </Tooltip>
                  </a>
                </div>
              </div>
            </TableCell>
            <TableCell align="center" style={{ fontSize: 12, fontWeight: 500, lineHeight: 1.8 }}>
              {' '}
              HOURS <br /> TRACKED{' '}
            </TableCell>
            <TableCell align="center" style={{ fontSize: 12, fontWeight: 500, lineHeight: 1.8 }}>
              {' '}
              TRANSFER <br /> FEE{' '}
            </TableCell>
            <TableCell align="center" style={{ fontSize: 12, fontWeight: 500, lineHeight: 1.8 }}>
              {' '}
              TOTAL <br /> FEE{' '}
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {props.rows.map((item) => {
            const reviewLink = item.reviewLink;

            const reviewLinkValue = reviewLink.value ? (
              <a href={reviewLink.value} target="_blank" rel="noopener noreferrer">
                <Tooltip
                  classes={{
                    tooltip: classes.customTooltip,
                    arrow: classes.customArrow,
                  }}
                  title={reviewLink.value}
                  placement="right"
                  arrow
                >
                  <img alt="Review Link" src="/images/external-link.png" className={styles.icon} />
                </Tooltip>
              </a>
            ) : (
              '-'
            );

            const footage1 = item.footage1;
            const footage1Value = footage1.value ? (
              <a href={footage1.value} target="_blank" rel="noopener noreferrer">
                <Tooltip
                  classes={{
                    tooltip: classes.customTooltip,
                    arrow: classes.customArrow,
                  }}
                  title={footage1.value}
                  placement="right"
                  arrow
                >
                  <img alt="Footage #1" src="/images/external-link.png" className={styles.icon} />
                </Tooltip>
              </a>
            ) : (
              '-'
            );

            const hoursTracked = item.hoursTracked;
            const hoursTrackedValue = hoursTracked.value ? Number(hoursTracked.value).toFixed(1) : '-';
            const transferFee = item.transferFee;
            const transferFeeValue = transferFee.value ? `$${Number(transferFee.value).toFixed(2)}` : '-';
            const clientInstructions = item.clientInstructions;
            let tracked;
            if (hoursTracked.value) tracked = Number(hoursTracked.value) * 13;
            if (transferFee.value) tracked = (tracked + Number(transferFee.value)).toFixed(2);
            if (tracked) tracked = `$${Number(tracked).toFixed(2)}`;
            if (!tracked) tracked = '-';

            return (
              <TableRow>
                <TableCell align="left">
                  {/* <span
                    //className={styles.itemBadge}
                    style={{
                      background: item.color === '' ? '#eef' : item.color,
                      color: 'white',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.status === '' ? '-' : item.status}
                  </span> */}
                  <Chip
                    size="small"
                    label={item.status === '' ? '-' : item.status}
                    style={{ background: item.color === '' ? '#eef' : item.color, color: 'white', borderRadius: 4 }}
                  />
                </TableCell>

                <TableCell align="left">
                  {' '}
                  <a href={clientInstructions} target="_blank">
                    {item.name === '' ? '-' : item.name}
                  </a>{' '}
                </TableCell>
                <TableCell align="left">
                  {' '}
                  {new Intl.DateTimeFormat('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).format(
                    item.date_created
                  )}{' '}
                </TableCell>
                <TableCell align="center">
                  <div className={styles.assigneeContainer}>
                    <AvatarGroup total={4}>
                      {item.assignees?.length > 0 &&
                        item.assignees.map((assignee) => {
                          if (assignee.profilePicture)
                            return (
                              <Tooltip
                                classes={{
                                  tooltip: classes.customTooltip,
                                  arrow: classes.customArrow,
                                }}
                                title={assignee.username}
                                placement="right"
                                arrow
                              >
                                <Avatar src={assignee.profilePicture} />
                              </Tooltip>
                            );
                          return (
                            <Tooltip
                              classes={{
                                tooltip: classes.customTooltip,
                                arrow: classes.customArrow,
                              }}
                              title={assignee.username}
                              placement="right"
                              arrow
                            >
                              <Avatar>{assignee.initials}</Avatar>
                            </Tooltip>
                          );
                        })}
                    </AvatarGroup>
                  </div>
                </TableCell>

                <TableCell align="center">
                  {(() => {
                    if (item.status === 'draft done' || item.status === 'approved' || item.status === 'complete')
                      return <img alt={item.status} src="/images/marked-calendar.png" className={styles.icon} />;
                    else if (item.due_date === null) return '-';
                    else
                      return (
                        <div style={{ color: '#fe7a39' }}>
                          <center>
                            {' '}
                            {new Intl.DateTimeFormat('en-US', { day: '2-digit', month: 'short' }).format(
                              item.due_date
                            )}{' '}
                          </center>
                        </div>
                      );
                  })()}
                </TableCell>

                <TableCell align="center"> {reviewLinkValue} </TableCell>
                <TableCell align="center"> {footage1Value} </TableCell>
                <TableCell align="center"> {hoursTrackedValue} </TableCell>
                <TableCell align="center"> {transferFeeValue} </TableCell>
                <TableCell align="center"> {tracked} </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const DataTableSmall = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(-1);

  return (
    <TableContainer elevation={0} component={Paper} className={styles.tblConatiner}>
      <Table aria-label="simple table" size="medium">
        <TableBody>
          {props.rows.map((item, index) => {
            const reviewLink = item.reviewLink;

            const reviewLinkValue = reviewLink.value ? (
              <a href={reviewLink.value} target="_blank" rel="noopener noreferrer">
                <Tooltip
                  classes={{
                    tooltip: classes.customTooltip,
                    arrow: classes.customArrow,
                  }}
                  title={reviewLink.value}
                  placement="right"
                  arrow
                >
                  <img alt="Review Link" src="/images/external-link.png" className={styles.icon} />
                </Tooltip>
              </a>
            ) : (
              '-'
            );

            const footage1 = item.footage1;
            const footage1Value = footage1.value ? (
              <a href={footage1.value} target="_blank" rel="noopener noreferrer">
                <Tooltip
                  classes={{
                    tooltip: classes.customTooltip,
                    arrow: classes.customArrow,
                  }}
                  title={footage1.value}
                  placement="right"
                  arrow
                >
                  <img alt="Footage #1" src="/images/external-link.png" className={styles.icon} />
                </Tooltip>
              </a>
            ) : (
              '-'
            );
            const hoursTracked = item.hoursTracked;
            const hoursTrackedValue = hoursTracked.value ? Number(hoursTracked.value).toFixed(1) : '-';
            const transferFee = item.transferFee;
            const transferFeeValue = transferFee.value ? `$${Number(transferFee.value).toFixed(2)}` : '-';
            const clientInstructions = item.clientInstructions;
            let tracked;
            if (hoursTracked.value) tracked = Number(hoursTracked.value) * 13;
            if (transferFee.value) tracked = (tracked + Number(transferFee.value)).toFixed(2);
            if (tracked) tracked = `$${Number(tracked).toFixed(2)}`;
            if (!tracked) tracked = '-';

            return (
              <>
                <TableRow
                  key={index}
                  className={classes.tableRow}
                  // onClick={() => {
                  //     console.log('row clicked');
                  //     console.log(index);
                  //     setActiveIndex(index);
                  // }}
                >
                  <TableCell style={{ display: 'flex', alignItems: 'center', borderBottom: 'none' }}>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => {
                        setOpen(!open);
                        setActiveIndex(index);
                        // setOpen(!open);
                      }}
                    >
                      {open && index === activeIndex ? (
                        <KeyboardArrowUpOutlined className={styles.collapseIcon} />
                      ) : (
                        <KeyboardArrowDownRounded className={styles.collapseIcon} />
                      )}
                    </IconButton>

                    <span className={styles.mobileTableText}>
                      <a href={clientInstructions} target="_blank" style={{ fontSize: 16 }}>
                        {' '}
                        {item.name === '' ? '-' : item.name}{' '}
                      </a>
                    </span>
                  </TableCell>

                  <TableCell align="right" style={{ borderBottom: 'none' }}>
                    <div className={styles.mobileNameColumnRight}>
                      <span
                        style={{
                          // color: '#96ABBA',
                          padding: open && index === activeIndex ? 2 : 0,
                          color: open && index === activeIndex ? '#fff' : '#96ABBA',
                          backgroundColor:
                            open && index === activeIndex ? (item.color === '' ? '#eef' : item.color) : 'transparent',
                          lineHeight: 1.5,
                        }}
                      >
                        {item.status === '' ? '-' : item.status.toString().toUpperCase()}
                      </span>

                      {(!open || index != activeIndex) && (
                        <div
                          className={styles.mobileStatusBox}
                          style={{
                            background: item.color === '' ? '#eef' : item.color,
                            color: 'white',
                          }}
                        />
                      )}
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open && index === activeIndex} timeout="auto" unmountOnExit>
                      <Box margin={1}>
                        <Table size="small" aria-label="purchases">
                          <TableBody>
                            <TableRow>
                              <TableCell align="left" style={{ border: 0 }}>
                                SUBMISSION DATE
                              </TableCell>
                              <TableCell align="left" style={{ border: 0 }}>
                                {' '}
                                {new Intl.DateTimeFormat('en-US', {
                                  day: '2-digit',
                                  month: 'short',
                                  year: 'numeric',
                                }).format(item.date_created)}{' '}
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell align="left" style={{ border: 0 }}>
                                {' '}
                                EDITOR{' '}
                              </TableCell>
                              <TableCell align="left" style={{ border: 0 }}>
                                <div className={styles.assigneeContainer}>
                                  <AvatarGroup total={4}>
                                    {item.assignees?.length > 0 &&
                                      item.assignees.map((assignee) => {
                                        if (assignee.profilePicture)
                                          return (
                                            <Tooltip
                                              classes={{
                                                tooltip: classes.customTooltip,
                                                arrow: classes.customArrow,
                                              }}
                                              title={assignee.username}
                                              placement="right"
                                              arrow
                                            >
                                              <Avatar src={assignee.profilePicture} />
                                            </Tooltip>
                                          );
                                        return (
                                          <Tooltip
                                            classes={{
                                              tooltip: classes.customTooltip,
                                              arrow: classes.customArrow,
                                            }}
                                            title={assignee.username}
                                            placement="right"
                                            arrow
                                          >
                                            <Avatar>{assignee.initials}</Avatar>
                                          </Tooltip>
                                        );
                                      })}
                                  </AvatarGroup>
                                </div>
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell align="left" style={{ border: 0 }}>
                                {' '}
                                DELIVERY{' '}
                              </TableCell>

                              <TableCell align="left" style={{ border: 0 }}>
                                {(() => {
                                  if (
                                    item.status === 'draft done' ||
                                    item.status === 'approved' ||
                                    item.status === 'complete'
                                  )
                                    return (
                                      <img
                                        alt={item.status}
                                        src="/images/marked-calendar.png"
                                        className={styles.icon}
                                      />
                                    );
                                  else if (item.due_date === null) return '-';
                                  else
                                    return (
                                      <div style={{ color: '#fe7a39' }}>
                                        {' '}
                                        {new Intl.DateTimeFormat('en-US', { day: '2-digit', month: 'short' }).format(
                                          item.due_date
                                        )}{' '}
                                      </div>
                                    );
                                })()}
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell align="left" style={{ border: 0 }}>
                                {' '}
                                REVIEW{' '}
                              </TableCell>
                              <TableCell align="left" style={{ border: 0 }}>
                                {' '}
                                {reviewLinkValue}{' '}
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell align="left" style={{ border: 0 }}>
                                {' '}
                                FOOTAGE{' '}
                              </TableCell>
                              <TableCell align="left" style={{ border: 0 }}>
                                {' '}
                                {footage1Value}{' '}
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell align="left" style={{ border: 0 }}>
                                {' '}
                                HOURS TRACKED{' '}
                              </TableCell>
                              <TableCell align="left" style={{ border: 0 }}>
                                {' '}
                                {hoursTrackedValue}{' '}
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell align="left" style={{ border: 0 }}>
                                {' '}
                                TRANSFER FEE{' '}
                              </TableCell>
                              <TableCell align="left" style={{ border: 0 }}>
                                {' '}
                                {transferFeeValue}{' '}
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell align="left" style={{ border: 0 }}>
                                {' '}
                                TOTAL FEE{' '}
                              </TableCell>
                              <TableCell align="left" style={{ border: 0 }}>
                                {' '}
                                {tracked}{' '}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

// const ShowMoreButton = (props) => (
//   <button className={styles.showMoreInfoButton} type="button">
//     <span className={styles.showMoreTextButton}> Load more </span>
//     <ExpandMore style={{ fontSize: 25 }} className={styles.showMoreIcon} />
//   </button>
// );

let AuthDashboard = withAuth(Dashboard);
AuthDashboard.hasLocalLayout = true;
AuthDashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AuthDashboard;
